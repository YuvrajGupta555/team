/* ╔══════════════════════════════════════════════╗
   ║  YUVRAJ · TERMINAL NOIR EDITION              ║
   ║  Impeccable redesign — style.css             ║
   ╚══════════════════════════════════════════════╝ */

@import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&family=Syne:wght@700;800&family=Orbitron:wght@400;700;900&display=swap');

/* ── Tokens ───────────────────────────────────── */
:root {
  --ink:       #04080f;
  --surf:      #080e19;
  --surf2:     #0c1422;
  --glass:     rgba(8,14,25,0.72);

  --green:  #00ff87;
  --cyan:   #00cfff;
  --red:    #ff2d55;
  --gold:   #fbbf24;
  --purple: #a78bfa;

  --txt:   #dfe6f0;
  --txt2:  #8899aa;
  --txt3:  #4a5568;

  --bdr:    rgba(0,255,135,0.12);
  --bdr2:   rgba(0,255,135,0.30);
  --bdr-c:  rgba(0,207,255,0.22);

  --glow-g: 0 0 24px rgba(0,255,135,0.35);
  --glow-c: 0 0 24px rgba(0,207,255,0.35);

  --fd:  'Orbitron', sans-serif;
  --fh:  'Syne', sans-serif;
  --fb:  'DM Sans', sans-serif;
  --fm:  'Share Tech Mono', monospace;

  --nav-h: 68px;
  --ease:  cubic-bezier(0.4,0,0.2,1);
  --t:     0.28s;
}

/* ── Reset ────────────────────────────────────── */
*,*::before,*::after { box-sizing: border-box; margin: 0; padding: 0; }
html { font-size: 16px; scroll-behavior: smooth; }
body {
  background: var(--ink);
  color: var(--txt);
  font-family: var(--fb);
  font-size: 1.05rem;
  line-height: 1.72;
  overflow-x: hidden;
  cursor: none;
}

/* Noise texture */
body::before {
  content: '';
  position: fixed; inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.045'/%3E%3C/svg%3E");
  background-size: 180px;
  pointer-events: none;
  z-index: 9998;
  mix-blend-mode: overlay;
}

/* Ambient glow */
body::after {
  content: '';
  position: fixed; inset: 0;
  background:
    radial-gradient(ellipse 55vw 50vh at 15% 35%, rgba(0,255,135,0.04) 0%, transparent 70%),
    radial-gradient(ellipse 35vw 35vh at 85% 80%, rgba(0,207,255,0.03) 0%, transparent 65%);
  pointer-events: none;
  z-index: 0;
}

/* ── Custom Cursor ────────────────────────────── */
#cursor-dot {
  position: fixed;
  width: 6px; height: 6px;
  background: var(--green);
  border-radius: 50%;
  pointer-events: none;
  z-index: 99999;
  transform: translate(-50%,-50%);
  box-shadow: 0 0 8px var(--green);
  transition: background 0.2s, box-shadow 0.2s;
}

#cursor-ring {
  position: fixed;
  width: 32px; height: 32px;
  border: 1px solid rgba(0,255,135,0.45);
  border-radius: 50%;
  pointer-events: none;
  z-index: 99997;
  transform: translate(-50%,-50%);
  transition:
    width 0.22s var(--ease), height 0.22s var(--ease),
    border-color 0.22s, background 0.22s, left 0.06s linear, top 0.06s linear;
}

body.cur-hover #cursor-ring {
  width: 48px; height: 48px;
  border-color: rgba(0,207,255,0.5);
  background: rgba(0,207,255,0.04);
}
body.cur-hover #cursor-dot { background: var(--cyan); box-shadow: 0 0 8px var(--cyan); }

/* ── Scroll Progress ──────────────────────────── */
#scroll-bar {
  position: fixed; top: 0; left: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--green), var(--cyan));
  z-index: 10001;
  transform-origin: left;
  transform: scaleX(0);
  box-shadow: 0 0 6px rgba(0,255,135,0.55);
}

/* ── Navbar ───────────────────────────────────── */
.navbar {
  position: fixed; top: 0; left: 0; right: 0;
  height: var(--nav-h);
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 3rem;
  z-index: 1000;
  border-bottom: 1px solid transparent;
  transition: background var(--t) var(--ease), border-color var(--t);
}

.navbar.scrolled {
  background: rgba(4,8,15,0.90);
  backdrop-filter: blur(20px) saturate(1.4);
  -webkit-backdrop-filter: blur(20px) saturate(1.4);
  border-bottom-color: var(--bdr);
}

