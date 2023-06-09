export const ADD_POST = 'ADD_POST';
export const GET_POST = 'GET_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_POST_TITLE = 'UPDATE_POST_TITLE';
export const IS_LOADING = 'IS_LOADING';

const initialState = {
  posts: [],
  isPostLoading: false,
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return { ...state, posts: [action.payload, ...state.posts] };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload),
      };
    default:
      return state;
  };
};
