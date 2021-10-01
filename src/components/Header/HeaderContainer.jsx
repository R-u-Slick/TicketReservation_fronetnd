import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { selectUserData } from "../../store/user/selectors";
import { setUserAction } from "../../store/user/slice";
import { userFetch } from "../../store/user/asyncActions";

const HeaderContainer = () => {
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(setUserAction(null));
    localStorage.removeItem("token");
  };
  if (!userData) {
    return <Header />;
  }
  return (
    <Header
      role={userData.role}
      name={userData.firstName}
      onLogout={handleLogout}
    />
  );
};

export default HeaderContainer;
