import styles from '../../styles/Contantgraph.module.css'
import Sellingapi from '../../pages/api/sellingapi'
export const Contantgraph = () => {
    return (
        <>
            <div className={styles.contantgraph}>
                <div className={styles.graphtop}>
                    <div className={styles.graphdata}>
                        <div className={styles.heading}>
                            <p className={styles.h1} >Finance</p>
                            <p >Aug 1, 2021 -Nov 1,2001</p>
                        </div>
                        <div className={styles.desc}>
                            <p>Total Revanue +9.78</p>
                            <p className={styles.h2} >$8,240,00</p>
                            <p>increase Increased 15% from last month</p>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className={styles.graphbottom}>
                    {Sellingapi.map((e, key) => (
                        <ul key={key}>
                            <li style={{ listStyle: "disc inside" ,color:"blue"}}>{e.name}</li>
                            <li className={styles.h3}>{e.price}</li>
                            <li className={styles.h4}>{e.desc}</li>

                        </ul>
                    ))}
                </div>
            </div>

        </>
    )
}