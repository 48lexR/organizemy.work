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
      className={`lg:float-left bg-gray-100 container flex lg:flex-col lg:w-max flex-row w-full text-center justify-evenly p-2 lg:px-5 my-2 text-2xl lg:text-3xl `}
    >
      <HomeButton></HomeButton>
      <SignButton></SignButton>
      <SettingsButton></SettingsButton>
    </nav>
  );
}
