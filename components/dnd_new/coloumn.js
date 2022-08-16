import { useDrop } from "react-dnd";
import { DraggableCard } from "./draggable_card";
import { Card } from "./card";
import { ItemTypes } from "./constants";
import styles from '../../styles/Jobs.module.css'
import { Square_icon } from "../common/sqaure_icon";
import {Rounded_icon} from  "../common/rounded_icon"
export const Column = ({ tasks: { title, tasks }, columnIndex, handleMoveMyTask }) => {
  const cards = tasks.map((task, index) => {
    const propsToDraggbleCard = { task, columnIndex, index };
    return (
      <DraggableCard
        key={`${columnIndex} ${index} ${task}`}
        {...propsToDraggbleCard}
      />
    );
  });

  const [{ isOver, canDrop }, dropRef] = useDrop({
    accept: ItemTypes.CARD,
    drop: item => {
      const from = item;
      const to = { columnIndex };
      handleMoveMyTask(from, to);
    },
    canDrop: item => item.columnIndex !== columnIndex,
    // collect: monitor => ({
    //   isOver: monitor.isOver(),
    //   canDrop: monitor.canDrop()
    // })
  });

  return (
    <div ref={dropRef} className={styles.column}>
      <div className={`${styles.candidates_heading}`}>
        <div>{title}</div>
        <div> <Square_icon icon={`11`} iconwidth="50px" iconsize="20px" iconhight="50px" bgcolor="gray" /></div>
      </div>
      <div>
        <div className="flex flex-col gap-3">
          {cards}
          {isOver && canDrop ? <Card empty /> : ""}
        </div>
  
      </div>

    </div>
  );
};

