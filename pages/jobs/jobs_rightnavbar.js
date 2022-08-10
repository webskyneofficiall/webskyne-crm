import styles from '../../styles/Jobs.module.css'
import { Rounded_icon } from '../../components/common/rounded_icon'
export default function Jobs(){
    return (
        <>
            <div className={`gap-4 ${styles.join_rightnavbar}`}>
                <div>
                    <Rounded_icon />
                    <div> add icon </div>
                </div>
                <div>
                    <Rounded_icon />
                    <div> add icon </div>

                </div>

                <div>
                    <Rounded_icon />
                    <div> add icon </div>

                </div>


            </div>
        </>
    )
}