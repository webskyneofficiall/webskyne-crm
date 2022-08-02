import styles from '../styles/Home.module.css'
import {  Navbar} from '../components/navbar'
import { Content } from '../components/content'
import { Activity } from '../components/activity'
import Navbarslider from '../components/navbar.slider'
export default function Home() {
    return (
        <>

            <div className={styles.home}>
                    <Navbarslider />

                <div className={styles.mobilenavbar}>
                    <Navbar />

                </div>
                <div className={styles.home_main}>
                    <Content />

                    <Activity />
                </div>

            </div>
        </>
    )
}