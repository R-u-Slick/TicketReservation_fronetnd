import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { selectUserData } from "../../store/user/selectors";
import { setUserAction } from "../../store/user/slice";

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
      userId={userData._id}
      onLogout={handleLogout}
    />
  );
};

export default HeaderContainer;
