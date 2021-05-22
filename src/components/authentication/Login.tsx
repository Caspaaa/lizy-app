import * as React from "react";
import { useHistory } from "react-router-dom";
import { Header } from "../Header";
import { getToken } from "../../services/loginService";

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
      const token = await getToken(user);

      localStorage.setItem("token", token);

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
