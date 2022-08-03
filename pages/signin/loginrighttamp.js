
import classes from './Signup.module.css'
const Loginrighttemp = () => {
    return (
        <>
            <div className={classes.loginrighttemp}>

                <div className={classes.loginrighttemp_in}>

                    <button className={classes.loginrighttemp_icon}>new Features</button>
                    <div className={classes.loginrighttemp_body}>
                        <p>Campinh gashboard with  <span style={{ color: "blue" }}>Gantt  View</span> </p>

                    </div>
                    <div className={classes.c}>
                        <div>
                            <p>see each individual is schedules in gantt format</p>
                            <p>for easer planning and evaluation</p>
                        </div>
                        <div> Learn More</div>
                    </div>
                </div>

                <div className={classes.boderlogin}>

                </div>
                <div className={classes.bodersmallicon}>

                </div>
            </div>
        </>
    )
}
export default Loginrighttemp;
