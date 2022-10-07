import { DndProvider } from "react-dnd";
import {HTML5Backend } from 'react-dnd-html5-backend';
import { Column } from "./coloumn";
import styles from '../../styles/Jobs.module.css'
import { CustomDragLayer } from "./custom_drag_layer";
import { useState } from "react";

export const TaskBoard = props => {
  const [myTasks, moveMyTask] = useState(props.tasks);

  const handleMoveMyTask = (from, to) => {
    const { task, columnIndex: fromColumnIndex, index } = from;
    const { columnIndex: toColumnIndex } = to;

    const newMyTasks = [...myTasks];
    // remove task
    newMyTasks[fromColumnIndex].tasks.splice(index, 1);
    // move task
    newMyTasks[toColumnIndex].tasks.push(task);
    moveMyTask(newMyTasks);
  };

  const columns = myTasks.map((tasks, columnIndex) => {
    const propsToColumn = { tasks, columnIndex, handleMoveMyTask };
    return <Column key={`column ${columnIndex}`} {...propsToColumn} />;
  });

  return (
    <DndProvider backend={HTML5Backend}>
      <CustomDragLayer />
      <div className={styles.task_board}>{columns}</div>
    </DndProvider>
  );
};

