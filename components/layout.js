import Link from "next/link";
import styles from '../styles/Layout.module.css'
import { Navbar_heading } from "./navbar_heading";
import { Contantgraph } from "./graph/contantgraph";
export const Layout = ({ children }) => {
    return (
        <>
        <div className={styles.layout}>

            <Navbar_heading
                image={
                    <div className={styles.image}>
                        <button className={styles.icon_button}>
                            <i className="fa-solid fa-magnifying-glass"></i>

                            <span className={styles.icon_button__badge}>2</span>
                        </button>
                    </div>
                }
                name="hi, Johntosan"
                discription="Cheers, and happy activites - Novamber 18, 2021"
                right_icon={<div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontSize: "27px", marginRight: "20px" }}>

                    <i className="fa-solid fa-magnifying-glass"></i>

                </div>
                }
            />
            <Contantgraph />
            <div className={styles.layoutlink}>
                <ul className={styles.layout_ul}>
                    <li>Checked</li>
                    <li>Already</li>
                    <li>home</li>
                    <li>home</li>
                    <li>home</li>
                </ul>
                <button className={styles.layout_button}>Last month  <i className="fa-solid fa-angle-down"></i></button>

            </div>
            <div>
            </div>

            </div>


        </>
    )
}