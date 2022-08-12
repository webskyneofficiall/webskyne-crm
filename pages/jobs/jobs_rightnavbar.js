import styles from '../../styles/Jobs.module.css'
import { Rounded_icon } from '../../components/common/rounded_icon'
import { useState } from 'react';
import Sidebar from './righttogle';
export default function Jobs() {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    return (
        <>
            <div className={`gap-4 ${styles.join_rightnavbar}`}>


                <div className="App">
                    <div
                        onClick={() => setSidebarVisible(!sidebarVisible)}
                    >
                        <Rounded_icon />

                         modal
                    </div>
                    <Sidebar isVisible={sidebarVisible} setVisible={setSidebarVisible} />
                </div>



                <div>
                    <Rounded_icon />
                    <div> add icon </div>

                </div>


            </div>
        </>
    )
}