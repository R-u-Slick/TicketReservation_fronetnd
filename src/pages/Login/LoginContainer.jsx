import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";
import { selectUserData } from "../../store/user/selectors";
import { Redirect } from "react-router";
import { useState } from "react";
import formatRequest from "../../helpers/formatRequest";
import { setUserAction } from "../../store/user/slice";

const LoginContainer = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const [error, setError] = useState("");
  //Think about it
  const handleSubmit = async (data) => {
    try {
      if (!data.email || !data.password) {
        setError("Please fill all text fileds");
        return;
      }
      const response = await formatRequest("/login", "POST", data);
      if (response.err) {
        setError(response.err);
        return;
      }
      const token = response.data.token;
      localStorage.setItem("token", token);
      dispatch(setUserAction(response.data.user));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login">
      {userData ? (
        <Redirect to="/" />
      ) : (
        <Login error={error} onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default LoginContainer;
