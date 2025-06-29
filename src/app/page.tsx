'use client';
import { FaEnvelope, FaGithub, FaLinkedin, FaDownload, FaArrowUp } from "react-icons/fa";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

function lerpColor(a: string, b: string, t: number) {
  const ah = a.replace('#', '');
  const bh = b.replace('#', '');
  const ar = parseInt(ah.substring(0,2),16), ag = parseInt(ah.substring(2,4),16), ab = parseInt(ah.substring(4,6),16);
  const br = parseInt(bh.substring(0,2),16), bg = parseInt(bh.substring(2,4),16), bb = parseInt(bh.substring(4,6),16);
  const rr = Math.round(ar + (br-ar)*t);
  const rg = Math.round(ag + (bg-ag)*t);
  const rb = Math.round(ab + (bb-ab)*t);
  return `#${rr.toString(16).padStart(2,'0')}${rg.toString(16).padStart(2,'0')}${rb.toString(16).padStart(2,'0')}`;
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

export default function Home() {
  const [bg, setBg] = useState("linear-gradient(135deg, #0f172a 0%, #60a5fa 100%)");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    let running = false;
    function handleScroll() {
      if (running) return;
      running = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const max = 1000;
        let t = Math.min(1, y / max);
        if (t < 0.4) {
          t = 0;
        } else {
          t = (t - 0.4) / 0.6;
        }
        const color1 = lerpColor("#0f172a", "#60a5fa", t);
        const color2 = lerpColor("#60a5fa", "#dbeafe", t);
        setBg(`linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`);
        setShowScrollTop(y > 500);
        running = false;
      });
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Enhanced Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/60 backdrop-blur-xl shadow-lg flex justify-between items-center py-4 px-8 rounded-b-3xl border-b border-white/20">
        <div className="text-xl font-bold text-gray-800">CL</div>
        <div className="flex gap-6">
          <a href="mailto:chintanlad1107@gmail.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-110" title="Email">
            <FaEnvelope />
          </a>
          <a href="https://github.com/chintanlad10" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-700 hover:text-black transition-all duration-300 hover:scale-110" title="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/chintanlad1107" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-700 hover:text-blue-700 transition-all duration-300 hover:scale-110" title="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </nav>

      <main
        className="min-h-screen w-full flex flex-col items-center px-0 py-0 md:px-0 relative overflow-x-hidden"
        style={{
          background: bg,
          transition: "background 0.8s cubic-bezier(.4,0,.2,1)",
        }}
      >
        {/* Enhanced Gradient overlay */}
        <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true" style={{
          background: 'radial-gradient(ellipse at 60% 20%, rgba(180,200,255,0.25) 0%, transparent 70%), radial-gradient(ellipse at 20% 80%, rgba(255,200,255,0.15) 0%, transparent 70%)'
        }} />

        {/* Enhanced Header Section */}
        <section className="w-full bg-white/70 backdrop-blur-xl rounded-b-4xl shadow-2xl px-6 py-16 md:py-24 flex flex-col items-center border-b border-gray-200/30 mb-16">
          <div className="relative">
            <h1 className="text-6xl md:text-7xl font-black mb-6 tracking-tight text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Chintan Lad
            </h1>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-gray-700 text-lg mb-8">
            <span className="bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">📍 Valsad, Gujarat</span>
            <span className="bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">🎓 Final Year B.Tech</span>
          </div>
          
          <p className="max-w-4xl text-xl md:text-2xl text-gray-800 leading-relaxed text-center font-medium">
            Final-year B.Tech student in Computer Science and Business Systems at VIT-AP University with a strong foundation in C/C++, Python, JavaScript, and SQL. Experienced in building full-stack and data-driven projects, including a MERN-based expense tracker and AI-based research agent using LangChain. Certified in Linux, Data Analysis, Machine Learning, and AI Fundamentals. A quick learner and problem solver with a passion for software engineering and data analytics roles.
          </p>
          
          <div className="mt-8 flex gap-4">
            <a href="/resume.pdf" download className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2">
              <FaDownload /> Download Resume
            </a>
            <a href="#contact" className="bg-white/80 backdrop-blur-sm text-gray-800 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              Get In Touch
            </a>
          </div>
        </section>

        {/* Enhanced Education Section */}
        <div className="w-full max-w-5xl mx-auto my-16 px-4">
          <div className="bg-white/70 backdrop-blur-xl rounded-4xl shadow-2xl p-10">
            <h2 className="text-4xl font-black border-b-4 border-blue-300 pb-4 mb-8 text-blue-700 text-center">Education</h2>
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-3xl border border-blue-100 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <div>
                    <span className="font-bold text-black text-xl">VIT-AP University, Amaravati</span>
                    <span className="block italic text-black text-lg">B.Tech in Computer Science and Business Systems</span>
                  </div>
                  <span className="text-gray-600 text-sm bg-white/70 px-3 py-1 rounded-full">Sept 2022 – May 2026</span>
                </div>
                <div className="text-gray-800 text-lg mt-2 font-semibold">CGPA: 8.2 / 10.0</div>
                <div className="text-gray-700 text-base">Relevant Coursework: Data Structures and Algorithms, DBMS, OS, OOP, Computer Networks</div>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-3xl border border-green-100 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <div>
                    <span className="font-bold text-black text-xl">Sett R.J.J. High School, Valsad</span>
                    <span className="block italic text-black text-lg">Class XII – GHSEB</span>
                  </div>
                  <span className="text-gray-600 text-sm bg-white/70 px-3 py-1 rounded-full">Apr 2020 – Mar 2022</span>
                </div>
                <div className="text-gray-800 text-lg mt-2 font-semibold">Percentage Scored: 71.2%</div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-3xl border border-purple-100 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <div>
                    <span className="font-bold text-black text-xl">M.G.M Amin &amp; V.N. Savani&apos;s Vallabh Ashram, Valsad</span>
                    <span className="block italic text-black text-lg">Class X – CBSE</span>
                  </div>
                  <span className="text-gray-600 text-sm bg-white/70 px-3 py-1 rounded-full">Apr 2007 – Mar 2020</span>
                </div>
                <div className="text-gray-800 text-lg mt-2 font-semibold">Percentage Scored: 91.8%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Technical Skills Section */}
        <div className="w-full max-w-5xl mx-auto my-16 px-4">
          <div className="bg-white/70 backdrop-blur-xl rounded-4xl shadow-2xl p-10">
            <h2 className="text-4xl font-black border-b-4 border-green-300 pb-4 mb-8 text-green-700 text-center">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { name: "Python", level: 85, color: "#3776AB" },
                { name: "JavaScript", level: 80, color: "#F7DF1E" },
                { name: "React.js", level: 75, color: "#61DAFB" },
                { name: "Node.js", level: 70, color: "#339933" },
                { name: "C/C++", level: 75, color: "#00599C" },
                { name: "SQL", level: 80, color: "#336791" },
                { name: "MongoDB", level: 70, color: "#47A248" },
                { name: "Git", level: 85, color: "#F05032" },
              ].map((skill) => (
                <div key={skill.name} className="bg-gradient-to-r from-white/50 to-gray-50/50 p-6 rounded-3xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-bold text-gray-800 text-lg">{skill.name}</span>
                    <span className="text-sm font-semibold text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.level}%`,
                        backgroundColor: skill.color,
                        boxShadow: `0 0 10px ${skill.color}40`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Projects Section */}
        <div className="w-full max-w-7xl mx-auto my-16 px-4">
          <h2 className="text-4xl font-black text-center mb-12 text-purple-700">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "E-commerce Price Tracker",
                description: "Built a tracker to monitor price changes using web scraping.",
                techStack: ["Python", "Puppeteer", "MongoDB", "Next.js"]
              },
              {
                title: "Expense Tracker",
                description: "Developed a MERN stack app to manage personal expenses.",
                techStack: ["MongoDB", "Express.js", "React.js", "Node.js"]
              },
              {
                title: "Walmart Sales Analysis",
                description: "Analyzed sales data for trends and performance.",
                techStack: ["Python", "Pandas", "Matplotlib", "PostgreSQL"]
              },
              {
                title: "AI Research Agent",
                description: "Built an automated research assistant using LangChain.",
                techStack: ["Python", "LangChain", "OpenAI API"]
              }
            ].map((project) => (
              <div key={project.title} className="group bg-white/70 backdrop-blur-xl rounded-4xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-full h-48 rounded-3xl mb-6 flex items-center justify-center">
                  <div className="text-6xl text-purple-400">🚀</div>
                </div>
                <h3 className="font-bold text-black text-2xl mb-4 group-hover:text-purple-600 transition-colors">{project.title}</h3>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href="#" className="bg-gray-800 text-white px-6 py-2 rounded-full font-semibold hover:bg-black transition-colors">
                    GitHub
                  </a>
                  <a href="#" className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition-colors">
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Certifications Section */}
        <div className="w-full max-w-5xl mx-auto my-16 px-4">
          <div className="bg-white/70 backdrop-blur-xl rounded-4xl shadow-2xl p-10">
            <h2 className="text-4xl font-black border-b-4 border-pink-300 pb-4 mb-8 text-pink-700 text-center">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Machine Learning with Python – Level 1 (IBM)",
                "Data Analysis Using Python (IBM)",
                "LFS101 Introduction to Linux (Linux Foundation)",
                "Artificial Intelligence Fundamentals (IBM-SkillsBuild)"
              ].map((cert) => (
                <div key={cert} className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-3xl border border-pink-100 hover:shadow-lg transition-all duration-300 flex items-center gap-4">
                  <div className="text-3xl">🏆</div>
                  <span className="text-gray-800 text-lg font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Achievements and Volunteering */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4 py-16">
          <div className="bg-white/70 backdrop-blur-xl rounded-4xl shadow-2xl p-10 min-h-[400px]">
            <h2 className="text-4xl font-black border-b-4 border-yellow-300 pb-4 mb-8 text-yellow-700 text-center">Achievements</h2>
            <div className="space-y-4">
              {[
                "Winner of AI Skills Fest Challenge: Create agentic AI solutions with Azure AI Foundry",
                "Passed Elementary and Intermediate Drawing Exams with A grade",
                "Won Inter-School Football Tournament",
                "Yellow Belt in Karate",
                "Two-time winner of JCI Drawing Competition"
              ].map((achievement) => (
                <div key={achievement} className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-2xl border border-yellow-100 hover:shadow-md transition-all duration-300 flex items-center gap-3">
                  <div className="text-2xl">🏅</div>
                  <span className="text-gray-800 text-lg">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white/70 backdrop-blur-xl rounded-4xl shadow-2xl p-10 min-h-[400px]">
            <h2 className="text-4xl font-black border-b-4 border-indigo-300 pb-4 mb-8 text-indigo-700 text-center">Volunteering</h2>
            <div className="space-y-6">
              {[
                { title: "House Sports Captain, Green House, Vallabh Ashram", period: "Apr 2018 - Mar 2019" },
                { title: "Member, Geeks for Geeks Student Chapter – VIT-AP", period: "Aug 2023 – Nov 2023" },
                { title: "Member, Bulls and Bears Club – VIT-AP", period: "Dec 2023 – May 2024" }
              ].map((item) => (
                <div key={item.title} className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-3xl border border-indigo-100 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-2xl">🤝</div>
                    <span className="font-semibold text-gray-800 text-lg">{item.title}</span>
                  </div>
                  <span className="block text-gray-600 italic text-base">{item.period}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Badges Section */}
        <section className="w-full py-20 bg-transparent">
          <h2 className="text-4xl font-black text-center mb-12 text-orange-700 tracking-tight">Certifications & Badges</h2>
          <AutoScrollBadgePlatter />
        </section>

        {/* Enhanced Contact Section */}
        <section id="contact" className="w-full py-20 bg-transparent">
          <div className="w-full max-w-4xl mx-auto px-4">
            <div className="bg-white/70 backdrop-blur-xl rounded-4xl shadow-2xl p-12 text-center">
              <h2 className="text-4xl font-black mb-8 text-gray-800">Let&apos;s Connect!</h2>
              <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
                I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a href="mailto:chintanlad1107@gmail.com" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-3">
                  <FaEnvelope className="text-xl" /> Email Me
                </a>
                <a href="https://github.com/chintanlad10" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-3">
                  <FaGithub className="text-xl" /> GitHub
                </a>
                <a href="https://linkedin.com/in/chintanlad1107" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-3">
                  <FaLinkedin className="text-xl" /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Action Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}
    </>
  );
}

function AutoScrollBadgePlatter() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isHovered = useRef(false);
  useEffect(() => {
    const container = containerRef.current;
    let animationFrame: number;
    const scrollStep = 0.3;
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
