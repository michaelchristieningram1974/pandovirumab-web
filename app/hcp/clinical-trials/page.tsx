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
    phase1: '#00857C',
    phase2: '#003087',
    phase3: '#00857C',
    phase4: '#003087',
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
    published: '#003087',
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
          Clinical Trials
        </h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '650px', margin: '0 auto' }}>
          Phase I-IV clinical trial data for Pandovab (pandovirumab)
        </p>
      </section>

      {/* TRIALS */}
      <section style={{ padding: '80px 40px', background: '#F5F7FA' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          {trials.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#555' }}>
              Clinical trial data coming soon.
            </p>
          ) : (
            trials.map((trial: any) => (
              <div key={trial._id} style={{
                background: 'white',
                borderRadius: '8px',
                padding: '40px',
                marginBottom: '30px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                borderLeft: `4px solid ${phaseColors[trial.phase] ?? '#003087'}`,
              }}>
                {/* HEADER */}
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '16px', alignItems: 'center' }}>
                  {trial.phase && (
                    <span style={{
                      background: phaseColors[trial.phase] ?? '#003087',
                      color: 'white',
                      padding: '4px 14px',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: 'bold',
                    }}>
                      {phaseLabels[trial.phase] ?? trial.phase}
                    </span>
                  )}
                  {trial.status && (
                    <span style={{
                      background: statusColors[trial.status] ?? '#888',
                      color: 'white',
                      padding: '4px 14px',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: 'bold',
                    }}>
                      {trial.status.charAt(0).toUpperCase() + trial.status.slice(1)}
                    </span>
                  )}
                </div>

                <h2 style={{ color: '#003087', fontSize: '1.4rem', marginBottom: '20px' }}>
                  {trial.title}
                </h2>

                {/* TRIAL DETAILS */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '20px',
                  marginBottom: '24px',
                  background: '#F5F7FA',
                  padding: '20px',
                  borderRadius: '8px',
                }}>
                  {trial.population && (
                    <div>
                      <p style={{ color: '#888', fontSize: '0.8rem', margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Population</p>
                      <p style={{ color: '#333', fontSize: '0.95rem', margin: 0 }}>{trial.population}</p>
                    </div>
                  )}
                  {trial.sampleSize && (
                    <div>
                      <p style={{ color: '#888', fontSize: '0.8rem', margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Sample Size</p>
                      <p style={{ color: '#333', fontSize: '0.95rem', margin: 0 }}>n={trial.sampleSize}</p>
                    </div>
                  )}
                  {trial.duration && (
                    <div>
                      <p style={{ color: '#888', fontSize: '0.8rem', margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Duration</p>
                      <p style={{ color: '#333', fontSize: '0.95rem', margin: 0 }}>{trial.duration}</p>
                    </div>
                  )}
                </div>

                {/* PRIMARY ENDPOINT */}
                {trial.primaryEndpoint && (
                  <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ color: '#003087', fontSize: '1rem', marginBottom: '8px' }}>Primary Endpoint</h3>
                    <p style={{ color: '#555', lineHeight: '1.7', margin: 0 }}>{trial.primaryEndpoint}</p>
                  </div>
                )}

                {/* RESULTS */}
                {trial.results && (
                  <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ color: '#003087', fontSize: '1rem', marginBottom: '8px' }}>Results Summary</h3>
                    <p style={{ color: '#555', lineHeight: '1.7', margin: 0 }}>{trial.results}</p>
                  </div>
                )}

                {/* KEY FINDINGS */}
                {trial.keyFindings?.length > 0 && (
                  <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ color: '#003087', fontSize: '1rem', marginBottom: '12px' }}>Key Findings</h3>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                      gap: '16px',
                    }}>
                      {trial.keyFindings.map((finding: any, i: number) => (
                        <div key={i} style={{
                          background: '#E6F4F3',
                          padding: '16px',
                          borderRadius: '8px',
                          borderLeft: '3px solid #00857C',
                        }}>
                          {finding.stat && (
                            <p style={{ color: '#003087', fontWeight: 'bold', fontSize: '1.3rem', margin: '0 0 4px' }}>
                              {finding.stat}
                            </p>
                          )}
                          <p style={{ color: '#333', fontSize: '0.9rem', margin: '0 0 4px', fontWeight: 'bold' }}>
                            {finding.finding}
                          </p>
                          {finding.description && (
                            <p style={{ color: '#555', fontSize: '0.85rem', margin: 0, lineHeight: '1.5' }}>
                              {finding.description}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* PUBLICATION LINK */}
                {trial.publicationLink && (
                  <a href={trial.publicationLink} target="_blank" rel="noopener noreferrer" style={{
                    display: 'inline-block',
                    color: '#00857C',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    marginTop: '8px',
                  }}>
                    View Publication →
                  </a>
                )}
              </div>
            ))
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