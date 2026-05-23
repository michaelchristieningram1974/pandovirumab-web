import type { Metadata } from 'next'
import { client } from '../../../sanity.client'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Prescribing Information | Pandozab (pandovirumab) HCP',
  description: 'Full prescribing information for Pandozab (pandovirumab) including SmPC, patient information leaflet and regional prescribing documents.',
  keywords: 'Pandozab prescribing information, pandovirumab SmPC, hypertension prescribing guide',
  openGraph: {
    title: 'Prescribing Information | Pandozab (pandovirumab) HCP',
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
      <div style={{ background: '#1A1A1A', color: '#888', padding: '8px 40px', fontSize: '0.8rem', textAlign: 'center', letterSpacing: '0.05em' }}>
        FOR HEALTHCARE PROFESSIONALS ONLY
      </div>

      {/* HERO */}
      <section style={{ background: '#F5F5F5', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#0000CC', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
            Regulatory Documents
          </p>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', lineHeight: '1.15', marginBottom: '24px', color: '#1A1A1A', fontFamily: 'Georgia, serif', maxWidth: '700px' }}>
            Prescribing Information
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: '1.7', maxWidth: '600px' }}>
            Full prescribing information and regulatory documents for Pandozab (pandovirumab)
          </p>
        </div>
      </section>

      {/* IMPORTANT NOTICE */}
      <section style={{ padding: '24px 40px', background: '#fff3cd', borderBottom: '1px solid #ffc107' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#856404', margin: 0, fontSize: '0.95rem', lineHeight: '1.7' }}>
            ⚠️ <strong>Important:</strong> Please read the full prescribing information before prescribing Pandozab. This information is intended for healthcare professionals only.
          </p>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section style={{ background: '#FFFFFF', padding: '100px 40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {documents.length === 0 ? (
            <p style={{ color: '#555' }}>Prescribing documents coming soon.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {documents.map((doc: any) => (
                <div key={doc._id} style={{
                  borderTop: '3px solid #0000CC',
                  paddingTop: '32px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '24px',
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '12px' }}>
                      {doc.region && (
                        <span style={{ background: '#0000CC', color: 'white', padding: '4px 14px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: '600' }}>
                          {regionLabels[doc.region] ?? doc.region}
                        </span>
                      )}
                      {doc.version && (
                        <span style={{ background: '#F5F5F5', color: '#555', padding: '4px 14px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: '600' }}>
                          {doc.version}
                        </span>
                      )}
                    </div>
                    <h2 style={{ color: '#1A1A1A', fontSize: '1.4rem', marginBottom: '10px', fontWeight: '800', fontFamily: 'Georgia, serif' }}>
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
                      background: '#0000CC',
                      color: 'white',
                      padding: '12px 24px',
                      borderRadius: '50px',
                      textDecoration: 'none',
                      fontWeight: '600',
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

      {/* ADVERSE EVENT REPORTING */}
      <section style={{ background: '#F5F5F5', padding: '60px 40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ borderLeft: '4px solid #0000CC', paddingLeft: '24px' }}>
            <h3 style={{ color: '#1A1A1A', marginBottom: '12px', fontSize: '1.1rem', fontWeight: '700' }}>
              Adverse Event Reporting
            </h3>
            <p style={{ color: '#555', lineHeight: '1.8', margin: 0, fontSize: '0.95rem' }}>
              Healthcare professionals are asked to report any suspected adverse reactions via their national reporting scheme. Adverse events can also be reported directly to us at{' '}
              <a href="mailto:safety@pandozab.com" style={{ color: '#0000CC', fontWeight: '600' }}>
                safety@pandozab.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* BACK TO HCP */}
      <section style={{ padding: '40px', textAlign: 'center', background: 'white' }}>
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