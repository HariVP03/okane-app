import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  Auth,
  signOut,
} from "firebase/auth";
import { Toast } from "native-base";
import { auth } from ".";

interface AuthProps {
  email: string;
  password: string;
}

interface OperationProps<T> {
  params: T;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export const signIn = async ({
  params: { email, password },
  onError,
  onSuccess,
}: OperationProps<AuthProps>) => {
  return signInWithEmailAndPassword(auth, email, password).then(() =>
    Toast.show({
      title: "Signed in successfully",
      bg: "success.600",
    })
  );
};

export const signUp = async ({
  params: { email, password },
  onError,
  onSuccess,
}: OperationProps<AuthProps>) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
      Toast.show({
        title: "Signed in successfully",
        bg: "success.600",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const logOut = async () => {
  return signOut(auth)
    .then(() =>
      Toast.show({
        title: "Logged out successfully",
        bg: "success.600",
      })
    )
    .catch((err) => {
      Toast.show({
        title: "An error occurred",
        bg: "danger.600",
      });
    });
};
