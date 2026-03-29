/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

interface Repo {
  id: string;
  name: string;
  description: string;
  shortUrl: string;
  github: string;
  accentColor: string;
}

const repos: Repo[] = [
  {
    id: "voice-agents",
    name: "voice-agents",
    description: "Pizza Palace Voice Agent — order a pizza with your voice, powered by AI",
    shortUrl: "red.ht/pizza",
    github: "https://github.com/eformat/voice-agents",
    accentColor: "#FFD700",
  },
  {
    id: "lemonade-stand-assistant",
    name: "lemonade-stand-assistant",
    description: "Lemonade Stand Guardrails — safe AI with real-time threat detection",
    shortUrl: "red.ht/lemons",
    github: "https://github.com/eformat/lemonade-stand-assistant",
    accentColor: "#39FF14",
  },
  {
    id: "agentic-prisoners-dilemma",
    name: "agentic-prisoners-dilemma",
    description: "Agentic Prisoner's Dilemma — Crimson Dynamics vs Verdant Systems",
    shortUrl: "red.ht/prisoner",
    github: "https://github.com/eformat/agentic-prisoners-dilemma",
    accentColor: "#FFD700",
  },
  {
    id: "factory-floor-tycoon",
    name: "factory-floor-tycoon-agentic-demo",
    description: "Factory Floor Tycoon — agentic AI strategy game",
    shortUrl: "red.ht/factory-floor",
    github: "https://github.com/soyr-redhat/factory-floor-tycoon-agentic-demo",
    accentColor: "#FF6600",
  },
  {
    id: "speed-showdown",
    name: "speed-showdown-vllm-demo",
    description: "Speed Showdown — vLLM performance racing for optimized deployments",
    shortUrl: "red.ht/speed-showdown",
    github: "https://github.com/soyr-redhat/speed-showdown-vllm-demo",
    accentColor: "#00FFFF",
  },
  {
    id: "developers-redhat-com-rag",
    name: "developers-redhat-com-rag",
    description: "Developer RAG — always up-to-date RAG for developers.redhat.com",
    shortUrl: "red.ht/dev-red-rag",
    github: "https://github.com/eformat/developers-redhat-com-rag",
    accentColor: "#FF4444",
  },
  {
    id: "multimodal-chatbot",
    name: "multimodal-chatbot",
    description: "MultiModal Chat — side-by-side AI model comparison chatbot",
    shortUrl: "red.ht/mm-chat",
    github: "https://github.com/eformat/multimodal-chatbot",
    accentColor: "#E040FB",
  },
  {
    id: "blackjack-demo",
    name: "blackjack-demo",
    description: "AI Blackjack — become the poker king with AI assisted Blackjack",
    shortUrl: "red.ht/black-jack",
    github: "https://github.com/cedricclyburn/blackjack-demo",
    accentColor: "#FFD700",
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

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}

function RepoCard({ repo }: { repo: Repo }) {
  return (
    <li className="code-list__item">
      <a
        className="code-list__link"
        href={repo.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <article className="code-card" style={{ borderLeftColor: repo.accentColor }}>
          <div className="code-card__header">
            <span className="code-card__icon"><GitHubIcon /></span>
            <span className="code-card__name">{repo.name}</span>
          </div>
          <p className="code-card__desc">{repo.description}</p>
          <div className="code-card__footer">
            <span className="code-card__url">{repo.shortUrl}</span>
            <span className="code-card__arrow">&rarr;</span>
          </div>
        </article>
      </a>
    </li>
  );
}

export default function CodePage() {
  return (
    <>
      {/* Navigation */}
      <nav className="navigation navigation--blog">
        <a className="navigation__logo" href="https://www.redhat.com" target="_blank" rel="noopener noreferrer">
          Red Hat
        </a>
        <div className="navigation__buttons">
          <Link className="navigation__button" href="/">
            Demos
          </Link>
          <Link className="navigation__button navigation__button--active" href="/code">
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

      {/* Hero */}
      <div className="code-hero">
        <img className="code-hero__img" alt="Our code is open" src={`${BASE}/images/code-hero.svg`} />
      </div>

      {/* Repo Grid */}
      <div className="code-page">
        <ul className="code-list">
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </ul>
      </div>
    </>
  );
}
