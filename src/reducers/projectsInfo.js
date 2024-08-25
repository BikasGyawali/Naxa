import { GET_PROJECT_DATA_SUCCESS } from "../action/projectInfo";

const myReducer = (state = { projects: [] }, action) => {
  switch (action.type) {
    case GET_PROJECT_DATA_SUCCESS:
      return { ...state, projects: action.projects };
    default:
      return state;
  }
}

export default myReducer;