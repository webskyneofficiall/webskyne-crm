import Link from "next/link";
import styles from '../styles/Layout.module.css'
import { Navbar_heading } from "./common/navbar_heading";
import { Contantgraph } from "./graph/contantgraph";
import { useState } from "react";
export const Finance = () => {
    const [search, setSearch] = useState(true)
    return (
        <>
            <div className={`${styles.layout} `}>
                {(search) ? <Navbar_heading
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
                    right_icon={<div onClick={() => setSearch((search) ? false : true)} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontSize: "27px", marginRight: "20px"}}>

                        <i className="fa-solid fa-magnifying-glass"></i>

                    </div>
                    }
                /> : <div className={styles.input}>
                    <div className={styles.input_div}>
                        <input type="text" placeholder="search ......" />

                    </div>
                    <div onClick={() => setSearch((search) ? false : true)} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontSize: "27px", }}>

                        <i className="fa-solid fa-magnifying-glass"></i>

                    </div>
                </div>}

                <Contantgraph />
                <div className={styles.layoutlink}>
                    <ul className={styles.layout_ul}>
                        <Link href="/checked">
                            <li>Checked</li>
                        </Link>
                        <li >Already</li>
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










