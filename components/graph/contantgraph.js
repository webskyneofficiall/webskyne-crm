import styles from './Contantgraph.module.css'

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


                    <div>
                        <p>Selling Product</p>
                        <p className={styles.h2}>$4752.22</p>
                        <p>12345 Sold in month</p>

                    </div>

                    <div style={{ borderRight: "2px solid black", borderLeft: "2px solid black" }}>
                        <p>Selling Product</p>
                        <p className={styles.h2}>$4752.22</p>
                        <p>12345 Sold in month</p>

                    </div>
                    <div>
                        <p>Selling Product</p>
                        <p className={styles.h2}>$4752.22</p>
                        <p>12345 Sold in month</p>

                    </div>

                </div>
            </div>

        </>
    )
}