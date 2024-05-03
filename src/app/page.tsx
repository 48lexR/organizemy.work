export default function Home() {
  return (
    <main className="w-9/10 m-auto px-20">
      <h1 className="text-5xl font-bold underline text-center font-serif">
        So, You Want to Get Organized?
      </h1>
      <p className="text-2xl m-3">
        It&apos;s no secret: everyone wants to get organized with us. Our
        innovative stack-model helps keep you on your toes and right at home in
        the madness. We even keep your old events around, so that you can see
        how far you&apos;ve come. Think you want in? Sign up today!
      </p>
      <div className="container lg:mx-auto grid lg:grid-cols-3 lg:grid-rows-1 grid-cols-1 grid-rows-3 text-center lg:space-evenly lg:items-center">
        <span className="bg-gray-100 block border-black border mx-5 p-5 rounded">
          <h1 className="text-3xl font-bold font-serif">Sign Up!</h1>
          <p>
            Click or tap &apos;Sign In&apos; to create an account. This will
            also take you to your dashboard.
          </p>
        </span>
        <span className="bg-gray-100 block border-black border mx-5 p-5 rounded">
          <h1 className="text-3xl font-bold font-serif">Create an Event!</h1>
          <p>
            Fill in the information to create a new event. Click submit to see
            your new event.
          </p>
        </span>
        <span className="bg-gray-100 block border-black border mx-5 p-5 rounded">
          <h1 className="text-3xl font-bold font-serif">Follow Through!</h1>
          <p>
            Follow through on your event by checking back in and remembering to
            complete it.
          </p>
        </span>
      </div>
    </main>
  );
}
