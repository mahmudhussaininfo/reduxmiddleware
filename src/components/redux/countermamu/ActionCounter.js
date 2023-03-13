import axios from "axios";
import {
  mamuAddFaild,
  mamuAddRequest,
  mamuAddSuccess,
  mamuDelate,
  mamuFaild,
  mamuRequest,
  mamuSuccess,
} from "./ActionType";

export const getMamu = () => async (dispatch) => {
  try {
    dispatch({ type: mamuRequest });
    await axios
      .get("http://localhost:5050/mamus")
      .then((res) => {
        dispatch({
          type: mamuSuccess,
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: mamuFaild,
          payload: "sorry hoy nai",
        });
      });
  } catch (error) {
    console.log(error.message);
  }
};

export const getAddMamu = (mamu) => async (dispatch) => {
  try {
    await axios
      .post("http://localhost:5050/mamus", {
        name: mamu,
      })
      .then((res) => {
        dispatch({
          type: mamuAddSuccess,
          payload: res.data,
        });
      });
  } catch (error) {
    console.log(error.message);
  }
};
export const mamuAddDelate = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:5050/mamus/${id}`).then((res) => {
      dispatch({ type: mamuDelate, payload: id });
    });
  } catch (error) {
    console.log(error.message);
  }
};
