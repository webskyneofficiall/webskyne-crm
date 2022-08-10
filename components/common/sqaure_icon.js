
export const Square_icon = ({ icon,iconsize ,iconwidth,iconhight , bgcolor}) => {
    return (
        <>
            <div className="squareicon-wrapper" style={{ width:`${iconwidth}`,height:`${iconhight} ` , background:`${bgcolor}`  }}>
                <div style={{ fontSize: `${iconsize}` }}>
                {icon}

                </div>
            </div>
        </>
    )
}