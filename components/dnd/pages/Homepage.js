import React, { useState } from "react";
import Item from "../components/Item";
import DropWrapper from "../components/DropWrapper";
import Col from "../components/Col";
import  {data,statuses} from "../../data/index.js"
import styles from '../../../styles/Jobs.module.css'
import { Square_icon } from "../../common/sqaure_icon";

const Homepage = () => {
    const [items, setItems] = useState(data);

    const onDrop = (item, monitor, status) => {
        const mapping = statuses.find(si => si.status === status);

        setItems(prevState => {
            const newItems = prevState
                .filter(i => i.id !== item.id)
                .concat({ ...item, status, icon: mapping.icon });
            return [...newItems];
        });
    };

    const moveItem = (dragIndex, hoverIndex) => {
        const item = items[dragIndex];
        setItems(prevState => {
            const newItems = prevState.filter((i, idx) => idx !== dragIndex);
            newItems.splice(hoverIndex, 0, item);
            return [...newItems];
        });
    };

    return (
        <div className="flex">
            {statuses.map((s,key) => (
                    <div key={key}  className={"col-wrapper"}>


                        <div className={`${styles.candidates_heading}`}>
                            <div>{s.headding.toUpperCase()}</div>
                            <div> <Square_icon icon={`${s.noti}`} iconwidth="50px" iconsize="20px" iconhight="50px" bgcolor="gray" /></div>
                        </div>
                        {/* <h2 className={"col-header"}>{}</h2> */}
                        <DropWrapper onDrop={onDrop} status={s.status}>
                            <Col>
                                {items
                                    .filter(i => i.status === s.status)
                                    .map((i, idx) => <Item key={i.id} item={i} index={idx} moveItem={moveItem} status={s} />)
                                }
                            </Col>
                        </DropWrapper>
                    </div>
                )
            )}
        </div>
    );
};

export default Homepage;