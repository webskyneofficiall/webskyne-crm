import { Navbar_heading } from '../../components/common/navbar_heading'
import { Rounded_icon } from "../../components/common/rounded_icon"
import styles from '../../styles/Jobs.module.css'
import { BsDashSquareFill } from 'react-icons/bs';

import { SiDash } from 'react-icons/si';

import { BiSearchAlt2 } from 'react-icons/bi';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

import { Square_icon } from '../../components/common/sqaure_icon'
export default function Jobs() {
  return (
    <>
      <div className={` flex justify-between gap-4 ${styles.jobs_navbar}`}>
        <div className=' flex gap-5'>
          <div ><Square_icon icon={<BsDashSquareFill />} bgcolor="gray" iconsize="24px" /></div>

          <div className='px-5' style={{ borderRight: "2px solid rgb(227, 224, 224)", borderLeft: "2px solid rgb(227, 224, 224)" }}>

            <Navbar_heading
              image={<div className={styles.navbar_icon}>
              </div>}
              name="Pony Weist"
              discription={<div className='flex gap-3 justify-center items-center my-1'> <Square_icon icon={<SiDash />} iconhight="30px" iconwidth="40px" bgcolor="black" /> <div>  Super dashboard</div></div>}
              right_icon={<div className='flex justify-center items-center px-5 flex-col'>
                <div>
                  <IoIosArrowUp />

                </div>
                <div>
                  <IoIosArrowDown />
                </div>

              </div>
              }
            />
          </div>


          <div className='flex items-center justify-center' style={{ fontSize: "2rem" }} >
            <button  ><BiSearchAlt2 /></button>
          </div>

        </div>
        <div className='flex gap-5'>
          <div>
            <Rounded_icon />
          </div>
          <div>
            <Rounded_icon />

          </div>

          <div>
            <Rounded_icon />

          </div>

        </div>
      </div>


    </>
  )
}