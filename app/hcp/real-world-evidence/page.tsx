import type { Metadata } from 'next'
import { client } from '../../../sanity.client'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Real World Evidence | Pandozab (pandovirumab) HCP',
  description: 'Real world evidence studies for Pandozab (pandovirumab) including observational studies, registry data and real world outcomes.',
  keywords: 'Pandozab real world evidence, pandovirumab observational studies, hypertension real world data',
  openGraph: {
    title: 'Real World Evidence | Pandozab (pandovirumab) HCP',
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
      <div style={{ background: '#1A1A1A', color: '#888', padding: '8px 40px', fontSize: '0.8rem', textAlign: 'center', letterSpacing: '0.05em' }}>
        FOR HEALTHCARE PROFESSIONALS ONLY
      </div>

      {/* HERO */}
      <section style={{ background: '#F5F5F5', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#0000CC', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
            Real World Data
          </p>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', lineHeight: '1.15', marginBottom: '24px', color: '#1A1A1A', fontFamily: 'Georgia, serif', maxWidth: '700px' }}>
            Real World Evidence
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: '1.7', maxWidth: '600px' }}>
            Observational studies and real world outcomes data for Pandozab (pandovirumab)
          </p>
        </div>
      </section>

      {/* STUDIES */}
      <section style={{ background: '#FFFFFF', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {studies.length === 0 ? (
            <p style={{ color: '#555' }}>Real world evidence studies coming soon.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
              {studies.map((study: any) => (
                <div key={study._id} style={{ borderTop: '3px solid #0000CC', paddingTop: '40px' }}>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '16px' }}>
                    {study.studyType && (
                      <span style={{ background: '#0000CC', color: 'white', padding: '4px 14px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: '600' }}>
                        {studyTypeLabels[study.studyType] ?? study.studyType}
                      </span>
                    )}
                    {study.setting && (
                      <span style={{ background: '#F5F5F5', color: '#555', padding: '4px 14px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: '600' }}>
                        {study.setting}
                      </span>
                    )}
                  </div>

                  <h2 style={{ color: '#1A1A1A', fontSize: '1.8rem', marginBottom: '24px', fontWeight: '800', fontFamily: 'Georgia, serif' }}>
                    {study.title}
                  </h2>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginBottom: '32px', background: '#F5F5F5', padding: '24px', borderRadius: '8px' }}>
                    {study.patientPopulation && (
                      <div>
                        <p style={{ color: '#888', fontSize: '0.8rem', margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Population</p>
                        <p style={{ color: '#1A1A1A', fontSize: '0.9rem', margin: 0, fontWeight: '600' }}>{study.patientPopulation}</p>
                      </div>
                    )}
                    {study.sampleSize && (
                      <div>
                        <p style={{ color: '#888', fontSize: '0.8rem', margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Sample Size</p>
                        <p style={{ color: '#1A1A1A', fontSize: '0.9rem', margin: 0, fontWeight: '600' }}>n={study.sampleSize}</p>
                      </div>
                    )}
                    {study.duration && (
                      <div>
                        <p style={{ color: '#888', fontSize: '0.8rem', margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Duration</p>
                        <p style={{ color: '#1A1A1A', fontSize: '0.9rem', margin: 0, fontWeight: '600' }}>{study.duration}</p>
                      </div>
                    )}
                    {study.publishedDate && (
                      <div>
                        <p style={{ color: '#888', fontSize: '0.8rem', margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Published</p>
                        <p style={{ color: '#1A1A1A', fontSize: '0.9rem', margin: 0, fontWeight: '600' }}>
                          {new Date(study.publishedDate).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
                        </p>
                      </div>
                    )}
                  </div>

                  {study.outcomes?.length > 0 && (
                    <div style={{ marginBottom: '24px' }}>
                      <h3 style={{ color: '#1A1A1A', fontSize: '1rem', marginBottom: '16px', fontWeight: '700' }}>Key Outcomes</h3>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                        {study.outcomes.map((outcome: any, i: number) => (
                          <div key={i} style={{ background: '#F5F5F5', padding: '20px', borderRadius: '8px', borderTop: '3px solid #0000CC' }}>
                            <p style={{ color: '#0000CC', fontWeight: '800', fontSize: '1.3rem', margin: '0 0 4px', fontFamily: 'Georgia, serif' }}>
                              {outcome.result}
                            </p>
                            <p style={{ color: '#1A1A1A', fontSize: '0.85rem', margin: '0 0 4px', fontWeight: '700' }}>{outcome.outcome}</p>
                            {outcome.description && (
                              <p style={{ color: '#555', fontSize: '0.8rem', margin: 0, lineHeight: '1.5' }}>{outcome.description}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {study.summary?.length > 0 && (
                    <div style={{ marginBottom: '24px' }}>
                      <h3 style={{ color: '#1A1A1A', fontSize: '1rem', marginBottom: '8px', fontWeight: '700' }}>Study Summary</h3>
                      <div style={{ color: '#555', lineHeight: '1.7', fontSize: '0.95rem' }}>
                        {study.summary.map((block: any, i: number) => (
                          <p key={i}>{block.children?.map((child: any) => child.text).join('')}</p>
                        ))}
                      </div>
                    </div>
                  )}

                  {study.publicationLink && (
                    <a href={study.publicationLink} target="_blank" rel="noopener noreferrer" style={{ color: '#0000CC', fontWeight: '600', fontSize: '0.95rem' }}>
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