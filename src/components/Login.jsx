import { useLogin } from "../hooks/useLogin";
import Box from "./ui/Box";

function Login() {
  const { login } = useLogin();

  return (
    <Box className="center">
      <button className="login-button yellow" onClick={login}>
        📲 Sign in with Google
      </button>
    </Box>
  );
}

export default Login;
