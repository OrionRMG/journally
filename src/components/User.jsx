import { Oval } from "react-loader-spinner";
import { useLogout } from "../hooks/useLogout";

function User({ name }) {
  const { logout, isPending } = useLogout();

  return isPending ? (
    <div className="user-bar">
      <Oval
        height={20}
        width={20}
        color="#b05b1d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#f9efcb"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  ) : (
    <div className="user-bar">
      <span>{name}</span>
      <button onClick={logout} className="logout-button gray">
        Log out
      </button>
    </div>
  );
}

export default User;
