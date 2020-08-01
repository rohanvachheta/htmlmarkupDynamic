import React from "react";
import { useDrag } from "react-dnd";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import { ItemTypes } from "../../learn-dnd/Constant";
const style = {
  backgroundColor: "white",
  padding: "0.5rem 1rem",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  cursor: "move",
  float: "left",
  display: "flex",
};
export const Box = ({
  name,
  children,
  type,
  handleSelection,
  dropdownOption,
}) => {
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

  const handleStyle = {
    // backgroundColor: "green",
    width: "1rem",
    height: "1rem",
    display: "inline-block",
    marginRight: "0.75rem",
    cursor: "move",
    marginTop: "20px",
  };

  const opacity = isDragging ? 0.4 : 1;
  return (
    <div ref={preview} style={{ ...style, opacity }}>
      <div ref={drag} style={handleStyle}>
        <DragIndicatorIcon />
      </div>
      {children}
    </div>
  );
};
