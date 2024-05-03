"use client";

import { auth } from "../firebase/firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
const provider = new GoogleAuthProvider();

export default function SignIn() {
  const [user, uS] = useAuthState(auth);
  let uid: string | undefined = "";

  async function login() {
    const res = await signInWithPopup(auth, provider);
  }
  useEffect(() => {
    onAuthStateChanged(
      auth,
      () => {
        uid = user?.uid;
        console.log(uid);
        if (uid !== undefined) {
          window.history.pushState({}, "", `/signin/${uid}`);
          window.location.reload();
        }
      },
      (e) => console.log(e)
    );
  }, [user]);

  return (
    <div className="bg-gray-300 m-auto w-1/2 p-5 rounded">
      <h1 className="text-5xl font-bold underline text-center">Sign in?</h1>

      <div
        className="w-1/5 ml-auto mr-auto mt-5 text-2xl font-bold rounded bg-blue-100 text-center
      p-2 hover:scale-125 transition ease-in-out duration-500"
      >
        <button onClick={login}>Click here to sign in.</button>
      </div>
    </div>
  );
}
