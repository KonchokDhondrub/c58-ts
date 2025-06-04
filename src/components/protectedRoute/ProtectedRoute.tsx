import type { JSX } from "react";
import { useAppSelector } from "../../app/hooks";
import { Navigate } from "react-router-dom";

interface IProtectedRouteProps {
  outlet: JSX.Element;
}

export default function ProtectedRoute({ outlet }: IProtectedRouteProps): JSX.Element {
  const { user } = useAppSelector((store) => store.user);

  if (user.id) {
    return outlet;
  }

  return <>{user.id && (<Navigate to="/login" />)}</>;
}
