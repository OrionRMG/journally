import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "../hooks/useUser";
import { useUserContext } from "../UserContext";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { isLoading, isAuthenticated } = useUserContext();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading)
    return (
      <Oval
        height={80}
        width={80}
        color="#b05b1d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#f9efcb"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    );

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
