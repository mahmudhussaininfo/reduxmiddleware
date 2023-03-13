import axios from "axios";
import {
  TodoAddFaild,
  TodoAddRequest,
  TodoAddSuccess,
  TodoDelate,
  TodoFaild,
  TodoRequest,
  TodoSuccess,
} from "./ActionType";

export const getTodos = () => async (dispatch) => {
  try {
    dispatch({ type: TodoRequest });
    await axios
      .get("http://localhost:5050/todos")
      .then((res) => {
        dispatch({
          type: TodoSuccess,
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: TodoFaild,
          payload: "sorry",
        });
      });
  } catch (error) {
    console.log(error.message);
  }
};
export const getAllTodos = (todo) => async (dispatch) => {
  try {
    dispatch({ type: TodoAddRequest });
    await axios
      .post("http://localhost:5050/todos", {
        name: todo,
      })
      .then((res) => {
        dispatch({
          type: TodoAddSuccess,
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: TodoAddFaild,
          payload: "sorry",
        });
      });
  } catch (error) {
    console.log(error.message);
  }
};
export const DelateTodos = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:5050/todos/${id}`).then((res) => {
      dispatch({
        type: TodoDelate,
        payload: res.id,
      });
    });
  } catch (error) {
    console.log(error.message);
  }
};
