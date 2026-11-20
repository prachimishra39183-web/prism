
import { useEffect, useState } from "react";

export default function Preloader({
  onComplete,
}: {
  onComplete: () => void;
}) {
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
    onComplete?.();
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

    {/* FULL SCREEN VIDEO BACKGROUND */}
    <video
      className="loader-background-video"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    >
      <source src="/dim.mp4" type="video/mp4" />
    </video>

    {/* VIDEO OVERLAY */}
    <div className="loader-background-overlay" />

    <div className="loader-content">

      <div className="loader-brand">
        PRISM INTERNATIONAL
        <span> · HOUSE OF DIAMONDS · </span>
        MUMBAI — SURAT
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

