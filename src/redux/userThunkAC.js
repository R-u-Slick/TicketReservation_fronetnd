import { userErrorAC, userLoadedAC } from "./userAC";

const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjNmMTdlNWMzY2IxNDVjMDQ1ZTk0ZSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzMDg2Nzg0MSwiZXhwIjoxNjMwOTU0MjQxfQ.lsY8lJSU5k1A9c0I_5hoZj9R6lggxupjq1eQ6PAFseE";

function userThunkAC(dispatch) {
  return async function () {
    try {
      const response = await fetch("http://localhost:3000/users/me", {
        headers: { Authorization: TOKEN },
      });
      const responseJSON = await response.json();
      if (!response) {
        dispatch(userErrorAC(responseJSON.err));
      }
      dispatch(userLoadedAC(responseJSON.data));
    } catch (err) {
      dispatch(userErrorAC(err));
    }
  };
}

export default userThunkAC;
