import Jobapi from "../api/jobapi"
import { Rounded_icon } from "../../components/common/rounded_icon"
import styles from '../../styles/Jobs.module.css'
import { Square_icon } from "../../components/common/sqaure_icon";
import { AiTwotoneStar } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';

import { useState } from "react";
export default function Candidates() {
  const [modalShownorder, toggleModalorder] = useState(false);
  const [modalShown, toggleModal] = useState(false);

    function Modalorder({children, shown, close}) {
        return shown ? (
            <div
                className="modal-backdrop-order"
                onClick={() => {
                    close();
                }}
            >
                <div
                    className="modal-content-order"
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    {children}
                </div>
            </div>
        ) : null;
    }
    return (
        <>
            <div className={`flex gap-7 ${styles.candidates_main}`}>

                <Modalorder
                    shown={modalShownorder}
                    close={() => {
                        toggleModalorder(false);
                    }}
                >
                    <div className="" style={{ marginTop:"-1rem", position:"absolute", marginLeft:"-1rem" }} onClick={()=>toggleModalorder(false)}>
                    <Rounded_icon icon={<ImCross/>}/>

                    </div>

                </Modalorder>
                {
                    Jobapi.map((e, index) => (
                        <div key={index} className={`${styles.jobs_candidates}`}>
                            <div className={`${styles.candidates_heading}`}>
                                <div>{e.headding}</div>
                                <div> <Square_icon icon={`${e.noti}`} iconwidth="50px" iconsize="20px" iconhight="50px" bgcolor="gray" /></div>
                            </div>
                            <div className="flex flex-col gap-4 ">
                                {
                                    e.children.map((c, key) => (

                                        <div key={key} className={`${styles.candidates}`}
                              
                                        >
                                            <div className={`flex items-center xl:gap-5 ${styles.candidates_data}`}>
                                                <div> <Rounded_icon bgcolor="gray" />  </div>
                                                <div className={`${styles.candidates_name}`}
                                                          
                                        onClick={() => {
                                            toggleModalorder(!modalShown);
                                            // toggleModalorderdata();
                                          }}
                                                > {c.name}</div>
                                            </div>
                                            <div className={`flex justify-between items-center ${styles.candidate_review}`}>
                                                <div className="flex gap-1">
                                                    <AiTwotoneStar />   <AiTwotoneStar />   <AiTwotoneStar />
                                                </div>
                                                <div>
                                                    {c.date}
                                                </div>
                                            </div>
                                        </div>

                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}


