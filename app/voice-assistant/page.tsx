'use client'

/**
 * pandozab — Voice Assistant Page
 * Powered by Vapi Web SDK (replaces ElevenLabs)
 *
 * ENV VARS REQUIRED (add to .env.local):
 *   NEXT_PUBLIC_VAPI_PUBLIC_KEY=your_vapi_public_key
 *   NEXT_PUBLIC_VAPI_ASSISTANT_ID=your_vapi_assistant_id
 *
 * Install SDK:
 *   npm install @vapi-ai/web
 *
 * ── ASR CONTROL (programmatic only — not exposed in the UI) ──────────────────
 *
 *  The user can START a call via the orb button, but cannot stop it from the UI.
 *  To disconnect ASR from your own code (e.g. timeout, server event, business logic):
 *
 *    // 1. Full disconnect — tears down WebRTC, ends the session entirely:
 *    vapiRef.current?.stop()
 *
 *    // 2. Pause mic only — call stays open, assistant can still speak:
 *    vapiRef.current?.setMuted(true)
 *
 *    // 3. Resume mic:
 *    vapiRef.current?.setMuted(false)
 *
 *  To call these from outside VapiWidget, lift vapiRef up to the page level,
 *  or expose the methods via useImperativeHandle + forwardRef.
 */

import { useEffect, useRef, useState, useCallback } from 'react'

// ─── Vapi type stubs ──────────────────────────────────────────────────────────
// NOTE: 'muted' and 'ending' are programmatic-only states — not reachable via the UI.
type VapiStatus = 'idle' | 'connecting' | 'active' | 'muted' | 'ending'

// ─── Static data ──────────────────────────────────────────────────────────────
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
    description: 'Click the microphone button below to begin your session.',
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

// ─── Inline styles ────────────────────────────────────────────────────────────
const css = `
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
  body { font-family: 'Geist', system-ui, sans-serif; color: var(--text-body); -webkit-font-smoothing: antialiased; }

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
    position: absolute; inset: 0; border-radius: 50%;
    border: 1.5px solid rgba(0,133,124,0.4);
    animation: orbRing 2.8s ease-out infinite;
  }
  .orb-ring:nth-child(2) { animation-delay: 0.9s; }
  .orb-ring:nth-child(3) { animation-delay: 1.8s; }

  @keyframes waveBar {
    0%, 100% { transform: scaleY(0.35); }
    50%       { transform: scaleY(1); }
  }
  .wave-bar {
    width: 3px; border-radius: 2px;
    background: rgba(255,255,255,0.7);
    transform-origin: bottom;
    animation: waveBar 1.1s ease-in-out infinite;
  }
  .wave-bar:nth-child(1) { height:12px; animation-delay:0.0s; }
  .wave-bar:nth-child(2) { height:20px; animation-delay:0.15s; }
  .wave-bar:nth-child(3) { height:28px; animation-delay:0.3s; }
  .wave-bar:nth-child(4) { height:22px; animation-delay:0.45s; }
  .wave-bar:nth-child(5) { height:32px; animation-delay:0.6s; }
  .wave-bar:nth-child(6) { height:22px; animation-delay:0.45s; }
  .wave-bar:nth-child(7) { height:28px; animation-delay:0.3s; }
  .wave-bar:nth-child(8) { height:20px; animation-delay:0.15s; }
  .wave-bar:nth-child(9) { height:12px; animation-delay:0.0s; }

  @keyframes activeOrbPulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(0,133,124,0.5); }
    50%       { box-shadow: 0 0 0 18px rgba(0,133,124,0); }
  }
  .orb-active { animation: activeOrbPulse 1.6s ease-in-out infinite !important; }

  .step-card { transition: border-color 0.2s, transform 0.2s; }
  .step-card:hover { border-color: rgba(0,133,124,0.35) !important; transform: translateY(-2px); }

  .q-chip { cursor: pointer; transition: background 0.15s, border-color 0.15s, color 0.15s; }
  .q-chip:hover { background: var(--teal-light) !important; border-color: rgba(0,133,124,0.4) !important; color: var(--teal) !important; }

  .vapi-btn {
    border: none; cursor: pointer;
    transition: transform 0.15s, box-shadow 0.15s, background 0.25s;
  }
  .vapi-btn:hover:not(:disabled) { transform: scale(1.06); box-shadow: 0 8px 28px rgba(0,133,124,0.35); }
  .vapi-btn:active:not(:disabled) { transform: scale(0.97); }
  .vapi-btn:disabled { opacity: 0.55; cursor: not-allowed; }

  .status-dot {
    width: 7px; height: 7px; border-radius: 50%;
    display: inline-block; margin-right: 7px;
  }

  @keyframes dotBlink { 0%,100%{opacity:1} 50%{opacity:0.2} }
  .dot-blink { animation: dotBlink 1.2s ease-in-out infinite; }

  @media (max-width: 640px) {
    .hero-title { font-size: 2.2rem !important; }
    .steps-grid { grid-template-columns: 1fr !important; }
    .widget-pad { padding: 32px 20px !important; }
    .hero-section { padding: 64px 24px !important; }
    .content-section { padding: 64px 24px !important; }
  }
`

