import Link from "next/link";
import styles from '../styles/Home.module.css'
import { Navbar } from './common/navbar'
import { Activity } from './activity'
import Navbarslider from './common/navbar.slider'
import { Finance } from "./finance";
export const Layout = ({ children }) => {
    return (
        <>


            <div className={styles.home}>
                <div>
                    <Navbarslider />

                </div>

                <div className={styles.mobilenavbar}>
                    <Navbar />

                </div>
                <div className={styles.home_main}>
                    <div className="xl:ml-3">
                        <Finance />
                        {children}
                    </div>
                    <Activity />
                </div>

            </div>


        </>
    )
}
