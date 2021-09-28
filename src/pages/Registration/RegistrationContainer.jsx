import Registration from "./Registration";
import { useState, useEffect } from "react";
import formatRequest from "../../helpers/formatRequest";
import { Redirect } from "react-router";

const RegistrationContainer = () => {
  const [error, setError] = useState([]);
  const [userCreated, setUserCreated] = useState(false);
  const [citiesArray, setCitiesArray] = useState([]);

  const getCitiesList = async () => {
    try {
      const response = await formatRequest("/city", "GET");
      if (response.err) {
        let errorsArray = [];
        for (let key in response.err) {
          errorsArray.push(response.err[key].message);
        }
        setError(errorsArray);
        return;
      }
      console.log(response.data);
      setCitiesArray(response.data);
    } catch (err) {
      setError([err.message]);
    }
  };

  useEffect(() => {
    getCitiesList();
  }, []);

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
