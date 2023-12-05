import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Body from "./Body";
import { UserContextProvider } from "../UserContext";
import { Toaster } from "react-hot-toast";
import { useUser } from "../hooks/useUser";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <UserContextProvider>
        <div className="app">
          <Toaster
            toastOptions={{
              className: "",
              style: {
                border: "1px solid #b05b1d",
                backgroundColor: "#f9efcb",
                padding: "16px",
                color: "#b05b1d",
                borderRadius: "0px",
              },
            }}
          />
          <BrowserRouter>
            <Routes>
              <Route element={<AppLayout />}>
                <Route
                  index
                  element={
                    <ProtectedRoute>
                      <Body />
                    </ProtectedRoute>
                  }
                />
                <Route path="login" element={<Login />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </UserContextProvider>
    </QueryClientProvider>
  );
}

export default App;
