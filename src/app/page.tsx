'use client';
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

function lerpColor(a: string, b: string, t: number) {
  // a, b: hex color strings; t: 0-1
  const ah = a.replace('#', '');
  const bh = b.replace('#', '');
  const ar = parseInt(ah.substring(0,2),16), ag = parseInt(ah.substring(2,4),16), ab = parseInt(ah.substring(4,6),16);
  const br = parseInt(bh.substring(0,2),16), bg = parseInt(bh.substring(2,4),16), bb = parseInt(bh.substring(4,6),16);
  const rr = Math.round(ar + (br-ar)*t);
  const rg = Math.round(ag + (bg-ag)*t);
  const rb = Math.round(ab + (bb-ab)*t);
  return `#${rr.toString(16).padStart(2,'0')}${rg.toString(16).padStart(2,'0')}${rb.toString(16).padStart(2,'0')}`;
}

export default function Home() {
  const [bg, setBg] = useState("linear-gradient(135deg, #0f172a 0%, #60a5fa 100%)");

  useEffect(() => {
    let running = false;
    function handleScroll() {
      if (running) return;
      running = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const max = 1000; // px for full transition
        let t = Math.min(1, y / max);
        // Hold dark blue for first 40%
        if (t < 0.4) {
          t = 0;
        } else {
          t = (t - 0.4) / 0.6;
        }
        // Interpolate between dark blue and light blue
        const color1 = lerpColor("#0f172a", "#60a5fa", t);
        const color2 = lerpColor("#60a5fa", "#dbeafe", t);
        setBg(`linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`);
        running = false;
      });
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Glassy Navbar with icons (right-aligned) */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/40 backdrop-blur-md shadow-md flex justify-end py-3 px-8 gap-8 rounded-b-2xl">
        <a href="mailto:chintanlad1107@gmail.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-700 hover:text-blue-600 transition-colors" title="Email">
          <FaEnvelope />
        </a>
        <a href="https://github.com/chintanlad10" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-700 hover:text-black transition-colors" title="GitHub">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/chintanlad1107" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-700 hover:text-blue-700 transition-colors" title="LinkedIn">
          <FaLinkedin />
        </a>
      </nav>
      <main
        className="min-h-screen w-full flex flex-col items-center px-0 py-0 md:px-0 relative overflow-x-hidden"
        style={{
          background: bg,
          transition: "background 0.8s cubic-bezier(.4,0,.2,1)",
        }}
      >
        {/* Gradient overlay for extra depth */}
        <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true" style={{background: 'radial-gradient(ellipse at 60% 20%, rgba(180,200,255,0.18) 0%, transparent 70%), radial-gradient(ellipse at 20% 80%, rgba(255,200,255,0.12) 0%, transparent 70%)'}} />
        {/* Header / Home Section (Full Width, glassy) */}
        <section className="w-full bg-white/60 backdrop-blur-lg rounded-b-3xl shadow-xl px-4 py-12 md:py-20 flex flex-col items-center border-b border-gray-200/30 mb-12" style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)', fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight text-gray-900 text-center" style={{fontFamily: 'Inter, Poppins, Montserrat, sans-serif'}}>Chintan Lad</h1>
          <div className="flex flex-wrap justify-center gap-4 text-gray-700 text-base mb-6">
            <span>Valsad, Gujarat</span>
          </div>
          <p className="max-w-3xl text-lg md:text-xl text-gray-800 leading-relaxed text-center">
            Final-year B.Tech student in Computer Science and Business Systems at VIT-AP University with a strong foundation in C/C++, Python, JavaScript, and SQL. Experienced in building full-stack and data-driven projects, including a MERN-based expense tracker and AI-based research agent using LangChain. Certified in Linux, Data Analysis, Machine Learning, and AI Fundamentals. A quick learner and problem solver with a passion for software engineering and data analytics roles.
          </p>
        </section>

        {/* Education Section (glassy card) */}
        <div className="w-full max-w-4xl mx-auto my-12">
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-xl p-8" style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)', fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}>
            <h2 className="text-3xl font-extrabold border-b-2 border-blue-200 pb-2 mb-6 text-blue-700">Education</h2>
            <div className="mb-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <span className="font-bold text-black">VIT-AP University, Amaravati</span>
                  <span className="block italic text-black">B.Tech in Computer Science and Business Systems</span>
                </div>
                <span className="text-gray-600 text-sm">Sept 2022 – May 2026</span>
              </div>
              <div className="text-gray-800 text-sm mt-1">CGPA: 8.2 / 10.0</div>
              <div className="text-gray-700 text-sm">Relevant Coursework: Data Structures and Algorithms, DBMS, OS, OOP, Computer Networks</div>
            </div>
            <div className="mb-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <span className="font-bold text-black">Sett R.J.J. High School, Valsad</span>
                  <span className="block italic text-black">Class XII – GHSEB</span>
                </div>
                <span className="text-gray-600 text-sm">Apr 2020 – Mar 2022</span>
              </div>
              <div className="text-gray-800 text-sm mt-1">Percentage Scored: 71.2%</div>
            </div>
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <span className="font-bold text-black">M.G.M Amin &amp; V.N. Savani&apos;s Vallabh Ashram, Valsad</span>
                  <span className="block italic text-black">Class X – CBSE</span>
                </div>
                <span className="text-gray-600 text-sm">Apr 2007 – Mar 2020</span>
              </div>
              <div className="text-gray-800 text-sm mt-1">Percentage Scored: 91.8%</div>
            </div>
          </div>
        </div>

        {/* Technical Skills Section (glassy card) */}
        <div className="w-full max-w-4xl mx-auto my-12">
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-xl p-8" style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)', fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}>
            <h2 className="text-3xl font-extrabold border-b-2 border-green-200 pb-2 mb-6 text-green-700">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800 text-sm">
              <div>
                <span className="font-semibold">Languages:</span> C, C++, Python, JavaScript, SQL
              </div>
              <div>
                <span className="font-semibold">Web:</span> HTML, CSS, Node.js, React.js, Next.js, Express.js
              </div>
              <div>
                <span className="font-semibold">Databases:</span> MongoDB, PostgreSQL
              </div>
              <div>
                <span className="font-semibold">Tools:</span> Git, VS Code, LangChain, Postman
              </div>
            </div>
          </div>
        </div>

        {/* Projects and Certifications in a row (glassy cards) */}
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4 py-12">
          {/* Projects Section */}
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-xl p-8" style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)', fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}>
            <h2 className="text-3xl font-extrabold border-b-2 border-purple-200 pb-2 mb-6 text-purple-700">Projects</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-black text-lg">E-commerce Price Tracker</h3>
                <ul className="list-disc list-inside text-gray-700 ml-4">
                  <li>Built a tracker to monitor price changes using web scraping.</li>
                  <li><span className="font-bold text-black">Tech Stack:</span> Python, Puppeteer, MongoDB, Next.js</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-black text-lg">Expense Tracker</h3>
                <ul className="list-disc list-inside text-gray-700 ml-4">
                  <li>Developed a MERN stack app to manage personal expenses.</li>
                  <li><span className="font-bold text-black">Tech Stack:</span> MongoDB, Express.js, React.js, Node.js</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-black text-lg">Walmart Sales Analysis</h3>
                <ul className="list-disc list-inside text-gray-700 ml-4">
                  <li>Analyzed sales data for trends and performance.</li>
                  <li><span className="font-bold text-black">Tech Stack:</span> Python (Pandas, Matplotlib), PostgreSQL</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-black text-lg">AI Research Agent</h3>
                <ul className="list-disc list-inside text-gray-700 ml-4">
                  <li>Built an automated research assistant using LangChain.</li>
                  <li><span className="font-bold text-black">Tech Stack:</span> Python, LangChain, OpenAI API</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Certifications Section */}
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-xl p-8" style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)', fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}>
            <h2 className="text-3xl font-extrabold border-b-2 border-pink-200 pb-2 mb-6 text-pink-700">Certifications</h2>
            <ul className="list-disc list-inside text-gray-800 text-base ml-4 space-y-2">
              <li>Machine Learning with Python – Level 1 (IBM)</li>
              <li>Data Analysis Using Python (IBM)</li>
              <li>LFS101 Introduction to Linux (Linux Foundation)</li>
              <li>Artificial Intelligence Fundamentals (IBM-SkillsBuild)</li>
            </ul>
          </div>
        </div>

        {/* Achievements and Volunteering in a row (glassy cards) */}
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4 py-12">
          {/* Achievements Section */}
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-xl p-8 min-h-[350px]" style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)', fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}>
            <h2 className="text-3xl font-extrabold border-b-2 border-yellow-200 pb-2 mb-6 text-yellow-700">Achievements</h2>
            <ul className="list-disc list-inside text-gray-800 text-base ml-4 space-y-2">
              <li>Passed Elementary and Intermediate Drawing Exams with A grade</li>
              <li>Won Inter-School Football Tournament</li>
              <li>Yellow Belt in Karate</li>
              <li>Two-time winner of JCI Drawing Competition</li>
            </ul>
          </div>
          {/* Volunteering Section */}
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-xl p-8 min-h-[350px]" style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)', fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}>
            <h2 className="text-3xl font-extrabold border-b-2 border-indigo-200 pb-2 mb-6 text-indigo-700">Volunteering</h2>
            <ul className="text-gray-800 text-base space-y-4">
              <li>
                <span className="font-semibold">House Sports Captain, Green House, Vallabh Ashram</span>
                <span className="block text-gray-600 italic">Apr 2018 - Mar 2019</span>
              </li>
              <li>
                <span className="font-semibold">Member, Geeks for Geeks Student Chapter – VIT-AP</span>
                <span className="block text-gray-600 italic">Aug 2023 – Nov 2023</span>
              </li>
              <li>
                <span className="font-semibold">Member, Bulls and Bears Club – VIT-AP</span>
                <span className="block text-gray-600 italic">Dec 2023 – May 2024</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Badges Section (Apple-style Card Scroller Platter with Auto-Scroll) at the very bottom */}
        <section className="w-full py-16 bg-transparent">
          <h2 className="text-3xl font-extrabold text-center mb-8 text-orange-700 tracking-tight">Badges</h2>
          <AutoScrollBadgePlatter />
        </section>
      </main>
    </>
  );
}

