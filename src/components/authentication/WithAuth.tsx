import React from "react";
import { Redirect } from "react-router-dom";
import { authenticate } from "../../services/loginService";

export const WithAuth: React.FunctionComponent = (props: any) => {
  const [state, setState] = React.useState({
    loading: true,
    redirect: false,
  });

  React.useEffect(() => {
    (async () => {
      const isAuthenticated = await authenticate();

      if (!isAuthenticated) {
        setState({ loading: false, redirect: true });

        return;
      }

      setState({ ...state, loading: false });
    })();

    // eslint-disable-next-line
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
