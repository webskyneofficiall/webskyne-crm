import styles from '../../styles/Navbar.module.css'
import { Navbar_heading } from './navbar_heading'
import Navbarapi from '../../pages/api/navbapi';
import Link from 'next/link';

import {GiHamburgerMenu} from 'react-icons/gi';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

import React, { useState } from "react";

export const Navbar = () => {
    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
        setisMenu(isMenu === false ? true : false);
        setResponsiveclose(isResponsiveclose === false ? true : false);
    };

    let boxClass = ["main-menu menu-right menuq1"];
    if (isMenu) {
        boxClass.push('menuq2');
    } else {
        boxClass.push('');
    }
    return (
        <>
            <div className={styles.navbar_mobile}>

                <div className="navbar_body">
                    <div className="navbar_container">
                        <div className="navbar_row">

                            < div >
                                <div className="main-nav " >

                                    {/* Responsive Menu Button */}
                                    {isResponsiveclose === true ? <>
                                        <div className="menubar__button " style={{ display: 'none' }} onClick={toggleClass} ><div className='flex justify-center items-center gap-3'><span>MENU</span>  <GiHamburgerMenu/>  <IoIosArrowUp/></div></div>
                                    </> : <>
                                        <div className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} ><div  className='flex justify-center items-center gap-3'><span>MENU</span>  <GiHamburgerMenu/>   <IoIosArrowDown/></div></div>
                                    </>}
                                    <ul className={boxClass.join(' ')}>

                                        {Navbarapi.map(item => {


                                            return item?.subList !== undefined ? <>

                                                <li key={item.link} className={styles.innerLi}>
                                                    {item.item}
                                                    <i className="fa-solid fa-angle-down"></i>

                                                    {item.subList.map(e => <div key={e.url} >
                                                        <Link passHref href={e.url}>
                                                            <a>{e.name}</a>
                                                        </Link>
                                                    </div>)}
                                                </li>

                                            </>
                                                :
                                                <ul className={styles.ul}>
                                                    <li>
                                                        <p><i className={item.icon} style={{ padding: "0px 10px" }}></i>{item.item}</p>
                                                        <div>{item.noti}</div>
                                                    </li>
                                                </ul>

                                        }
                                        )}
                                    </ul>

                                </div>
                            </div >

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}




