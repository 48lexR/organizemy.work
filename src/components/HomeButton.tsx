import Link from "next/link";

export default function HomeButton() {
  return (
    <Link
      href="/"
      className="block bg-blue-200 border border-black rounded p-1 h-full"
    >
      Home
    </Link>
  );
}
