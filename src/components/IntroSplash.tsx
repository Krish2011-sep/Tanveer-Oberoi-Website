import React, { useEffect, useState } from 'react';

const INTRO_SEEN_KEY = 'tanveer-oberoi-intro-seen';

export const IntroSplash: React.FC = () => {
  const [visible, setVisible] = useState(() => {
    try {
      return sessionStorage.getItem(INTRO_SEEN_KEY) !== '1';
    } catch {
      return true;
    }
  });

  useEffect(() => {
    if (!visible) return;

    const hideTimer = window.setTimeout(() => {
      setVisible(false);
      try {
        sessionStorage.setItem(INTRO_SEEN_KEY, '1');
      } catch {
        // Ignore storage restrictions; the intro can still close normally.
      }
    }, 2600);

    return () => window.clearTimeout(hideTimer);
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="intro-splash" aria-label="Tanveer Oberoi" role="status">
      <div className="intro-splash__glow" />
      <div className="intro-splash__content">
        <div className="intro-splash__line intro-splash__line--top" />
        <p className="intro-splash__eyebrow">VIG AUTO ACCESSORIES</p>
        <h1 className="intro-splash__name">TANVEER OBEROI</h1>
        <p className="intro-splash__tagline">AUTOMOTIVE DESIGN · CRAFT · DETAIL</p>
        <div className="intro-splash__line intro-splash__line--bottom" />
      </div>
    </div>
  );
};
