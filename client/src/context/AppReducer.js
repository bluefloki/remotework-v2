export default (state, action) => {
  switch (action.type) {
    case "GET_JOBS":
      console.log(`Page on mount: ${state.page}`);
      return {
        ...state,
        loading: false,
        jobs: action.payload,
        page: state.page + 1,
      };

    case "RESET_JOBS":
      console.log(`Page on unmount: ${state.page}`);
      state.page = 1;
      return {
        ...state,
        jobs: [],
      };

    case "INCREMENT_PAGE": {
      return {
        ...state,
        page: state.page + 1,
        jobs: [...state.jobs, ...action.payload],
      };
    }

    case "ADD_JOB":
      return {
        ...state,
      };

    default:
      return state;
  }
};
