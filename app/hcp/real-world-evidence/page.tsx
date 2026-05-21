import type { Metadata } from 'next'
import { client } from '../../../sanity.client'

export const metadata: Metadata = {
  title: 'Real World Evidence | Pandovab (pandovirumab) HCP',
  description: 'Real world evidence studies for Pandovab (pandovirumab) including observational studies, registry data and real world outcomes.',
  keywords: 'Pandovab real world evidence, pandovirumab observational studies, hypertension real world data',
  openGraph: {
    title: 'Real World Evidence | Pandovab (pandovirumab) HCP',
    description: 'Real world evidence for healthcare professionals.',
    type: 'website',
  },
}

async function getRealWorldEvidence() {
  return client.fetch(`*[_type == "realWorldEvidence"] | order(publishedDate desc) {
    _id,
    title,
    slug,
    setting,
    studyType,
    patientPopulation,
    sampleSize,
    duration,
    outcomes,
    summary,
    publicationLink,
    publishedDate
  }`)
}

export default async function RealWorldEvidencePage() {
  const studies = await getRealWorldEvidence()

  const studyTypeLabels: Record<string, string> = {
    observational: 'Observational',
    retrospective: 'Retrospective',
    prospective: 'Prospective',
    registry: 'Registry',
    meta_analysis: 'Meta-Analysis',
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
          Real World Evidence
        </h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '650px', margin: '0 auto' }}>
          Observational studies and real world outcomes data for Pandovab (pandovirumab)
        </p>
      </section>

      {/* STUDIES */}
      <section style={{ padding: '80px 40px', background: '#F5F7FA' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {studies.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#555' }}>
              Real world evidence studies coming soon.
            </p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              {studies.map((study: any) => (
                <div key={study._id} style={{
                  background: 'white',
                  borderRadius: '8px',
                  padding: '40px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  borderLeft: '4px solid #00857C',
                }}>
                  {/* TAGS */}
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '16px' }}>
                    {study.studyType && (
                      <span style={{
                        background: '#003087',
                        color: 'white',
                        padding: '4px 14px',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        fontWeight: 'bold',
                      }}>
                        {studyTypeLabels[study.studyType] ?? study.studyType}
                      </span>
                    )}
                    {study.setting && (
                      <span style={{
                        background: '#E6F4F3',
                        color: '#00857C',
                        padding: '4px 14px',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        fontWeight: 'bold',
                      }}>
                        {study.setting}
                      </span>
                    )}
                  </div>

                  <h2 style={{ color: '#003087', fontSize: '1.4rem', marginBottom: '20px' }}>
                    {study.title}
                  </h2>

                  {/* STUDY DETAILS */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                    gap: '16px',
                    marginBottom: '24px',
                    background: '#F5F7FA',
                    padding: '20px',
                    borderRadius: '8px',
                  }}>
                    {study.patientPopulation && (
                      <div>
                        <p style={{ color: '#888', fontSize: '0.8rem', margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Population</p>
                        <p style={{ color: '#333', fontSize: '0.9rem', margin: 0 }}>{study.patientPopulation}</p>
                      </div>
                    )}
                    {study.sampleSize && (
                      <div>
                        <p style={{ color: '#888', fontSize: '0.8rem', margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Sample Size</p>
                        <p style={{ color: '#333', fontSize: '0.9rem', margin: 0 }}>n={study.sampleSize}</p>
                      </div>
                    )}
                    {study.duration && (
                      <div>
                        <p style={{ color: '#888', fontSize: '0.8rem', margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Duration</p>
                        <p style={{ color: '#333', fontSize: '0.9rem', margin: 0 }}>{study.duration}</p>
                      </div>
                    )}
                    {study.publishedDate && (
                      <div>
                        <p style={{ color: '#888', fontSize: '0.8rem', margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Published</p>
                        <p style={{ color: '#333', fontSize: '0.9rem', margin: 0 }}>
                          {new Date(study.publishedDate).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* OUTCOMES */}
                  {study.outcomes?.length > 0 && (
                    <div style={{ marginBottom: '20px' }}>
                      <h3 style={{ color: '#003087', fontSize: '1rem', marginBottom: '12px' }}>Key Outcomes</h3>
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '12px',
                      }}>
                        {study.outcomes.map((outcome: any, i: number) => (
                          <div key={i} style={{
                            background: '#E6F4F3',
                            padding: '16px',
                            borderRadius: '8px',
                            borderLeft: '3px solid #00857C',
                          }}>
                            <p style={{ color: '#003087', fontWeight: 'bold', fontSize: '1.1rem', margin: '0 0 4px' }}>
                              {outcome.result}
                            </p>
                            <p style={{ color: '#333', fontSize: '0.85rem', margin: '0 0 4px', fontWeight: 'bold' }}>
                              {outcome.outcome}
                            </p>
                            {outcome.description && (
                              <p style={{ color: '#555', fontSize: '0.8rem', margin: 0, lineHeight: '1.5' }}>
                                {outcome.description}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* SUMMARY */}
                  {study.summary?.length > 0 && (
                    <div style={{ marginBottom: '20px' }}>
                      <h3 style={{ color: '#003087', fontSize: '1rem', marginBottom: '8px' }}>Study Summary</h3>
                      <div style={{ color: '#555', lineHeight: '1.7', fontSize: '0.95rem' }}>
                        {study.summary.map((block: any, i: number) => (
                          <p key={i}>{block.children?.map((child: any) => child.text).join('')}</p>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* PUBLICATION LINK */}
                  {study.publicationLink && (
                    <a href={study.publicationLink} target="_blank" rel="noopener noreferrer" style={{
                      display: 'inline-block',
                      color: '#00857C',
                      fontWeight: 'bold',
                      textDecoration: 'none',
                      fontSize: '0.95rem',
                    }}>
                      View Publication →
                    </a>
                  )}
                </div>
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