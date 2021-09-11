import { useDispatch, useSelector } from "react-redux";

import userFetch from "./store/user/asyncActions";
import { selectUserStatus, selectUserData } from "./store/user/selectors";

const App = () => {
  const currentStatus = useSelector(selectUserStatus);
  const currentUserData = useSelector(selectUserData);
  const dispatch = useDispatch();
  const sendUserRequest = () => {
    dispatch(userFetch());
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux check</h1>
        <div>
          <input type="button" value="Send" onClick={sendUserRequest} />
          <span>Send users/me request</span>
        </div>
        <div>
          <span>
            {currentStatus ? `Status: ${currentStatus}` : "Status: no data"}
          </span>
        </div>
        {currentUserData && <h3>Hello, {currentUserData.firstName}</h3>}
      </header>
    </div>
  );
};

export default App;
