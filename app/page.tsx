'use client';

import { useState } from 'react';
import { Mail, Phone, Download, Menu, X } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-[#0b0b0b] text-[#e5e5e5] font-sans scroll-smooth">

      {/* HEADER */}
<header className="fixed top-0 left-0 right-0 z-50 bg-[#0b0b0b]/80 backdrop-blur border-b border-white/10">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

    {/* LEFT */}
    <span className="text-sm text-[#cfcfcf] font-medium">
      Deepanshu
    </span>

    {/* DESKTOP NAV */}
    <nav className="hidden md:flex items-center gap-8 text-sm text-[#bdbdbd]">
      <a href="#about" className="hover:text-[#eaff00] transition">About</a>
      <a href="#projects" className="hover:text-[#eaff00] transition">Projects</a>
      <a href="#experience" className="hover:text-[#eaff00] transition">Experience</a>
      <a href="#education" className="hover:text-[#eaff00] transition">Education</a>
      <a href="#contact" className="hover:text-[#eaff00] transition">Contact</a>
    </nav>

    {/* RIGHT ACTIONS (ALWAYS VISIBLE) */}
    <div className="flex items-center gap-4">
      <a href="mailto:deepanshu.22052004@gmail.com" className="hover:text-[#eaff00] transition">
        <Mail size={18} />
      </a>
      <a href="tel:+919205620971" className="hover:text-[#eaff00] transition">
        <Phone size={18} />
      </a>
      <a
  href="/Deepanshu_CV.pdf"
  download
  className="px-3 py-1.5 bg-white text-black rounded-full text-xs font-medium hover:bg-[#eaff00] transition"
>
  CV
</a>


      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setMenuOpen(true)}
        className="md:hidden ml-1"
      >
        <Menu size={22} />
      </button>
    </div>
  </div>
</header>


      {/* MOBILE MENU */}
{menuOpen && (
  <div className="fixed inset-0 z-50 bg-[#0b0b0b] px-6 py-8 flex flex-col">
    <div className="flex justify-between items-center mb-16">
      <span className="text-sm text-[#cfcfcf]">Deepanshu</span>
      <button onClick={() => setMenuOpen(false)}>
        <X size={22} />
      </button>
    </div>

    <nav className="flex flex-col gap-8 text-3xl font-extrabold">
      {['about', 'projects', 'experience', 'education', 'contact'].map((item) => (
        <a
          key={item}
          href={`#${item}`}
          onClick={() => setMenuOpen(false)}
          className="hover:text-[#eaff00] transition"
        >
          {item.toUpperCase()}
        </a>
      ))}
    </nav>

    <p className="mt-auto text-sm text-[#6f6f6f]">
      © {new Date().getFullYear()} Deepanshu
    </p>
  </div>
)}


      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center pt-32 px-6 overflow-hidden">
        <Hero />
      </section>

      {/* ABOUT */}
      <Section id="about" title="ABOUT">
        <div className="grid md:grid-cols-2 gap-24">
          <p className="text-xl leading-loose text-[#bdbdbd]">
            My work sits at the intersection of business, sales, and technology —
            translating strategy into execution across go-to-market, customer
            conversations, and early-stage growth.
          </p>
          <p className="text-xl leading-loose">
            I’ve built and launched products, handled real customers, worked with
            founders, and operated across ambiguity. I value speed, clarity, and ownership.
          </p>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="PROJECTS">
  <div className="grid md:grid-cols-2 gap-14">
    <Project
      logo="/logos/bomdrop.png"
      title="BomDrop — Winning GTM Strategy"
      link="https://www.notion.so/GTM-Bomdrop-X-HiveSchool-277d7813d1db809f8a03fbd58c8df431?source=copy_link"
    />
    <Project
      logo="/logos/drivigo.png"
      title="Drivigo — Market Entry & Revenue GTM"
      link="https://www.notion.so/GTM-Strategy-Drivigo-244d7813d1db801e8bf8e791c88bb39a?source=copy_link"
    />
  </div>
</Section>


      {/* EXPERIENCE */}
      <Section id="experience" title="EXPERIENCE">
        <TwoCol
          logo="/logos/drivigo.png"
          left={`Founder & Director — Drivigo Training Pvt. Ltd.
Nov 2024 – Nov 2025`}
          right="Built Drivigo from idea to market-ready product. Owned GTM, partnerships,
customer acquisition, product direction, and operations. Raised ₹2L seed grant via
ACIC–SGTU Incubation Cell."
        />

        <TwoCol
          logo="/logos/jynara.png"
          left={`Customer Care Executive Intern — Jynara Clothing
Jan 2025 – Mar 2025`}
          right="Handled COD confirmations, NDR resolution, delivery coordination,
and exchange-related customer queries. Reduced confusion and improved
order completion rates."
        />

        <TwoCol
          logo="/logos/technोहacks.png"
          left={`Full Stack Developer Intern — TechnoHacks EduTech
May 2024 – Jul 2024`}
          right="Worked on Java-based applications, debugging and optimizing code,
