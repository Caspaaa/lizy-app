import * as React from "react";
import { useHistory } from "react-router-dom";

interface Props {}

export const Login: React.FunctionComponent<Props> = () => {
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

  const onSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/getToken`,
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
      <div>
        <div>
          <h1>Lizy</h1>
          <form onSubmit={onSubmit}>
            <label>Login</label>
            <input
              type="text"
              name="login"
              value={user.login}
              onChange={handleInputChange}
              required
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleInputChange}
              required
            />
            <input type="submit" value="Sign in" />
          </form>
        </div>
      </div>
    </div>
  );
};
