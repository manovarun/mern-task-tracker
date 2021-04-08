import axios from "axios";
import {
  TASKS_ADD_REQUEST,
  TASKS_ADD_SUCCESS,
  TASKS_ADD_FAIL,
  TASKS_LIST_FAIL,
  TASKS_LIST_REQUEST,
  TASKS_LIST_SUCCESS,
  TASKS_DELETE_SUCCESS,
  TASKS_DELETE_REQUEST,
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
} from "../constants/TasksConstants";

export const getTasks = () => async (dispatch) => {
  try {
    dispatch({ type: TASKS_LIST_REQUEST });

    const { data } = await axios.get("/api/tasks");

    dispatch({ type: TASKS_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: TASKS_LIST_FAIL, payload: message });
  }
};

export const getTask = (id) => async (dispatch) => {
  try {
    dispatch({ type: TASKS_GET_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(`/api/tasks/${id}`, config);

    dispatch({ type: TASKS_GET_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: TASKS_GET_FAIL, payload: message });
  }
};

export const addTask = ({ text, day, reminder }) => async (dispatch) => {
  try {
    dispatch({ type: TASKS_ADD_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `/api/tasks`,
      JSON.stringify({ text, day, reminder }),
      config
    );

    dispatch({ type: TASKS_ADD_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: TASKS_ADD_FAIL, payload: message });
  }
};

export const deleteTask = (id) => async (dispatch) => {
  try {
    dispatch({ type: TASKS_DELETE_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios.delete(`/api/tasks/${id}`, config);

    dispatch({ type: TASKS_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: TASKS_DELETE_FAIL, payload: message });
  }
};

export const updateTask = (id, { text, day, reminder }) => async (dispatch) => {
  try {
    dispatch({ type: TASKS_UPDATE_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.patch(
      `/api/tasks/${id}`,
      JSON.stringify({ text, day, reminder }),
      config
    );

    dispatch({ type: TASKS_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: TASKS_UPDATE_FAIL, payload: message });
  }
};

export const toggleTaskReminder = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: TASKS_REMINDER_TOGGLE_REQUEST });

    const { tasks } = getState().TasksList;

    const task = tasks.find((task) => task._id === id);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.patch(
      `/api/tasks/${id}`,
      JSON.stringify({ ...task, reminder: !task.reminder }),
      config
    );

    dispatch({ type: TASKS_REMINDER_TOGGLE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: TASKS_REMINDER_TOGGLE_FAIL, payload: message });
  }
};
