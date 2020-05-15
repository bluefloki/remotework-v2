export default (state, action) => {
  switch (action.type) {
    case "GET_JOBS":
      return {
        ...state,
        loading: false,
        jobs: action.payload,
      };
    case "RESET_JOBS":
      return {
        ...state,
        jobs: [],
      };

    case "ADD_JOB":
      return {
        ...state,
      };

    default:
      return state;
  }
};
