import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  Auth,
  signOut,
  UserCredential,
} from "firebase/auth";
import { Toast } from "native-base";
import { auth } from ".";

interface AuthProps {
  email: string;
  password: string;
}

interface BaseOperationParams<T> {
  params: T;
  onSuccess?: (response: UserCredential) => void;
  onError?: (error: any) => void;
}

interface SignupProps<T> extends BaseOperationParams<T> {}

interface SigninProps<T> extends BaseOperationParams<T> {
  onIncorrectPassword?: () => void;
}

export const signIn = async ({
  params: { email, password },
  onError,
  onSuccess,
  onIncorrectPassword,
}: SigninProps<AuthProps>) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      Toast.show({
        title: "Signed in successfully",
        bg: "success.600",
      });
      console.log({ res });
      onSuccess?.(res);
    })
    .catch((error) => {
      onError?.(error);

      switch (error.code) {
        case "auth/wrong-password":
          onIncorrectPassword?.();
      }
    });
};

export const signUp = async ({
  params: { email, password },
  onError,
  onSuccess,
}: SignupProps<AuthProps>) => {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
      Toast.show({
        title: "Signed in successfully",
        bg: "success.600",
      });

      onSuccess?.(res);
    })
    .catch((err) => {
      onError?.(err);
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
