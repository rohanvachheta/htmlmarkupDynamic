import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { FixedSizeList } from "react-window";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "700px",
    // maxWidth: 300,
    alignItems: "center",
    marginTop: "20px",
    backgroundColor: theme.palette.background.paper,
  },
}));

function renderRow(props, handleSelect, activeItem) {
  const { index, style, data } = props;
  const item = data[index];

  return (
    <ListItem
      button
      selected={activeItem === item.id}
      style={style}
      key={index}
      onClick={() => handleSelect(item.id, item)}
    >
      <ListItemText primary={` ${item.name}`} />
    </ListItem>
  );
}

renderRow.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

function VirtualizedList({ list, handleSelect, activeItem }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FixedSizeList
        height={700}
        width={"100%"}
        itemSize={50}
        itemCount={list.length}
        itemData={list}
        handleSelect={handleSelect}
      >
        {(props) => {
          return renderRow(props, handleSelect, activeItem);
        }}
      </FixedSizeList>
    </div>
  );
}

export default React.memo(VirtualizedList);
