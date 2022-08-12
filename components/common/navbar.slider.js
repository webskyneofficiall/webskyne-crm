import { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

import { Navbar_heading } from "./navbar_heading";
import "react-pro-sidebar/dist/css/styles.css";
import styles from "../../styles/Navbarslider.module.css"
import Navbarapi from "../../pages/api/navbapi";

import {AiOutlineMenuFold ,AiOutlineMenuUnfold} from 'react-icons/ai';
import {IoIosArrowUp ,IoIosArrowDown} from 'react-icons/io';
import Link from "next/link";
import {FaChrome} from 'react-icons/fa';

const Navbarslider = () => {

  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false)

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div className={styles.header}>
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className={styles.logotext}>
              {menuCollapse ? (<div>
              </div>) : (
                <Navbar_heading
                  image={<div className={styles.navbar_icon}>
                  </div>}
                  name="Pony Weist"
                  discription="Super dashboard"
                  right_icon={<div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                        <div>
              <IoIosArrowUp/>

              </div>
              <div>
                <IoIosArrowDown/>
              </div>

                  </div>
                  }
                />

              )}
            </div>
            <div className={styles.closemenu} onClick={menuIconClick}>
              {menuCollapse ? <div> <AiOutlineMenuFold /> </div>
                : 
                  <div> <AiOutlineMenuUnfold /> </div>}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="circle">

              {Navbarapi.map((e, key) => (

                <MenuItem  key={key} className={styles.menuitem} icon={<FaChrome/>} >
                  <Link className="w-full border h-full text-black" href={`${e.link}`} >

                    <div className={`flex justify-between items-center ${styles.ul}`}>
                        <p>{e.item}</p>
                         <div>{e.noti}</div>
                    </div>
                  

                  </Link>

                </MenuItem>
              ))
              }

            </Menu>
          </SidebarContent>

        </ProSidebar>
      </div>
    </>
  );
};

export default Navbarslider;

