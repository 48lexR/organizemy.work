"use client";
import { randomBytes } from "crypto";
import { Timestamp, setDoc, doc } from "@firebase/firestore";
import { useState } from "react";
import { db } from "../app/firebase/firebase";

export default function MakeNewTask(u: any) {
  const uid = u.params;
  const [name, setName] = useState("");
  const [loc, setLoc] = useState("");
  const [date, setDate] = useState("");
  const [desc, setDesc] = useState("");

  async function newTask(uid: string) {
    const id = randomBytes(20).toString("hex");
    const eventRef = doc(db, "events", id);
    let res = await setDoc(eventRef, {
      name: name,
      uid: uid,
      loc: loc,
      time: Timestamp.fromDate(new Date(date)),
      desc: desc,
    });
    setName("");
    setLoc("");
    setDate("");
    setDesc("");
  }

  return (
    <div className=" lg:w-max lg:m-auto">
      <h1 className="text-5xl font-bold font-serif text-center">Welcome</h1>

      <h2 className="text-3xl font-bold text-center font-serif">
        Make New Task?
      </h2>
      <form onSubmit={() => newTask(uid)}>
        <div className="container grid grid-cols-2 text-center items-center border border-black bg-gray-100 rounded px-2 py-1">
          <label htmlFor="name">Task Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="m-5 border border-black text-center"
            required
          />
          <label htmlFor="loc">Location:</label>
          <input
            type="text"
            name="loc"
            id="loc"
            className="m-5 border border-black text-center"
            value={loc}
            onChange={(e) => {
              setLoc(e.target.value);
            }}
          />
          <label htmlFor="Date">Date:</label>
          <input
            type="Date"
            name="Date"
            id="Date"
            className="m-5 border border-black text-center font-serif"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <label htmlFor="desc">Description:</label>
          <textarea
            name="desc"
            id="desc"
            cols={30}
            rows={1}
            className=" border border-black m-10 resize-y"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="m-auto p-2 col-span-2 w-1/2 italic rounded-full bg-blue-100 hover:bg-blue-200 transition ease-in-out duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
