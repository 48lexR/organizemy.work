"use client";

import { deleteDoc, doc } from "@firebase/firestore";
import { db } from "../app/firebase/firebase";

export function DelButton({ d }: any) {
  console.log(d);
  const del = async () => {
    const docRef = doc(db, "events", d);
    await deleteDoc(docRef);
    window.history.pushState({}, "", "/404");
    window.location.reload();
  };
  return (
    <button
      onClick={del}
      className="bg-red-900 text-white italic rounded p-5 m-5"
    >
      Delete this event permenantly?
    </button>
  );
}
