import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";
import { userLogin } from "../../store/user/asyncActions";
import { selectUserError } from "../../store/user/selectors";

const LoginContainer = () => {
  const dispatch = useDispatch();
  const userError = useSelector(selectUserError);
  const handleSubmit = (data) => {
    dispatch(userLogin(data));
  };
  return (
    <div className="Login">
      <Login error={userError} onSubmit={handleSubmit} />
    </div>
  );
};

export default LoginContainer;
