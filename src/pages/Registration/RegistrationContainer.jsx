import { useDispatch, useSelector } from "react-redux";
import Login from "./Registration";
import { userLogin } from "../../store/user/asyncActions";
import { selectUserError } from "../../store/user/selectors";

const LoginContainer = () => {
  const dispatch = useDispatch();
  const userError = useSelector(selectUserError);
  const onSubmit = (data) => {
    dispatch(userLogin(data));
  };
  return (
    <div className="Login">
      <Login error={userError} onSubmit={onSubmit} />
    </div>
  );
};

export default LoginContainer;
