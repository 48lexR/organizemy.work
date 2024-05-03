export default function Footer() {
  return (
    <div className="sticky lg:absolute left-0 right-0 bottom-0 container flex flex-row w-full mx-auto h-20 opacity-90 bg-red-200 items-center justify-center space-y-5 px-5 rounded">
      <img
        src="alt_logo.png"
        alt="Image of bullard tech logo."
        className="h-1/2 block px-2"
      ></img>
      <span className="lg:text-2xl font-bold px-2">Bullard Tech</span>
      <span className="text-1xl px-2">
        <a href="www.bullardtech.com">bullardtech.com</a>
      </span>
    </div>
  );
}
