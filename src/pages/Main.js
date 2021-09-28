import { useEffect } from "react";

import Header from "../components/Header/HeaderContainer";
import { userFetch } from "../store/user/asyncActions";

const Main = () => {
  return (
    <div className="Main">
      <Header />
      <h1>Main page</h1>
    </div>
  );
};

export default Main;