// ─── Vapi Voice Widget ────────────────────────────────────────────────────────
function VapiWidget() {
  const vapiRef = useRef<any>(null)
  const [status, setStatus] = useState<VapiStatus>('idle')
  const [isMuted, setIsMuted] = useState(false)
  const [transcript, setTranscript] = useState<{ role: 'user' | 'assistant'; text: string }[]>([])
  const transcriptEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let vapi: any

    const init = async () => {
      const { default: Vapi } = await import('@vapi-ai/web')
      vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY!)
      vapiRef.current = vapi

      vapi.on('call-start', () => setStatus('active'))
      vapi.on('call-end',   () => { setStatus('idle'); setIsMuted(false) })
      vapi.on('error',      () => setStatus('idle'))

      vapi.on('message', (msg: any) => {
        if (msg.type === 'transcript' && msg.transcriptType === 'final') {
          setTranscript(prev => [...prev, { role: msg.role, text: msg.transcript }])
        }
      })
    }

    init()
    return () => { vapi?.stop() }
  }, [])

  useEffect(() => {
    transcriptEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [transcript])

  const startCall = useCallback(async () => {
    if (!vapiRef.current) return
    setStatus('connecting')
    setTranscript([])
    try {
      await vapiRef.current.start(process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID!)
    } catch {
      setStatus('idle')
    }
  }, [])

  // PROGRAMMATIC ONLY — not wired to any UI button
  const stopCall = useCallback(() => {
    vapiRef.current?.stop()
    setStatus('ending')
  }, [])

  // PROGRAMMATIC ONLY — not wired to any UI button
  const toggleMute = useCallback(() => {
    if (!vapiRef.current || status !== 'active') return
    const next = !isMuted
    vapiRef.current.setMuted(next)
    setIsMuted(next)
    setStatus(next ? 'muted' : 'active')
  }, [isMuted, status])

  void stopCall
  void toggleMute

  const isIdle       = status === 'idle'
  const isConnecting = status === 'connecting'
  const isLive       = status === 'active' || status === 'muted'
  const isEnding     = status === 'ending'

  const statusLabel: Record<VapiStatus, string> = {
    idle:       'Ready',
    connecting: 'Connecting…',
    active:     'Listening',
    muted:      'Mic muted',
    ending:     'Ending…',
  }

  const statusColor: Record<VapiStatus, string> = {
    idle:       '#9CA3AF',
    connecting: '#F59E0B',
    active:     '#10B981',
    muted:      '#EF4444',
    ending:     '#F59E0B',
  }

  const orbBg = isLive
    ? 'linear-gradient(135deg, #10B981, #00857C)'
    : isConnecting || isEnding
    ? 'linear-gradient(135deg, #F59E0B, #D97706)'
    : 'linear-gradient(135deg, #00857C, #003087)'

  return (
    <div style={{ width: '100%', maxWidth: '480px', margin: '0 auto' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '28px', marginBottom: '32px' }}>

        {/* Orb — starts call only */}
        <div style={{ position: 'relative', width: '140px', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {(isConnecting || isLive) && (
            <>
              <div className="orb-ring" />
              <div className="orb-ring" />
              <div className="orb-ring" />
            </>
          )}
          <button
            className={`vapi-btn${isLive ? ' orb-active' : ''}`}
            onClick={isIdle ? startCall : undefined}
            disabled={isConnecting || isEnding || isLive}
            aria-label="Start call"
            style={{
              position: 'relative', zIndex: 2,
              width: '88px', height: '88px', borderRadius: '50%',
              background: orbBg, border: '1px solid rgba(255,255,255,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: isIdle ? 'pointer' : 'default',
            }}
          >
            {isConnecting || isEnding ? (
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                <path d="M12 2a10 10 0 0 1 10 10" style={{ animation: 'spin 0.8s linear infinite' }}/>
                <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
              </svg>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="wave-bar" />
                ))}
              </div>
            )}
          </button>
        </div>

        {/* Status pill */}
        <div style={{
          display: 'inline-flex', alignItems: 'center',
          background: 'var(--off-white)', border: '1px solid var(--border)',
          borderRadius: '100px', padding: '5px 14px',
          fontSize: '12px', fontWeight: 500, color: 'var(--text-muted)', letterSpacing: '0.04em',
        }}>
          <span
            className={`status-dot${isConnecting || isEnding ? ' dot-blink' : ''}`}
            style={{ background: statusColor[status] }}
          />
          {statusLabel[status]}
        </div>

        {isIdle && (
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: 0, textAlign: 'center', lineHeight: 1.6 }}>
            Click the button above to start a conversation
          </p>
        )}
        {isLive && (
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: 0, textAlign: 'center', lineHeight: 1.6 }}>
            Session active — speak naturally
          </p>
        )}
      </div>

      {/* Live transcript */}
      {transcript.length > 0 && (
        <div style={{
          background: 'var(--off-white)', border: '1px solid var(--border)',
          borderRadius: '12px', padding: '16px', maxHeight: '220px', overflowY: 'auto',
          display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '8px',
        }}>
          {transcript.map((line, i) => (
            <div key={i} style={{ display: 'flex', gap: '10px', justifyContent: line.role === 'user' ? 'flex-end' : 'flex-start' }}>
              <div style={{
                maxWidth: '85%', padding: '8px 13px',
                borderRadius: line.role === 'user' ? '12px 12px 2px 12px' : '12px 12px 12px 2px',
                background: line.role === 'user' ? 'var(--navy)' : 'white',
                border: line.role === 'assistant' ? '1px solid var(--border)' : 'none',
                color: line.role === 'user' ? 'white' : 'var(--text-body)',
                fontSize: '13px', lineHeight: 1.55,
              }}>
                {line.text}
              </div>
            </div>
          ))}
          <div ref={transcriptEndRef} />
        </div>
      )}
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function VoiceAssistantPage() {
  return (
    <>
      <style>{css}</style>
      <main style={{ background: 'white' }}>

        {/* HERO */}
        <section className="hero-section" style={{
          position: 'relative', overflow: 'hidden',
          background: 'var(--navy)', padding: '100px 40px 80px', textAlign: 'center',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `linear-gradient(rgba(0,133,124,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,133,124,0.07) 1px, transparent 1px)`,
            backgroundSize: '48px 48px', pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', top: '-80px', right: '-80px',
            width: '420px', height: '420px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,133,124,0.18) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', maxWidth: '680px', margin: '0 auto' }}>
            <div className="fade-up delay-1" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(0,133,124,0.15)', border: '1px solid rgba(0,133,124,0.3)',
              borderRadius: '100px', padding: '5px 16px', marginBottom: '28px',
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00CCC0', boxShadow: '0 0 6px #00CCC0', display: 'inline-block' }} />
              <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '12px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                AI Voice Assistant
              </span>
            </div>

            <h1 className="fade-up delay-2 hero-title" style={{
              fontFamily: '"Instrument Serif", serif', fontSize: '3rem', fontWeight: 400,
              color: 'white', lineHeight: 1.15, marginBottom: '20px', letterSpacing: '-0.01em',
            }}>
              Ask pandozab<br />
              <span style={{ color: '#5DD6CF', fontStyle: 'italic' }}>anything.</span>
            </h1>

            <p className="fade-up delay-3" style={{
              fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7,
              maxWidth: '480px', margin: '0 auto 48px', fontWeight: 300,
            }}>
              Get instant answers about dosing, side effects, mechanism of action, and more — powered by Vapi AI.
            </p>
          </div>
        </section>

        {/* STEPS + WIDGET */}
        <section className="content-section" style={{ padding: '80px 40px', background: 'var(--off-white)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>

            <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '48px' }}>
              {steps.map(step => (
                <div key={step.number} className="step-card" style={{ background: 'white', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px 20px' }}>
                  <div style={{ fontFamily: '"Instrument Serif", serif', fontSize: '1.6rem', color: 'var(--teal)', marginBottom: '12px', lineHeight: 1 }}>{step.number}</div>
                  <h3 style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--navy)', marginBottom: '8px' }}>{step.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.65, margin: 0 }}>{step.description}</p>
                </div>
              ))}
            </div>

            <div className="widget-pad" style={{
              background: 'white', borderRadius: '16px', padding: '52px 40px',
              border: '1px solid var(--border)', borderTop: '3px solid var(--teal)',
              marginBottom: '24px', textAlign: 'center',
            }}>
              <p style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>
                Pandozab Assistant
              </p>
              <h2 style={{ fontFamily: '"Instrument Serif", serif', fontSize: '1.7rem', fontWeight: 400, color: 'var(--navy)', marginBottom: '40px' }}>
                Ask me anything
              </h2>

              <VapiWidget />

              <div style={{ borderTop: '1px solid var(--border)', margin: '36px 0 28px' }} />

              <p style={{ fontSize: '12px', fontWeight: 500, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>
                Try asking
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
                {questions.map(q => (
                  <span key={q} className="q-chip" style={{
                    background: 'var(--off-white)', border: '1px solid var(--border)',
                    borderRadius: '100px', padding: '7px 15px',
                    fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.4,
                  }}>
                    "{q}"
                  </span>
                ))}
              </div>
            </div>

            <div style={{
              background: 'var(--teal-light)', borderLeft: '3px solid var(--teal)',
              borderRadius: '0 10px 10px 0', padding: '20px 24px',
              display: 'flex', gap: '14px', alignItems: 'flex-start',
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              <div>
                <p style={{ fontSize: '13px', fontWeight: 500, color: 'var(--navy)', marginBottom: '4px' }}>Important notice</p>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>
                  This voice assistant is for informational purposes only and does not constitute medical advice. Always consult your healthcare provider before making any decisions about your medication.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <section style={{ background: 'var(--navy)', padding: '20px 40px', textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', margin: 0 }}>
            This website is intended for informational purposes only. Please consult your healthcare provider before starting any medication.
          </p>
        </section>

      </main>
    </>
  )
}