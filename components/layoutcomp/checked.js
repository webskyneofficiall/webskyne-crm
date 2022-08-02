import styles from '../../styles/Checked.module.css'
import Contantapi from '../api/contantapi'
export const Checked = (props) => {
    return (
        <>

            <div className={styles.checked}>
                {Contantapi.map((e, key) => (

                    <ul className={styles.table} key={key}>
                        <li className={styles.td_image}>
                            <button className={styles.icon_button}>
                                <i className="fa-solid fa-magnifying-glass"></i>

                            </button>

                        </li>
                        <li className={styles.td_heading}>
                            <p className={styles.p_heading}>{e.name} </p>
                            <p className={styles.p_desc}>{e.email}</p>
                        </li>

                        <li className={styles.td_cources}>
                            <p>{e.desc1} </p>
                            <p >{e.desc}</p>
                        </li>
                        <li className={styles.td_price}>{e.price}</li>
                        <li className={styles.td_button}><span style={{ fontWeight: "600", color: "black" }}>Process</span></li>
                    </ul>
                ))}

            </div>

        </>
    )
}