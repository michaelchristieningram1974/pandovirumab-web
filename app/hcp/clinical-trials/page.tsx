import type { Metadata } from 'next'
import { client } from '../../../sanity.client'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Clinical Trials | Pandovab (pandovirumab) HCP',
  description: 'Clinical trial data for Pandovab (pandovirumab) including phase I-IV trials, primary endpoints, results and publications.',
  keywords: 'Pandovab clinical trials, pandovirumab trial data, hypertension clinical trials',
  openGraph: {
    title: 'Clinical Trials | Pandovab (pandovirumab) HCP',
    description: 'Clinical trial data for healthcare professionals.',
    type: 'website',
  },
}

async function getClinicalTrials() {
  return client.fetch(`*[_type == "clinicalTrial"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    phase,
    status,
    population,
    sampleSize,
    duration,
    primaryEndpoint,
    results,
    keyFindings,
    publicationLink
  }`)
}

export default async function ClinicalTrialsPage() {
  const trials = await getClinicalTrials()

  const phaseColors: Record<string, string> = {
    phase1: '#0000CC',
    phase2: '#00857C',
    phase3: '#0000CC',
    phase4: '#00857C',
  }

  const phaseLabels: Record<string, string> = {
    phase1: 'Phase I',
    phase2: 'Phase II',
    phase3: 'Phase III',
    phase4: 'Phase IV',
  }

  const statusColors: Record<string, string> = {
    ongoing: '#e67e22',
    completed: '#00857C',
    published: '#0000CC',
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
            Clinical Data
          </p>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', lineHeight: '1.15', marginBottom: '24px', color: '#1A1A1A', fontFamily: 'Georgia, serif', maxWidth: '700px' }}>
            Clinical Trials
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: '1.7', maxWidth: '600px' }}>
            Phase I-IV clinical trial data for Pandovab (pandovirumab)
          </p>
        </div>
      </section>

      {/* TRIALS */}
      <section style={{ background: '#FFFFFF', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          {trials.length === 0 ? (
            <p style={{ color: '#555' }}>Clinical trial data coming soon.</p>
          ) : (
            trials.map((trial: any) => (
              <div key={trial._id} style={{
                borderTop: `3px solid ${phaseColors[trial.phase] ?? '#0000CC'}`,
                paddingTop: '40px',
                marginBottom: '60px',
              }}>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '16px', alignItems: 'center' }}>
                  {trial.phase && (
                    <span style={{ background: phaseColors[trial.phase] ?? '#0000CC', color: 'white', padding: '4px 14px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: '600' }}>
                      {phaseLabels[trial.phase] ?? trial.phase}
                    </span>
                  )}
                  {trial.status && (
                    <span style={{ background: statusColors[trial.status] ?? '#888', color: 'white', padding: '4px 14px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: '600' }}>
                      {trial.status.charAt(0).toUpperCase() + trial.status.slice(1)}
                    </span>
                  )}
                </div>

                <h2 style={{ color: '#1A1A1A', fontSize: '1.8rem', marginBottom: '24px', fontWeight: '800', fontFamily: 'Georgia, serif' }}>
                  {trial.title}
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '32px', background: '#F5F5F5', padding: '24px', borderRadius: '8px' }}>
                  {trial.population && (
                    <div>
                      <p style={{ color: '#888', fontSize: '0.8rem', margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Population</p>
                      <p style={{ color: '#1A1A1A', fontSize: '0.95rem', margin: 0, fontWeight: '600' }}>{trial.population}</p>
                    </div>
                  )}
                  {trial.sampleSize && (
                    <div>
                      <p style={{ color: '#888', fontSize: '0.8rem', margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Sample Size</p>
                      <p style={{ color: '#1A1A1A', fontSize: '0.95rem', margin: 0, fontWeight: '600' }}>n={trial.sampleSize}</p>
                    </div>
                  )}
                  {trial.duration && (
                    <div>
                      <p style={{ color: '#888', fontSize: '0.8rem', margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Duration</p>
                      <p style={{ color: '#1A1A1A', fontSize: '0.95rem', margin: 0, fontWeight: '600' }}>{trial.duration}</p>
                    </div>
                  )}
                </div>

                {trial.primaryEndpoint && (
                  <div style={{ marginBottom: '24px' }}>
                    <h3 style={{ color: '#1A1A1A', fontSize: '1rem', marginBottom: '8px', fontWeight: '700' }}>Primary Endpoint</h3>
                    <p style={{ color: '#555', lineHeight: '1.7', margin: 0, fontSize: '0.95rem' }}>{trial.primaryEndpoint}</p>
                  </div>
                )}

                {trial.results && (
                  <div style={{ marginBottom: '24px' }}>
                    <h3 style={{ color: '#1A1A1A', fontSize: '1rem', marginBottom: '8px', fontWeight: '700' }}>Results Summary</h3>
                    <p style={{ color: '#555', lineHeight: '1.7', margin: 0, fontSize: '0.95rem' }}>{trial.results}</p>
                  </div>
                )}

                {trial.keyFindings?.length > 0 && (
                  <div style={{ marginBottom: '24px' }}>
                    <h3 style={{ color: '#1A1A1A', fontSize: '1rem', marginBottom: '16px', fontWeight: '700' }}>Key Findings</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                      {trial.keyFindings.map((finding: any, i: number) => (
                        <div key={i} style={{ background: '#F5F5F5', padding: '20px', borderRadius: '8px', borderTop: '3px solid #0000CC' }}>
                          {finding.stat && (
                            <p style={{ color: '#0000CC', fontWeight: '800', fontSize: '1.5rem', margin: '0 0 4px', fontFamily: 'Georgia, serif' }}>
                              {finding.stat}
                            </p>
                          )}
                          <p style={{ color: '#1A1A1A', fontSize: '0.9rem', margin: '0 0 4px', fontWeight: '700' }}>{finding.finding}</p>
                          {finding.description && (
                            <p style={{ color: '#555', fontSize: '0.85rem', margin: 0, lineHeight: '1.5' }}>{finding.description}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {trial.publicationLink && (
                  <a href={trial.publicationLink} target="_blank" rel="noopener noreferrer" style={{ color: '#0000CC', fontWeight: '600', fontSize: '0.95rem' }}>
                    View Publication →
                  </a>
                )}
              </div>
            ))
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