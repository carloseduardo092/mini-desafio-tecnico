import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PrivateRoute({ children }: Props) {
  const isAuth = localStorage.getItem("auth");

  if (!isAuth) {
    return <Navigate to="/" />;
  }

  return children;
}
