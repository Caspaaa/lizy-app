import React from "react";
import { Redirect } from "react-router-dom";

export const WithAuth: React.FunctionComponent = (props: any) => {
  const [state, setState] = React.useState({
    loading: true,
    redirect: false,
  });

  React.useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/authenticate`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((response) => {
      const status = response.status;
      if (status !== 200) {
        setState({ loading: false, redirect: true });

        return;
      }

      setState({ ...state, loading: false });
    });
  }, []);

  const { loading, redirect } = state;
  if (loading) {
    return null;
  }
  if (redirect) {
    return <Redirect to="/" />;
  }
  return props.children;
};
