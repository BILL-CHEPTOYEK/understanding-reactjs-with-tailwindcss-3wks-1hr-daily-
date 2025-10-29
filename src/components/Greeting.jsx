import { useState } from 'react';

const Greeting = () => {
  const [greeting, setGreeting] = useState("Hello, Tailwind CSS!");
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <section className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-6">
      {/* Greeting Section */}
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-medium text-black" aria-live="polite" role="status">
          {greeting}
        </h2>

        <p className="text-gray-500">
          This is a simple greeting component.
        </p>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setGreeting("Hello World!")}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Change Greeting
          </button>

          <button
            type="button"
            onClick={() => setGreeting("Hello, Tailwind CSS!")}
            className="px-4 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Counter Section */}
      <div className="flex flex-col gap-3 items-center">
        <div className="bg-gray-100 px-6 py-2 rounded-md text-lg font-medium">
          Count: {count}
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={handleIncrement}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            Incremen
          </button>

          <button
            type="button"
            onClick={handleDecrement}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={count === 0}
          >
            Decrement
          </button>
        </div>
      </div>
    </section>
  );
};

export default Greeting;
