import { Outlet, useNavigate } from "react-router-dom";
import { useUserContext } from "../UserContext";
import Header from "./ui/Header";
import Footer from "./ui/Footer";

function AppLayout() {
  const { data } = useUserContext();

  return (
    <div className="app-body">
      <Header name={data?.sessionData?.user_metadata.name} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
