import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Voice Assistant | pandozab (pandovirumab)',
  description: 'Ask our AI voice assistant anything about pandozab (pandovirumab). Get instant answers about dosing, side effects, and more.',
  keywords: 'pandozab voice assistant, pandovirumab AI assistant, medication information voice',
  openGraph: {
    title: 'Voice Assistant | pandozab (pandovirumab)',
    description: 'Ask our AI voice assistant about pandozab.',
    type: 'website',
  },
}

const questions = [
  'What is pandozab used for?',
  'What are the common side effects?',
  'How does pandozab work?',
  'What is the recommended dose?',
  'Can I take it with other blood pressure medications?',
]

const steps = [
  {
    number: '01',
    title: 'Start the assistant',
    description: 'Click the ElevenLabs microphone button below to begin your session.',
  },
  {
    number: '02',
    title: 'Ask anything',
    description: 'Ask about dosing, side effects, mechanism of action, and more.',
  },
  {
    number: '03',
    title: 'Get instant answers',
    description: 'Receive immediate, AI-powered responses about pandozab.',
  },
]

export default function VoiceAssistantPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;500&display=swap');

        :root {
          --navy: #002966;
          --navy-mid: #003087;
          --teal: #00857C;
          --teal-light: #E6F4F3;
          --teal-mid: #00A89D;
          --off-white: #F7F8FA;
          --border: rgba(0, 48, 135, 0.12);
          --text-muted: #5A6475;
          --text-body: #2D3340;
        }

        * { box-sizing: border-box; }

        body {
          font-family: 'Geist', system-ui, sans-serif;
          color: var(--text-body);
          -webkit-font-smoothing: antialiased;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .fade-up { animation: fadeUp 0.7s ease forwards; opacity: 0; }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.25s; }
        .delay-3 { animation-delay: 0.4s; }
        .delay-4 { animation-delay: 0.55s; }

        @keyframes orbRing {
          0%   { transform: scale(0.85); opacity: 0.5; }
          100% { transform: scale(1.45); opacity: 0; }
        }

        .orb-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1.5px solid rgba(0, 133, 124, 0.4);
          animation: orbRing 2.8s ease-out infinite;
        }
        .orb-ring:nth-child(2) { animation-delay: 0.9s; }
        .orb-ring:nth-child(3) { animation-delay: 1.8s; }

        @keyframes waveBar {
          0%, 100% { transform: scaleY(0.35); }
          50%       { transform: scaleY(1); }
        }

        .wave-bar {
          width: 3px;
          border-radius: 2px;
          background: rgba(255,255,255,0.7);
          transform-origin: bottom;
          animation: waveBar 1.1s ease-in-out infinite;
        }
        .wave-bar:nth-child(1) { height: 12px; animation-delay: 0.0s; }
        .wave-bar:nth-child(2) { height: 20px; animation-delay: 0.15s; }
        .wave-bar:nth-child(3) { height: 28px; animation-delay: 0.3s; }
        .wave-bar:nth-child(4) { height: 22px; animation-delay: 0.45s; }
        .wave-bar:nth-child(5) { height: 32px; animation-delay: 0.6s; }
        .wave-bar:nth-child(6) { height: 22px; animation-delay: 0.45s; }
        .wave-bar:nth-child(7) { height: 28px; animation-delay: 0.3s; }
        .wave-bar:nth-child(8) { height: 20px; animation-delay: 0.15s; }
        .wave-bar:nth-child(9) { height: 12px; animation-delay: 0.0s; }

        .step-card {
          transition: border-color 0.2s, transform 0.2s;
        }
        .step-card:hover {
          border-color: rgba(0, 133, 124, 0.35) !important;
          transform: translateY(-2px);
        }

        .q-chip {
          cursor: default;
          transition: background 0.15s, border-color 0.15s, color 0.15s;
        }
        .q-chip:hover {
          background: var(--teal-light) !important;
          border-color: rgba(0, 133, 124, 0.4) !important;
          color: var(--teal) !important;
        }

        elevenlabs-convai {
          position: static !important;
          bottom: unset !important;
          right: unset !important;
          width: 100% !important;
          display: block !important;
        }

        @media (max-width: 640px) {
          .hero-title { font-size: 2.2rem !important; }
          .steps-grid { grid-template-columns: 1fr !important; }
          .widget-pad { padding: 32px 20px !important; }
          .hero-section { padding: 64px 24px !important; }
          .content-section { padding: 64px 24px !important; }
        }
      `}</style>

      <Script
        src="https://elevenlabs.io/convai-widget/index.js"
        strategy="afterInteractive"
      />

      <main style={{ background: 'white' }}>

        {/* ── HERO ───────────────────────────────────────────── */}
        <section
          className="hero-section"
          style={{
            position: 'relative',
            overflow: 'hidden',
            background: 'var(--navy)',
            padding: '100px 40px 80px',
            textAlign: 'center',
          }}
        >
          {/* Subtle grid overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(0,133,124,0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,133,124,0.07) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
            pointerEvents: 'none',
          }} />

          {/* Teal glow blob */}
          <div style={{
            position: 'absolute',
            top: '-80px',
            right: '-80px',
            width: '420px',
            height: '420px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,133,124,0.18) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', maxWidth: '680px', margin: '0 auto' }}>

            {/* Eyebrow label */}
            <div
              className="fade-up delay-1"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(0,133,124,0.15)',
                border: '1px solid rgba(0,133,124,0.3)',
                borderRadius: '100px',
                padding: '5px 16px',
                marginBottom: '28px',
              }}
            >
              <span style={{
                width: '6px', height: '6px', borderRadius: '50%',
                background: '#00CCC0',
                boxShadow: '0 0 6px #00CCC0',
                display: 'inline-block',
              }} />
              <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '12px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                AI Voice Assistant
              </span>
            </div>

            {/* Heading */}
            <h1
              className="fade-up delay-2 hero-title"
              style={{
                fontFamily: '"Instrument Serif", serif',
                fontSize: '3rem',
                fontWeight: 400,
                color: 'white',
                lineHeight: 1.15,
                marginBottom: '20px',
                letterSpacing: '-0.01em',
              }}
            >
              Ask pandozab<br />
              <span style={{ color: '#5DD6CF', fontStyle: 'italic' }}>anything.</span>
            </h1>

            <p
              className="fade-up delay-3"
              style={{
                fontSize: '1.05rem',
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.7,
                maxWidth: '480px',
                margin: '0 auto 48px',
                fontWeight: 300,
              }}
            >
              Get instant answers about dosing, side effects, mechanism of action, and more — powered by ElevenLabs AI.
            </p>

            {/* Animated orb */}
            <div className="fade-up delay-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ position: 'relative', width: '120px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="orb-ring" />
                <div className="orb-ring" />
                <div className="orb-ring" />
                <div style={{
                  position: 'relative',
                  zIndex: 2,
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #00857C, #003087)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255,255,255,0.15)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                    <div className="wave-bar" />
                    <div className="wave-bar" />
                    <div className="wave-bar" />
                    <div className="wave-bar" />
                    <div className="wave-bar" />
                    <div className="wave-bar" />
                    <div className="wave-bar" />
                    <div className="wave-bar" />
                    <div className="wave-bar" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── STEPS + WIDGET ──────────────────────────────────── */}
        <section
          className="content-section"
          style={{ padding: '80px 40px', background: 'var(--off-white)' }}
        >
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>

            {/* Steps */}
            <div
              className="steps-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
                marginBottom: '48px',
              }}
            >
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="step-card"
                  style={{
                    background: 'white',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    padding: '24px 20px',
                  }}
                >
                  <div style={{
                    fontFamily: '"Instrument Serif", serif',
                    fontSize: '1.6rem',
                    color: 'var(--teal)',
                    marginBottom: '12px',
                    lineHeight: 1,
                  }}>
                    {step.number}
                  </div>
                  <h3 style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--navy)', marginBottom: '8px' }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.65, margin: 0 }}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* ElevenLabs widget card */}
            <div
              className="widget-pad"
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '52px 40px',
                border: '1px solid var(--border)',
                borderTop: '3px solid var(--teal)',
                marginBottom: '24px',
                textAlign: 'center',
              }}
            >
              <p style={{
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '8px',
              }}>
                Pandozab Assistant
              </p>
              <h2 style={{
                fontFamily: '"Instrument Serif", serif',
                fontSize: '1.7rem',
                fontWeight: 400,
                color: 'var(--navy)',
                marginBottom: '36px',
              }}>
                Ask me anything
              </h2>

              {/* ElevenLabs embed — contained in a div */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                marginBottom: '36px',
              }}>
                <div style={{
                  width: '100%',
                  maxWidth: '480px',
                  minHeight: '300px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid var(--border)',
                  background: 'var(--off-white)',
                }}>
                  <div dangerouslySetInnerHTML={{ __html: `
                    <elevenlabs-convai
                      agent-id="agent_1501kr3j7m7kf85t6dscbkgehpmh"
                      variant="expanded"
                      avatar-orb-color-1="#00857C"
                      avatar-orb-color-2="#003087"
                      style="width:100%;height:100%;display:block;"
                    ></elevenlabs-convai>
                  ` }} />
                </div>
              </div>

              {/* Divider */}
              <div style={{ borderTop: '1px solid var(--border)', marginBottom: '28px' }} />

              {/* Suggested questions */}
              <p style={{ fontSize: '12px', fontWeight: 500, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>
                Try asking
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                {questions.map((q) => (
                  <span
                    key={q}
                    className="q-chip"
                    style={{
                      background: 'var(--off-white)',
                      border: '1px solid var(--border)',
                      borderRadius: '100px',
                      padding: '7px 15px',
                      fontSize: '13px',
                      color: 'var(--text-muted)',
                      lineHeight: 1.4,
                    }}
                  >
                    "{q}"
                  </span>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <div style={{
              background: 'var(--teal-light)',
              borderLeft: '3px solid var(--teal)',
              borderRadius: '0 10px 10px 0',
              padding: '20px 24px',
              display: 'flex',
              gap: '14px',
              alignItems: 'flex-start',
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <div>
                <p style={{ fontSize: '13px', fontWeight: 500, color: 'var(--navy)', marginBottom: '4px' }}>
                  Important notice
                </p>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>
                  This voice assistant is for informational purposes only and does not constitute medical advice. Always consult your healthcare provider before making any decisions about your medication.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ── FOOTER DISCLAIMER ───────────────────────────────── */}
        <section style={{
          background: 'var(--navy)',
          padding: '20px 40px',
          textAlign: 'center',
        }}>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', margin: 0 }}>
            This website is intended for informational purposes only. Please consult your healthcare provider before starting any medication.
          </p>
        </section>

      </main>
    </>
  )
}