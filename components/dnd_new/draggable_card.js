import styles from '../../styles/Jobs.module.css'
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
import { ItemTypes } from './constants';
import { Card } from './card';
import { useEffect } from 'react';
export const DraggableCard = props => {
  const [, dragRef, preview] = useDrag({
    type: ItemTypes.CARD,
    item: {  ...props }
  });

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  return (
    <div ref={dragRef}>
      <Card task={props.task} />
    </div>
  );
};

