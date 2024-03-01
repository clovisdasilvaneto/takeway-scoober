"use client";

import LoginForm from "./form/LoginForm";
import useLogin from "./hooks/useLogin";

function Login() {
  const [isLoading, onSubmit] = useLogin();

  return <LoginForm onSubmit={onSubmit} isLoading={isLoading} />;
}

export default Login;
