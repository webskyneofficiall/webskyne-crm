import styles from '../styles/Home.module.css'
import { Navbar } from '../components/navbar'
import { Activity } from '../components/activity'
import Navbarslider from '../components/navbar.slider'
import { Checked } from '../components/layoutcomp/checked'
import { Layout } from '../components/layout'
export default function Home() {
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
                    <div>
                        <Layout />

                    </div>

                    <Activity />


                </div>

            </div>
        </>
    )
}