import React, { useEffect, useState } from 'react';

export const IntroSplash: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 4200);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="to-intro" role="status" aria-label="Tanveer Oberoi opening">
      <style>{`
        .to-intro{position:fixed;inset:0;z-index:99999;overflow:hidden;background:#050608;color:#f5f1e8;display:grid;place-items:center;font-family:var(--font-body,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif);animation:toIntroExit .9s cubic-bezier(.76,0,.24,1) 3.45s forwards;}
        .to-intro:before{content:"";position:absolute;inset:-20%;background:radial-gradient(circle at 50% 48%,rgba(196,154,76,.14),transparent 24%),radial-gradient(circle at 50% 50%,rgba(255,255,255,.035),transparent 42%);animation:toAura 3.8s ease-in-out both;}
        .to-intro__grid{position:absolute;inset:0;opacity:.13;background-image:linear-gradient(rgba(255,255,255,.055) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.055) 1px,transparent 1px);background-size:72px 72px;mask-image:radial-gradient(circle at center,black,transparent 72%);animation:toGrid 3.8s ease-out both;}
        .to-intro__panel{position:absolute;top:0;bottom:0;width:51%;background:#050608;z-index:4;}
        .to-intro__panel--left{left:0;border-right:1px solid rgba(255,255,255,.035);animation:toPanelLeft 1.05s cubic-bezier(.76,0,.24,1) 3.35s forwards;}
        .to-intro__panel--right{right:0;border-left:1px solid rgba(255,255,255,.035);animation:toPanelRight 1.05s cubic-bezier(.76,0,.24,1) 3.35s forwards;}
        .to-intro__beam{position:absolute;left:50%;top:19%;width:1px;height:62%;background:linear-gradient(transparent,rgba(210,174,104,.8),transparent);transform:translateX(-50%) scaleY(0);transform-origin:center;animation:toBeam .75s cubic-bezier(.2,.8,.2,1) .35s forwards;box-shadow:0 0 24px rgba(210,174,104,.35);}
        .to-intro__mark{position:absolute;left:50%;top:50%;transform:translate(-50%,-56%) scale(.78);font-family:var(--font-heading,Arial,sans-serif);font-weight:800;font-size:clamp(88px,18vw,250px);letter-spacing:-.09em;line-height:.8;color:transparent;-webkit-text-stroke:1px rgba(232,210,163,.22);opacity:0;animation:toMark 1.05s cubic-bezier(.16,1,.3,1) .45s forwards;}
        .to-intro__mark:after{content:"TO";position:absolute;inset:0;color:rgba(222,190,126,.08);filter:blur(16px);animation:toGlow 1.5s ease .65s forwards;}
        .to-intro__content{position:relative;z-index:5;text-align:center;width:min(92vw,1000px);display:flex;flex-direction:column;align-items:center;transform:translateY(5px);}
        .to-intro__rule{width:min(310px,42vw);height:1px;background:linear-gradient(90deg,transparent,#c7a45f,transparent);transform:scaleX(0);animation:toRule .8s cubic-bezier(.76,0,.24,1) .55s forwards;}
        .to-intro__eyebrow{margin:24px 0 15px;font-size:10px;letter-spacing:.48em;font-weight:600;color:#c7a45f;opacity:0;transform:translateY(10px);animation:toUp .7s ease .78s forwards;}
        .to-intro__name{margin:0;font-family:var(--font-heading,Arial,sans-serif);font-size:clamp(34px,6vw,78px);font-weight:650;letter-spacing:.16em;padding-left:.16em;line-height:1;color:#f4f0e8;opacity:0;clip-path:inset(0 100% 0 0);animation:toReveal 1.05s cubic-bezier(.77,0,.18,1) .88s forwards;}
        .to-intro__tag{margin:18px 0 0;font-size:9px;letter-spacing:.38em;padding-left:.38em;color:rgba(245,241,232,.48);opacity:0;animation:toFade .7s ease 1.45s forwards;}
        .to-intro__corner{position:absolute;width:32px;height:32px;opacity:0;animation:toFade .5s ease 1.55s forwards;}
        .to-intro__corner:before,.to-intro__corner:after{content:"";position:absolute;background:#c7a45f;}
        .to-intro__corner:before{width:100%;height:1px;top:0;left:0}.to-intro__corner:after{width:1px;height:100%;top:0;left:0}
        .to-intro__corner--tl{left:5vw;top:5vh}.to-intro__corner--tr{right:5vw;top:5vh;transform:rotate(90deg)}.to-intro__corner--bl{left:5vw;bottom:5vh;transform:rotate(-90deg)}.to-intro__corner--br{right:5vw;bottom:5vh;transform:rotate(180deg)}
        @keyframes toAura{0%{opacity:0;transform:scale(.7)}45%{opacity:1;transform:scale(1)}100%{opacity:.75}}
        @keyframes toGrid{0%{transform:scale(1.08);opacity:0}45%{opacity:.13}100%{transform:scale(1);opacity:.08}}
        @keyframes toBeam{to{transform:translateX(-50%) scaleY(1)}}
        @keyframes toMark{0%{opacity:0;transform:translate(-50%,-56%) scale(.78);filter:blur(12px)}60%{opacity:.7}100%{opacity:1;transform:translate(-50%,-56%) scale(1);filter:blur(0)}}
        @keyframes toGlow{0%{opacity:0}100%{opacity:1}}
        @keyframes toRule{to{transform:scaleX(1)}}
        @keyframes toUp{to{opacity:1;transform:translateY(0)}}
        @keyframes toReveal{to{opacity:1;clip-path:inset(0 0 0 0)}}
        @keyframes toFade{to{opacity:1}}
        @keyframes toPanelLeft{to{transform:translateX(-100%)}}
        @keyframes toPanelRight{to{transform:translateX(100%)}}
        @keyframes toIntroExit{to{opacity:0;visibility:hidden;pointer-events:none}}
        @media (prefers-reduced-motion:reduce){.to-intro,.to-intro *{animation-duration:1ms!important;animation-delay:0ms!important}.to-intro{opacity:0;visibility:hidden;pointer-events:none}}
      `}</style>

      <div className="to-intro__grid" />
      <div className="to-intro__beam" />
      <div className="to-intro__mark" aria-hidden="true">TO</div>
      <div className="to-intro__corner to-intro__corner--tl" />
      <div className="to-intro__corner to-intro__corner--tr" />
      <div className="to-intro__corner to-intro__corner--bl" />
      <div className="to-intro__corner to-intro__corner--br" />

      <div className="to-intro__content">
        <div className="to-intro__rule" />
        <div className="to-intro__eyebrow">VIG AUTO ACCESSORIES</div>
        <h1 className="to-intro__name">TANVEER OBEROI</h1>
        <div className="to-intro__tag">AUTOMOTIVE DESIGN · CRAFT · DETAIL</div>
        <div className="to-intro__rule" style={{ marginTop: 28 }} />
      </div>

      <div className="to-intro__panel to-intro__panel--left" />
      <div className="to-intro__panel to-intro__panel--right" />
    </div>
  );
};
