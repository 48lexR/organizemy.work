"use client";

import { auth, db } from "@/app/firebase/firebase";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";

export default async function Page() {
  const [user, loading] = useAuthState(auth);

  return (
    <div className="container grid grid-cols-1 text-center">
      <img
        src={`${user?.photoURL}`}
        className="w-1/5 m-auto rounded-full"
      ></img>
      <h1 className="text-5xl font-bold">{user?.displayName}</h1>
      <p>{user?.email}</p>
      <Link
        href={`/signin/${user?.uid}`}
        className="bg-blue-200 rounded p-1 w-max m-auto"
      >
        Back to my todo-list.
      </Link>
    </div>
  );
}
