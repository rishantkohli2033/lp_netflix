"use client";

import Head from 'next/head';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Home() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  type FAQ = {
    question: string;
    answer: string;
  };

  const faqs: FAQ[] = [
    {
      question: 'How do I join?',
      answer: "Click on the 'Join Now' button and fill out the form.",
    },
    {
      question: 'How do I submit a review?',
      answer: 'You will receive instructions after joining via email.',
    },
  ];

  return (
    <>
      <Head>
        <title>Spotify Reviewer Program</title>
      </Head>

      <main className="font-sans text-white bg-black">
        {/* Hero Section */}
        <section className="bg-green-600 py-20 text-center text-black">
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Become a<br />
            <span className="block">SPOTIFY Song</span>
            Reviewer
          </h1>
          <p className="text-lg">Get exclusive rewards and review the latest music and features.</p>
          <a href="/join">
            <button className="mt-6 px-6 py-2 bg-black text-green-400 border border-green-400 rounded hover:shadow-lg hover:shadow-green-300 hover:brightness-110 transition duration-300">
              Join Now
            </button>
          </a>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-black">
          <h2 className="text-3xl font-bold text-center text-green-400 mb-10">How It Works</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">1. Apply</h3>
              <p>Fill out our simple application form and tell us about your listening habits and feedback skills.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">2. Get Selected</h3>
              <p>Our team reviews applications and notifies selected users via email or SMS.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">3. Receive Access</h3>
              <p>Selected reviewers get access to new Spotify features and playlists.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">4. Create Reviews</h3>
              <p>Test features and create honest, detailed reviews about your experience.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">5. Get Paid</h3>
              <p>Earn rewards for your reviews and continue to receive exclusive access monthly.</p>
            </div>
          </div>
        </section>

        {/* Program Benefits Section */}
        <section className="py-20 bg-green-950">
          <h2 className="text-3xl font-bold text-center text-green-300 mb-10">Program Benefits</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">💰 Free Access</h3>
              <p>Enjoy complimentary access to new Spotify features and content.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">💸 Paid Reviews</h3>
              <p>Earn money for each detailed review you submit for our platform.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">🎯 Early Access</h3>
              <p>Be among the first to explore new features before public release.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">🔄 Influence Direction</h3>
              <p>Your feedback directly influences product development and direction.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">📊 Grow Professionally</h3>
              <p>Gain experience in product testing, reviewing, and marketing.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">📦 Monthly Opportunities</h3>
              <p>Get new tasks and reviews monthly based on your engagement.</p>
            </div>
          </div>
        </section>

        {/* Why Join Section */}
        <section className="py-20 bg-black">
          <h2 className="text-3xl font-bold text-center text-green-400 mb-10">Why Join Our Program?</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Build Your Portfolio</h3>
              <p>Create professional content that can help grow your digital presence.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Exclusive Community</h3>
              <p>Join a network of music lovers and reviewers worldwide.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Flexible Schedule</h3>
              <p>Review features and content at your own pace with no deadlines.</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-green-950">
          <h2 className="text-3xl font-bold text-center text-green-300 mb-10">What Our Users Say</h2>
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            spaceBetween={50}
            slidesPerView={1}
          >
            <SwiperSlide>
              <div className="max-w-xl mx-auto text-center">
                <p className="text-lg italic">"Spotify's reviewer program is next level!"</p>
                <h3 className="mt-4 font-semibold">- Alex T.</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="max-w-xl mx-auto text-center">
                <p className="text-lg italic">"Got early access and payment for feedback – amazing!"</p>
                <h3 className="mt-4 font-semibold">- Jamie L.</h3>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-black">
          <h2 className="text-3xl font-bold text-center text-green-300 mb-10">Frequently Asked Questions</h2>
          <div className="max-w-2xl mx-auto">
            {faqs.map((faq, index: number) => (
              <div key={index} className="border-b border-green-600 py-4">
                <button
                  className="w-full text-left text-lg font-medium flex items-center justify-between"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  {faqOpen === index ? <ChevronUp className="w-5 h-5 text-green-300" /> : <ChevronDown className="w-5 h-5 text-green-300" />}
                </button>
                {faqOpen === index && <p className="mt-2 text-white">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
