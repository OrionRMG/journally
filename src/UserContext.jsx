import { createContext, useContext } from "react";
import { Oval } from "react-loader-spinner";
import { useUser } from "./hooks/useUser";
import { decrypt } from "./Utility";

const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export function UserContextProvider({ children }) {
  const { data: encryptData, isLoading, error, isAuthenticated } = useUser();
  let encryptEntries = "";
  let decryptEntries = "";
  let entries = {};
  let data = { ...encryptData };

  if (!isLoading) {
    encryptEntries = encryptData?.userData?.entries;
    console.log(encryptData?.userData);
    if (encryptEntries) {
      decryptEntries = decrypt(encryptEntries);
      entries = JSON.parse(decryptEntries);
      data.userData.entries = entries;
    }
  }

  if (!isLoading && data?.userData?.entries === "") {
    data.userData.entries = [];
  }

  function getCurrDayId() {
    const currDayP4 = new Date(new Date().toDateString());
    currDayP4.setTime(currDayP4.getTime() + 4 * 60 * 60 * 1000);

    const currTime = new Date().getHours();
    if (currTime < 4) {
      currDayP4.setTime(currDayP4.getTime() - 24 * 60 * 60 * 1000);
    }

    const currDayId = Date.parse(currDayP4);

    return currDayId;
  }

  const currDayId = getCurrDayId();

  function getCurrDayEntry() {
    if (data?.userData?.entries === "") return null;
    if (
      data?.userData?.entries.find((entry) => entry.id === currDayId) &&
      !isLoading
    ) {
      return data.userData.entries.find((entry) => entry.id === currDayId);
    }

    return null;
  }

  const currDayEntry = getCurrDayEntry();

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
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
      </div>
    );
  }

  if (error) {
    return error;
  }

  return (
    <UserContext.Provider
      value={{ data, currDayEntry, currDayId, isAuthenticated, isLoading }}
    >
      {children}
    </UserContext.Provider>
  );
}
