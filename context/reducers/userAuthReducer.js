import { SET_USER, SET_USER_NULL } from "./../actions/userActions";

const userAuthReducer = (state = null, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case SET_USER_NULL:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

// export const { SET_USER, SET_USER_NULL } = userAuthReducer();
export default userAuthReducer;