.nav-logo {
  font-family: var(--fd);
  font-size: 1rem;
  font-weight: 900;
  letter-spacing: 0.15em;
  color: var(--green);
  text-shadow: var(--glow-g);
  text-decoration: none;
  cursor: none;
}
.nav-logo .b { color: var(--cyan); opacity: 0.65; }

.nav-links { display: flex; align-items: center; list-style: none; }

.nav-links a {
  font-family: var(--fm);
  font-size: 0.74rem;
  color: var(--txt2);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.45rem 0.8rem;
  position: relative;
  transition: color var(--t);
  cursor: none;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0.8rem; right: 0.8rem;
  height: 1px;
  background: var(--green);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s var(--ease);
}

.nav-links a:hover, .nav-links a.active { color: var(--green); }
.nav-links a:hover::after, .nav-links a.active::after {
  transform: scaleX(1);
  transform-origin: left;
}

.hamburger {
  display: none; flex-direction: column;
  gap: 5px; background: none; border: none; cursor: none; padding: 4px;
}
.hamburger span { display: block; width: 22px; height: 1.5px; background: var(--green); transition: all var(--t); }

/* ── Page layout ──────────────────────────────── */
.page-wrapper { position: relative; z-index: 1; padding-top: var(--nav-h); min-height: 100vh; }
.container { max-width: 1080px; margin: 0 auto; padding: 0 2rem; }
.section { padding: 5.5rem 0; position: relative; }

/* ── Section headers ──────────────────────────── */
.sh { margin-bottom: 2.8rem; }
.sh-lbl {
  display: block;
  font-family: var(--fm);
  font-size: 0.7rem;
  color: var(--green);
  letter-spacing: 0.24em;
  text-transform: uppercase;
  margin-bottom: 0.6rem;
  opacity: 0.8;
}
.sh-title {
  font-family: var(--fh);
  font-size: clamp(1.85rem, 3vw, 2.5rem);
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.1;
  color: var(--txt);
}
.sh-title em {
  font-style: normal;
  background: linear-gradient(120deg, var(--green), var(--cyan));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.sh-rule {
  width: 44px; height: 2px;
  background: linear-gradient(90deg, var(--green), var(--cyan));
  border-radius: 2px;
  margin-top: 1rem;
}

/* ── Hero ─────────────────────────────────────── */
.hero {
  min-height: 100vh;
  display: flex; align-items: center;
  position: relative; overflow: hidden;
  padding-top: var(--nav-h);
}

#matrix-canvas {
  position: absolute; inset: 0;
  opacity: 0.13;
  pointer-events: none;
  z-index: 0;
}

.hero-inner { position: relative; z-index: 2; max-width: 840px; }

/* entrance animation */
.hero-inner > * { opacity: 0; transform: translateY(22px); }

.h-term {
  font-family: var(--fm);
  font-size: 0.78rem;
  color: var(--cyan);
  opacity: 0.85;
  animation: hIn 0.6s var(--ease) 0.1s forwards;
}
.h-term .p { color: var(--green); }

.h-hi {
  font-family: var(--fb);
  font-size: 1rem;
  color: var(--txt2);
  font-weight: 300;
  margin-top: 1.7rem;
  animation: hIn 0.6s var(--ease) 0.25s forwards;
}

.h-name {
  font-family: var(--fh);
  font-size: clamp(3.5rem, 9vw, 7rem);
  font-weight: 800;
  line-height: 0.93;
  letter-spacing: -0.04em;
  margin: 0.15rem 0 0;
  animation: hIn 0.7s var(--ease) 0.38s forwards;
}

