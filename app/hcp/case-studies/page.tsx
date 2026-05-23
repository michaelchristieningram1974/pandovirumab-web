import type { Metadata } from 'next'
import { client } from '../../../sanity.client'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Case Studies | Pandozab (pandovirumab) HCP',
  description: 'Clinical case studies for Pandozab (pandovirumab) including patient profiles, treatment approaches and outcomes for healthcare professionals.',
  keywords: 'Pandozab case studies HCP, pandovirumab clinical cases, hypertension treatment outcomes',
  openGraph: {
    title: 'Case Studies | Pandozab (pandovirumab) HCP',
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
      <div style={{ background: '#1A1A1A', color: '#888', padding: '8px 40px', fontSize: '0.8rem', textAlign: 'center', letterSpacing: '0.05em' }}>
        FOR HEALTHCARE PROFESSIONALS ONLY
      </div>

      {/* HERO */}
      <section style={{ background: '#F5F5F5', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#0000CC', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
            Clinical Evidence
          </p>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', lineHeight: '1.15', marginBottom: '24px', color: '#1A1A1A', fontFamily: 'Georgia, serif', maxWidth: '700px' }}>
            Clinical Case Studies
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: '1.7', maxWidth: '600px' }}>
            Detailed clinical case studies showing real world outcomes with Pandozab
          </p>
        </div>
      </section>

      {/* CASE STUDIES */}
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
                    {cs.audience && (
                      <span style={{
                        background: '#F5F5F5',
                        color: '#0000CC',
                        padding: '4px 12px',
                        borderRadius: '50px',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                      }}>
                        {cs.audience === 'hcp' ? 'HCP Only' : cs.audience === 'both' ? 'HCP & Public' : 'Public'}
                      </span>
                    )}
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
                  {cs.patientProfile?.comorbidities?.length > 0 && (
                    <div style={{ marginBottom: '16px' }}>
                      <p style={{ color: '#1A1A1A', fontWeight: '700', fontSize: '0.85rem', marginBottom: '8px' }}>Comorbidities:</p>
                      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        {cs.patientProfile.comorbidities.map((c: string, i: number) => (
                          <span key={i} style={{ background: '#F5F5F5', color: '#555', padding: '3px 10px', borderRadius: '50px', fontSize: '0.8rem' }}>
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
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