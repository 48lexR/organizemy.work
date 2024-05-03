import ListItem from "../../../components/ListItem";
import MakeNewTask from "../../../components/MakeNewTask";
import { auth } from "@/app/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home({ params }: any) {
  return (
    <div className="w-full">
      <MakeNewTask params={params.uid}></MakeNewTask>
      <ListItem params={params.uid}></ListItem>
    </div>
  );
}
