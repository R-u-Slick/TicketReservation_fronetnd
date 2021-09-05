const USER_ERROR = "USER_ERROR";
const USER_LOADED = "USER_SET";

const userErrorAC = function (error) {
  return {
    type: USER_ERROR,
    status: error,
  };
};

const userLoadedAC = function (data) {
  return {
    type: USER_LOADED,
    data,
  };
};

export { userErrorAC, USER_ERROR, userLoadedAC, USER_LOADED };
