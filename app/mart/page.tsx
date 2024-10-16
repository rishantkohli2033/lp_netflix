import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 text-center">
      <Head>
        <title>Walmart Product Reviewer</title>
        <meta name="description" content="Become a Walmart Product Reviewer and get your gift card!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 sm:px-20 text-center">
        {/* Walmart Logo */}
        <div className="mb-8">
          <Image
            src="/Walmart-Logo.png"  // Replace with the path to your Walmart logo image
            alt="Walmart Logo"
            width={350}
            height={100}
            priority={true}
          />
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-6">
          Become a <span className="text-yellow-500">Walmart Product Reviewer</span>
        </h1>

        {/* Instructions */}
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg text-left mb-6 border-t-8 border-yellow-500">
          <h2 className="text-2xl font-semibold mb-4 text-blue-900">How It Works:</h2>
          <ul className="list-decimal list-inside text-lg space-y-2 text-blue-800">
            <li>Click on the "Start Review" button</li>
            <li>Enter your email & basic info</li>
            <li>Complete the product survey</li>
            <li>Complete the recommended deals</li>
            <li>Receive your gift card</li>
          </ul>
        </div>

        {/* Call to Action */}
        <button className="mt-4 bg-yellow-500 text-white font-semibold py-4 px-10 rounded-full text-lg shadow-lg hover:bg-yellow-600 hover:scale-105 transition-transform">
          Start Review
        </button>
      </main>

    </div>
  );
}
