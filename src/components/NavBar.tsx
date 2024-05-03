"use client";

import { SignButton } from "./SignButton";
import HomeButton from "./HomeButton";
import { auth } from "@/app/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SettingsButton from "./SettingsButton";

export default function NavBar() {
  const [loggedIn, loading] = useAuthState(auth);
  return (
    <nav
      className={`lg:float-left bg-gray-100 container grid lg:grid-cols-1 lg:${
        loggedIn ? "grid-rows-3" : "grid-rows-2"
      } ${
        loggedIn ? "grid-cols-3" : "grid-cols-2"
      } grid-rows-1 lg:w-max text-center justify-center p-2 text-2xl `}
    >
      <HomeButton></HomeButton>
      <SignButton></SignButton>
      <SettingsButton></SettingsButton>
    </nav>
  );
}
