import type { Metadata } from 'next'
import { client } from '../../sanity.client'

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