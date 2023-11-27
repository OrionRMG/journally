import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Body from "./Body";
import { UserContextProvider } from "../UserContext";
import moment from "moment/moment";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const testDate = moment();
const testDateMod = testDate + 1000;
console.log(testDate._d);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <UserContextProvider>
        <div className="app">
          <Body />
        </div>
      </UserContextProvider>
    </QueryClientProvider>
  );
}

export default App;