.h-name span {
  display: inline-block;
  background: linear-gradient(155deg, #ffffff 20%, var(--cyan) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 28px rgba(0,207,255,0.22));
}

.h-role {
  font-family: var(--fm);
  font-size: clamp(0.9rem, 2vw, 1.15rem);
  color: var(--green);
  min-height: 1.6rem;
  margin-top: 1rem;
  animation: hIn 0.6s var(--ease) 0.52s forwards;
}
.h-role .cur {
  display: inline-block;
  width: 8px; height: 1.1em;
  background: var(--green);
  margin-left: 3px;
  vertical-align: text-bottom;
  animation: blink 0.9s step-end infinite;
}
@keyframes blink { 0%,100%{opacity:1}50%{opacity:0} }

.h-desc {
  color: var(--txt2);
  font-size: 1rem;
  max-width: 510px;
  margin: 1.3rem 0 2.3rem;
  line-height: 1.8;
  font-weight: 300;
  animation: hIn 0.6s var(--ease) 0.65s forwards;
}

.h-ctas { display: flex; gap: 0.85rem; flex-wrap: wrap; animation: hIn 0.6s var(--ease) 0.78s forwards; }

@keyframes hIn { to { opacity: 1; transform: translateY(0); } }

/* ── Buttons ──────────────────────────────────── */
.btn {
  display: inline-flex; align-items: center; gap: 0.4rem;
  padding: 0.72rem 1.7rem;
  font-family: var(--fm);
  font-size: 0.78rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-radius: 2px;
  border: none;
  cursor: none;
  text-decoration: none;
  transition: all var(--t) var(--ease);
  position: relative;
  overflow: hidden;
}

.btn-solid { background: var(--green); color: var(--ink); font-weight: 700; }
.btn-solid:hover {
  background: transparent; color: var(--green);
  box-shadow: inset 0 0 0 1px var(--green), var(--glow-g);
}

.btn-ghost {
  background: transparent; color: var(--cyan);
  box-shadow: inset 0 0 0 1px rgba(0,207,255,0.38);
}
.btn-ghost:hover {
  background: rgba(0,207,255,0.06);
  box-shadow: inset 0 0 0 1px var(--cyan), var(--glow-c);
  color: var(--cyan);
}

/* ── Cards ────────────────────────────────────── */
.card {
  background: var(--glass);
  border: 1px solid var(--bdr);
  border-radius: 8px;
  padding: 1.75rem;
  position: relative;
  overflow: hidden;
  transition: border-color var(--t) var(--ease), box-shadow var(--t) var(--ease);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

/* Top shimmer edge */
.card::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent 5%, rgba(0,255,135,0.5) 50%, transparent 95%);
  opacity: 0;
  transition: opacity var(--t);
}

/* Light sweep */
.card::after {
  content: '';
  position: absolute;
  top: -120%; left: -60%;
  width: 35%; height: 320%;
  background: linear-gradient(110deg, transparent 40%, rgba(255,255,255,0.035) 50%, transparent 60%);
  transform: skewX(-15deg);
  transition: left 0.55s var(--ease), top 0.55s var(--ease);
  pointer-events: none;
}

.card:hover {
  border-color: var(--bdr2);
  box-shadow:
    0 0 0 1px rgba(0,255,135,0.06),
    0 16px 48px rgba(0,0,0,0.5),
    0 0 32px rgba(0,255,135,0.06);
}
.card:hover::before { opacity: 1; }
.card:hover::after  { left: 120%; }

/* ── Grids ────────────────────────────────────── */
.g2 { display: grid; grid-template-columns: repeat(2,1fr); gap: 1.35rem; }
.g3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.35rem; }
.g4 { display: grid; grid-template-columns: repeat(4,1fr); gap: 1.2rem; }

/* ── Stats ────────────────────────────────────── */
.stat-n {
  font-family: var(--fd);
  font-size: 2.6rem;
  font-weight: 900;
  line-height: 1;
  color: var(--green);
  animation: pulse 3s ease-in-out infinite;
}
@keyframes pulse {
  0%,100% { text-shadow: 0 0 8px rgba(0,255,135,0.4); }
  50%      { text-shadow: 0 0 22px rgba(0,255,135,0.75), 0 0 44px rgba(0,255,135,0.2); }
}
.stat-l { font-family: var(--fm); font-size: 0.66rem; color: var(--txt3); text-transform: uppercase; letter-spacing: 0.15em; margin-top: 0.4rem; }

/* ── Skill bars ───────────────────────────────── */
.sk-row { margin-bottom: 1.35rem; }
.sk-meta { display: flex; justify-content: space-between; font-family: var(--fm); font-size: 0.74rem; margin-bottom: 0.5rem; }
.sk-meta .nm { color: var(--txt); }
.sk-meta .pct { color: var(--green); }

.sk-track {
  height: 3px;
  background: rgba(255,255,255,0.05);
  border-radius: 2px;
  overflow: visible;
  position: relative;
}

.sk-fill {
  height: 100%;
  border-radius: 2px;
  width: 0;
  background: linear-gradient(90deg, var(--green), var(--cyan));
  transition: width 1.4s cubic-bezier(0.25,1,0.5,1);
  position: relative;
}

.sk-fill::after {
  content: '';
  position: absolute; right: -3px; top: 50%;
  width: 7px; height: 7px;
  border-radius: 50%;
  background: var(--cyan);
  box-shadow: var(--glow-c);
  transform: translateY(-50%);
  opacity: 0;
  transition: opacity 0.3s 0.9s;
}
.sk-fill.loaded::after { opacity: 1; }

