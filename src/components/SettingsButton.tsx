"use client";

import Link from "next/link";
import { auth } from "@/app/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function SettingsButton() {
  const [user, loading] = useAuthState(auth);

  return (
    <Link
      href={`/settings/${user?.uid}`}
      className={`${
        user ? "block" : "hidden"
      } border border-black bg-blue-200 rounded p-1 h-full w-full `}
    >
      Account
    </Link>
  );
}
