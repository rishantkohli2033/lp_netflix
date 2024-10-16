import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
      <Head>
        <title>Apple Product Reviewer</title>
        <meta name="description" content="Apply to become an Apple Product Reviewer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full px-8 text-center">
        {/* Apple Logo */}
        <img src="/Apple_logo_black.svg.png" alt="Apple Logo" className="w-36 mb-8" />

        {/* Main Title */}
        <h1 className="text-3xl font-bold mb-6">
          Want to get paid to be an Apple Product Reviewer?
        </h1>

        {/* Steps Box */}
        <div className="bg-gray-200 p-8 rounded-xl shadow-md w-full max-w-lg space-y-4">
          <h2 className="text-2xl font-semibold mb-4">Steps to Qualify:</h2>
          <ol className="list-decimal list-inside text-lg space-y-3">
            <li>Enter your basic details</li>
            <li>Complete a simple questionnaire</li>
            <li>Start reviewing Apple products</li>
            <li>Click "APPLY NOW" to get started</li>
          </ol>
        </div>

        {/* Apply Now Button */}
        <Link href="https://glitchy.go2cloud.org/aff_c?offer_id=1045&aff_id=2431">  {/* Add your desired link here */}
        <div className="mt-8 inline-block bg-gray-400 text-black text-2xl font-semibold py-3 px-6 rounded-full hover:bg-gray-300">
            APPLY NOW
        </div>
      </Link>
      </main>
    </div>
  );
}
