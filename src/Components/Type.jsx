// Typewriter.jsx
import { useEffect, useState } from "react";

export default function Typewriter({ phrases = ["Sanjay", "Data Scientist"], prefix = "Hi, I'm " }) {
  const [pi, setPi] = useState(0); // phrase index
  const [ci, setCi] = useState(0); // char index
  const [del, setDel] = useState(false);

  useEffect(() => {
    const typingSpeed = del ? 40 : 80;
    const pauseAfter = 1400;
    let timeout;
    if (!del && ci === phrases[pi].length) {
      timeout = setTimeout(() => setDel(true), pauseAfter);
    } else if (del && ci === 0) {
      timeout = setTimeout(() => { setDel(false); setPi((p)=> (p+1) % phrases.length); }, 300);
    } else {
      timeout = setTimeout(() => setCi((c)=> c + (del ? -1 : 1)), typingSpeed);
    }
    return () => clearTimeout(timeout);
  }, [ci, del, pi, phrases]);

  return (
    <h1 className="text-2xl md:text-5xl font-semibold text-zinc-800" aria-live="polite">
      {prefix}
      <span className="inline-block">
        {phrases[pi].slice(0, ci)}
        <span className="ml-1 animate-blink">|</span>
      </span>

      <style jsx>{`
        .animate-blink {
          display: inline-block;
          animation: blink 700ms steps(1) infinite;
        }
        @keyframes blink {
          0%,50% { opacity: 1; }
          51%,100% { opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-blink { animation: none; }
        }
      `}</style>
    </h1>
  );
    }
