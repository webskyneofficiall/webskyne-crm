import styles from '../styles/Checked.module.css'
import Contantapi from './api/contantapi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Layout } from '../components/layout'
export default function Checked (props)  {
    return (
<Layout>
            <div className={styles.checked}>
                {Contantapi.map((e, key) => (

                    <ul className={styles.table} key={key}>
                        <li className={styles.td_image}>
                            <button className={styles.icon_button}>
                            <FontAwesomeIcon icon={faCoffee} />


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
            </Layout>
    )
}