import React, { Fragment, useState, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import Window from "./Window";
import ITEM_TYPE from "../../data/types";
import styles from '../../../styles/Jobs.module.css'
import { Rounded_icon } from "../../common/rounded_icon";
import { AiTwotoneStar } from "react-icons/ai";

const Item = ({ item, index, moveItem, status }) => {
    const ref = useRef(null);

    const [, drop] = useDrop({
        accept: ITEM_TYPE,
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return
            }

            const hoveredRect = ref.current.getBoundingClientRect();
            const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
            const mousePosition = monitor.getClientOffset();
            const hoverClientY = mousePosition.y - hoveredRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            moveItem(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });

    const [{ isDragging }, drag] = useDrag({
        type: ITEM_TYPE,
        item: { ...item, index },

        collect: monitor => ({
            isDragging: monitor.isDragging()
        })
    });

    const [show, setShow] = useState(false);

    const onOpen = () => setShow(true);

    const onClose = () => setShow(false);

    drag(drop(ref));

    return (
        <Fragment>
                    <div className={`${styles.candidates} my-4`}
                ref={ref}
                style={{ opacity: isDragging ? 0 : 1 }}
                // className={"item"}
                onClick={onOpen}
            >
                    <div>
                        <div className={`flex items-center xl:gap-5 ${styles.candidates_data}`}>
                            <div> <Rounded_icon bgcolor="gray" />  </div>
                            <div className={`${styles.candidates_name}`}


                            > {item.name}</div>
                        </div>
                        <div className={`flex justify-between items-center ${styles.candidate_review}`}>
                            <div className="flex gap-1">
                                <AiTwotoneStar />   <AiTwotoneStar />   <AiTwotoneStar />
                            </div>
                            <div>
                                {item.date}
                            </div>
                        </div>
                    </div>

            </div>
            <Window
                item={item}
                onClose={onClose}
                show={show}
            />
        </Fragment>
    );
};

export default Item;