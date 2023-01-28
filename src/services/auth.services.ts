import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, provider } from "../firebase";

export async function registerUser(payload: any) {
  const user = await createUserWithEmailAndPassword(
    auth,
    payload?.email,
    payload?.password
  );
  return user;
}

export async function loginUser(payload: any) {
  const user = await signInWithEmailAndPassword(
    auth,
    payload?.email,
    payload?.password
  );
  return user;
}

export async function signInWithGoogle() {
  const result: any = await signInWithPopup(auth, provider);
  console.log({ user: result?.user });
  return result;
}
