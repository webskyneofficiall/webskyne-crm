
import classes from './Signup.module.css'
const Loginrighttemp = () => {
    return (
        <>
            <div className={classes.loginrighttemp}>

                <div className={classes.loginrighttemp_in}>

                    <button className={classes.loginrighttemp_icon}>new Features</button>
                    <div className={classes.loginrighttemp_body}>
                        <p>Campagign Dashboard with  <span style={{ color: "blue" }}>Gantt  View</span> </p>

                    </div>
                    <div className={classes.loginrighttemp_desc}>

                        <p>see each individual is schedules in gantt format</p>
                        <p>for easer planning and evaluation</p>
                        <div style={{ margin: "20px 0px", display: "flex" }}>
                            <p style={{ borderBottom: "2px solid white", padding: "10px 0px" }}> Learn More</p>

                        </div>
                        <div >
                            <div className={classes.loginrightimgleft}>
                                <img src='https://cdn.pixabay.com/photo/2022/07/31/20/32/volkswagen-7356817_960_720.jpg'></img>

                            </div>
                        </div>

                        <div className={classes.loginrightimg}>
                            <img src='https://cdn.pixabay.com/photo/2022/07/31/20/32/volkswagen-7356817_960_720.jpg'></img>

                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}
export default Loginrighttemp;
