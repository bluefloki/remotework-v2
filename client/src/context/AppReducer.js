export default (state, action) => {
  switch (action.type) {
    case "GET_JOBS":
      return {
        ...state,
        loading: false,
        jobs: action.payload,
        page: state.page + 1,
      };

    case "RESET_JOBS":
      state.page = 1;
      return {
        ...state,
        jobs: [],
        searchValue: "",
      };

    case "INCREMENT_PAGE": {
      return {
        ...state,
        page: state.page + 1,
        jobs: [...state.jobs, ...action.payload],
        hasMore: action.payload.length === 0 ? false : true,
      };
    }

    case "DELETE_JOB": {
      return {
        ...state,
        jobs: state.jobs.filter((job) => job.id !== action.payload),
      };
    }

    default:
      return state;
  }
};
