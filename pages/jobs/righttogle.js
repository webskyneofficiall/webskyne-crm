import React, { useState } from "react";

import { AiFillStar, AiOutlineDown } from 'react-icons/ai';

import { IoIosArrowForward } from 'react-icons/io';
import { Rounded_icon } from "../../components/common/rounded_icon";
import { Square_icon } from "../../components/common/sqaure_icon";
import styles from '../../styles/Jobs.module.css'

const Sidebar = ({ isVisible, setVisible }) => {
  return (
    <div
      onClick={() => setVisible(false)}
      className={
        isVisible
          ? "sidebar-wrapper show-wrapper"
          : "sidebar-wrapper hide-wrapper"
      }

    >
      <div className={isVisible ? "sidebar-container show" : "sidebar-container hide"} >
        <div className=""  style={{ background: "whitesmoke" }}>
          <div className={styles.righttoggle_navbar}>
            <div className="flex justify-center items-center gap-3">
              <div className="flex flex-col justify-center items-center gap-2">
                <div className="">
                  <img style={{ borderRadius: "50%", width: "70px", height: "70px", overflow: "hidden" }} src="https://cdn.pixabay.com/photo/2022/08/03/15/29/bird-7362864_960_720.jpg" />
                  <div className="flex gap-2 px-6 py-1 items-center justify-center" style={{ background: "white", borderRadius: "1rem", marginTop: "-15px", zIndex: "1", position: "absolute", marginLeft: "-12px" }}> <AiFillStar />4.0</div>
                </div>
              </div>
              <div className="">
                <div style={{ fontSize: "26px", fontWeight: "600" }}>Cody Fisher   </div>
                <div className="pb-2">Designer Team UI designer</div>
                <div className="flex gap-1">
                  <div className="px-5 py-3 bg-black" style={{ borderRadius: "0.25rem" }}></div>
                  <div className="px-5 py-3 bg-black" style={{ borderRadius: "0.25rem" }}></div>
                  <div className="px-5 py-3 bg-black" style={{ borderRadius: "0.25rem" }}></div>
                  <div className="px-5 py-3 bg-black" style={{ borderRadius: "0.25rem" }}></div>
                  <div className="px-5 py-3 bg-black" style={{ borderRadius: "0.25rem" }}></div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center gap-7">
              <div className="flex gap-3">
                <Square_icon bgcolor="black" icon={<AiOutlineDown />} />
                <Square_icon bgcolor="black" icon={<AiOutlineDown />} />
              </div>

              <div className="flex gap-3 justify-center items-center">
                <div className="bg-white px-3 py-1"> Send Message  </div>
                <div className="bg-white px-3 py-1"> Send Email</div>

              </div>

            </div>

          </div>
          <div className="px-5" style={{ height: "100vh", background: "white" }}>

            <div className={`${styles.job_options} `} >
              <ul className={`flex xl:gap-6 `} style={{ borderBottom: "2px solid #777" }}>
                <li>CANDIDATES</li>
                <li>JOB DETAILS</li>
                <li>TIMELINE & NOTES</li>
                <li>HIRING TEAM</li>
                <li>SETTINGS</li>
              </ul>
            </div>
          </div>
        </div>
        <button onClick={() => setVisible(false)} className="right-toggle-botton">
          <Rounded_icon icon={<IoIosArrowForward />} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
