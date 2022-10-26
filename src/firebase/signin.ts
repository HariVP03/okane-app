import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from ".";

interface SignInProps {
  email: string;
  password: string;
}

export const signIn = async ({ email, password }: SignInProps) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signUp = async ({ email, password }: SignInProps) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
