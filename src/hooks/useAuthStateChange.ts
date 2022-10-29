import { onAuthStateChanged, User } from "firebase/auth";
import { useAtom } from "jotai";
import { useToast } from "native-base";
import { useEffect } from "react";
import { userAtom } from "../atoms";
import { auth } from "../firebase";

type UseAuthStateChangeCallback = (user: User | null) => void;

export function useAuthStateChange(callback?: UseAuthStateChangeCallback) {
  const [_user, setUser] = useAtom(userAtom);

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      setUser(user ?? undefined);

      callback?.(user);
    });
  }, []);
}
