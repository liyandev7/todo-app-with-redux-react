import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ACTION_TYPE } from "../../store/action/type";

function FilterColors() {
  const colors = ["red", "blue", "black", "green", "orange"];
  const colorState = useSelector((state) => state.filters.colors);
  const dispatch = useDispatch();

  const changeColor = (event) => {
    let colorSelected = event.target.name;
    dispatch({
        type:ACTION_TYPE.CHANGE_COLOR,
        payload:{
            color:colorSelected
        }
    })
  };

  const colorList = colors.map((color) => {
    let checked = colorState.includes(color) ? "checked" : "";
    return (
      <div>
        <label key={color}>
          <input
            type="checkbox"
            checked={checked}
            name={color}
            onChange={changeColor}
          />
          <span
            className="color-block"
            style={{
              backgroundColor: color,
            }}
          ></span>
          {color}
        </label>
      </div>
    );
  });
  return (
    <div className="filters colorFilters">
      <h5>Filter by Color</h5>
      <form className="colorSelection">{colorList}</form>
    </div>
  );
}

export default FilterColors;
