import Jobapi from "../api/jobapi"
import { Rounded_icon } from "../../components/common/rounded_icon"
import styles from '../../styles/Jobs.module.css'
import { Square_icon } from "../../components/common/sqaure_icon";
import { AiTwotoneStar } from 'react-icons/ai';
export default function Candidates() {
    return (
        <>
            <div className={`flex gap-7 ${styles.candidates_main}`}>

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

                                    <div key={key} className={`${styles.candidates}`}>
                                        <div className={`flex items-center xl:gap-5 ${styles.candidates_data}`}>
                                            <div> <Rounded_icon  bgcolor="gray"/>  </div>
                                            <div className={`${styles.candidates_name}`}> {c.name}</div>
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