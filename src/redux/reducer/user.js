import { GET_USER } from "../actions";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        name: "wumu"
      };
    default:
      return {
        name: "annoy"
      };
  }
};
