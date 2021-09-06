import { userError, userLoaded } from "./userReducer";

const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjNmMTdlNWMzY2IxNDVjMDQ1ZTk0ZSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzMDk1NTk0NCwiZXhwIjoxNjMxODM0MzQ0fQ.AXc0KhpkkR9d475zpfQVH1nXugZ1SJomyQ1uJBSerRw";

function userThunkAC(dispatch) {
  return async function () {
    try {
      const response = await fetch("http://localhost:3000/users/me", {
        headers: { Authorization: TOKEN },
      });
      const responseJSON = await response.json();
      if (responseJSON.err) {
        return dispatch(userError(responseJSON.err));
      }
      return dispatch(userLoaded(responseJSON.data));
    } catch (err) {
      return dispatch(userError(err));
    }
  };
}

export default userThunkAC;
