import { useDispatch, useSelector } from "react-redux";

import userFetch from "./store/user/asyncActions";

const App = () => {
  const currentUser = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux check</h1>
        <div>
          <input
            type="button"
            value="Send"
            onClick={() => dispatch(userFetch())}
          />
          <span>Send users/me request</span>
        </div>
        <div>
          <span>Status: {currentUser.status}</span>
        </div>
        {currentUser.data && <h3>Hello, {currentUser.data.firstName}</h3>}
      </header>
    </div>
  );
};

export default App;
