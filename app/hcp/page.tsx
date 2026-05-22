import type { Metadata } from 'next'
import { theme } from '../../theme'

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
      {/* HCP BANNER */}
      <div style={{ background: '#1A1A1A', color: '#888', padding: '8px 40px', fontSize: '0.8rem', textAlign: 'center', letterSpacing: '0.05em' }}>
        FOR HEALTHCARE PROFESSIONALS ONLY
      </div>

      {/* HERO */}
      <section style={{ background: '#F5F5F5', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#0000CC', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
            HCP Portal
          </p>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', lineHeight: '1.15', marginBottom: '24px', color: '#1A1A1A', fontFamily: 'Georgia, serif', maxWidth: '700px' }}>
            Healthcare Professional Portal
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: '1.7', maxWidth: '600px' }}>
            This section contains clinical and scientific information intended for healthcare professionals only.
          </p>
        </div>
      </section>

      {/* GATE */}
      <section style={{ background: '#FFFFFF', padding: '100px 40px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', borderTop: '3px solid #0000CC', paddingTop: '40px' }}>
          <h2 style={{ color: '#1A1A1A', fontSize: '2rem', fontWeight: '800', marginBottom: '24px', fontFamily: 'Georgia, serif' }}>
            Confirmation Required
          </h2>
          <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '16px', fontSize: '0.95rem' }}>
            The information in this section is intended exclusively for healthcare professionals including doctors, pharmacists, nurses and other medical practitioners.
          </p>
          <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '32px', fontSize: '0.95rem' }}>
            By clicking the button below, you confirm that:
          </p>
          <ul style={{ color: '#555', lineHeight: '2', marginBottom: '40px', paddingLeft: '24px', fontSize: '0.95rem' }}>
            <li>You are a qualified healthcare professional</li>
            <li>You are accessing this information in your professional capacity</li>
            <li>You understand this information is not intended for patients or the general public</li>
            <li>You are located in a country where Pandovab is approved for use</li>
          </ul>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
            <a href="/hcp/home" style={{ ...theme.buttons.primary }}>
              I am a Healthcare Professional — Enter
            </a>
            <a href="/" style={{ color: '#888', fontSize: '0.9rem' }}>
              I am not a healthcare professional — Return to patient site
            </a>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section style={{ background: '#1A1A1A', color: '#888', padding: '20px 40px', textAlign: 'center', fontSize: '0.8rem' }}>
        <p>This section is intended for healthcare professionals only. If you are a patient, please return to the <a href="/" style={{ color: '#888', textDecoration: 'underline' }}>main site</a>.</p>
      </section>
    </main>
  )
}