and contributing to core development workflows following scalable practices."
        />

        <TwoCol
          logo="/logos/sterling.png"
          left={`Telecaller Intern — Sterling Enterprise
Jun 2022 – Aug 2022`}
          right="Executed outbound prospecting, handled objections, and converted
leads into MOFU-stage opportunities, improving conversion rates."
        />
      </Section>

      {/* EDUCATION */}
      <Section id="education" title="EDUCATION">
        <TwoCol
          logo="/logos/hive.png"
          left={`Hive School of Business, Gurugram
PGP — Revenue, Tech & Entrepreneurship
2025 – 2026`}
          right="Secured 20% merit scholarship. Founding Member — Hive Social Club.
Winner — SaaS & AI Sales Challenge & Live GTM Challenge.
Awarded Best Presenter for SaaS & AI Sales."
        />

        <TwoCol
          logo="/logos/sgtu.png"
          left={`SGT University
B.Tech — Computer Science Engineering
2022 – 2026`}
          right="President — Catalyst Club (ACIC–SGTU).
Led and won Synergy Tech Fest 2025.
Treasurer — Rotaract Club of SGTU.
Winner — Inter Faculty Badminton Championship."
        />

        <TwoCol
          logo="/logos/school.png"
          left={`Shiksha Bharati Global School
CBSE — Class XII (PCMB)
2020 – 2022`}
          right="President — Entrepreneurship Cell.
Team Captain — Sports Team.
Winner — Inter School Badminton Championship."
        />
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="CONTACT">
        <p className="text-2xl mb-8">
          Open to conversations, collaborations, and opportunities.
        </p>

        <p className="text-xl text-[#bdbdbd] leading-loose">
          Delhi, India<br />
          <span className="text-[#eaff00]">deepanshu.22052004@gmail.com</span><br />
          +91 92056 20971
        </p>
      </Section>

      {/* FOOTER */}
      <footer className="py-12 text-center text-sm text-[#6f6f6f] border-t border-white/10">
        © {new Date().getFullYear()} Deepanshu
      </footer>
    </main>
  );
}

/* ---------------- HERO ---------------- */

function Hero() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 300], [0, 80]);

  return (
    <div className="relative max-w-7xl w-full text-center">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ letterSpacing: 'clamp(-0.05em, -0.02vw, -0.02em)' }}
        className="text-[16vw] sm:text-[14vw] md:text-[12vw] leading-none font-extrabold text-[#eaff00]"
      >
        DEEPANSHU
      </motion.h1>

      <motion.div style={{ y: imageY }} className="mt-16 flex justify-center">
        <div className="w-44 h-60 sm:w-52 sm:h-72 md:w-56 md:h-72 rounded-full overflow-hidden border border-white/10">
          <img src="/deepanshu.jpg" alt="Deepanshu" className="w-full h-full object-cover" />
        </div>
      </motion.div>

      <p className="mt-14 max-w-2xl mx-auto text-xl text-[#cfcfcf] leading-loose">
        Revenue · GTM · Business Operator focused on execution,
        systems thinking, and turning ambiguity into outcomes.
      </p>
    </div>
  );
}

/* ---------------- HELPERS ---------------- */

function Section({ id, title, children }: any) {
  return (
    <section id={id} className="max-w-7xl mx-auto px-6 py-36">
      <div className="flex items-center gap-8 mb-24">
        <h2 className="text-[#eaff00] text-4xl md:text-5xl font-extrabold">{title}</h2>
        <div className="flex-1 h-px bg-white/10 relative">
          <span className="absolute right-0 top-[-2px] w-16 h-[3px] bg-[#eaff00]" />
        </div>
      </div>
      {children}
    </section>
  );
}

function Project({
  logo,
  title,
  link,
}: {
  logo: string;
  title: string;
  link: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group h-80 bg-[#151515] rounded-lg flex flex-col items-center justify-center gap-6
                 border border-white/10 hover:border-[#eaff00] transition
                 focus:outline-none focus:ring-2 focus:ring-[#eaff00]"
    >
      <img src={logo} alt={title} className="h-10 opacity-80 group-hover:opacity-100 transition" />
      <span className="text-2xl font-medium group-hover:text-[#eaff00] transition">
        {title}
      </span>
    </a>
  );
}


function TwoCol({ logo, left, right }: any) {
  return (
    <div className="grid md:grid-cols-2 gap-24 py-14 border-b border-white/5 last:border-none">
      <div className="flex gap-6 items-start">
        <img src={logo} className="h-10 mt-1 opacity-80" />
        <pre className="whitespace-pre-wrap text-xl text-[#bdbdbd] font-sans leading-loose">
          {left}
        </pre>
      </div>
      <p className="text-xl leading-loose">{right}</p>
    </div>
  );
}