/* ── Tags ─────────────────────────────────────── */
.tag {
  display: inline-block;
  font-family: var(--fm);
  font-size: 0.67rem;
  letter-spacing: 0.05em;
  padding: 0.18rem 0.52rem;
  border-radius: 2px;
  margin: 0.18rem 0.1rem;
}
.tg { background: rgba(0,255,135,0.07); color: var(--green); border: 1px solid rgba(0,255,135,0.2); }
.tc { background: rgba(0,207,255,0.07); color: var(--cyan);  border: 1px solid rgba(0,207,255,0.2); }
.tr { background: rgba(255,45,85,0.07); color: var(--red);   border: 1px solid rgba(255,45,85,0.2); }
.ty { background: rgba(251,191,36,0.07); color: var(--gold); border: 1px solid rgba(251,191,36,0.2); }
.tp { background: rgba(167,139,250,0.07); color: var(--purple); border: 1px solid rgba(167,139,250,0.2); }

/* ── Page hero banner ─────────────────────────── */
.ph {
  padding: 5.5rem 0 3.5rem;
  border-bottom: 1px solid var(--bdr);
  position: relative; overflow: hidden;
}
.ph::before {
  content: '';
  position: absolute; inset: 0;
  background: radial-gradient(ellipse 65% 100% at 8% 55%, rgba(0,255,135,0.04) 0%, transparent 68%);
  pointer-events: none;
}
.ph-lbl { font-family: var(--fm); font-size: 0.72rem; color: var(--cyan); letter-spacing: 0.22em; text-transform: uppercase; display: block; margin-bottom: 0.8rem; opacity: 0.78; }
.ph-title {
  font-family: var(--fh);
  font-size: clamp(2.2rem, 5.5vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  background: linear-gradient(130deg, var(--txt) 40%, rgba(0,207,255,0.85));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.05;
}
.ph-sub { color: var(--txt2); font-size: 1rem; margin-top: 0.9rem; max-width: 560px; font-weight: 300; }

/* ── Section alternate bg ─────────────────────── */
.s-alt { background: var(--surf); position: relative; }
.s-alt::before {
  content: '';
  position: absolute; top: -2rem; left: 0; right: 0; height: 2rem;
  background: var(--surf);
  clip-path: polygon(0 100%, 100% 0, 100% 100%);
}
.s-alt::after {
  content: '';
  position: absolute; bottom: -2rem; left: 0; right: 0; height: 2rem;
  background: var(--surf);
  clip-path: polygon(0 0, 100% 100%, 0 100%);
  z-index: 1;
}

/* ── Forms ────────────────────────────────────── */
.fl { margin-bottom: 1.55rem; }
.fl label { display: block; font-family: var(--fm); font-size: 0.7rem; color: var(--green); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 0.52rem; }

.fc {
  width: 100%;
  background: rgba(255,255,255,0.025);
  border: 1px solid var(--bdr);
  border-radius: 3px;
  padding: 0.8rem 1rem;
  color: var(--txt);
  font-family: var(--fb);
  font-size: 1rem;
  outline: none;
  transition: border-color var(--t), background var(--t), box-shadow var(--t);
  cursor: none;
}
.fc::placeholder { color: var(--txt3); font-size: 0.9rem; }
.fc:focus { border-color: var(--green); background: rgba(0,255,135,0.022); box-shadow: 0 0 0 3px rgba(0,255,135,0.07), var(--glow-g); }
.fc.error   { border-color: var(--red);   box-shadow: 0 0 0 3px rgba(255,45,85,0.07); }
.fc.success { border-color: rgba(0,255,135,0.38); }

textarea.fc { resize: vertical; min-height: 130px; }

.fe { font-family: var(--fm); font-size: 0.7rem; color: var(--red); margin-top: 0.32rem; display: none; }
.fe.show { display: block; }

/* ── Alerts ───────────────────────────────────── */
.alert { display: none; padding: 0.88rem 1.1rem; border-radius: 3px; font-family: var(--fm); font-size: 0.78rem; margin-bottom: 1rem; }
.alert.show { display: block; }
.a-ok  { background: rgba(0,255,135,0.06); border: 1px solid rgba(0,255,135,0.28); color: var(--green); }
.a-err { background: rgba(255,45,85,0.06); border: 1px solid rgba(255,45,85,0.28); color: var(--red); }

/* ── Timeline ─────────────────────────────────── */
.tl { padding-left: 1.7rem; position: relative; }
.tl::before { content: ''; position: absolute; left: 0; top: 0.5rem; bottom: 0; width: 1px; background: linear-gradient(to bottom, rgba(0,255,135,0.4), transparent); }
.tl-item { position: relative; margin-bottom: 2.7rem; }
.tl-item::before { content: ''; position: absolute; left: -1.7rem; top: 0.42rem; width: 8px; height: 8px; border-radius: 50%; background: var(--green); box-shadow: 0 0 10px rgba(0,255,135,0.6); transform: translateX(-3.5px); }
.tl-date  { font-family: var(--fm); font-size: 0.7rem; color: var(--cyan); letter-spacing: 0.1em; margin-bottom: 0.3rem; }
.tl-title { font-family: var(--fh); font-size: 1.05rem; font-weight: 700; color: var(--txt); margin-bottom: 0.18rem; }
.tl-org   { font-family: var(--fm); font-size: 0.74rem; color: var(--green); margin-bottom: 0.5rem; }
.tl-desc  { color: var(--txt2); font-size: 0.92rem; line-height: 1.75; }

/* ── Blog cards ───────────────────────────────── */
.bc-meta { display: flex; align-items: center; gap: 0.8rem; font-family: var(--fm); font-size: 0.68rem; color: var(--txt3); margin-bottom: 0.8rem; flex-wrap: wrap; }
.bc-title { font-family: var(--fh); font-size: 0.98rem; font-weight: 700; color: var(--txt); line-height: 1.4; margin-bottom: 0.55rem; }
.bc-ex { color: var(--txt2); font-size: 0.9rem; line-height: 1.72; margin-bottom: 1rem; }

/* ── Footer ───────────────────────────────────── */
.footer { background: var(--surf); border-top: 1px solid var(--bdr); padding: 3.5rem 0; text-align: center; position: relative; z-index: 1; }
.footer-logo { font-family: var(--fd); font-size: 1.25rem; font-weight: 900; color: var(--green); letter-spacing: 0.15em; margin-bottom: 1.4rem; text-shadow: var(--glow-g); }
.footer-links { display: flex; justify-content: center; gap: 0; flex-wrap: wrap; margin-bottom: 1.4rem; }
.footer-links a { font-family: var(--fm); font-size: 0.7rem; color: var(--txt3); text-transform: uppercase; letter-spacing: 0.08em; padding: 0.28rem 0.65rem; text-decoration: none; transition: color var(--t); cursor: none; }
.footer-links a:hover { color: var(--green); }
.footer-copy { font-family: var(--fm); font-size: 0.68rem; color: var(--txt3); letter-spacing: 0.04em; }

/* ── Scroll reveal ────────────────────────────── */
.rev {
  opacity: 0;
  transform: translateY(26px);
  transition: opacity 0.7s var(--ease), transform 0.7s var(--ease);
}
.rev.in { opacity: 1; transform: none; }
.rev:nth-child(2) { transition-delay: 0.1s; }
.rev:nth-child(3) { transition-delay: 0.2s; }
.rev:nth-child(4) { transition-delay: 0.3s; }
.rev:nth-child(5) { transition-delay: 0.4s; }

/* ── Utilities ────────────────────────────────── */
.tc-g { color: var(--green); }
.tc-c { color: var(--cyan); }
.tc-2 { color: var(--txt2); }
.mono { font-family: var(--fm); }
.center { text-align: center; }
.mt2 { margin-top: 1rem; }
.mt3 { margin-top: 1.75rem; }
.mb2 { margin-bottom: 1rem; }
.mb3 { margin-bottom: 1.75rem; }

/* ── Scrollbar ────────────────────────────────── */
::-webkit-scrollbar { width: 5px; }
::-webkit-scrollbar-track { background: var(--ink); }
::-webkit-scrollbar-thumb { background: rgba(0,255,135,0.28); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: var(--green); }

/* ── Responsive ───────────────────────────────── */
@media (max-width: 860px) { .g3,.g4 { grid-template-columns: repeat(2,1fr); } }

@media (max-width: 640px) {
  .g2,.g3,.g4 { grid-template-columns: 1fr; }
  .navbar { padding: 0 1.25rem; }
  .container { padding: 0 1.25rem; }
  .h-name { font-size: 3.2rem; }
  .nav-links {
    display: none; position: fixed; top: var(--nav-h); left: 0; right: 0;
    background: rgba(4,8,15,0.97);
    backdrop-filter: blur(20px);
    flex-direction: column; padding: 1.5rem;
    border-bottom: 1px solid var(--bdr); gap: 0.25rem;
  }
  .nav-links.open { display: flex; }
  .hamburger { display: flex; }
}

/* Touch: restore pointer */
@media (hover: none) {
  body { cursor: auto; }
  .btn,.fc,.nav-links a,.footer-links a,.hamburger { cursor: pointer; }
  #cursor-dot,#cursor-ring { display: none; }
}
