import { produce } from "immer";
import { ACTION_TYPE } from "../action/type";

export const STATUS_FILTER = {
  ALL: "all",
  COMPLETED: "completed",
  UNCOMPLTED: "uncompleted",
};

const initState = {
  status: STATUS_FILTER.ALL,
  colors: [],
};

const filterReducer = produce((state, action) => {
  switch (action.type) {
    case ACTION_TYPE.CHANGE_FILTER_STATUS:
      let actionStatus = action.payload.status;

      state.status = actionStatus;

      break;

    case ACTION_TYPE.CHANGE_COLOR:
      if (state.colors.includes(action.payload.color)) {
        const index = state.colors.indexOf(action.payload.color);
        state.colors.splice(index,1);
      } else {
        state.colors.push(action.payload.color);
      }
      break;

    default:
      break;
  }
}, initState);

export default filterReducer;
