import styles from '../styles/Home.module.css'
import { Navbar } from '../components/navbar'
import { Content } from '../components/content'
import { Activity } from '../components/activity'
export default function Home(){
    return (
        <>
            <div className={styles.home}>
                <div className={styles.navbar}>
                    <Navbar />

                </div>
                <div>
                    <Content />

                </div>
                <div>
                    <Activity />
                </div>
            </div>
        </>
    )
}