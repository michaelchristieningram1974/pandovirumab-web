import type { Metadata } from 'next'
import { client } from '../../../sanity.client'

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
          Dosing Guide
        </h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '650px', margin: '0 auto' }}>
          Dosing and administration information for Pandovab (pandovirumab)
        </p>
      </section>

      {/* STANDARD DOSING */}
      <section style={{ padding: '80px 40px', background: '#F5F7FA' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>

          {/* QUICK REFERENCE */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            marginBottom: '50px',
          }}>
            {dosing?.doseAmount && (
              <div style={{
                background: '#003087',
                color: 'white',
                padding: '30px',
                borderRadius: '8px',
                textAlign: 'center',
              }}>
                <p style={{ fontSize: '0.8rem', opacity: 0.8, margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Dose</p>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>{dosing.doseAmount}</p>
              </div>
            )}
            {dosing?.frequency && (
              <div style={{
                background: '#00857C',
                color: 'white',
                padding: '30px',
                borderRadius: '8px',
                textAlign: 'center',
              }}>
                <p style={{ fontSize: '0.8rem', opacity: 0.8, margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Frequency</p>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>{dosing.frequency}</p>
              </div>
            )}
            {dosing?.route && (
              <div style={{
                background: '#003087',
                color: 'white',
                padding: '30px',
                borderRadius: '8px',
                textAlign: 'center',
              }}>
                <p style={{ fontSize: '0.8rem', opacity: 0.8, margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Route</p>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0, textTransform: 'capitalize' }}>{dosing.route}</p>
              </div>
            )}
          </div>

          {/* STANDARD DOSING */}
          {dosing?.standardDosing?.length > 0 && (
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ color: '#003087', fontSize: '1.5rem', marginBottom: '20px' }}>
                Standard Dosing Instructions
              </h2>
              <div style={{
                background: 'white',
                padding: '30px',
                borderRadius: '8px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                borderLeft: '4px solid #003087',
                color: '#555',
                lineHeight: '1.8',
              }}>
                {dosing.standardDosing.map((block: any, i: number) => (
                  <p key={i}>{block.children?.map((child: any) => child.text).join('')}</p>
                ))}
              </div>
            </div>
          )}

          {/* SPECIAL POPULATIONS */}
          {dosing?.specialPopulations?.length > 0 && (
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ color: '#003087', fontSize: '1.5rem', marginBottom: '20px' }}>
                Special Populations
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {dosing.specialPopulations.map((pop: any, i: number) => (
                  <div key={i} style={{
                    background: 'white',
                    padding: '24px',
                    borderRadius: '8px',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                    borderLeft: '4px solid #00857C',
                  }}>
                    <h3 style={{ color: '#003087', marginBottom: '12px', fontSize: '1.1rem' }}>
                      {populationLabels[pop.population] ?? pop.population}
                    </h3>
                    <p style={{ color: '#555', lineHeight: '1.7', margin: '0 0 8px' }}>
                      {pop.instructions}
                    </p>
                    {pop.warning && (
                      <div style={{
                        background: '#fff3cd',
                        border: '1px solid #ffc107',
                        borderRadius: '4px',
                        padding: '10px 14px',
                        marginTop: '8px',
                        fontSize: '0.9rem',
                        color: '#856404',
                      }}>
                        ⚠️ {pop.warning}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* MISSED DOSE */}
          {dosing?.missedDose && (
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ color: '#003087', fontSize: '1.5rem', marginBottom: '20px' }}>
                Missed Dose
              </h2>
              <div style={{
                background: 'white',
                padding: '24px',
                borderRadius: '8px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                borderLeft: '4px solid #00857C',
                color: '#555',
                lineHeight: '1.7',
              }}>
                {dosing.missedDose}
              </div>
            </div>
          )}

          {/* OVERDOSE */}
          {dosing?.overdose && (
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ color: '#003087', fontSize: '1.5rem', marginBottom: '20px' }}>
                Overdose
              </h2>
              <div style={{
                background: '#fff3f3',
                border: '1px solid #ffcccc',
                padding: '24px',
                borderRadius: '8px',
                borderLeft: '4px solid #c0392b',
                color: '#555',
                lineHeight: '1.7',
              }}>
                ⚠️ {dosing.overdose}
              </div>
            </div>
          )}

          {/* STORAGE */}
          {dosing?.storage && (
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ color: '#003087', fontSize: '1.5rem', marginBottom: '20px' }}>
                Storage
              </h2>
              <div style={{
                background: 'white',
                padding: '24px',
                borderRadius: '8px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                borderLeft: '4px solid #003087',
                color: '#555',
                lineHeight: '1.7',
              }}>
                {dosing.storage}
              </div>
            </div>
          )}

          {!dosing && (
            <p style={{ textAlign: 'center', color: '#555' }}>
              Dosing information coming soon.
            </p>
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