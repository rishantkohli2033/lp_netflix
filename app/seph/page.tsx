import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-white">
      <Head>
        <title>Sephora Product Reviewer</title>
        <meta name="description" content="Apply to become a Sephora Product Reviewer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-[url('/sephora-feature.webp')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center w-full px-8 text-center">
        {/* Sephora Logo */}
        <img src="/images-removebg-preview.png" alt="Sephora Logo" className="w-72 mb-2" />

        {/* Main Title */}
        <h1 className="text-4xl font-bold mb-6 tracking-wide">
          Become a{' '}
          <span className="text-white">Sephora Product Reviewer</span>
        </h1>

        {/* Steps Box */}
        <div className=" bg-black bg-opacity-50 p-10 rounded-lg shadow-xl w-full max-w-lg space-y-6">
          <h2 className="text-3xl font-semibold mb-6 text-whit">
            Steps to Qualify:
          </h2>
          <ol className="list-decimal list-inside text-lg space-y-3 text-gray-200 font-light">
            <li>Enter your basic details</li>
            <li>Complete a simple questionnaire</li>
            <li>Start reviewing Sephora products</li>
            <li>Click "APPLY NOW" to get started</li>
          </ol>
        </div>

        {/* Apply Now Button */}
        <Link href="https://glitchy.go2cloud.org/aff_c?offer_id=1074&aff_id=2431">  {/* Add your desired link here */}
        <div className="mt-8 inline-block bg-red-300 text-white text-2xl font-semibold py-3 px-8 rounded-full hover:bg-red-600 shadow-md transition-colors duration-200 ease-in-out">
            APPLY NOW
        </div>
      </Link>
      </main>
    </div>
  );
}


