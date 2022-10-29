import { User } from "firebase/auth";
import { atom } from "jotai";

export const userAtom = atom<UserAtomType>(undefined);
export type UserAtomType = User | undefined;
