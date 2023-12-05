import { useUserContext } from "../UserContext";

function StreakBanner({ streak }) {
  return (
    <div className="streak-banner">
      You're on a {streak} day journaling streak!
    </div>
  );
}

export default StreakBanner;
