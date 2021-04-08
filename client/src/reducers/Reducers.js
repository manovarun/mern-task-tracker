import { combineReducers } from "redux";
import {
  TasksAddReducer,
  TasksDeleteReducer,
  TasksListReducer,
  TasksGetReducer,
  TasksUpdateReducer,
  TaskToggleReducer,
} from "./TasksReducer";

const Reducers = combineReducers({
  TasksList: TasksListReducer,
  TasksGet: TasksGetReducer,
  TasksAdd: TasksAddReducer,
  TasksDelete: TasksDeleteReducer,
  TasksUpdate: TasksUpdateReducer,
  TaskToggle: TaskToggleReducer,
});

export default Reducers;
