import Registration from "./Registration";
import { useState } from "react";
import formatRequest from "../../helpers/formatRequest";
import { Redirect } from "react-router";

const RegistrationContainer = () => {
  const [error, setError] = useState("");
  const [userCreated, setUserCreated] = useState(false);

  const handleSubmit = async (data) => {
    try {
      if (
        !data.firstName ||
        !data.lastName ||
        !email ||
        !password ||
        !city ||
        !role
      ) {
        setError("Please fill all text fileds");
        return;
      }
      const response = await formatRequest("/user", "POST", null, data);
      if (response.error) {
        setError(response.error);
        return;
      }
      setUserCreated(true);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="Registration">
      {userCreated ? (
        <Redirect to="/login" />
      ) : (
        <Registration error={error} onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default RegistrationContainer;
