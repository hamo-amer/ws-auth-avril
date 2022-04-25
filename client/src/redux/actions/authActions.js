import { CURRENT, FAIL, LOGIN, LOGOUT, REGISTER } from "../types/authTypes";
import axios from "axios";
import { setAlert } from "./alertActions";

export const register = (data, navigate) => async dispatch => {
  try {
    const res = await axios.post("/api/auth/signup", data);
    dispatch({
      type: REGISTER,
      payload: res.data,
    });
    navigate("/profile");
  } catch (error) {
    error.response.data.errors.forEach(err =>
      dispatch(setAlert(err.msg, "danger"))
    );
    dispatch({
      type: FAIL,
    });
  }
};
// sign in
export const login = (data, navigate) => async dispatch => {
  try {
    const res = await axios.post("/api/auth/signin", data);
    dispatch({
      type: LOGIN,
      payload: res.data,
    });
    navigate("/profile");
  } catch (error) {
    error.response.data.errors.forEach(err =>
      dispatch(setAlert(err.msg, "danger"))
    );
    dispatch({
      type: FAIL,
    });
  }
};
// get current user
export const getCurrentUser = () => async dispatch => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get("/api/auth/current", config);
    dispatch({
      type: CURRENT,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: FAIL,
    });
  }
};

// logout
export const logout = () => {
  return {
    type: LOGOUT,
  };
};
