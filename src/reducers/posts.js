import { FETCH_ALL, CREATE } from "../ActionTypes/actionTypes";

const posts = (posts = [], action) => {
  console.log(action.type);
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;

    case CREATE:
      return posts;

    default:
      return posts;
  }
};

export default posts;
