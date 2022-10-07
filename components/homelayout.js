import styles from '../styles/Home.module.css'
import Navbarslider from './common/navbar.slider'
import { Navbar } from './common/navbar'
export const Homelayout = ({children})=>{
    return(

        <>
                  <div className={styles.home}>
                <div>
                    <Navbarslider />

                </div>

                <div className={styles.mobilenavbar}>
                    <Navbar />

                </div>
                <div className='border w-full' style={{overflowY:"scroll"}}>
                 {children}
                </div>

            </div>
        </>
    )
}