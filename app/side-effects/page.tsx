import type { Metadata } from 'next'
import { client } from '../../sanity.client'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Side Effects | Pandovab (pandovirumab)',
  description: 'Learn about the possible side effects of Pandovab (pandovirumab). Understand common, uncommon and rare side effects and what to do if you experience them.',
  keywords: 'Pandovab side effects, pandovirumab side effects, blood pressure medication side effects',
  openGraph: {
    title: 'Side Effects | Pandovab (pandovirumab)',
    description: 'Understanding the possible side effects of Pandovab.',
    type: 'website',
  },
}

async function getSideEffects() {
  return client.fetch(`*[_type == "sideEffect"] | order(frequency asc) {
    name,
    category,
    frequency,
    severity,
    description,
    patientAdvice,
    seekImmediateCare
  }`)
}

export default async function SideEffectsPage() {
  const sideEffects = await getSideEffects()

  const frequencies = [
    { value: 'very_common', label: 'Very Common', description: 'Affects more than 1 in 10 people', color: '#c0392b' },
    { value: 'common', label: 'Common', description: 'Affects up to 1 in 10 people', color: '#e67e22' },
    { value: 'uncommon', label: 'Uncommon', description: 'Affects up to 1 in 100 people', color: '#f39c12' },
    { value: 'rare', label: 'Rare', description: 'Affects up to 1 in 1,000 people', color: '#00857C' },
    { value: 'very_rare', label: 'Very Rare', description: 'Affects fewer than 1 in 10,000 people', color: '#003087' },
  ]

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
          Side Effects
        </h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '650px', margin: '0 auto' }}>
          Like all medicines, Pandovab can cause side effects, although not everybody gets them.
        </p>
      </section>

      {/* EMERGENCY WARNING */}
      <section style={{ padding: '30px 40px', background: '#fff3f3', borderBottom: '1px solid #ffcccc' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
          <div style={{ fontSize: '1.5rem' }}>⚠️</div>
          <div>
            <h3 style={{ color: '#c0392b', margin: '0 0 8px', fontSize: '1.1rem' }}>
              Seek immediate medical attention if you experience:
            </h3>
            {sideEffects.filter((s: any) => s.seekImmediateCare).length > 0 ? (
              <ul style={{ margin: 0, color: '#555', lineHeight: '1.8', paddingLeft: '20px' }}>
                {sideEffects.filter((s: any) => s.seekImmediateCare).map((s: any, i: number) => (
                  <li key={i}>{s.name}</li>
                ))}
              </ul>
            ) : (
              <p style={{ margin: 0, color: '#555' }}>
                Severe allergic reactions, sudden chest pain, difficulty breathing, or severe swelling.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* SIDE EFFECTS BY FREQUENCY */}
      <section style={{ padding: '80px 40px', background: '#F5F7FA' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', color: '#003087', fontSize: '2rem', marginBottom: '12px' }}>
            Side Effects by Frequency
          </h2>
          <p style={{ textAlign: 'center', color: '#555', marginBottom: '50px', fontSize: '1.05rem' }}>
            How often each side effect occurs
          </p>

          {sideEffects.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#555' }}>Content coming soon.</p>
          ) : (
            frequencies.map((freq) => {
              const effects = sideEffects.filter((s: any) => s.frequency === freq.value)
              if (effects.length === 0) return null
              return (
                <div key={freq.value} style={{ marginBottom: '40px' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '16px',
                  }}>
                    <div style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: freq.color,
                      flexShrink: 0,
                    }} />
                    <h3 style={{ color: freq.color, margin: 0, fontSize: '1.2rem' }}>
                      {freq.label}
                    </h3>
                    <span style={{ color: '#888', fontSize: '0.85rem' }}>
                      — {freq.description}
                    </span>
                  </div>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '16px',
                  }}>
                    {effects.map((effect: any, index: number) => (
                      <div key={index} style={{
                        background: 'white',
                        padding: '24px',
                        borderRadius: '8px',
                        borderLeft: `4px solid ${freq.color}`,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                      }}>
                        <h4 style={{ color: '#003087', margin: '0 0 8px', fontSize: '1rem' }}>
                          {effect.name}
                        </h4>
                        {effect.description && (
                          <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: '1.6', margin: '0 0 8px' }}>
                            {effect.description}
                          </p>
                        )}
                        {effect.patientAdvice && (
                          <p style={{ color: '#00857C', fontSize: '0.85rem', lineHeight: '1.5', margin: 0, fontStyle: 'italic' }}>
                            💡 {effect.patientAdvice}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })
          )}
        </div>
      </section>

      {/* REPORTING */}
      <section style={{ padding: '60px 40px', background: 'white' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ color: '#003087', fontSize: '1.8rem', marginBottom: '16px' }}>
            Reporting Side Effects
          </h2>
          <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '24px' }}>
            If you get any side effects, talk to your doctor, pharmacist or nurse. This includes any possible side effects not listed in this information. You can also report side effects directly via your national reporting scheme.
          </p>
          <p style={{ color: '#555', lineHeight: '1.8' }}>
            By reporting side effects you can help provide more information on the safety of this medicine.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: '#003087',
        color: 'white',
        padding: '60px 40px',
        textAlign: 'center',
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Have questions?</h2>
        <p style={{ opacity: 0.85, marginBottom: '32px', fontSize: '1.05rem' }}>
          Read our FAQs or speak to your healthcare provider.
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/faq" style={{
            background: 'white',
            color: '#003087',
            padding: '14px 32px',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1rem',
          }}>
            Read FAQs
          </a>
          <a href="/contact" style={{
            background: 'transparent',
            color: 'white',
            padding: '14px 32px',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1rem',
            border: '2px solid white',
          }}>
            Contact Us
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
      "name": "Pandovab Side Effects",
      "description": "Learn about the possible side effects of Pandovab (pandovirumab) including common, uncommon and rare side effects.",
      "url": "https://pandovab.com/side-effects",
      "about": {
        "@type": "Drug",
        "name": "Pandovab",
        "alternateName": "pandovirumab",
        "sideEffect": sideEffects.map((effect: any) => ({
          "@type": "MedicalSymptom",
          "name": effect.name,
          "description": effect.description ?? ""
        }))
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