import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50 text-center">
      <Head>
        <title>SHEIN Product Reviewer</title>
        <meta name="description" content="Become a SHEIN Product Reviewer and get your gift card!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 sm:px-20 text-center">
        {/* SHEIN Logo */}
        <div className="mb-12">
          <Image
            src="/Shein-logo.png"  // Replace with the path to your SHEIN logo image
            alt="SHEIN Logo"
            width={250}
            height={100}
            priority={true}
          />
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl font-bold text-black mb-6">
          Become a <span className="text-pink-500">SHEIN Product Reviewer</span>
        </h1>

        {/* Instructions */}
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg text-left mb-6 border-t-8 border-pink-500">
          <h2 className="text-2xl font-semibold mb-4 text-black">How It Works:</h2>
          <ul className="list-decimal list-inside text-lg space-y-2 text-gray-800">
            <li>Click on the "Start Review" button</li>
            <li>Enter your email & basic info</li>
            <li>Complete the product survey</li>
            <li>Complete the recommended deals</li>
            <li>Receive your gift card</li>
          </ul>
        </div>

        {/* Call to Action */}
          <Link href="https://glitchy.go2cloud.org/aff_c?offer_id=970&aff_id=2431">  {/* Add your desired link here */}
          <div className="mt-8 bg-pink-500 text-white font-bold py-3 px-10 rounded-full text-2xl shadow-lg hover:bg-pink-600 hover:scale-105 transition-transform">
            Start Review
          </div>
        </Link>
      </main>

    </div>
  );
}
