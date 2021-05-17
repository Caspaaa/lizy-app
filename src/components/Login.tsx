import * as React from "react";
import { useHistory } from "react-router-dom";
import { Header } from "./Header";

export const Login: React.FunctionComponent = () => {
  let history = useHistory();

  const [user, setUser] = React.useState({
    login: "",
    password: "",
  });

  const handleInputChange = (event: any) => {
    const { value, name } = event.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = async (event: any) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/getToken`,
        // `http://localhost:8000/api/getToken`,
        {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const responseJSON = await response.json();

      localStorage.setItem("token", responseJSON.token);

      history.push("/places");
    } catch (error) {
      console.error(error);
      alert("Error logging in please try again");
    }
  };

  return (
    <div>
      <Header />
      <form className="form-search form-search--login" onSubmit={login}>
        <div className="form-search__inputs form-search__inputs--login ">
          <input
            className="input-text input-text--login"
            type="text"
            name="login"
            placeholder="Login"
            value={user.login}
            onChange={handleInputChange}
            required
          />
          <input
            className="input-text input-text--login"
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-search__submit">
          <input className="form-input--submit" type="submit" value="Sign in" />
        </div>
      </form>
    </div>
  );
};
