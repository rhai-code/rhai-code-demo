/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

interface Demo {
  id: string;
  title: string;
  subtitle: string;
  shortUrl: string;
  image: string;
  bgColor: string;
  titleColor: string;
  dateColor: string;
  href: string;
}

const featuredDemo: Demo = {
  id: "voice-agents",
  title: "Pizza Palace Voice Agent:",
  subtitle: "order a pizza with your voice, powered by AI",
  shortUrl: "red.ht/pizza",
  image: "/images/voice-agents-hero.svg",
  bgColor: "#0a0a1a",
  titleColor: "#FFDC00",
  dateColor: "#FF6B35",
  href: "https://red.ht/pizza",
};

const demos: Demo[] = [
  {
    id: "guardrails",
    title: "Lemonade Stand Guardrails:",
    subtitle: "safe AI with real-time threat detection",
    shortUrl: "red.ht/lemons",
    image: "/images/guardrails-hero.svg",
    bgColor: "#0d1117",
    titleColor: "#39FF14",
    dateColor: "#88ffaa",
    href: "https://red.ht/lemons",
  },
  {
    id: "prisoners-dilemma",
    title: "The Business AI Game:",
    subtitle: "agentic prisoner's dilemma - Crimson Dynamics vs Verdant Systems",
    shortUrl: "red.ht/prisoner",
    image: "/images/prisoners-dilemma-hero.svg",
    bgColor: "#0a0a14",
    titleColor: "#FFD700",
    dateColor: "#ffee88",
    href: "https://red.ht/prisoner",
  },
  {
    id: "factory-floor",
    title: "Factory Floor Tycoon:",
    subtitle: "agentic AI strategy game — build, automate & dominate",
    shortUrl: "red.ht/factory-floor",
    image: "/images/factory-floor-hero.svg",
    bgColor: "#0d0d1a",
    titleColor: "#FF6600",
    dateColor: "#FF8833",
    href: "https://red.ht/factory-floor",
  },
  {
    id: "speed-showdown",
    title: "Speed Showdown:",
    subtitle: "vLLM performance racing for optimized deployments",
    shortUrl: "red.ht/speed-showdown",
    image: "/images/speed-showdown-hero.svg",
    bgColor: "#0a0a1a",
    titleColor: "#00FFFF",
    dateColor: "#00cccc",
    href: "https://red.ht/speed-showdown",
  },
  {
    id: "dev-red-rag",
    title: "Developer RAG:",
    subtitle: "always up-to-date RAG developers.redhat.com",
    shortUrl: "red.ht/dev-red-rag",
    image: "/images/dev-red-rag-hero.svg",
    bgColor: "#0a0a1a",
    titleColor: "#FF4444",
    dateColor: "#FF8C00",
    href: "https://red.ht/dev-red-rag",
  },
  {
    id: "mm-chat",
    title: "MultiModal Chat:",
    subtitle: "side-by-side AI model comparison chatbot",
    shortUrl: "red.ht/mm-chat",
    image: "/images/mm-chat-hero.svg",
    bgColor: "#0a0a1e",
    titleColor: "#E040FB",
    dateColor: "#00E5FF",
    href: "https://red.ht/mm-chat",
  },
  {
    id: "black-jack",
    title: "AI Blackjack:",
    subtitle: "become the poker king with AI assisted Blackjack",
    shortUrl: "red.ht/black-jack",
    image: "/images/black-jack-hero.svg",
    bgColor: "#0a2e14",
    titleColor: "#FFD700",
    dateColor: "#00ffaa",
    href: "https://red.ht/black-jack",
  },
  {
    id: "real-or-fake",
    title: "Real or Fake:",
    subtitle: "can you spot the difference? Synthetic Data Generation",
    shortUrl: "red.ht/real-or-fake",
    image: "/images/real-or-fake-hero.svg",
    bgColor: "#0a0a1a",
    titleColor: "#FF3366",
    dateColor: "#00FF88",
    href: "https://red.ht/real-or-fake",
  },
];

function TalkToUsIcon() {
  return (
    <svg
      fill="none"
      height="21"
      viewBox="0 0 22 21"
      width="22"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m3.23529 21h1.29412c3.17059 0 4.98235-1.3781 6.01769-2.625h.4529c6.8588 0 11-3.4125 11-9.1875 0-5.64375-4.2059-9.1875-11-9.1875-6.79412 0-11 3.54375-11 9.1875 0 3.675 1.81176 6.4969 5.04706 8.0063-.19412 1.1156-.51765 2.0343-1.0353 2.7562z"
        fill="currentColor"
      />
    </svg>
  );
}

function FeaturedCard({ demo }: { demo: Demo }) {
  return (
    <a href={demo.href} className="post-list__item--featured" target="_blank" rel="noopener noreferrer">
      <article
        className="post-cover post-cover--featured"
        style={{ backgroundColor: demo.bgColor }}
      >
        <img className="post-cover__img" alt="" src={`${BASE}${demo.image}`} />
        <h1 className="post-cover__title" style={{ color: demo.titleColor }}>
          {demo.title}{" "}
          <strong>{demo.subtitle}</strong>
        </h1>
        <div className="post-cover__date" style={{ color: demo.dateColor }}>
          {demo.shortUrl}
        </div>
      </article>
    </a>
  );
}

function DemoCard({ demo }: { demo: Demo }) {
  return (
    <li className="post-list__item">
      <a className="post-list__link" href={demo.href} target="_blank" rel="noopener noreferrer">
        <article
          className="post-cover post-cover--small"
          style={{ backgroundColor: demo.bgColor }}
        >
          <img className="post-cover__img" alt="" src={`${BASE}${demo.image}`} />
          <h1 className="post-cover__title" style={{ color: demo.titleColor }}>
            <b>{demo.title}</b> {demo.subtitle}
          </h1>
          <div className="post-cover__date" style={{ color: demo.dateColor }}>
            {demo.shortUrl}
          </div>
        </article>
      </a>
    </li>
  );
}

export default function DemosPage() {
  return (
    <>
      {/* Navigation */}
      <nav className="navigation navigation--blog">
        <a className="navigation__logo" href="https://www.redhat.com" target="_blank" rel="noopener noreferrer">
          Red Hat
        </a>
        <div className="navigation__buttons">
          <Link className="navigation__button navigation__button--active" href="/">
            Demos
          </Link>
          <Link className="navigation__button" href="/code">
            Code
          </Link>
        </div>
        <a
          className="navigation__button navigation__button--contact-us"
          href="https://www.redhat.com/en/technologies/cloud-computing/openshift/openshift-ai"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="navigation__icon navigation__icon--talk-to-us navigation__icon--desktop">
            <TalkToUsIcon />
          </span>
          OpenShift AI
        </a>
      </nav>

      {/* Demo List */}
      <div className="post-list post-list--blog">
        <FeaturedCard demo={featuredDemo} />
        <ul className="post-list__tiles">
          {demos.map((demo) => (
            <DemoCard key={demo.id} demo={demo} />
          ))}
        </ul>
      </div>
    </>
  );
}
