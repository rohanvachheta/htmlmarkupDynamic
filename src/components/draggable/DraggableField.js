import React from "react";
import { useDrag } from "react-dnd";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import { ItemTypes } from "../../constance";
import "./Draggable.css";
import { Tooltip } from "@material-ui/core";

export const Box = ({ name, children, handleSelection, dropdownOption }) => {
  const [{ isDragging }, drag, preview] = useDrag({
    item: { name, type: ItemTypes.BOX },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        handleSelection(name, dropdownOption);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.4 : 1;
  return (
    <div ref={preview} className="drag-preview" style={{ opacity }}>
      <div ref={drag} className="drag-element">
        <Tooltip title="Drag" arrow>
          <DragIndicatorIcon />
        </Tooltip>
      </div>
      {children}
    </div>
  );
};
