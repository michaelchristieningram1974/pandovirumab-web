import type { Metadata } from 'next'
import { client } from '../../sanity.client'
import { theme } from '../../theme'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Side Effects | Pandovab (pandovirumab)',
  description: 'Learn about the possible side effects of Pandovab (pandovirumab) including common, uncommon and rare side effects and what to do if you experience them.',
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
    { value: 'rare', label: 'Rare', description: 'Affects up to 1 in 1,000 people', color: '#0000CC' },
    { value: 'very_rare', label: 'Very Rare', description: 'Affects fewer than 1 in 10,000 people', color: '#00857C' },
  ]

  return (
    <main>
      {/* HERO */}
      <section style={{ background: '#F5F5F5', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#0000CC', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
            Safety Information
          </p>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', lineHeight: '1.15', marginBottom: '24px', color: '#1A1A1A', fontFamily: 'Georgia, serif', maxWidth: '700px' }}>
            Side Effects
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: '1.7', maxWidth: '600px' }}>
            Like all medicines, Pandovab can cause side effects, although not everybody gets them.
          </p>
        </div>
      </section>

      {/* EMERGENCY WARNING */}
      <section style={{ padding: '30px 40px', background: '#fff3f3', borderBottom: '1px solid #ffcccc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
          <div style={{ fontSize: '1.5rem' }}>⚠️</div>
          <div>
            <h3 style={{ color: '#c0392b', margin: '0 0 8px', fontSize: '1rem', fontWeight: '700' }}>
              Seek immediate medical attention if you experience:
            </h3>
            {sideEffects.filter((s: any) => s.seekImmediateCare).length > 0 ? (
              <ul style={{ margin: 0, color: '#555', lineHeight: '1.8', paddingLeft: '20px', fontSize: '0.9rem' }}>
                {sideEffects.filter((s: any) => s.seekImmediateCare).map((s: any, i: number) => (
                  <li key={i}>{s.name}</li>
                ))}
              </ul>
            ) : (
              <p style={{ margin: 0, color: '#555', fontSize: '0.9rem' }}>
                Severe allergic reactions, sudden chest pain, difficulty breathing, or severe swelling.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* SIDE EFFECTS BY FREQUENCY */}
      <section style={{ background: '#FFFFFF', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#0000CC', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Frequency
          </p>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#1A1A1A', marginBottom: '60px', fontFamily: 'Georgia, serif' }}>
            Side Effects by Frequency
          </h2>

          {sideEffects.length === 0 ? (
            <p style={{ color: '#555' }}>Content coming soon.</p>
          ) : (
            frequencies.map((freq) => {
              const effects = sideEffects.filter((s: any) => s.frequency === freq.value)
              if (effects.length === 0) return null
              return (
                <div key={freq.value} style={{ marginBottom: '60px', borderTop: '3px solid #E0E0E0', paddingTop: '32px' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '24px' }}>
                    <h3 style={{ color: freq.color, fontSize: '1.3rem', fontWeight: '700', fontFamily: 'Georgia, serif', margin: 0 }}>
                      {freq.label}
                    </h3>
                    <span style={{ color: '#888', fontSize: '0.85rem' }}>
                      {freq.description}
                    </span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
                    {effects.map((effect: any, index: number) => (
                      <div key={index} style={{
                        background: '#F5F5F5',
                        padding: '24px',
                        borderRadius: '8px',
                        borderTop: `3px solid ${freq.color}`,
                      }}>
                        <h4 style={{ color: '#1A1A1A', margin: '0 0 8px', fontSize: '1rem', fontWeight: '700' }}>
                          {effect.name}
                        </h4>
                        {effect.description && (
                          <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: '1.6', margin: '0 0 8px' }}>
                            {effect.description}
                          </p>
                        )}
                        {effect.patientAdvice && (
                          <p style={{ color: '#0000CC', fontSize: '0.85rem', lineHeight: '1.5', margin: 0, fontStyle: 'italic' }}>
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
      <section style={{ background: '#F5F5F5', padding: '100px 40px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ color: '#0000CC', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Reporting
          </p>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#1A1A1A', marginBottom: '24px', fontFamily: 'Georgia, serif' }}>
            Reporting Side Effects
          </h2>
          <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '16px', fontSize: '0.95rem' }}>
            If you get any side effects, talk to your doctor, pharmacist or nurse. This includes any possible side effects not listed in this information. You can also report side effects directly via your national reporting scheme.
          </p>
          <p style={{ color: '#555', lineHeight: '1.8', fontSize: '0.95rem' }}>
            By reporting side effects you can help provide more information on the safety of this medicine.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0000CC', padding: '100px 40px', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '40px' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '16px', fontFamily: 'Georgia, serif' }}>
              Have questions?
            </h2>
            <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7', maxWidth: '500px' }}>
              Read our FAQs or speak to your healthcare provider.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="/faq" style={{ ...theme.buttons.white }}>Read FAQs</a>
            <a href="/contact" style={{ ...theme.buttons.outlineWhite }}>Contact Us</a>
          </div>
        </div>
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