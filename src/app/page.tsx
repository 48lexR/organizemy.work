export default function Home() {
  return (
    <main className="lg:w-4/5 lg:m-auto w-auto mx-2">
      <h1 className="text-5xl font-bold underline text-center font-serif">
        So, You Want to Get Organized?
      </h1>
      <p className="text-2xl lg:m-3 block bg-gray-100 rounded opacity-80 hover:opacity-100 transition-opacity duration-100 border border-black px-2 py-1 my-5">
        It&apos;s no secret: everyone wants to get organized with us. Our
        innovative stack-model helps keep you on your toes and right at home in
        the madness. We even keep your old events around, so that you can see
        how far you&apos;ve come. Think you want in? Sign up today!
      </p>
      <div className="my-20 container lg:mx-auto grid lg:grid-cols-3 lg:grid-rows-1 grid-cols-1 grid-rows-3 text-center lg:space-evenly lg:items-center ">
        <span className="bg-gray-100 block border-black border mx-5 p-5 rounded opacity-80 hover:opacity-100 transition-opacity duration-100">
          <h1 className="lg:text-5xl text-3xl font-bold font-serif">
            Sign Up!
          </h1>
          <hr className="my-5" />
          <p className="lg:text-2xl">
            Click or tap &apos;Sign In&apos; to create an account. This will
            also take you to your dashboard.
          </p>
        </span>
        <span className="bg-gray-100 block border-black border mx-5 p-5 rounded opacity-80 hover:opacity-100 transition-opacity duration-100">
          <h1 className="lg:text-5xl text-3xl font-bold font-serif">
            Create an Event!
          </h1>
          <hr className="my-5" />
          <p className="lg:text-2xl">
            Fill in the information to create a new event. Click submit to see
            your new event.
          </p>
        </span>
        <span className="bg-gray-100 block border-black border mx-5 p-5 rounded opacity-80 hover:opacity-100 transition-opacity duration-100">
          <h1 className="lg:text-5xl text-3xl font-bold font-serif">
            Follow Through!
          </h1>
          <hr className="my-5" />
          <p className="lg:text-2xl">
            Follow through on your event by checking back in and remembering to
            complete it.
          </p>
        </span>
      </div>
      <div className="my-20 w-4/5 mx-auto">
        <h2 className="font-serif italic text-5xl text-white text-center">
          Our commitment to you.
        </h2>
        <p className="text-white text-3xl my-2">
          We are committed to providing a useful experience for all users. For
          any questions or other communication, including providing feedback,
          please email cage@bullardtech.com. We welcome all feedback, ideas, and
          other communication. Please allow us 3-5 business days at most to
          respond to any communication.
        </p>
      </div>
    </main>
  );
}
