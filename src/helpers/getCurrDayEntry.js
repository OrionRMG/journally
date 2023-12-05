import { useUserData } from "../hooks/useUserData";

export function getCurrDayEntry() {
  const currDayP4 = new Date(new Date().toDateString());
  currDayP4.setTime(currDayP4.getTime() + 4 * 60 * 60 * 1000);

  const currTime = new Date().getHours();
  if (currTime < 4) {
    currDayP4.setTime(currDayP4.getTime() - 24 * 60 * 60 * 1000);
  }

  const { isLoading, userData } = useUserData();
}
