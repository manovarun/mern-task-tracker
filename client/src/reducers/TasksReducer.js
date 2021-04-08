import {
  TASKS_ADD_REQUEST,
  TASKS_ADD_SUCCESS,
  TASKS_ADD_FAIL,
  TASKS_LIST_FAIL,
  TASKS_LIST_REQUEST,
  TASKS_LIST_SUCCESS,
  TASKS_DELETE_REQUEST,
  TASKS_DELETE_SUCCESS,
  TASKS_DELETE_FAIL,
  TASKS_UPDATE_REQUEST,
  TASKS_UPDATE_SUCCESS,
  TASKS_UPDATE_FAIL,
  TASKS_REMINDER_TOGGLE_REQUEST,
  TASKS_REMINDER_TOGGLE_SUCCESS,
  TASKS_REMINDER_TOGGLE_FAIL,
  TASKS_GET_REQUEST,
  TASKS_GET_SUCCESS,
  TASKS_GET_FAIL,
  TASKS_UPDATE_RESET,
} from "../constants/TasksConstants";

export const TasksListReducer = (
  state = {
    tasks: [],
    loading: true,
  },
  { type, payload }
) => {
  switch (type) {
    case TASKS_LIST_REQUEST:
      return { ...state, loading: true, tasks: [] };
    case TASKS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: payload.tasks,
      };
    case TASKS_LIST_FAIL:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

export const TasksGetReducer = (
  state = {
    task: {},
    loading: true,
    success: false,
  },
  { type, payload }
) => {
  switch (type) {
    case TASKS_GET_REQUEST:
      return { ...state, loading: true };
    case TASKS_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        task: payload.task,
        success: true,
      };
    case TASKS_GET_FAIL:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

export const TasksAddReducer = (
  state = { loading: true, task: {} },
  { type, payload }
) => {
  switch (type) {
    case TASKS_ADD_REQUEST:
      return { ...state, loading: true, task: {}, success: false };
    case TASKS_ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        task: payload.task,
        success: true,
      };
    case TASKS_ADD_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
        task: {},
        success: false,
      };
    default:
      return state;
  }
};

export const TasksDeleteReducer = (
  state = { loading: true },
  { type, payload }
) => {
  switch (type) {
    case TASKS_DELETE_REQUEST:
      return { ...state, loading: true, success: false };
    case TASKS_DELETE_SUCCESS:
      return { ...state, loading: false, success: true };
    case TASKS_DELETE_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
        success: false,
      };
    default:
      return state;
  }
};

export const TasksUpdateReducer = (
  state = { loading: true, task: {} },
  { type, payload }
) => {
  switch (type) {
    case TASKS_UPDATE_REQUEST:
      return { ...state, loading: true, success: false, task: {} };
    case TASKS_UPDATE_SUCCESS:
      return { ...state, loading: false, success: true, task: payload.task };
    case TASKS_UPDATE_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
        success: false,
        task: {},
      };
    case TASKS_UPDATE_RESET:
      return {
        ...state,
        loading: false,
        success: false,
        task: {},
      };
    default:
      return state;
  }
};

export const TaskToggleReducer = (
  state = { loading: true, task: {} },
  { type, payload }
) => {
  switch (type) {
    case TASKS_REMINDER_TOGGLE_REQUEST:
      return { ...state, loading: true, success: false, task: {} };
    case TASKS_REMINDER_TOGGLE_SUCCESS:
      return { ...state, loading: false, success: true, task: payload.task };
    case TASKS_REMINDER_TOGGLE_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
        success: false,
        task: {},
      };
    default:
      return state;
  }
};