const BADGES = [
  {
    src: "/badges/artificial-intelligence-fundamentals.png",
    alt: "IBM Artificial Intelligence Fundamentals Badge",
    link: "#"
  },
  {
    src: "/badges/aws-educate-introduction-to-cloud-101.png",
    alt: "AWS Cloud Computing 101 Badge",
    link: "#"
  },
  {
    src: "/badges/data-analysis-using-python.png",
    alt: "IBM Data Analysis Using Python Badge",
    link: "#"
  },
  {
    src: "/badges/data-visualization-using-python.png",
    alt: "IBM Data Visualization Using Python Badge",
    link: "#"
  },
  {
    src: "/badges/lfs101-introduction-to-linux.png",
    alt: "Linux Foundation Introduction to Linux LFS101 Badge",
    link: "#"
  },
  {
    src: "/badges/machine-learning-with-python-level-1.png",
    alt: "IBM Machine Learning with Python Badge",
    link: "#"
  },
  {
    src: "/badges/networking-basics.png",
    alt: "Cisco Networking Basics Badge",
    link: "#"
  },
  {
    src: "/badges/python-for-data-science.png",
    alt: "IBM Python for Data Science Badge",
    link: "#"
  },
];

function AutoScrollBadgePlatter() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isHovered = useRef(false);
  useEffect(() => {
    const container = containerRef.current;
    let animationFrame: number;
    const scrollStep = 0.3; // slower and smoother
    function scrollPlatter() {
      if (!container) return;
      if (!isHovered.current) {
        if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += scrollStep;
        }
      }
      animationFrame = requestAnimationFrame(scrollPlatter);
    }
    animationFrame = requestAnimationFrame(scrollPlatter);
    return () => cancelAnimationFrame(animationFrame);
  }, []);
  return (
    <div
      ref={containerRef}
      className="w-full overflow-x-auto py-8 px-2 no-scrollbar"
      style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}
      onMouseEnter={() => { isHovered.current = true; }}
      onMouseLeave={() => { isHovered.current = false; }}
    >
      <div className="flex gap-6 px-6">
        {BADGES.map((badge) => (
          <div
            key={badge.alt}
            className="flex-shrink-0 bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center justify-center transition-transform duration-200 hover:scale-105 min-w-[220px] max-w-[220px] border border-gray-100"
            style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)' }}
          >
            <Image
              src={badge.src}
              alt={badge.alt}
              width={96}
              height={96}
              className="w-24 h-24 object-contain mb-4 rounded-xl"
            />
            <span className="text-center text-base font-semibold text-gray-800 mb-2">{badge.alt}</span>
            {badge.link && badge.link !== '#' && (
              <a href={badge.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-xs underline">View Badge</a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
