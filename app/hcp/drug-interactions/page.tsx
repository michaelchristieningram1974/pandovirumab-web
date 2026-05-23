import type { Metadata } from 'next'
import { client } from '../../../sanity.client'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Drug Interactions | pandozab (pandovirumab) HCP',
  description: 'Known drug interactions for pandozab (pandovirumab) including severity levels, clinical effects and management recommendations.',
  keywords: 'pandozab drug interactions, pandovirumab interactions, hypertension medication interactions',
  openGraph: {
    title: 'Drug Interactions | pandozab (pandovirumab) HCP',
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
    mild: { color: '#00857C', bg: '#E6F4F3', label: 'Mild' },
  }

  const severityOrder = ['contraindicated', 'severe', 'moderate', 'mild']

  return (
    <main>
      {/* HCP BANNER */}
      <div style={{
        background: '#1A1A2E',
        color: '#00857C',
        padding: '8px 40px',
        fontSize: '0.8rem',
        fontWeight: 'bold',
        letterSpacing: '0.05em',
        textAlign: 'center',
      }}>
        FOR HEALTHCARE PROFESSIONALS ONLY
      </div>

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #1A1A2E 0%, #003087 100%)',
        color: 'white',
        padding: '60px 40px',
        textAlign: 'center',
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '16px' }}>
          Drug Interactions
        </h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '650px', margin: '0 auto' }}>
          Known interactions with pandozab (pandovirumab) and management recommendations
        </p>
      </section>

      {/* SEVERITY KEY */}
      <section style={{ padding: '30px 40px', background: 'white', borderBottom: '1px solid #e0e0e0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ color: '#555', fontSize: '0.9rem', marginBottom: '12px', fontWeight: 'bold' }}>Severity Key:</p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {severityOrder.map((sev) => (
              <div key={sev} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <div style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: severityConfig[sev]?.color,
                }} />
                <span style={{ fontSize: '0.85rem', color: '#555' }}>
                  {severityConfig[sev]?.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIONS */}
      <section style={{ padding: '60px 40px', background: '#F5F7FA' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {interactions.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#555' }}>
              Drug interaction data coming soon.
            </p>
          ) : (
            severityOrder.map((sev) => {
              const sevInteractions = interactions.filter((i: any) => i.severity === sev)
              if (sevInteractions.length === 0) return null
              const config = severityConfig[sev]

              return (
                <div key={sev} style={{ marginBottom: '50px' }}>
                  <h2 style={{
                    color: config.color,
                    fontSize: '1.4rem',
                    borderBottom: `2px solid ${config.color}`,
                    paddingBottom: '10px',
                    marginBottom: '24px',
                  }}>
                    {config.label}
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {sevInteractions.map((interaction: any) => (
                      <div key={interaction._id} style={{
                        background: 'white',
                        borderRadius: '8px',
                        padding: '28px',
                        boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                        borderLeft: `4px solid ${config.color}`,
                      }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
                          <h3 style={{ color: '#003087', fontSize: '1.1rem', margin: 0 }}>
                            {interaction.drugName}
                          </h3>
                          {interaction.drugClass && (
                            <span style={{
                              background: '#F5F7FA',
                              color: '#555',
                              padding: '4px 12px',
                              borderRadius: '20px',
                              fontSize: '0.8rem',
                            }}>
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
                            <p style={{ color: '#003087', fontWeight: 'bold', fontSize: '0.85rem', margin: '0 0 4px' }}>
                              Clinical Effect:
                            </p>
                            <p style={{ color: '#555', lineHeight: '1.6', margin: 0, fontSize: '0.9rem' }}>
                              {interaction.clinicalEffect}
                            </p>
                          </div>
                        )}

                        {interaction.management && (
                          <div style={{
                            background: config.bg,
                            padding: '12px 16px',
                            borderRadius: '4px',
                            marginTop: '8px',
                          }}>
                            <p style={{ color: config.color, fontWeight: 'bold', fontSize: '0.85rem', margin: '0 0 4px' }}>
                              Management:
                            </p>
                            <p style={{ color: '#555', lineHeight: '1.6', margin: 0, fontSize: '0.9rem' }}>
                              {interaction.management}
                            </p>
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
      <section style={{ padding: '40px', textAlign: 'center', background: 'white' }}>
        <a href="/hcp/home" style={{
          color: '#003087',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '0.95rem',
        }}>
          ← Back to HCP Portal
        </a>
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