import styles from '../../styles/Jobs.module.css'
import { Rounded_icon } from "../common/rounded_icon"
import { AiTwotoneStar } from "react-icons/ai";
import { useState } from 'react';
import { ImCross } from 'react-icons/im';

export const Card = ({ task, empty }) => {

  const [modalShownorder, toggleModalorder] = useState(false);
  const [modalShown, toggleModal] = useState(false);

  function Modalorder({ children, shown, close }) {
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

      <Modalorder
        shown={modalShownorder}
        close={() => {
          toggleModalorder(false);
        }}
      >
        <div className="" style={{ marginTop: "-1rem", position: "absolute", marginLeft: "-1rem" }} onClick={() => toggleModalorder(false)}>
          <Rounded_icon icon={<ImCross />} />

        </div>

      </Modalorder>
      <div className={`card ` + (empty ? "card--empty" : "")}>
        <div className={`${styles.candidates}`}>
          <div className={`flex items-center xl:gap-5 ${styles.candidates_data}`}>
            <div> <Rounded_icon bgcolor="gray" />  </div>
            <div className={`${styles.candidates_name}`}
              onClick={() => {
                toggleModalorder(!modalShown);
                // toggleModalorderdata();
              }}
            >
              {task?.name}
            </div>
          </div>
          <div className={`flex justify-between items-center ${styles.candidate_review}`}>
            <div className="flex gap-1 items-center justify-center">
              {task?.rating}
              <AiTwotoneStar />   <AiTwotoneStar />   <AiTwotoneStar />
            </div>
            <div>
              {task?.date}
            </div>
          </div>
        </div>


      </div>
    </>
  )
};

