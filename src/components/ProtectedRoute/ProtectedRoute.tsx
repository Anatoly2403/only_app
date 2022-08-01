import React, { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

import { CanAuthenticated } from "../../shared/interfaces";

interface Props {
  children?: ReactNode;
  navigate: string;
  guard?: CanAuthenticated;
}

export const ProtectedRoute: FC<Props> = ({
  guard,
  children,
  navigate = "",
}) => {
  if (!guard?.isAuthenticated) {
    return <Navigate to={`/${navigate}`} replace />;
  }

  return <>{children}</>;
};
