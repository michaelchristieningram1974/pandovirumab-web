import type { Metadata } from 'next'
import { client } from '../../../sanity.client'
import { theme } from '../../../theme'

export const revalidate = 60

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = await client.fetch(`*[_type == "caseStudy" && slug.current == $slug][0]{
    title,
    clinicalChallenge
  }`, { slug })

  return {
    title: `${caseStudy?.title ?? 'Case Study'} | Pandozab (pandovirumab)`,
    description: caseStudy?.clinicalChallenge ?? 'Read this case study about Pandozab (pandovirumab) for hypertension treatment.',
    openGraph: {
      title: `${caseStudy?.title ?? 'Case Study'} | Pandozab`,
      description: caseStudy?.clinicalChallenge ?? '',
      type: 'article',
    },
  }
}

async function getCaseStudy(slug: string) {
  return client.fetch(`*[_type == "caseStudy" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    audience,
    patientProfile,
    clinicalChallenge,
    treatmentApproach,
    outcome,
    keyTakeaways,
    images,
    relatedTrial -> {
      title,
      slug,
      phase
    }
  }`, { slug })
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const caseStudy = await getCaseStudy(slug)

  if (!caseStudy) {
    return (
      <main>
        <section style={{ background: '#F5F5F5', padding: '100px 40px', textAlign: 'center' }}>
          <h1 style={{ color: '#1A1A1A', fontSize: '2rem', fontFamily: 'Georgia, serif' }}>Case Study Not Found</h1>
          <a href="/case-studies" style={{ ...theme.buttons.primary, marginTop: '24px', display: 'inline-block' }}>
            Back to Case Studies
          </a>
        </section>
      </main>
    )
  }

  return (
    <main>
      {/* HERO */}
      <section style={{ background: '#F5F5F5', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <a href="/case-studies" style={{ color: '#0000CC', fontSize: '0.9rem', fontWeight: '600', display: 'inline-block', marginBottom: '24px' }}>
            ← Back to Case Studies
          </a>
          <p style={{ color: '#0000CC', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
            Case Study
          </p>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', lineHeight: '1.15', marginBottom: '32px', color: '#1A1A1A', fontFamily: 'Georgia, serif', maxWidth: '800px' }}>
            {caseStudy.title}
          </h1>

          {/* PATIENT PROFILE TAGS */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {caseStudy.patientProfile?.age && (
              <span style={{ background: 'white', color: '#444', padding: '6px 16px', borderRadius: '50px', fontSize: '0.85rem', fontWeight: '600' }}>
                Age: {caseStudy.patientProfile.age}
              </span>
            )}
            {caseStudy.patientProfile?.gender && (
              <span style={{ background: 'white', color: '#444', padding: '6px 16px', borderRadius: '50px', fontSize: '0.85rem', fontWeight: '600' }}>
                {caseStudy.patientProfile.gender}
              </span>
            )}
            {caseStudy.patientProfile?.comorbidities?.map((c: string, i: number) => (
              <span key={i} style={{ background: 'white', color: '#444', padding: '6px 16px', borderRadius: '50px', fontSize: '0.85rem', fontWeight: '600' }}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PREVIOUS TREATMENTS */}
      {caseStudy.patientProfile?.previousTreatments?.length > 0 && (
        <section style={{ background: 'white', padding: '40px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <p style={{ color: '#888', fontSize: '0.85rem', fontWeight: '600', margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Previous Treatments
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {caseStudy.patientProfile.previousTreatments.map((t: string, i: number) => (
                <span key={i} style={{ background: '#F5F5F5', color: '#555', padding: '4px 14px', borderRadius: '50px', fontSize: '0.85rem' }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* MAIN CONTENT */}
      <section style={{ background: '#FFFFFF', padding: '100px 40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>

          {/* CLINICAL CHALLENGE */}
          {caseStudy.clinicalChallenge && (
            <div style={{ borderTop: '3px solid #0000CC', paddingTop: '40px', marginBottom: '60px' }}>
              <h2 style={{ color: '#1A1A1A', fontSize: '1.8rem', fontWeight: '800', fontFamily: 'Georgia, serif', marginBottom: '24px' }}>
                Clinical Challenge
              </h2>
              <p style={{ color: '#555', lineHeight: '1.9', fontSize: '1rem' }}>
                {caseStudy.clinicalChallenge}
              </p>
            </div>
          )}

          {/* TREATMENT APPROACH */}
          {caseStudy.treatmentApproach?.length > 0 && (
            <div style={{ borderTop: '1px solid #E0E0E0', paddingTop: '40px', marginBottom: '60px' }}>
              <h2 style={{ color: '#1A1A1A', fontSize: '1.8rem', fontWeight: '800', fontFamily: 'Georgia, serif', marginBottom: '24px' }}>
                Treatment Approach
              </h2>
              <div style={{ color: '#555', lineHeight: '1.9', fontSize: '1rem' }}>
                {caseStudy.treatmentApproach.map((block: any, i: number) => (
                  <p key={i} style={{ marginBottom: '16px' }}>
                    {block.children?.map((child: any) => child.text).join('')}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* OUTCOME */}
          {caseStudy.outcome?.length > 0 && (
            <div style={{ borderTop: '1px solid #E0E0E0', paddingTop: '40px', marginBottom: '60px' }}>
              <h2 style={{ color: '#1A1A1A', fontSize: '1.8rem', fontWeight: '800', fontFamily: 'Georgia, serif', marginBottom: '24px' }}>
                Outcome
              </h2>
              <div style={{ color: '#555', lineHeight: '1.9', fontSize: '1rem' }}>
                {caseStudy.outcome.map((block: any, i: number) => (
                  <p key={i} style={{ marginBottom: '16px' }}>
                    {block.children?.map((child: any) => child.text).join('')}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* KEY TAKEAWAYS */}
          {caseStudy.keyTakeaways?.length > 0 && (
            <div style={{ borderTop: '1px solid #E0E0E0', paddingTop: '40px', marginBottom: '60px' }}>
              <h2 style={{ color: '#1A1A1A', fontSize: '1.8rem', fontWeight: '800', fontFamily: 'Georgia, serif', marginBottom: '24px' }}>
                Key Takeaways
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {caseStudy.keyTakeaways.map((takeaway: string, i: number) => (
                  <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ color: '#0000CC', fontWeight: '800', fontSize: '1.2rem', fontFamily: 'Georgia, serif', minWidth: '32px' }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <p style={{ color: '#555', lineHeight: '1.7', fontSize: '0.95rem', margin: 0 }}>
                      {takeaway}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* RELATED TRIAL */}
          {caseStudy.relatedTrial && (
            <div style={{ borderTop: '1px solid #E0E0E0', paddingTop: '40px' }}>
              <h2 style={{ color: '#1A1A1A', fontSize: '1.8rem', fontWeight: '800', fontFamily: 'Georgia, serif', marginBottom: '24px' }}>
                Related Clinical Trial
              </h2>
              <a href={`/hcp/clinical-trials`} style={{
                display: 'block',
                background: '#F5F5F5',
                padding: '24px',
                borderRadius: '8px',
                borderLeft: '4px solid #0000CC',
                textDecoration: 'none',
              }}>
                <p style={{ color: '#888', fontSize: '0.8rem', margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600' }}>
                  {caseStudy.relatedTrial.phase}
                </p>
                <h3 style={{ color: '#1A1A1A', fontSize: '1.1rem', fontWeight: '700', margin: '0 0 8px' }}>
                  {caseStudy.relatedTrial.title}
                </h3>
                <span style={{ color: '#0000CC', fontWeight: '600', fontSize: '0.9rem' }}>
                  View Clinical Trial Data →
                </span>
              </a>
            </div>
          )}

        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0000CC', padding: '100px 40px', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '40px' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '16px', fontFamily: 'Georgia, serif' }}>
              Read more case studies
            </h2>
            <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7', maxWidth: '500px' }}>
              Explore our full library of real world outcomes with Pandozab.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="/case-studies" style={{ ...theme.buttons.white }}>All Case Studies</a>
            <a href="/hcp" style={{ ...theme.buttons.outlineWhite }}>HCP Portal</a>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section style={{ background: '#1A1A1A', color: '#888', padding: '20px 40px', textAlign: 'center', fontSize: '0.8rem' }}>
        <p>This website is intended for informational purposes only. Please consult your healthcare provider before starting any medication.</p>
      </section>
    </main>
  )
}