import type { Metadata } from 'next'
import { client } from '../../../sanity.client'

export const metadata: Metadata = {
  title: 'Case Studies | Pandovab (pandovirumab) HCP',
  description: 'Clinical case studies for Pandovab (pandovirumab) including patient profiles, treatment approaches and outcomes for healthcare professionals.',
  keywords: 'Pandovab case studies HCP, pandovirumab clinical cases, hypertension treatment outcomes',
  openGraph: {
    title: 'Case Studies | Pandovab (pandovirumab) HCP',
    description: 'Clinical case studies for healthcare professionals.',
    type: 'website',
  },
}

async function getCaseStudies() {
  return client.fetch(`*[_type == "caseStudy"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    audience,
    clinicalChallenge,
    keyTakeaways,
    patientProfile,
    relatedTrial
  }`)
}

export default async function HCPCaseStudiesPage() {
  const caseStudies = await getCaseStudies()

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
          Clinical Case Studies
        </h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '650px', margin: '0 auto' }}>
          Detailed clinical case studies showing real world outcomes with Pandovab
        </p>
      </section>

      {/* CASE STUDIES */}
      <section style={{ padding: '80px 40px', background: '#F5F7FA' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          {caseStudies.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#555' }}>
              Case studies coming soon.
            </p>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '30px',
            }}>
              {caseStudies.map((cs: any) => (
                <a key={cs._id} href={`/case-studies/${cs.slug?.current}`} style={{
                  textDecoration: 'none',
                  display: 'block',
                  background: 'white',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  borderTop: '4px solid #003087',
                }}>
                  <div style={{ padding: '32px' }}>
                    {/* AUDIENCE TAG */}
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
                      {cs.audience && (
                        <span style={{
                          background: cs.audience === 'hcp' ? '#003087' : '#00857C',
                          color: 'white',
                          padding: '4px 12px',
                          borderRadius: '20px',
                          fontSize: '0.8rem',
                          fontWeight: 'bold',
                        }}>
                          {cs.audience === 'hcp' ? 'HCP Only' : cs.audience === 'both' ? 'HCP & Public' : 'Public'}
                        </span>
                      )}
                      {cs.patientProfile?.age && (
                        <span style={{
                          background: '#E6F4F3',
                          color: '#00857C',
                          padding: '4px 12px',
                          borderRadius: '20px',
                          fontSize: '0.8rem',
                          fontWeight: 'bold',
                        }}>
                          Age: {cs.patientProfile.age}
                        </span>
                      )}
                      {cs.patientProfile?.gender && (
                        <span style={{
                          background: '#E6F4F3',
                          color: '#00857C',
                          padding: '4px 12px',
                          borderRadius: '20px',
                          fontSize: '0.8rem',
                          fontWeight: 'bold',
                        }}>
                          {cs.patientProfile.gender}
                        </span>
                      )}
                    </div>

                    <h2 style={{ color: '#003087', fontSize: '1.3rem', marginBottom: '16px', lineHeight: '1.4' }}>
                      {cs.title}
                    </h2>

                    {cs.clinicalChallenge && (
                      <p style={{ color: '#555', lineHeight: '1.7', fontSize: '0.95rem', marginBottom: '20px' }}>
                        {cs.clinicalChallenge.length > 150
                          ? cs.clinicalChallenge.substring(0, 150) + '...'
                          : cs.clinicalChallenge}
                      </p>
                    )}

                    {cs.patientProfile?.comorbidities?.length > 0 && (
                      <div style={{ marginBottom: '16px' }}>
                        <p style={{ color: '#003087', fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '8px' }}>
                          Comorbidities:
                        </p>
                        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                          {cs.patientProfile.comorbidities.map((c: string, i: number) => (
                            <span key={i} style={{
                              background: '#F5F7FA',
                              color: '#555',
                              padding: '3px 10px',
                              borderRadius: '20px',
                              fontSize: '0.8rem',
                            }}>
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {cs.keyTakeaways?.length > 0 && (
                      <div>
                        <p style={{ color: '#003087', fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '8px' }}>
                          Key Takeaways:
                        </p>
                        <ul style={{ margin: 0, paddingLeft: '20px', color: '#555', fontSize: '0.9rem', lineHeight: '1.7' }}>
                          {cs.keyTakeaways.slice(0, 2).map((t: string, i: number) => (
                            <li key={i}>{t}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div style={{
                      marginTop: '24px',
                      color: '#003087',
                      fontWeight: 'bold',
                      fontSize: '0.95rem',
                    }}>
                      Read full case study →
                    </div>
                  </div>
                </a>
              ))}
            </div>
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