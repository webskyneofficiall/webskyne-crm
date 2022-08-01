import Link from "next/link";
import styles from '../styles/Layout.module.css'
import { Navbar_heading } from "./navbar_heading";
import { Contantgraph } from "./graph/contantgraph";
export const Layout = ({ children }) => {
    return (
        <>
            <Navbar_heading
                image=""
                name="hi, Johntosan"
                discription="Cheers, and happy activites - Novamber 18, 2021"
                right_icon={<div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" ,fontSize:"27px" , marginRight:"20px"}}>
                
                        <i className="fa-solid fa-magnifying-glass"></i>

                </div>
                }
            />
            <Contantgraph />
            <div>
                <ul className={styles.ul}>
                    <li>Checked</li>
                    <li>Already</li>
                    <li>home</li>
                    <li>home</li>
                    <li><button className={styles.layout_button}>Last month  <i className="fa-solid fa-angle-down"></i></button></li>
                </ul>

            </div>
            <div>
            </div>
            {children}


        </>
    )
}