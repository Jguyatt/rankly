import React, { useState } from 'react';

const steps = [
  {
    title: 'Onboarding & Intake',
    desc: 'Preview the onboarding form to see what business info and access to your Google Business Profile and site is needed.',
    hasButton: true,
    buttonText: 'Preview Onboarding Form',
    buttonLink: 'https://7aeiybwu0cn.typeform.com/to/UOoTHTqU',
  },
  {
    title: 'GBP Ranker Pro Optimization',
    desc: 'Our Rankly360 team applies weekly professional updates: posts, photo enhancements, Q&A replies, keyword optimization, and AI-backed tuning to boost your local visibility.',
  },
  {
    title: 'Google Ads Pro Campaign Setup',
    desc: 'We create and launch a paid search campaign tailored to your budget tier—setting up targeting, multi-format ads, conversion tracking, and pixel integration.',
  },
  {
    title: 'Ongoing GBP & Ad Management',
    desc: 'GBP: Regular content, images, & profile fine-tuning. Ads: Ongoing budget monitoring, bidding adjustments, and targeting enhancements based on performance.',
  },
  {
    title: 'Monthly Reporting & Insights',
    desc: 'Receive a comprehensive report showcasing: GBP metrics (posts, review growth, rank changes), Ads performance (impressions, clicks, conversions, spend tracking)—all in one easy-to-read dashboard.',
  },
  {
    title: 'Strategic Adjustments',
    desc: 'Each month, your campaigns are refined based on: GBP performance (insights, visibility improvements), Ad data (conversion trends, ROI, audience behavior).',
  },
];

const pinColors = [
  'bg-primary-400',
  'bg-blue-400',
  'bg-green-400',
  'bg-yellow-300',
  'bg-purple-400',
  'bg-pink-400',
];

const pinLefts = [
  '7%',  // step 1, shifted right
  '23%',
  '39%',
  '55%',
  '71%',
  '87%', // step 6, not at the very edge
];

const WorkflowSection = () => {
  const [hovered, setHovered] = useState(null);
  return (
    <>
      <section id="workflow" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">🚀 Our 6-Step Google Booster Workflow</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how we take your local business from setup to ongoing growth and results.
            </p>
          </div>
          <div className="relative w-full flex flex-col items-center min-h-[520px] md:min-h-[600px]">
            {/* Extended Road SVG behind cards, starts/ends off-screen */}
            <svg viewBox="-100 0 1400 200" className="absolute left-0 right-0 w-full h-[200px] md:h-[260px] z-0" preserveAspectRatio="none">
              <defs>
                <filter id="roadShadow2" x="-120" y="-20" width="1540" height="240">
                  <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#000" floodOpacity="0.10" />
                </filter>
              </defs>
              {/* Road now starts and ends off-screen */}
              <path d="M-100 150 Q 100 50 300 150 T 700 150 T 1100 150 Q 1300 170 1500 120" stroke="#222" strokeWidth="18" fill="none" filter="url(#roadShadow2)" />
              <path d="M-100 150 Q 100 50 300 150 T 700 150 T 1100 150 Q 1300 170 1500 120" strokeDasharray="20 20" stroke="#fff" strokeWidth="5" fill="none" />
            </svg>
            {/* Steps: cards above/below, pins point to road, no overlap */}
            <div className="relative w-full flex flex-col md:flex-row justify-between items-center z-10 mt-12 md:mt-0">
              {steps.map((step, i) => {
                const left = pinLefts[i];
                const isAbove = i % 2 === 0;
                return (
                  <div
                    key={step.title}
                    className="absolute flex flex-col items-center w-44 md:w-60"
                    style={{ left, top: isAbove ? '10px' : '200px', transform: 'translateX(-50%)' }}
                  >
                    {/* Pin, small, above the road, pointer to road */}
                    <div className="flex flex-col items-center mb-2">
                      <div className={`rounded-full ${pinColors[i % pinColors.length]} w-8 h-8 flex items-center justify-center text-white text-base font-bold shadow-md border-2 border-white z-10`}>{i + 1}</div>
                      <div className="w-1 h-6 bg-gray-300 rounded-b-full -mt-1"></div>
                    </div>
                    {/* Card above or below the road, no overlap, with hover pop effect */}
                    <div
                      className={`bg-white rounded-xl shadow-md p-4 md:p-6 text-center border border-primary-100 max-w-xs ${isAbove ? 'mb-16' : 'mt-16'} transition-transform transition-shadow duration-300 cursor-pointer ${hovered === i ? 'scale-104 z-20 shadow-2xl' : ''}`}
                      style={{ marginTop: isAbove ? '0' : '32px', marginBottom: isAbove ? '32px' : '0' }}
                      onMouseEnter={() => setHovered(i)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-xs md:text-sm mb-3">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* Onboarding Forms Section */}
      <section className="bg-white py-12">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Preview Onboarding Forms</h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">Please take a look through our forms so you can get a sense of what is needed from you in the onboarding process.</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a
              href="https://7aeiybwu0cn.typeform.com/to/UOoTHTqU"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-500 hover:bg-primary-600 text-white text-base font-semibold px-6 py-3 rounded-lg shadow transition-colors duration-200"
            >
              GBP Ranker Onboarding Form
            </a>
            <a
              href="https://7aeiybwu0cn.typeform.com/to/p9CTupRn?typeform-source=ranklyai.dashclicks.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-500 hover:bg-primary-600 text-white text-base font-semibold px-6 py-3 rounded-lg shadow transition-colors duration-200"
            >
              Google Ads Onboarding Form
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkflowSection; 