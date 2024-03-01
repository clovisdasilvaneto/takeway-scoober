import { useState } from "react";
import { useRouter } from "next/navigation";
import { TLoginForm } from "../types";
import { signIn } from "next-auth/react";

type useLoginReturn = [boolean, (data: TLoginForm) => void];

const useLogin = (): useLoginReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (data: TLoginForm) => {
    setIsLoading(true);

    try {
      await signIn("credentials", {
        ...data,
        redirect: false,
      });

      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return [isLoading, onSubmit];
};

export default useLogin;
