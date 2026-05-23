import type { Metadata } from 'next'
import { client } from '../../../sanity.client'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Drug Interactions | Pandozab (pandovirumab) HCP',
  description: 'Known drug interactions for Pandozab (pandovirumab) including severity levels, clinical effects and management recommendations.',
  keywords: 'Pandozab drug interactions, pandovirumab interactions, hypertension medication interactions',
  openGraph: {
    title: 'Drug Interactions | Pandozab (pandovirumab) HCP',
    description: 'Drug interaction data for healthcare professionals.',
    type: 'website',
  },
}

async function getDrugInteractions() {
  return client.fetch(`*[_type == "drugInteraction"] | order(severity asc) {
    _id,
    drugName,
    severity,
    drugClass,
    description,
    clinicalEffect,
    management,
    references
  }`)
}

export default async function DrugInteractionsPage() {
  const interactions = await getDrugInteractions()

  const severityConfig: Record<string, { color: string, bg: string, label: string }> = {
    contraindicated: { color: '#c0392b', bg: '#fff3f3', label: 'Contraindicated' },
    severe: { color: '#c0392b', bg: '#fff3f3', label: 'Severe' },
    moderate: { color: '#e67e22', bg: '#fff8f0', label: 'Moderate' },
    mild: { color: '#0000CC', bg: '#f0f0ff', label: 'Mild' },
  }

  const severityOrder = ['contraindicated', 'severe', 'moderate', 'mild']

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
            Safety Information
          </p>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', lineHeight: '1.15', marginBottom: '24px', color: '#1A1A1A', fontFamily: 'Georgia, serif', maxWidth: '700px' }}>
            Drug Interactions
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: '1.7', maxWidth: '600px' }}>
            Known interactions with Pandozab (pandovirumab) and management recommendations
          </p>
        </div>
      </section>

      {/* SEVERITY KEY */}
      <section style={{ padding: '24px 40px', background: 'white', borderBottom: '1px solid #E0E0E0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '32px', flexWrap: 'wrap', alignItems: 'center' }}>
          <p style={{ color: '#888', fontSize: '0.85rem', fontWeight: '600', margin: 0 }}>Severity:</p>
          {severityOrder.map((sev) => (
            <div key={sev} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: severityConfig[sev]?.color }} />
              <span style={{ fontSize: '0.85rem', color: '#555' }}>{severityConfig[sev]?.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIONS */}
      <section style={{ background: '#FFFFFF', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {interactions.length === 0 ? (
            <p style={{ color: '#555' }}>Drug interaction data coming soon.</p>
          ) : (
            severityOrder.map((sev) => {
              const sevInteractions = interactions.filter((i: any) => i.severity === sev)
              if (sevInteractions.length === 0) return null
              const config = severityConfig[sev]
              return (
                <div key={sev} style={{ marginBottom: '60px' }}>
                  <h2 style={{
                    color: config.color,
                    fontSize: '1.5rem',
                    fontWeight: '800',
                    fontFamily: 'Georgia, serif',
                    borderTop: `3px solid ${config.color}`,
                    paddingTop: '24px',
                    marginBottom: '32px',
                  }}>
                    {config.label}
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    {sevInteractions.map((interaction: any) => (
                      <div key={interaction._id} style={{
                        background: '#F5F5F5',
                        borderRadius: '8px',
                        padding: '28px',
                        borderLeft: `4px solid ${config.color}`,
                      }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
                          <h3 style={{ color: '#1A1A1A', fontSize: '1.1rem', margin: 0, fontWeight: '700' }}>
                            {interaction.drugName}
                          </h3>
                          {interaction.drugClass && (
                            <span style={{ background: 'white', color: '#555', padding: '4px 12px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: '600' }}>
                              {interaction.drugClass}
                            </span>
                          )}
                        </div>
                        {interaction.description && (
                          <p style={{ color: '#555', lineHeight: '1.7', margin: '0 0 12px', fontSize: '0.95rem' }}>
                            {interaction.description}
                          </p>
                        )}
                        {interaction.clinicalEffect && (
                          <div style={{ marginBottom: '12px' }}>
                            <p style={{ color: '#1A1A1A', fontWeight: '700', fontSize: '0.85rem', margin: '0 0 4px' }}>Clinical Effect:</p>
                            <p style={{ color: '#555', lineHeight: '1.6', margin: 0, fontSize: '0.9rem' }}>{interaction.clinicalEffect}</p>
                          </div>
                        )}
                        {interaction.management && (
                          <div style={{ background: config.bg, padding: '12px 16px', borderRadius: '4px', marginTop: '8px' }}>
                            <p style={{ color: config.color, fontWeight: '700', fontSize: '0.85rem', margin: '0 0 4px' }}>Management:</p>
                            <p style={{ color: '#555', lineHeight: '1.6', margin: 0, fontSize: '0.9rem' }}>{interaction.management}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })
          )}
        </div>
      </section>

      {/* BACK TO HCP */}
      <section style={{ padding: '40px', textAlign: 'center', background: '#F5F5F5' }}>
        <a href="/hcp/home" style={{ color: '#0000CC', fontWeight: '600', fontSize: '0.95rem' }}>
          ← Back to HCP Portal
        </a>
      </section>

      {/* DISCLAIMER */}
      <section style={{ background: '#1A1A1A', color: '#888', padding: '20px 40px', textAlign: 'center', fontSize: '0.8rem' }}>
        <p>This information is intended for healthcare professionals only. For patient information please visit the <a href="/" style={{ color: '#888', textDecoration: 'underline' }}>main site</a>.</p>
      </section>
    </main>
  )
}