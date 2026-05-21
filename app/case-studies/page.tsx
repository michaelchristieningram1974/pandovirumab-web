import type { Metadata } from 'next'
import { client } from '../../sanity.client'

export const metadata: Metadata = {
  title: 'Case Studies | Pandovab (pandovirumab)',
  description: 'Read real world case studies showing how Pandovab (pandovirumab) has helped patients manage hypertension effectively.',
  keywords: 'Pandovab case studies, pandovirumab patient outcomes, hypertension treatment results',
  openGraph: {
    title: 'Case Studies | Pandovab (pandovirumab)',
    description: 'Real world outcomes with Pandovab.',
    type: 'website',
  },
}

async function getCaseStudies() {
  return client.fetch(`*[_type == "caseStudy" && audience in ["public", "both"]] | order(_createdAt desc) {
    _id,
    title,
    slug,
    audience,
    clinicalChallenge,
    keyTakeaways,
    patientProfile
  }`)
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies()

  return (
    <main>
      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #003087 0%, #00857C 100%)',
        color: 'white',
        padding: '80px 40px',
        textAlign: 'center',
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
          Case Studies
        </h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '650px', margin: '0 auto' }}>
          Real world outcomes showing how Pandovab has helped patients manage their blood pressure
        </p>
      </section>

      {/* CASE STUDIES GRID */}
      <section style={{ padding: '80px 40px', background: '#F5F7FA' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
                  borderTop: '4px solid #00857C',
                  transition: 'transform 0.2s',
                }}>
                  <div style={{ padding: '32px' }}>
                    {/* PATIENT PROFILE TAGS */}
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
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

                    {cs.keyTakeaways?.length > 0 && (
                      <div>
                        <p style={{ color: '#003087', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '8px' }}>
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
                      color: '#00857C',
                      fontWeight: 'bold',
                      fontSize: '0.95rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
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

      {/* HCP CTA */}
      <section style={{ padding: '60px 40px', background: 'white' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ color: '#003087', fontSize: '1.8rem', marginBottom: '16px' }}>
            Are you a Healthcare Professional?
          </h2>
          <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '32px' }}>
            Access our full library of clinical case studies, real world evidence and trial data in the HCP portal.
          </p>
          <a href="/hcp" style={{
            background: '#003087',
            color: 'white',
            padding: '14px 32px',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1rem',
          }}>
            Access HCP Portal
          </a>
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
        <p>This website is intended for informational purposes only. Please consult your healthcare provider before starting any medication.</p>
      </section>
    
    {/* SCHEMA.ORG JSON-LD */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      "name": "Pandovab Case Studies",
      "description": "Real world case studies showing how Pandovab (pandovirumab) has helped patients manage hypertension.",
      "url": "https://pandovab.com/case-studies",
      "about": {
        "@type": "Drug",
        "name": "Pandovab",
        "alternateName": "pandovirumab"
      },
      "audience": {
        "@type": "Patient"
      }
    })
  }}
/>
    
    
    
    </main>
  )
}