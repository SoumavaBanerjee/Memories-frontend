import { FETCH_ALL, CREATE, UPDATE, DELETE, lIKE_POST } from '../ActionTypes/actionTypes';

const posts = (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;

    case CREATE:
      console.log(posts);
      return [...posts, action.payload];

    case UPDATE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));

    case DELETE:
      return posts.filter((post) => post._id !== action.payload);

    case lIKE_POST:
      console.log(action.payload._id);
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));

    default:
      return posts;
  }
};

export default posts;
