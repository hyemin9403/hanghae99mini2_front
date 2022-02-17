import { createAction, handleActions } from "redux-actions";
import axios from "axios";

import instance from "../../shared/request";

// action type
const LOAD_POST = "LOAD_POST";
const ADD_POST = "ADD_POST";
const EDIT_POST = "EDIT_POST";
const DELETE_POST = "DELETE_POST";
const CATEGORY_POST = "CATEGORY_POST";

// action creators
const loadPost = createAction(LOAD_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const editPost = createAction(EDIT_POST, (post_id, post) => ({
  post_id,
  post,
}));
const deletePost = createAction(DELETE_POST, (post_id) => ({ post_id }));
const categoryPost = createAction(CATEGORY_POST, (post_category) => ({
  post_category,
}));

// initial state
const initialState = {
  list: [],
  list2: [],
  is_loading: false,
};

const loadPostM = () => async (dispatch, getState) => {
  axios
    .get("http://3.38.178.109/boards")
    .then((res) => {
      const post_data = res.data;
      let post_list = [];

      // post_data에서 하나씩 꼭 돌려줘야함.
      post_data.forEach((doc) => {
        post_list.push({ id: doc.id, ...doc });
      });
      dispatch(loadPost(post_list));
    })
    .catch((err) => {
      console.log(err);
    });
};

const categoryM = (category) => async (dispatch, getState) => {
  axios
    // .get(`http://localhost:3003/java`)
    .get(`http://3.38.178.109/boards/${category}`)
    .then((res) => {
      const post_data = res.data;
      let post_category = [];
      // post_data에서 하나씩 꼭 돌려줘야함.
      post_data.forEach((doc) => {
        post_category.push({ id: doc.id, ...doc });
      });
      dispatch(categoryPost(post_category));
    })
    .catch((err) => {
      console.log(category);
      console.log(err);
    });
};

const editPostM =
  (post_id, _contents) =>
  async (dispatch, getState, { history }) => {
    console.log(post_id, _contents);

    instance
      .put(`http://3.38.178.109/board/${post_id}/update`, _contents)
      .then((res) => {
        console.log(res);
        dispatch(editPost(post_id, _contents));
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
        window.alert("수정이 실패하였습니다. 다시 시도해주세요");
      });
  };

const addPostM =
  (contents) =>
  async (dispatch, getState, { history }) => {
    console.log(contents);

    const addData = {
      category: contents.category,
      name: contents.name,
      content: contents.content,
      memberNum: contents.memberNum,
    };
    // 테스트
    instance
      .post(`http://3.38.178.109/board/write`, contents)
      .then((res) => {
        dispatch(addPost(contents));
        history.push("/");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

const deletePostM =
  (post_id) =>
  async (dispatch, getState, { history }) => {
    instance
      .delete(`http://3.38.178.109/board/${post_id}/delete`)
      .then((res) => {
        dispatch(deletePost(post_id));
        history.replace("/");
      })
      .catch((err) => {
        window.alert("삭제가 되지 않았어요!");
        console.log(err);
      });
  };

const joinPostM =
  (post_id) =>
  async (dispatch, getState, { history }) => {
    console.log("참여하기 버튼을 눌렀습니다", post_id);

    instance
      .put(`http://3.38.178.109/board/${post_id}/register`)
      .then((res) => {
        console.log("참여완료");
        window.alert("참여가 완료되었습니다.");
        history.push("/");
        window.location.reload();
      })
      .catch((err) => {
        window.alert("참여가 되지 않았어요!");
        console.log(err);
      });
  };

  const leavePostM = (post_id) => async(dispatch, getState, {history}) => {
    console.log("탈퇴하기 버튼을 눌렀습니다", post_id);

    instance
    .delete(`http://3.38.178.109/board/${post_id}/secession`)
    .then((res) => {
      console.log("탈퇴완료");
      window.alert("탈퇴가 완료되었습니다.");
      history.push("/");
      window.location.reload();
    })
    .catch((err) => {
      window.alert("탈퇴가 되지 않았어요!");
      console.log(err);
    });

  }

export default handleActions(
  {
    [LOAD_POST]: (state = initialState, action = {}) => {
      return { ...state, list: action.payload.post_list };
    },

    [ADD_POST]: (state, action) => {
      const new_post_list = [...state.list, action.payload.post];

      return { ...state, list: new_post_list };
    },

    [DELETE_POST]: (state, action) => {
      const new_post_list = state.list.filter((post) => {
        return action.payload.post_id !== post.id;
      });
      return { ...state, list: new_post_list };
    },

    [CATEGORY_POST]: (state = initialState, action = {}) => {
      return { ...state, list2: action.payload.post_category };
    },

    [EDIT_POST]: (state, action) => {
      let idx = state.list.findIndex(
        (p) => p.post_id === action.payload.post_id
      );
      state.list[idx] = {
        ...state.list[idx],
        contents: action.payload.contents,
      };
    },
  },
  initialState
);

const actionCreators = {
  loadPostM,
  categoryM,
  addPostM,
  deletePostM,
  editPostM,
  joinPostM,
  leavePostM,
};

export { actionCreators };
