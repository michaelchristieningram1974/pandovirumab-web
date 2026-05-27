import type { Metadata } from 'next'
import { theme } from '../../theme'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Healthcare Professional Portal | Pandozab (pandovirumab)',
  description: 'Access clinical information about Pandozab (pandovirumab) including clinical trial data, dosing guidance, drug interactions and prescribing information.',
  keywords: 'Pandozab HCP, pandovirumab prescribing information, clinical trials, dosing guide',
  openGraph: {
    title: 'Healthcare Professional Portal | Pandozab (pandovirumab)',
    description: 'Clinical information for healthcare professionals.',
    type: 'website',
  },
}

export default function HCPGatePage() {
  return (
    <main>

      {/* HCP BANNER */}
      <div style={{ background: '#0000CC', color: 'white', padding: '10px 40px', fontSize: '0.75rem', textAlign: 'center', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '700' }}>
        For Healthcare Professionals Only — Restricted Access
      </div>

      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #0a1628 60%, #003087 100%)', padding: '120px 40px', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: 'rgba(0,200,150,0.15)', border: '1px solid rgba(0,200,150,0.4)', color: '#00C896', padding: '6px 16px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.1em', marginBottom: '32px', textTransform: 'uppercase' as const }}>
            HCP Portal
          </div>
          <h1 style={{ fontSize: '4rem', fontWeight: '900', lineHeight: '1.05', marginBottom: '32px', textTransform: 'uppercase' as const, maxWidth: '700px' }}>
            <span style={{ color: '#00C896' }}>CLINICAL DATA.</span><br />
            <span style={{ color: '#00C896' }}>FULL EVIDENCE.</span><br />
            <span style={{ color: 'white' }}>FOR PROFESSIONALS.</span>
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.85, lineHeight: '1.7', marginBottom: '16px', maxWidth: '550px' }}>
            Access comprehensive prescribing information, Phase III trial results, dosing guides and drug interaction data for pandozab (pandovirumab).
          </p>
          <p style={{ fontSize: '0.95rem', opacity: 0.65, lineHeight: '1.8', marginBottom: '48px', maxWidth: '550px' }}>
            This section is intended exclusively for licensed healthcare professionals including physicians, pharmacists and nurses.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' as const }}>
            <a href="#confirm" style={{ background: '#00C896', color: '#0a1628', padding: '14px 32px', borderRadius: '50px', fontWeight: '700', fontSize: '0.9rem', textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' as const }}>
              Enter HCP Portal →
            </a>
            <a href="/" style={{ background: 'transparent', color: 'white', padding: '14px 32px', borderRadius: '50px', fontWeight: '700', fontSize: '0.9rem', textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' as const, border: '2px solid rgba(255,255,255,0.4)' }}>
              Patient Site
            </a>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section style={{ background: '#0000CC', padding: '40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', textAlign: 'center' as const }}>
          {[
            { stat: '3', label: 'Phase III clinical trials' },
            { stat: '4,200+', label: 'patients enrolled across trials' },
            { stat: '87%', label: 'achieved target blood pressure' },
            { stat: '18', label: 'approved markets globally' },
          ].map((item, i) => (
            <div key={i}>
              <p style={{ color: '#00C896', fontSize: '2.5rem', fontWeight: '900', fontFamily: 'Georgia, serif', margin: '0 0 8px' }}>{item.stat}</p>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', margin: 0, lineHeight: '1.5' }}>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT'S IN THE HCP PORTAL */}
      <section style={{ background: '#FFFFFF', padding: '100px 40px', textAlign: 'center' as const }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#0a1628', marginBottom: '16px', textTransform: 'uppercase' as const }}>
            WHAT'S IN THE <span style={{ color: '#0000CC' }}>HCP PORTAL?</span>
          </h2>
          <p style={{ color: '#888', fontSize: '1rem', marginBottom: '60px', lineHeight: '1.7' }}>
            Everything you need to prescribe pandozab with confidence
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', textAlign: 'left' as const }}>
            {[
              { num: '01', title: 'Phase III Trial Data', desc: 'Full efficacy and safety results from the pivotal PANDORA-1, -2 and -3 studies.' },
              { num: '02', title: 'Dosing & Administration', desc: 'Recommended dosing regimens, titration guidance and special population considerations.' },
              { num: '03', title: 'Drug Interactions', desc: 'Comprehensive interaction profiles and contraindication information.' },
              { num: '04', title: 'Prescribing Information', desc: 'Full SmPC and patient information leaflet for clinical use.' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#F5F5F5', padding: '32px', borderRadius: '12px' }}>
                <div style={{ color: '#00C896', fontSize: '2rem', fontWeight: '900', marginBottom: '16px', fontFamily: 'Georgia, serif' }}>{item.num}</div>
                <h3 style={{ color: '#0a1628', fontSize: '1rem', fontWeight: '700', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ color: '#555', lineHeight: '1.7', fontSize: '0.9rem', margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONFIRMATION GATE */}
      <section id="confirm" style={{ background: '#F5F5F5', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#0a1628', marginBottom: '16px', textTransform: 'uppercase' as const, textAlign: 'center' as const }}>
            CONFIRM YOUR <span style={{ color: '#0000CC' }}>PROFESSIONAL STATUS</span>
          </h2>
          <p style={{ color: '#888', fontSize: '1rem', marginBottom: '60px', lineHeight: '1.7', textAlign: 'center' as const }}>
            Please confirm the following before entering the HCP portal
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '60px' }}>
            {[
              { title: 'You are a qualified healthcare professional', desc: 'Including physicians, pharmacists, nurses and other licensed medical practitioners.' },
              { title: 'You are acting in a professional capacity', desc: 'This information is being accessed for clinical or prescribing purposes only.' },
              { title: 'Content is not for patients', desc: 'You understand this material is not intended for patients or the general public.' },
              { title: 'Pandozab is approved in your country', desc: 'You are located in a jurisdiction where pandozab is approved for use.' },
            ].map((item, i) => (
              <div key={i} style={{ borderTop: '3px solid #0000CC', paddingTop: '24px' }}>
                <h3 style={{ color: '#0a1628', fontSize: '1rem', fontWeight: '700', marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: '1.7', margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' as const, display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: '20px' }}>
            <a href="/hcp/home" style={{ background: '#0000CC', color: 'white', padding: '16px 40px', borderRadius: '50px', fontWeight: '700', fontSize: '0.95rem', textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' as const, display: 'inline-block' }}>
              I Confirm — Enter HCP Portal →
            </a>
            <a href="/" style={{ color: '#888', fontSize: '0.9rem', textDecoration: 'none', fontWeight: '600' }}>
              I am not a healthcare professional — Return to patient site
            </a>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section style={{ background: '#1A1A1A', color: '#888', padding: '20px 40px', textAlign: 'center' as const, fontSize: '0.8rem' }}>
        <p>This section is intended for healthcare professionals only. If you are a patient, please return to the <a href="/" style={{ color: '#888', textDecoration: 'underline' }}>main site</a>.</p>
      </section>

    </main>
  )
}