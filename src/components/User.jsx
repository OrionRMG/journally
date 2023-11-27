import { useUserContext } from "../UserContext";

function User() {
  const { isLoading, userData } = useUserContext();

  return (
    <div>
      <span>{isLoading ? "" : userData.username} </span>
      <span>Log out</span>
    </div>
  );
}

export default User;
