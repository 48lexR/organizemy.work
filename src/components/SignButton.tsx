import { useAuthState } from "react-firebase-hooks/auth";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../app/firebase/firebase";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const p = new GoogleAuthProvider();

export function SignButton() {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  useEffect(
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push(`/signin/${user.uid}`);
      } else {
        router.push(`/`);
      }
    }),
    [user]
  );
  return (
    <div className="bg-blue-200 border border-black rounded p-1 h-full w-full ">
      <button
        onClick={
          user
            ? async () => signOut(auth)
            : async () => await signInWithPopup(auth, p)
        }
      >
        {user ? "Sign Out" : "Sign In"}
      </button>
    </div>
  );
}
