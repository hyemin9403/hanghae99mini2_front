import { createAction, handleActions } from "redux-actions";
import { setCookie, deleteCookie } from "../../shared/Cookie";
import axios from "axios";

import instance from "../../shared/request";

const LOGIN = "LOGIN";
const LOG_OUT = "LOG_OUT";
const USER_INFO = "USER_INFO";

const setLogin = createAction(LOGIN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const setUserInfo = createAction(USER_INFO, (userinfo) => ({ userinfo }));

// initialState
const initialState = {
  user: null,
  is_login: false,
};

const signupM =
  (username, email, password) =>
  async (dispatch, getState, { history }) => {
    axios
      .post("http://3.38.178.109/user/signup", {
        username: username,
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
        window.alert("회원가입이 완료되었습니다.")
        history.replace("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

const checkIdM = (username) => async (dispatch, getState) => {
  axios
    .get(`http://3.38.178.109/user/signup/checkUsername/${username}`, {
      username: username,
    })
    .then((res) => {
      console.log(res, res.data, res.data.result);
      if (res.data.result) {
        window.alert("이미 존재하는 아이디 입니다.");
      } else {
        window.alert("아이디 중복확인이 완료되었습니다.");
      }
      // className에 success 달아줘야함
    })
    .catch((err) => {
      console.log(err);
    });
};

const checkEmailM = (email) => async (dispatch, getState) => {
  axios
    .get(`http://3.38.178.109/user/signup/checkEmail/${email}`, {
      email: email,
    })
    .then((res) => {
      console.log(res);
      if (res.data.result) {
        window.alert("이미 존재하는 이메일 입니다.");
      } else {
        window.alert("이메일 중복확인이 완료되었습니다.");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const loginM =
  (username, password) =>
  async (dispatch, getState, { history }) => {
    console.log(username, password);

    axios
      .post(
        "http://3.38.178.109/user/login",
        {
          username: username,
          password: password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        console.log("res", res);

        const _auth = res.headers.authorization;
        const _cookie = _auth.split(" ")[1];

        // setCookie = (name, value, exp)
        setCookie("token", _cookie, 7);
        localStorage.setItem("username", username);
        localStorage.setItem("token", _cookie);

        dispatch(setLogin());
        history.push("/");
        window.location.reload();
      })
      .catch((err) => {
        window.alert("아이디, 비밀번호를 확인해주세요!")

        console.log(err);
      });
  };
//  1번 header를 때려 박는다

export const logoutM =
  () =>
  async (dispatch, getState, { history }) => {
    axios
      .post("http://3.38.178.109/user/logout")
      .then((res) => {
        // deleteCookie = (name)
        deleteCookie("token");
        localStorage.removeItem("username");
        localStorage.removeItem("token");
        dispatch(logOut());
        history.replace('/')
        window.location.reload();

      })
      .catch((err) => {
        console.log(err);
      });
  };

// 수정 필요
const loginCheckM = () => {
  return function (dispatch, getState, { history }) {
    const userId = localStorage.getItem("username");
    const tokenCheck = document.cookie;
    if (tokenCheck) {
      dispatch(
        setLogin({
          username: userId,
        })
      );
    } else {
      dispatch(logOut());
    }
  };
};

const userinfoM = () => async (dispatch, getState) => {
  instance
    .get("http://3.38.178.109/userinfo")
    .then((res) => {
      console.log("user값을 불러왔어요", res);
      dispatch(
        setUserInfo({
          userId: res.data.userId,
          username: res.data.username,
          registerStudyList: res.data.registerStudyList,
        })
      );
    })
    .catch((err) => {
      // window.alert("user값을 불러오지 못했습니다");
      console.log(err);
    });
};

export default handleActions(
  {
    [LOGIN]: (state, action) => {
      // console.log("setUser 리듀서로 도착했습니다", state, action.payload);
      state.user = action.payload.user;
      state.is_login = true;
      console.log("setUser 리듀서로 적용 완료", state, action.payload);
    },
    [LOG_OUT]: (state, action) => {
      console.log("logOut 리듀서로 도착했습니다", state, action.payload);
      state.user = null;
      state.is_login = false;
      return state;
    },

    [USER_INFO]: (state, action) => {
      console.log("setUserInfo 리듀서로 도착했습니다", state, action.payload);
      state.user = action.payload.userinfo;
      return state;
    },
  },
  initialState
);

const actionCreators = {
  signupM,
  checkIdM,
  checkEmailM,
  loginM,
  logoutM,
  loginCheckM,
  userinfoM,
};

export { actionCreators };
