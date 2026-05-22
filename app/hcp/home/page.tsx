import type { Metadata } from 'next'
import { client } from '../../../sanity.client'
import { theme } from '../../../theme'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'HCP Home | Pandovab (pandovirumab)',
  description: 'Clinical information for healthcare professionals about Pandovab (pandovirumab) including trial data, dosing and prescribing information.',
  keywords: 'Pandovab HCP, pandovirumab clinical data, prescribing information',
  openGraph: {
    title: 'HCP Home | Pandovab (pandovirumab)',
    description: 'Clinical information for healthcare professionals.',
    type: 'website',
  },
}

async function getProduct() {
  return client.fetch(`*[_type == "product"][0]{ name, tagline, indication }`)
}

export default async function HCPHomePage() {
  const product = await getProduct()

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
            Clinical Information
          </p>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', lineHeight: '1.15', marginBottom: '24px', color: '#1A1A1A', fontFamily: 'Georgia, serif', maxWidth: '700px' }}>
            Pandovab Clinical Portal
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: '1.7', maxWidth: '700px' }}>
            {product?.indication ?? 'Pandovab (pandovirumab) is indicated for the treatment of hypertension in adults.'}
          </p>
        </div>
      </section>

      {/* HCP NAV CARDS */}
      <section style={{ background: '#FFFFFF', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#0000CC', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Clinical Resources
          </p>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#1A1A1A', marginBottom: '60px', fontFamily: 'Georgia, serif' }}>
            Access the full range of clinical information
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
            {[
              { icon: '🔬', title: 'Clinical Trials', description: 'Phase I-IV trial data, primary endpoints, results and publications', href: '/hcp/clinical-trials' },
              { icon: '💊', title: 'Dosing Guide', description: 'Standard dosing, special populations, renal and hepatic impairment', href: '/hcp/dosing' },
              { icon: '⚠️', title: 'Drug Interactions', description: 'Known interactions, severity levels and management recommendations', href: '/hcp/drug-interactions' },
              { icon: '📋', title: 'Case Studies', description: 'Clinical case studies with patient profiles and treatment outcomes', href: '/hcp/case-studies' },
              { icon: '📄', title: 'Prescribing Information', description: 'Full prescribing information, SmPC and patient information leaflet', href: '/hcp/prescribing-info' },
              { icon: '📊', title: 'Real World Evidence', description: 'Observational studies and real world outcomes data', href: '/hcp/real-world-evidence' },
            ].map((card) => (
              <a key={card.href} href={card.href} style={{ textDecoration: 'none', borderTop: '3px solid #0000CC', paddingTop: '24px', display: 'block' }}>
                <div style={{ fontSize: '2rem', marginBottom: '16px' }}>{card.icon}</div>
                <h3 style={{ color: '#1A1A1A', fontSize: '1.2rem', marginBottom: '10px', fontWeight: '700', fontFamily: 'Georgia, serif' }}>
                  {card.title}
                </h3>
                <p style={{ color: '#555', lineHeight: '1.7', fontSize: '0.95rem', margin: '0 0 16px' }}>
                  {card.description}
                </p>
                <span style={{ color: '#0000CC', fontWeight: '600', fontSize: '0.9rem' }}>
                  View {card.title} →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* IMPORTANT SAFETY INFO */}
      <section style={{ background: '#F5F5F5', padding: '60px 40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ borderLeft: '4px solid #0000CC', paddingLeft: '24px' }}>
            <h3 style={{ color: '#1A1A1A', marginBottom: '12px', fontSize: '1.1rem', fontWeight: '700' }}>
              ⚠️ Important Safety Information
            </h3>
            <p style={{ color: '#555', lineHeight: '1.8', margin: '0 0 12px', fontSize: '0.95rem' }}>
              Pandovab is contraindicated in patients with known hypersensitivity to pandovirumab or any excipients. Use with caution in patients with severe renal or hepatic impairment.
            </p>
            <p style={{ color: '#555', lineHeight: '1.8', margin: 0, fontSize: '0.95rem' }}>
              Please refer to the full <a href="/hcp/prescribing-info" style={{ color: '#0000CC', fontWeight: '600' }}>Prescribing Information</a> before prescribing.
            </p>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section style={{ background: '#1A1A1A', color: '#888', padding: '20px 40px', textAlign: 'center', fontSize: '0.8rem' }}>
        <p>This information is intended for healthcare professionals only. For patient information please visit the <a href="/" style={{ color: '#888', textDecoration: 'underline' }}>main site</a>.</p>
      </section>
    </main>
  )
}