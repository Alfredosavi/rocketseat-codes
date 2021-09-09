import { Redirect, Route } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

export function PrivateRoute({ component: Component, ...rest }: any) {
  const { authUser } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) =>
        authUser ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
}
