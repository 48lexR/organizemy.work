import assert from "assert";
import { db } from "../firebase/firebase";
import { getDoc, doc } from "@firebase/firestore";
import { DelButton } from "../../components/DelButton";
import Link from "next/link";

export default async function name({ params }: any) {
  const docId = params.docId;
  const docRef = doc(db, "events", docId);
  const docSnap = await getDoc(docRef);
  let data: any;
  try {
    assert(docSnap.exists());
    data = docSnap.data();
  } catch (e) {
    return (
      <span className="text-red-900">
        Couldn&apos;t find the Event you were looking for.
      </span>
    );
  }

  console.log(data);
  const date = data.time.toDate();
  const uid = data.uid;

  return (
    <div className="text-center rounded bg-gray-200 lg:w-max m-auto p-5">
      <h1 className="text-5xl font-bold ">{data.name}</h1>
      <p>{data.loc}</p>
      <p>{data.desc}</p>
      <p>{date.toString()}</p>
      <DelButton d={docId}></DelButton>
      <Link
        href={`/signin/${uid}`}
        className="m-5 p-6 bg-blue-200 italic font-bold rounded"
      >
        Return to your homepage
      </Link>
    </div>
  );
}
