import styles from '../../styles/Jobs.module.css'
import { Homelayout } from "../../components/homelayout"
import Jobs_navbar from './jobs_navbar'

import {IoIosArrowBack} from 'react-icons/io';

import {  FaChevronDown, FaChalkboard } from 'react-icons/fa';
import { Rounded_icon } from '../../components/common/rounded_icon';
import { Square_icon } from '../../components/common/sqaure_icon';
import Candidates from './candidates.js';
import Join_rightnavbar from './jobs_rightnavbar';
export default function Jobs(props) {
    return (
        <Homelayout>
            < Jobs_navbar />
            <div className={`w-full ${styles.jobs}`} >
                <div className={`xl:p-5 md:p-4 ${styles.paddind_sm}`}>
                    <div className={`xl:my-5 ${styles.gridflexcol_md}`} >
                        <div className={`flex  justify-between  items-center xl:px-2 gap-4 mt-2 ${styles.flexbetween_md}`}>
                            <div className={`${styles.arrowback}`}><Rounded_icon icon={<IoIosArrowBack />} bgcolor="white" />  </div>
                            <div>
                                <div className={` font-semibold ${styles.gray_color}`}>DESIGN</div>
                                <div className={`${styles.job_heading}`}>Senior Product Designer ....</div>
                                <div className={`${styles.gray_color} font-base`}>
                                    <ul className='flex gap-6'>
                                        <li>Purwokert</li>
                                        <li>Full time</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.jobs_botton} flex  xl:gap-5`}>
                            <div>Share And Promote</div>
                            <div ><span className=' text-2xl'><FaChalkboard /> </span > <span className='px-5'>Published</span> <span className='text-2xl'><FaChevronDown /></span></div>
                        </div>
                    </div>
                    <div className={styles.job_options}>
                        <ul className={`flex xl:gap-6 `}>
                            <li>CANDIDATES</li>
                            <li>JOB DETAILS</li>
                            <li>TIMELINE & NOTES</li>
                            <li>HIRING TEAM</li>
                            <li>SETTINGS</li>
                        </ul>
                    </div>
                    <div className={`flex justify-between items-center gap-3 ${styles.totalcandidate}`}>
                        <div className='flex items-center xl:gap-4'>Total Candidates: <Square_icon icon="22" iconwidth="50px" iconsize="20px" iconhight="50px" bgcolor="green" /> </div>
                        <div className='flex'>
                            <div>pipeline view</div>
                            <div>Table view</div>

                        </div>
                    </div>

                    <Candidates />
                </div>
                <div style={{ background:"white" }}>
                    <Join_rightnavbar />
                </div>

            </div>
        </Homelayout>
    )
}