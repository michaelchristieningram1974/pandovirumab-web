import type { Metadata } from 'next'
import { client } from '../../../sanity.client'

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
      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #1A1A2E 0%, #003087 100%)',
        color: 'white',
        padding: '60px 40px',
        textAlign: 'center',
      }}>
        <div style={{
          display: 'inline-block',
          background: '#00857C',
          color: 'white',
          padding: '6px 16px',
          borderRadius: '20px',
          fontSize: '0.8rem',
          fontWeight: 'bold',
          letterSpacing: '0.05em',
          marginBottom: '20px',
        }}>
          FOR HEALTHCARE PROFESSIONALS ONLY
        </div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '16px' }}>
          Pandovab Clinical Information
        </h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto' }}>
          {product?.indication ?? 'Pandovab (pandovirumab) is indicated for the treatment of hypertension in adults.'}
        </p>
      </section>

      {/* HCP NAV CARDS */}
      <section style={{ padding: '80px 40px', background: '#F5F7FA' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', color: '#003087', fontSize: '2rem', marginBottom: '12px' }}>
            Clinical Resources
          </h2>
          <p style={{ textAlign: 'center', color: '#555', marginBottom: '50px', fontSize: '1.05rem' }}>
            Access the full range of clinical information for Pandovab
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}>
            {[
              {
                icon: '🔬',
                title: 'Clinical Trials',
                description: 'Phase I-IV trial data, primary endpoints, results and publications',
                href: '/hcp/clinical-trials',
                color: '#003087',
              },
              {
                icon: '💊',
                title: 'Dosing Guide',
                description: 'Standard dosing, special populations, renal and hepatic impairment',
                href: '/hcp/dosing',
                color: '#00857C',
              },
              {
                icon: '⚠️',
                title: 'Drug Interactions',
                description: 'Known interactions, severity levels and management recommendations',
                href: '/hcp/drug-interactions',
                color: '#003087',
              },
              {
                icon: '📋',
                title: 'Case Studies',
                description: 'Clinical case studies with patient profiles and treatment outcomes',
                href: '/hcp/case-studies',
                color: '#00857C',
              },
              {
                icon: '📄',
                title: 'Prescribing Information',
                description: 'Full prescribing information, SmPC and patient information leaflet',
                href: '/hcp/prescribing-info',
                color: '#003087',
              },
              {
                icon: '📊',
                title: 'Real World Evidence',
                description: 'Observational studies and real world outcomes data',
                href: '/hcp/real-world-evidence',
                color: '#00857C',
              },
            ].map((card) => (
              <a key={card.href} href={card.href} style={{
                textDecoration: 'none',
                background: 'white',
                padding: '36px 30px',
                borderRadius: '8px',
                borderTop: `4px solid ${card.color}`,
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                display: 'block',
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '16px' }}>{card.icon}</div>
                <h3 style={{ color: '#003087', fontSize: '1.2rem', marginBottom: '10px' }}>
                  {card.title}
                </h3>
                <p style={{ color: '#555', lineHeight: '1.7', fontSize: '0.95rem', margin: 0 }}>
                  {card.description}
                </p>
                <div style={{ marginTop: '20px', color: card.color, fontWeight: 'bold', fontSize: '0.9rem' }}>
                  View {card.title} →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* IMPORTANT SAFETY INFO */}
      <section style={{ padding: '60px 40px', background: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            background: '#fff3cd',
            border: '1px solid #ffc107',
            borderRadius: '8px',
            padding: '30px',
          }}>
            <h3 style={{ color: '#856404', marginBottom: '12px', fontSize: '1.1rem' }}>
              ⚠️ Important Safety Information
            </h3>
            <p style={{ color: '#555', lineHeight: '1.8', margin: '0 0 12px', fontSize: '0.95rem' }}>
              Pandovab is contraindicated in patients with known hypersensitivity to pandovirumab or any excipients. Use with caution in patients with severe renal or hepatic impairment.
            </p>
            <p style={{ color: '#555', lineHeight: '1.8', margin: 0, fontSize: '0.95rem' }}>
              Please refer to the full <a href="/hcp/prescribing-info" style={{ color: '#003087', fontWeight: 'bold' }}>Prescribing Information</a> before prescribing.
            </p>
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
        <p>This information is intended for healthcare professionals only. For patient information please visit the <a href="/" style={{ color: '#00857C' }}>main site</a>.</p>
      </section>
    </main>
  )
}