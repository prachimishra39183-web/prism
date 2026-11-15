
import { useEffect, useState } from "react";

export default function Preloader() {
  const [phase, setPhase] = useState<"show" | "exit" | "done">("show");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let loaded = document.readyState === "complete";
    let minimumTimePassed = false;

    const checkReady = () => {
      if (loaded && minimumTimePassed) {
        setReady(true);
      }
    };

    const handleLoad = () => {
      loaded = true;
      checkReady();
    };

    if (!loaded) {
      window.addEventListener("load", handleLoad);
    }

    const timer = window.setTimeout(() => {
      minimumTimePassed = true;
      checkReady();
    }, 2400);

    return () => {
      window.removeEventListener("load", handleLoad);
      window.clearTimeout(timer);
    };
  }, []);

  const enterWebsite = () => {
    setPhase("exit");

    window.setTimeout(() => {
      setPhase("done");
    }, 900);
  };

  if (phase === "done") return null;

  return (
    <div
      className={`prism-loader ${phase === "exit" ? "is-exiting" : ""}`}
      role="dialog"
      aria-label="Welcome to Prism International"
      aria-modal="true"
    >
      <div className="loader-noise" />
      <div className="loader-grid" />

      {/* Background floating geometry */}
      <div className="floating-geometry geometry-one" />
      <div className="floating-geometry geometry-two" />
      <div className="floating-geometry geometry-three" />
      <div className="floating-geometry geometry-four" />

      <div className="loader-content">

        <div className="loader-brand">
          PRISM INTERNATIONAL
          <span> · HOUSE OF DIAMONDS · </span>
          MUMBAI — SURAT
        </div>

        <div className="crystal-stage">

          {/* Orbital rings */}
          <div className="crystal-orbit orbit-one" />
          <div className="crystal-orbit orbit-two" />
          <div className="crystal-orbit orbit-three" />

          <div className="crystal-glow" />

          {/* Floating mini crystals */}
          <div className="mini-crystal mini-one">✧</div>
          <div className="mini-crystal mini-two">✦</div>
          <div className="mini-crystal mini-three">✧</div>
          <div className="mini-crystal mini-four">✦</div>

          {/* Main 3D-style diamond */}
          <div className="crystal-3d">
            <svg
              viewBox="0 0 220 220"
              className="crystal-svg"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="prismTop" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#fffdf3" />
                  <stop offset="45%" stopColor="#e7d3a8" />
                  <stop offset="100%" stopColor="#997447" />
                </linearGradient>

                <linearGradient id="prismLeft" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#fff9e8" />
                  <stop offset="100%" stopColor="#c2a16c" />
                </linearGradient>

                <linearGradient id="prismRight" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#dfc28b" />
                  <stop offset="100%" stopColor="#755331" />
                </linearGradient>

                <linearGradient id="prismBottom" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#f8edcf" />
                  <stop offset="100%" stopColor="#927044" />
                </linearGradient>

                <filter id="prismGlow">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <g filter="url(#prismGlow)">
                <path
                  d="M110 12 L190 76 L110 207 L30 76 Z"
                  fill="none"
                  stroke="#f8e8c5"
                  strokeWidth="1.5"
                />

                <path d="M30 76 L73 76 L110 12 Z" fill="url(#prismLeft)" />
                <path d="M73 76 L147 76 L110 12 Z" fill="url(#prismTop)" />
                <path d="M147 76 L190 76 L110 12 Z" fill="#c7a773" />

                <path d="M30 76 L73 76 L110 207 Z" fill="#e9d7ae" />
                <path d="M73 76 L147 76 L110 207 Z" fill="url(#prismBottom)" />
                <path d="M147 76 L190 76 L110 207 Z" fill="url(#prismRight)" />

                <path
                  d="M30 76 H190 M73 76 L110 207 M147 76 L110 207 M110 12 V207"
                  fill="none"
                  stroke="#fffaf0"
                  strokeWidth="1"
                  opacity="0.75"
                />
              </g>
            </svg>
          </div>

          <div className="crystal-reflection" />
        </div>

        <p className="loader-eyebrow">
          THE NEW LANGUAGE OF LIGHT
        </p>

        <h1 className="loader-title">
          LIGHT <em>ENTERS.</em>
        </h1>

        <h2 className="loader-subtitle">
          Geometry returns it.
        </h2>

        <p className="loader-description">
          For six decades our family has cut, set and exported
          diamond jewellery — from the trade floors of Opera House
          to the precision ateliers of Surat, and onward to six
          markets across three continents.
        </p>

        <div className="loader-progress">
          <span className={ready ? "progress-complete" : ""} />
        </div>

        <div className="loader-bottom">
          <span>
            {ready ? "YOUR EXPERIENCE IS READY" : "CRAFTING YOUR EXPERIENCE"}
          </span>
          <span>EST. SIX DECADES</span>
        </div>

        <button
          className={`loader-enter-button ${ready ? "is-ready" : ""}`}
          onClick={enterWebsite}
          disabled={!ready}
        >
          <span>{ready ? "ENTER THE EXPERIENCE" : "PREPARING YOUR EXPERIENCE"}</span>
          <span className="enter-arrow">↗</span>
        </button>

        <div className="loader-footer-note">
          A LEGACY OF LIGHT · A STANDARD OF PRECISION
        </div>

      </div>
    </div>
  );
}

