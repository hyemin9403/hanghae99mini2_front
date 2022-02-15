import { createAction, handleActions } from "redux-actions";
import { setCookie, deleteCookie } from "../../shared/Cookie";
import axios from "axios";

const LOGIN = "LOGIN";
const LOG_OUT = "LOG_OUT";

const setLogin = createAction(LOGIN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));

// initialState
const initialState = {
	user: null,
	username: null,
	email: null,
	is_login: false,
};

const signupM =
  (username, email, password) => async (dispatch, getState, { history }) => {
    console.log("회원가입 POST 요청을 signupM에서 받았습니다");
    axios
      .post("http://3.38.178.109/user/signup", {
        username: username,
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);

				history.replace('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const checkIdM = (username) => async (dispatch, getState) => {
    console.log("중복확인 POST 요청을 checkIdM에서 받았습니다");
    axios
      .get(`http://3.38.178.109/user/signup/checkUsername/${username}`, {
        username: username,
      })
      .then((res) => {
        console.log(res)
        window.alert("아이디 중복확인이 완료되었습니다.")
        // className에 success 달아줘야함
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const checkEmailM = (email) => async (dispatch, getState) => {
    console.log("중복확인 POST 요청을 checkEmailM에서 받았습니다");
    axios
      .get(`http://3.38.178.109/user/signup/checkEmail/${email}`, {
        email: email,
      })
      .then((res) => {
        console.log(res)
        window.alert("이메일 중복확인이 완료되었습니다.")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loginM = (username, password) => async (dispatch, getState) => {
    console.log("로그인 POST 요청을 loginM에서 받았습니다");
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

      // setCookie = (name, value, exp)
      setCookie("token", res.data.token, 7);
      localStorage.setItem("username", res.data.username);
      dispatch(setLogin({ username: username }));
      // history.replace("/");
    })
    .catch((err) => {
      console.log(err);
    });

  }

  export const logoutM = () => async (dispatch, getState, { history }) => {
    console.log("로그아웃 POST 요청을 loginM에서 받았습니다");
    axios.post("http://3.38.178.109/user/logout")
    .then((res) => {
    // deleteCookie = (name)
    deleteCookie('token');
		localStorage.removeItem('username');
		dispatch(logOut());
		// history.replace('/login')
    })
    .catch((err) => {
      console.log(err)
    })

  }


const loginCheckM = () => {
  return function (dispatch, getState, { history }) {
    const userId = localStorage.getItem("username");
    const tokenCheck = document.cookie;
    if (tokenCheck) {
      dispatch(setLogin({ id: userId }));
    } else {
      dispatch(logOut());
    }
  };
};

export default handleActions(
    {
      [LOGIN]: (state, action) => {
        console.log("setUser 리듀서로 도착했습니다", state, action.payload);
        state.user = action.payload.user;
        state.is_login = true;
        console.log("setUser 리듀서로 적용 완료", state, action.payload);
        return state;
      },
  
      [LOG_OUT]: (state, action) => {
        console.log("logOut 리듀서로 도착했습니다", state, action.payload);
        state.user = null;
        state.is_login = false;
        return state;
      },
    },
    initialState
  );
  
  const actionCreators = { signupM, checkIdM, checkEmailM, loginM, logoutM, loginCheckM};
  
  export { actionCreators };