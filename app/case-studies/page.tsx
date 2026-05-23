import type { Metadata } from 'next'
import { client } from '../../sanity.client'
import { theme } from '../../theme'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Case Studies | pandozab (pandovirumab)',
  description: 'Read real world case studies showing how pandozab (pandovirumab) has helped patients manage hypertension effectively.',
  keywords: 'pandozab case studies, pandovirumab patient outcomes, hypertension treatment results',
  openGraph: {
    title: 'Case Studies | pandozab (pandovirumab)',
    description: 'Real world outcomes with pandozab.',
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
      <section style={{ background: '#F5F5F5', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#0000CC', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
            Real World Outcomes
          </p>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', lineHeight: '1.15', marginBottom: '24px', color: '#1A1A1A', fontFamily: 'Georgia, serif', maxWidth: '700px' }}>
            Case Studies
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: '1.7', maxWidth: '600px' }}>
            Real world outcomes showing how pandozab has helped patients manage their blood pressure
          </p>
        </div>
      </section>

      {/* CASE STUDIES GRID */}
      <section style={{ background: '#FFFFFF', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {caseStudies.length === 0 ? (
            <p style={{ color: '#555' }}>Case studies coming soon.</p>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '40px' }}>
              {caseStudies.map((cs: any) => (
                <a key={cs._id} href={`/case-studies/${cs.slug?.current}`} style={{
                  textDecoration: 'none',
                  display: 'block',
                  borderTop: '3px solid #0000CC',
                  paddingTop: '24px',
                }}>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '16px' }}>
                    {cs.patientProfile?.age && (
                      <span style={{ background: '#F5F5F5', color: '#444', padding: '4px 12px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: '600' }}>
                        Age: {cs.patientProfile.age}
                      </span>
                    )}
                    {cs.patientProfile?.gender && (
                      <span style={{ background: '#F5F5F5', color: '#444', padding: '4px 12px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: '600' }}>
                        {cs.patientProfile.gender}
                      </span>
                    )}
                  </div>
                  <h2 style={{ color: '#1A1A1A', fontSize: '1.3rem', marginBottom: '16px', lineHeight: '1.4', fontWeight: '700', fontFamily: 'Georgia, serif' }}>
                    {cs.title}
                  </h2>
                  {cs.clinicalChallenge && (
                    <p style={{ color: '#555', lineHeight: '1.7', fontSize: '0.95rem', marginBottom: '20px' }}>
                      {cs.clinicalChallenge.length > 150 ? cs.clinicalChallenge.substring(0, 150) + '...' : cs.clinicalChallenge}
                    </p>
                  )}
                  {cs.keyTakeaways?.length > 0 && (
                    <ul style={{ margin: '0 0 20px', paddingLeft: '20px', color: '#555', fontSize: '0.9rem', lineHeight: '1.7' }}>
                      {cs.keyTakeaways.slice(0, 2).map((t: string, i: number) => (
                        <li key={i}>{t}</li>
                      ))}
                    </ul>
                  )}
                  <span style={{ color: '#0000CC', fontWeight: '600', fontSize: '0.95rem' }}>
                    Read full case study →
                  </span>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* HCP CTA */}
      <section style={{ background: '#0000CC', padding: '100px 40px', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '40px' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '16px', fontFamily: 'Georgia, serif' }}>
              Are you a Healthcare Professional?
            </h2>
            <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7', maxWidth: '500px' }}>
              Access our full library of clinical case studies, real world evidence and trial data in the HCP portal.
            </p>
          </div>
          <a href="/hcp" style={{ ...theme.buttons.white }}>
            Access HCP Portal
          </a>
        </div>
      </section>

      {/* SCHEMA.ORG JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "pandozab Case Studies",
            "description": "Real world case studies showing how pandozab (pandovirumab) has helped patients manage hypertension.",
            "url": "https://pandozab.com/case-studies",
            "about": { "@type": "Drug", "name": "pandozab", "alternateName": "pandovirumab" },
            "audience": { "@type": "Patient" }
          })
        }}
      />

      {/* DISCLAIMER */}
      <section style={{ background: '#1A1A1A', color: '#888', padding: '20px 40px', textAlign: 'center', fontSize: '0.8rem' }}>
        <p>This website is intended for informational purposes only. Please consult your healthcare provider before starting any medication.</p>
      </section>
    </main>
  )
}