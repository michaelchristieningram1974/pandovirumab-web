import type { Metadata } from 'next'
import { client } from '../../../sanity.client'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Dosing Guide | Pandovab (pandovirumab) HCP',
  description: 'Dosing and administration guidance for Pandovab (pandovirumab) including standard dosing, special populations, renal and hepatic impairment.',
  keywords: 'Pandovab dosing, pandovirumab dose, hypertension medication dosing guide',
  openGraph: {
    title: 'Dosing Guide | Pandovab (pandovirumab) HCP',
    description: 'Dosing guidance for healthcare professionals.',
    type: 'website',
  },
}

async function getDosingGuide() {
  return client.fetch(`*[_type == "dosingGuide"][0]{
    title,
    doseAmount,
    frequency,
    route,
    standardDosing,
    specialPopulations,
    missedDose,
    overdose,
    storage
  }`)
}

export default async function DosingPage() {
  const dosing = await getDosingGuide()

  const populationLabels: Record<string, string> = {
    elderly: 'Elderly (65+)',
    renal: 'Renal Impairment',
    hepatic: 'Hepatic Impairment',
    pediatric: 'Pediatric',
    pregnancy: 'Pregnancy',
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
            Dosing & Administration
          </p>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', lineHeight: '1.15', marginBottom: '24px', color: '#1A1A1A', fontFamily: 'Georgia, serif', maxWidth: '700px' }}>
            Dosing Guide
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: '1.7', maxWidth: '600px' }}>
            Dosing and administration information for Pandovab (pandovirumab)
          </p>
        </div>
      </section>

      {/* QUICK REFERENCE */}
      <section style={{ background: '#0000CC', padding: '60px 40px', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
            {dosing?.doseAmount && (
              <div>
                <p style={{ fontSize: '0.8rem', opacity: 0.7, margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Dose</p>
                <p style={{ fontSize: '2.5rem', fontWeight: '800', margin: 0, fontFamily: 'Georgia, serif' }}>{dosing.doseAmount}</p>
              </div>
            )}
            {dosing?.frequency && (
              <div>
                <p style={{ fontSize: '0.8rem', opacity: 0.7, margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Frequency</p>
                <p style={{ fontSize: '2.5rem', fontWeight: '800', margin: 0, fontFamily: 'Georgia, serif' }}>{dosing.frequency}</p>
              </div>
            )}
            {dosing?.route && (
              <div>
                <p style={{ fontSize: '0.8rem', opacity: 0.7, margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Route</p>
                <p style={{ fontSize: '2.5rem', fontWeight: '800', margin: 0, fontFamily: 'Georgia, serif', textTransform: 'capitalize' }}>{dosing.route}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* DOSING CONTENT */}
      <section style={{ background: '#FFFFFF', padding: '100px 40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>

          {dosing?.standardDosing?.length > 0 && (
            <div style={{ marginBottom: '60px', borderTop: '3px solid #0000CC', paddingTop: '40px' }}>
              <h2 style={{ color: '#1A1A1A', fontSize: '1.8rem', marginBottom: '24px', fontWeight: '800', fontFamily: 'Georgia, serif' }}>
                Standard Dosing Instructions
              </h2>
              <div style={{ color: '#555', lineHeight: '1.9', fontSize: '0.95rem' }}>
                {dosing.standardDosing.map((block: any, i: number) => (
                  <p key={i} style={{ marginBottom: '16px' }}>{block.children?.map((child: any) => child.text).join('')}</p>
                ))}
              </div>
            </div>
          )}

          {dosing?.specialPopulations?.length > 0 && (
            <div style={{ marginBottom: '60px', borderTop: '3px solid #0000CC', paddingTop: '40px' }}>
              <h2 style={{ color: '#1A1A1A', fontSize: '1.8rem', marginBottom: '32px', fontWeight: '800', fontFamily: 'Georgia, serif' }}>
                Special Populations
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {dosing.specialPopulations.map((pop: any, i: number) => (
                  <div key={i} style={{ background: '#F5F5F5', padding: '28px', borderRadius: '8px', borderLeft: '4px solid #0000CC' }}>
                    <h3 style={{ color: '#1A1A1A', marginBottom: '12px', fontSize: '1.1rem', fontWeight: '700' }}>
                      {populationLabels[pop.population] ?? pop.population}
                    </h3>
                    <p style={{ color: '#555', lineHeight: '1.7', margin: '0 0 8px', fontSize: '0.95rem' }}>{pop.instructions}</p>
                    {pop.warning && (
                      <div style={{ background: '#fff3cd', border: '1px solid #ffc107', borderRadius: '4px', padding: '10px 14px', marginTop: '8px', fontSize: '0.9rem', color: '#856404' }}>
                        ⚠️ {pop.warning}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {dosing?.missedDose && (
            <div style={{ marginBottom: '60px', borderTop: '3px solid #0000CC', paddingTop: '40px' }}>
              <h2 style={{ color: '#1A1A1A', fontSize: '1.8rem', marginBottom: '24px', fontWeight: '800', fontFamily: 'Georgia, serif' }}>
                Missed Dose
              </h2>
              <p style={{ color: '#555', lineHeight: '1.8', fontSize: '0.95rem' }}>{dosing.missedDose}</p>
            </div>
          )}

          {dosing?.overdose && (
            <div style={{ marginBottom: '60px', borderTop: '3px solid #c0392b', paddingTop: '40px' }}>
              <h2 style={{ color: '#c0392b', fontSize: '1.8rem', marginBottom: '24px', fontWeight: '800', fontFamily: 'Georgia, serif' }}>
                Overdose
              </h2>
              <div style={{ background: '#fff3f3', border: '1px solid #ffcccc', padding: '24px', borderRadius: '8px', color: '#555', lineHeight: '1.8', fontSize: '0.95rem' }}>
                ⚠️ {dosing.overdose}
              </div>
            </div>
          )}

          {dosing?.storage && (
            <div style={{ borderTop: '3px solid #0000CC', paddingTop: '40px' }}>
              <h2 style={{ color: '#1A1A1A', fontSize: '1.8rem', marginBottom: '24px', fontWeight: '800', fontFamily: 'Georgia, serif' }}>
                Storage
              </h2>
              <p style={{ color: '#555', lineHeight: '1.8', fontSize: '0.95rem' }}>{dosing.storage}</p>
            </div>
          )}

          {!dosing && (
            <p style={{ color: '#555' }}>Dosing information coming soon.</p>
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