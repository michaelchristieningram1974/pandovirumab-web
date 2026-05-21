import type { Metadata } from 'next'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Healthcare Professional Portal | Pandovab (pandovirumab)',
  description: 'Access clinical information about Pandovab (pandovirumab) including clinical trial data, dosing guidance, drug interactions and prescribing information.',
  keywords: 'Pandovab HCP, pandovirumab prescribing information, clinical trials, dosing guide',
  openGraph: {
    title: 'Healthcare Professional Portal | Pandovab (pandovirumab)',
    description: 'Clinical information for healthcare professionals.',
    type: 'website',
  },
}

export default function HCPGatePage() {
  return (
    <main>
      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #003087 0%, #00857C 100%)',
        color: 'white',
        padding: '80px 40px',
        textAlign: 'center',
      }}>
        <p style={{ fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.8, marginBottom: '16px' }}>
          Pandovab
        </p>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
          Healthcare Professional Portal
        </h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
          This section contains clinical and scientific information intended for healthcare professionals only.
        </p>
      </section>

      {/* GATE */}
      <section style={{ padding: '80px 40px', background: '#F5F7FA' }}>
        <div style={{
          maxWidth: '700px',
          margin: '0 auto',
          background: 'white',
          borderRadius: '8px',
          padding: '50px',
          boxShadow: '0 2px 20px rgba(0,0,0,0.08)',
          borderTop: '4px solid #003087',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '24px' }}>🏥</div>
          <h2 style={{ color: '#003087', fontSize: '1.8rem', marginBottom: '16px' }}>
            Confirmation Required
          </h2>
          <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '16px', fontSize: '0.95rem' }}>
            The information in this section is intended exclusively for healthcare professionals including doctors, pharmacists, nurses and other medical practitioners.
          </p>
          <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '32px', fontSize: '0.95rem' }}>
            By clicking the button below, you confirm that:
          </p>
          <ul style={{
            textAlign: 'left',
            color: '#555',
            lineHeight: '2',
            marginBottom: '40px',
            paddingLeft: '24px',
            fontSize: '0.95rem',
          }}>
            <li>You are a qualified healthcare professional</li>
            <li>You are accessing this information in your professional capacity</li>
            <li>You understand this information is not intended for patients or the general public</li>
            <li>You are located in a country where Pandovab is approved for use</li>
          </ul>

          <a href="/hcp/home" style={{
            display: 'inline-block',
            background: '#003087',
            color: 'white',
            padding: '16px 48px',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1rem',
            marginBottom: '16px',
          }}>
            I am a Healthcare Professional — Enter
          </a>

          <div style={{ marginTop: '16px' }}>
            <a href="/" style={{
              color: '#888',
              textDecoration: 'none',
              fontSize: '0.9rem',
            }}>
              I am not a healthcare professional — Return to patient site
            </a>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section style={{
        background: '#1A1A2E',
        color: '#aaa',
        padding: '20px 40px',
        textAlign: 'center',
        fontSize: '0.8rem',
      }}>
        <p>This section is intended for healthcare professionals only. If you are a patient, please return to the main site.</p>
      </section>
    </main>
  )
}