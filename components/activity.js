import styles from '../styles/Activity.module.css'
import { Navbar_heading } from './navbar_heading'
import Activityapi from './api/activityapi'
export const Activity = () => {
    return (
        <>
        <div className={styles.activity}>

            <div  className={styles.h1}>Uncoming Schedules</div>
            {Activityapi.map((e, key) => (
                <Navbar_heading key={key}
                    image={
                        <button className={styles.icon_button}>
                        <i className="fa-solid fa-magnifying-glass"></i>

                    </button>
                    }
                    name={e.item}
                    discription={e.desc}
                    right_icon={<div>
                    {e.time}
                    </div>
                    }
                />
            ))
            }

        </div>

        </>
    )
}