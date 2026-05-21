import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Voice Assistant | Pandovab (pandovirumab)',
  description: 'Ask our AI voice assistant anything about Pandovab (pandovirumab). Get instant answers about dosing, side effects, and more.',
  keywords: 'Pandovab voice assistant, pandovirumab AI assistant, medication information voice',
  openGraph: {
    title: 'Voice Assistant | Pandovab (pandovirumab)',
    description: 'Ask our AI voice assistant about Pandovab.',
    type: 'website',
  },
}

export default function VoiceAssistantPage() {
  return (
    <main>
      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #003087 0%, #00857C 100%)',
        color: 'white',
        padding: '80px 40px',
        textAlign: 'center',
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
          Pandovab Voice Assistant
        </h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '650px', margin: '0 auto' }}>
          Ask our AI voice assistant anything about Pandovab. Get instant answers about dosing, side effects, how it works and more.
        </p>
      </section>

      {/* VOICE AGENT */}
      <section style={{ padding: '80px 40px', background: '#F5F7FA' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>

          {/* INSTRUCTIONS */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
            marginBottom: '60px',
          }}>
            {[
              { icon: '🎤', title: 'Click to Start', description: 'Click the microphone button to start a conversation' },
              { icon: '🗣️', title: 'Ask Anything', description: 'Ask about dosing, side effects, how it works and more' },
              { icon: '⚡', title: 'Instant Answers', description: 'Get immediate AI-powered responses about Pandovab' },
            ].map((item) => (
              <div key={item.title} style={{
                background: 'white',
                padding: '30px 20px',
                borderRadius: '8px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                borderTop: '4px solid #00857C',
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{item.icon}</div>
                <h3 style={{ color: '#003087', fontSize: '1rem', marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>{item.description}</p>
              </div>
            ))}
          </div>

          {/* ELEVENLABS WIDGET */}
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '50px 40px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
            borderTop: '4px solid #003087',
            marginBottom: '40px',
          }}>
            <h2 style={{ color: '#003087', fontSize: '1.5rem', marginBottom: '8px' }}>
              Ask Pandovab Assistant
            </h2>
            <p style={{ color: '#555', marginBottom: '40px', fontSize: '0.95rem' }}>
              Powered by ElevenLabs AI
            </p>

            {/* ELEVENLABS EMBED */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <elevenlabs-convai agent-id="agent_1501kr3j7m7kf85t6dscbkgehpmh"></elevenlabs-convai>
            </div>
          </div>

          {/* SAMPLE QUESTIONS */}
          <div style={{
            background: 'white',
            borderRadius: '8px',
            padding: '30px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            textAlign: 'left',
          }}>
            <h3 style={{ color: '#003087', fontSize: '1.1rem', marginBottom: '16px' }}>
              Try asking:
            </h3>
            <ul style={{ margin: 0, paddingLeft: '20px', color: '#555', lineHeight: '2', fontSize: '0.95rem' }}>
              <li>"What is Pandovab used for?"</li>
              <li>"What are the common side effects of Pandovab?"</li>
              <li>"How does Pandovab work?"</li>
              <li>"What is the recommended dose of Pandovab?"</li>
              <li>"Can I take Pandovab with other blood pressure medications?"</li>
            </ul>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section style={{ padding: '40px', background: 'white' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{
            background: '#E6F4F3',
            borderLeft: '4px solid #00857C',
            padding: '24px',
            borderRadius: '8px',
          }}>
            <h3 style={{ color: '#003087', marginBottom: '8px', fontSize: '1rem' }}>
              ⚠️ Important Notice
            </h3>
            <p style={{ color: '#555', lineHeight: '1.8', margin: 0, fontSize: '0.9rem' }}>
              This voice assistant is for informational purposes only and does not constitute medical advice. Always consult your healthcare provider before making any decisions about your medication.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER DISCLAIMER */}
      <section style={{
        background: '#1A1A2E',
        color: '#aaa',
        padding: '20px 40px',
        textAlign: 'center',
        fontSize: '0.8rem',
      }}>
        <p>This website is intended for informational purposes only. Please consult your healthcare provider before starting any medication.</p>
      </section>
    </main>
  )
}