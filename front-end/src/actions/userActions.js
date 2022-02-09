import axios from "axios";
import config from "../config/config";

export const REQUEST_USER_DATA = "REQUEST_USER_DATA";
export const RECEIVE_USER_DATA = "RECEIVE_USER_DATA";
export const LOG_OUT = "LOG_OUT";
export const RECEIVE_INTERCEPTOR_DATA = "RECEIVE_INTERCEPTOR_DATA";
export const FETCHING_FINISH = "FETCHING_FINISH";

export const requestUserData = () => ({
  type: REQUEST_USER_DATA,
});

export const receiveUserData = (data) => ({
  type: RECEIVE_USER_DATA,
  payload: data,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const receiveInterceptorId = (data) => ({
  type: RECEIVE_INTERCEPTOR_DATA,
  payload: data,
});

export const done = () => ({
  type: FETCHING_FINISH,
});

export const isConnected = () => (_dispatch, getState) =>
  new Promise((resolve, reject) => {
    const token = getState().user.token;
    if (!token) {
      console.log("Error: userActions - isConnected: no Token");
      return reject();
    }

    axios.interceptors.request.use((config) => {
      config.headers.Authorization = `JWT ${token}`;
      return config;
    });

    resolve();
  });

export const login = (email, password) => (dispatch) =>
  new Promise((resolve, reject) => {
    dispatch(requestUserData());
    axios
      .post(config.baseUrlApi + "/auth/localAuth", { email, password })
      .then((response) => {
        if (!response.data.error) {
          const interceptorId = axios.interceptors.request.use((config) => {
            config.headers.Authorization = `JWT ${response.data.token}`;
            return config;
          });
          dispatch(receiveInterceptorId(interceptorId));
          dispatch(
            receiveUserData({
              fail: false,
              message: response.data.message,
              user: response.data.user,
              token: response.data.token,
            })
          );
          return resolve();
        } else {
          console.log("Error: userActions - login:", response.data.error);
          dispatch(
            receiveUserData({
              fail: true,
              message: response.data,
            })
          );
          reject({ message: response.data });
        }
      })
      .catch((error) => {
        console.log("Error: userActions - login:", error);
        dispatch(
          receiveUserData({
            fail: true,
            message: error.response ? error.response.data : {},
          })
        );
        reject({ message: error.response ? error.response.data : {} });
      });
  });

export const logout = () => (_dispatch, getState) =>
  new Promise((resolve, reject) => {
    axios.interceptors.request.eject(getState().user.interceptorId);
    _dispatch(logOut());
    resolve();
  });

export const updateUser = (newValues, userId) => (dispatch, getState) =>
  new Promise((resolve, reject) => {
    dispatch(requestUserData());

    axios
      .patch(config.baseUrlApi + "/user/" + userId, newValues)
      .then((response) => {
        resolve(
          dispatch(
            receiveUserData({
              user: response.data,
            })
          )
        );
      })
      .catch((err) => {
        console.log("Error: userActions - updateUser:", err);
        dispatch(receiveUserData({}));
        return reject(err);
      });
  });

export const getUserData = () => (dispatch, getState) =>
  new Promise((resolve, reject) => {
    dispatch(requestUserData());
    axios
      .get(config.baseUrlApi + "/user/me")
      .then((response) => {
        resolve(
          dispatch(
            receiveUserData({
              token: getState().user.token,
              user: response.data,
            })
          )
        );
      })
      .catch((err) => {
        console.log("Error: userActions - getUserData:", err);
        reject(dispatch(receiveUserData({})));
      });
  });

export const createUser = (newUser) => (dispatch) =>
  new Promise((resolve, reject) => {
    dispatch(requestUserData());
    // delete user.confirmPassword;

    axios
      .post(config.baseUrlApi + "/user", newUser)
      .then((user) => {
        // dispatch(login(user.email, user.password)).then(resolve).catch(reject);
        resolve();
      })
      .catch((err) => {
        console.log("Error: userActions - createUser:", err);
        return reject(err.response.data);
      });
  });
