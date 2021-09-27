import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { selectUserData } from "../../store/user/selectors";
import { userRegistration } from "../../store/user/asyncActions";
import { setUserAction } from "../../store/user/slice";

const HeaderContainer = () => {
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(setUserAction(null));
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
