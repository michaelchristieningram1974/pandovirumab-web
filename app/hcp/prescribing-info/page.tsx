import type { Metadata } from 'next'
import { client } from '../../../sanity.client'

export const metadata: Metadata = {
  title: 'Prescribing Information | Pandovab (pandovirumab) HCP',
  description: 'Full prescribing information for Pandovab (pandovirumab) including SmPC, patient information leaflet and regional prescribing documents.',
  keywords: 'Pandovab prescribing information, pandovirumab SmPC, hypertension prescribing guide',
  openGraph: {
    title: 'Prescribing Information | Pandovab (pandovirumab) HCP',
    description: 'Prescribing information for healthcare professionals.',
    type: 'website',
  },
}

async function getPrescribingInfo() {
  return client.fetch(`*[_type == "prescribingInfo"] | order(lastUpdated desc) {
    _id,
    title,
    version,
    lastUpdated,
    region,
    summary,
    audience,
    document {
      asset -> {
        url
      }
    }
  }`)
}

export default async function PrescribingInfoPage() {
  const documents = await getPrescribingInfo()

  const regionLabels: Record<string, string> = {
    global: 'Global',
    us: 'United States',
    eu: 'European Union',
    uk: 'United Kingdom',
  }

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
          Prescribing Information
        </h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '650px', margin: '0 auto' }}>
          Full prescribing information and regulatory documents for Pandovab (pandovirumab)
        </p>
      </section>

      {/* IMPORTANT NOTICE */}
      <section style={{ padding: '30px 40px', background: '#fff3cd', borderBottom: '1px solid #ffc107' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ color: '#856404', margin: 0, fontSize: '0.95rem', lineHeight: '1.7' }}>
            ⚠️ <strong>Important:</strong> Please read the full prescribing information before prescribing Pandovab. This information is intended for healthcare professionals only and should not be shared with patients without appropriate guidance.
          </p>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section style={{ padding: '80px 40px', background: '#F5F7FA' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {documents.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#555' }}>
              Prescribing documents coming soon.
            </p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {documents.map((doc: any) => (
                <div key={doc._id} style={{
                  background: 'white',
                  borderRadius: '8px',
                  padding: '32px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  borderLeft: '4px solid #003087',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '20px',
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '12px' }}>
                      {doc.region && (
                        <span style={{
                          background: '#003087',
                          color: 'white',
                          padding: '4px 12px',
                          borderRadius: '20px',
                          fontSize: '0.8rem',
                          fontWeight: 'bold',
                        }}>
                          {regionLabels[doc.region] ?? doc.region}
                        </span>
                      )}
                      {doc.version && (
                        <span style={{
                          background: '#E6F4F3',
                          color: '#00857C',
                          padding: '4px 12px',
                          borderRadius: '20px',
                          fontSize: '0.8rem',
                          fontWeight: 'bold',
                        }}>
                          {doc.version}
                        </span>
                      )}
                    </div>

                    <h2 style={{ color: '#003087', fontSize: '1.3rem', marginBottom: '10px' }}>
                      {doc.title}
                    </h2>

                    {doc.lastUpdated && (
                      <p style={{ color: '#888', fontSize: '0.85rem', marginBottom: '12px' }}>
                        Last updated: {new Date(doc.lastUpdated).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </p>
                    )}

                    {doc.summary && (
                      <p style={{ color: '#555', lineHeight: '1.7', fontSize: '0.95rem', margin: 0 }}>
                        {doc.summary}
                      </p>
                    )}
                  </div>

                  {doc.document?.asset?.url && (
                    <a href={doc.document.asset.url} target="_blank" rel="noopener noreferrer" style={{
                      background: '#003087',
                      color: 'white',
                      padding: '12px 24px',
                      borderRadius: '4px',
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      fontSize: '0.9rem',
                      whiteSpace: 'nowrap',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}>
                      📄 Download PDF
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* REPORTING */}
      <section style={{ padding: '60px 40px', background: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            background: '#E6F4F3',
            borderLeft: '4px solid #00857C',
            padding: '30px',
            borderRadius: '8px',
          }}>
            <h3 style={{ color: '#003087', marginBottom: '12px', fontSize: '1.1rem' }}>
              Adverse Event Reporting
            </h3>
            <p style={{ color: '#555', lineHeight: '1.8', margin: 0, fontSize: '0.95rem' }}>
              Healthcare professionals are asked to report any suspected adverse reactions via their national reporting scheme. Adverse events can also be reported directly to us at <a href="mailto:safety@pandovab.com" style={{ color: '#00857C', fontWeight: 'bold' }}>safety@pandovab.com</a>
            </p>
          </div>
        </div>
      </section>

      {/* BACK TO HCP */}
      <section style={{ padding: '40px', textAlign: 'center', background: '#F5F7FA' }}>
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