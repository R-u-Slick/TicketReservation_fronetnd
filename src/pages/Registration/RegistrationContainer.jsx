import Registration from "./Registration";
import { useState, useEffect } from "react";
import formatRequest from "../../helpers/formatRequest";
import { Redirect } from "react-router";
import { selectCityData } from "../../store/city/selectors";
import { useDispatch, useSelector } from "react-redux";
import { cityFetch } from "../../store/city/asyncActions";

const RegistrationContainer = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState([]);
  const [userCreated, setUserCreated] = useState(false);
  const citiesArray = useSelector(selectCityData);

  useEffect(() => {
    dispatch(cityFetch());
  }, []);

  //think of it
  const handleSubmit = async (data) => {
    try {
      if (
        !data.firstName ||
        !data.lastName ||
        !data.email ||
        !data.password ||
        !data.city ||
        !data.role
      ) {
        setError(["Please fill all text fileds"]);
        return;
      }
      const response = await formatRequest("/user", "POST", null, data);
      if (response.err) {
        let errorsArray = [];
        for (let key in response.err) {
          errorsArray.push(response.err[key].message);
        }
        setError(errorsArray);
        return;
      }
      setUserCreated(true);
    } catch (err) {
      setError([err.message]);
    }
  };

  return (
    <div className="Registration">
      {userCreated ? (
        <Redirect to="/login" />
      ) : (
        <Registration
          error={error}
          onSubmit={handleSubmit}
          cities={citiesArray}
        />
      )}
    </div>
  );
};

export default RegistrationContainer;
