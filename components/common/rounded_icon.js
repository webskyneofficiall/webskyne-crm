export const Rounded_icon = ({ icon, iconsize, iconwidth, iconhight, bgcolor }) => {
    return (
        <>
            <div className="roundedicon-wrapper" style={{ width: `${iconwidth}`, height: `${iconhight} `, background: `${bgcolor}` }}>
                <div style={{ fontSize: `${iconsize}` }}>

                    {icon}

                </div>
            </div>
        </>
    )
}