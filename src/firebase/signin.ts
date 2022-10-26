import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from ".";

interface SignInProps {
  email: string;
  password: string;
}

export const signIn = ({ email, password }: SignInProps) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      const user = result;
      console.log({ user });
    })
    .catch((error) => {
      console.log({ error });
    });
};
