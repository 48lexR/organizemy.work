// "use client";

import {
  collection,
  where,
  getDocs,
  query,
  orderBy,
  Timestamp,
} from "@firebase/firestore";

import { db } from "../app/firebase/firebase";
import Link from "next/link";

export default async function ListItem(u: any) {
  var eventsRef = collection(db, "events");
  const now = Timestamp.fromDate(new Date(new Date().getDate() - 1));
  const uid = u.params;
  let q = query(
    eventsRef,
    where("uid", "==", uid),
    where("time", ">=", now),
    orderBy("time")
  );
  let querySnapshot = await getDocs(q);
  const upcomingItems = querySnapshot.docs.map((doc: any) => {
    const data = doc.data();
    const id = doc.id;
    const date = data.time.toDate();
    return (
      <li
        key={id}
        className="m-5 w-full border border-black rounded p-5 bg-gray-100"
      >
        <Link href={`/${doc.id}`}>
          <h1 className="text-3xl font-bold text-center font-serif">
            {data.name}
          </h1>
          <div className="container grid grid-cols-2 grid-rows-2 text-center">
            <p>{date.toDateString()}</p>
            <p>{data.loc}</p>
            <p className="col-span-2">{data.desc}</p>
          </div>
        </Link>
      </li>
    );
  });
  q = query(
    eventsRef,
    where("uid", "==", uid),
    where("time", "<=", now),
    orderBy("time")
  );
  querySnapshot = await getDocs(q);
  const previousItems = querySnapshot.docs.map((doc: any) => {
    const data = doc.data();
    const id = doc.id;
    const date = data.time.toDate();
    return (
      <li
        key={id}
        className="m-5 w-max border border-black rounded p-5 opacity-80 hover:opacity-100 transition-opacity duration-100"
      >
        <Link href={`/${id}`}>
          <div className="container grid grid-cols-2 grid-rows-2 text-center">
            <p>{date.toDateString()}</p>
            <p>{data.loc}</p>
            <p className="col-span-2">{data.desc}</p>
          </div>
        </Link>
      </li>
    );
  });

  return (
    <div className="container grid lg:grid-cols-2 grid-cols-1 p-2 lg:w-max m-auto">
      <ul className="container flex flex-wrap w-full font-serif">
        <li className="w-full">
          <h1 className="text-3xl font-bold text-center ">Upcoming events:</h1>
        </li>
        {upcomingItems}
      </ul>
      <ul className="container flex flex-wrap w-full font-serif">
        <li className="w-full">
          <h1 className="text-3xl font-bold text-center ">Previous events:</h1>
        </li>
        {previousItems}
      </ul>
    </div>
  );
}
