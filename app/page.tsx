import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-red-900 via-black to-black min-h-screen flex flex-col items-center justify-center text-white">
      <Head>
        <title>Netflix Movie Reviewer</title>
        <meta name="description" content="Get paid to review Netflix movies!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full px-4 text-center">
        {/* Netflix Logo */}
        <div className="mb-4">
          <Image
            src="/Netflix-Logo-2006-500x333-1.png"  // Make sure to replace with your logo image
            alt="Netflix Logo"
            width={300}
            height={100}
            priority={true}
          />
        </div>

        {/* Headline */}
        <h1 className="text-2xl md:text-4xl font-bold mb-6">
          Want to get paid to be a Netflix Movie Reviewer?
        </h1>

        {/* Steps Box */}
        <div className=" text-white rounded-lg p-8 shadow-md max-w-lg">
          <h2 className="text-lg md:text-xl font-semibold mb-3">Steps to Qualify:</h2>
          <ol className="text-middle space-y-2">
            <li>1. Enter your basic details</li>
            <li>2. Complete a simple questionnaire</li>
            <li>3. Start reviewing movies</li>
            <li>4. Click "APPLY NOW" to get started</li>
          </ol>
        </div>

        {/* Apply Button */}

        <Link href="https://getrewarrds.com/aff_c?offer_id=2206&aff_id=2431">  {/* Add your desired link here */}
          <div className="mt-6 bg-red-600 text-white py-4 px-8 rounded-full text-2xl md:text-xl font-semibold hover:bg-red-700">
            APPLY NOW
          </div>
        </Link>
      </main>

    </div>
  );
}
