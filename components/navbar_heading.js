import styles from '../styles/Navbar_heading.module.css'

export const Navbar_heading = ({ image, name, discription, right_icon }) => {
    return (
        <>
            <div className={styles.navbar_heading}>
                <div className={styles.right_container}>
                    <div>
                        {image}
                    </div>
                    <span style={{  margin:"0px 15px" }}>
                        <ul className={styles.ul}>
                            <li><h1 className={styles.h1_name}>{name}</h1> </li>
                            <li className={styles.desc} style={{ color: "#C0C0C0" }}>{discription}</li>
                        </ul>
                    </span>
                </div>
                <div>
                    {right_icon}
                </div>
            </div>

        </>
    )
}