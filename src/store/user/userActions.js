import { userError, userLoaded } from "./userSlice";
import formatRequest from "../../helpers/formatRequest";

const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjNmMTdlNWMzY2IxNDVjMDQ1ZTk0ZSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYzMTA3NTkzNywiZXhwIjoxNjMxOTU0MzM3fQ.ncHTdnIJ7lAPQpPSoejkxfCMPqg1AN3xLP-kdsGIo9s";
const URL = "http://localhost:3000";

function userFetch(dispatch) {
  return async function () {
    const response = await formatRequest(URL + "/users/me", TOKEN);
    if (response.error) {
      return dispatch(userError(response.error));
    }
    return dispatch(userLoaded(response.response.data));
  };
}

export default userFetch;
