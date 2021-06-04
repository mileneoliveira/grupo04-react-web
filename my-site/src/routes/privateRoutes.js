import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "hooks/useAuth";

export const PrivateRoutes = ({ redirect, ...rest }) => {
  const { logged } = useAuth();

  if (!logged) {
    return <Redirect to={redirect} />;
  }

  return <Route {...rest} />;
};

export const PublicRoutes = ({ redirect, ...rest }) => {
  const { logged } = useAuth();

  if (logged) {
    return <Redirect to={redirect} />;
  }

  return <Route {...rest} />;
};
