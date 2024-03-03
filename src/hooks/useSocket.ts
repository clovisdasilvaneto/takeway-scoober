import { initSocket } from "@/modules/socket/socket";
import { useSession } from "next-auth/react";
import { useEffect, useLayoutEffect, useRef } from "react";
import { useDispatch } from "react-redux";

const useSocket = () => {
  const dispatch = useDispatch();
  const session = useSession();
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (!session.data || !session.data?.user || hasInitialized.current) return;
    dispatch(initSocket({ username: session.data.user.name as string }));

    hasInitialized.current = true;
  }, [dispatch, session]);
};

export default useSocket;
