import type { Metadata } from 'next'
import { client } from '../sanity.client'

export const metadata: Metadata = {
  title: 'Pandovab (pandovirumab) | Blood Pressure Treatment',
  description: 'Pandovab (pandovirumab) is a prescription medication indicated for the treatment of hypertension in adults. Learn about dosing, side effects, and clinical data.',
  keywords: 'Pandovab, pandovirumab, hypertension, blood pressure, treatment, medication',
  openGraph: {
    title: 'Pandovab (pandovirumab) | Blood Pressure Treatment',
    description: 'A new standard in blood pressure control.',
    type: 'website',
  },
}

async function getProduct() {
  return client.fetch(`*[_type == "product"][0]{
    name,
    tagline,
    indication,
    heroImage,
    keyFeatures,
    benefits
  }`)
}

export default async function Home() {
  const product = await getProduct()

  return (
    <main>
      {/* HERO SECTION */}
      <section style={{
        background: 'linear-gradient(135deg, #003087 0%, #00857C 100%)',
        color: 'white',
        padding: '80px 40px',
        textAlign: 'center',
      }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px' }}>
          {product?.name ?? 'Pandovab'}
        </h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '20px', opacity: 0.9 }}>
          {product?.tagline ?? 'A breakthrough in hypertension treatment'}
        </p>
        <p style={{ fontSize: '1rem', maxWidth: '700px', margin: '0 auto 40px', opacity: 0.8 }}>
          {product?.indication ?? ''}
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/product" style={{
            background: 'white',
            color: '#003087',
            padding: '14px 32px',
            borderRadius: '4px',
            fontWeight: 'bold',
            textDecoration: 'none',
            fontSize: '1rem',
          }}>
            Learn More
          </a>
          <a href="/hcp" style={{
            background: 'transparent',
            color: 'white',
            padding: '14px 32px',
            borderRadius: '4px',
            fontWeight: 'bold',
            textDecoration: 'none',
            fontSize: '1rem',
            border: '2px solid white',
          }}>
            Healthcare Professionals
          </a>
        </div>
      </section>

      {/* KEY FEATURES SECTION */}
      <section style={{ padding: '80px 40px', background: '#F5F7FA' }}>
        <h2 style={{ textAlign: 'center', color: '#003087', fontSize: '2rem', marginBottom: '50px' }}>
          Why Pandovab?
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          {product?.keyFeatures?.map((feature: any, index: number) => (
            <div key={index} style={{
              background: 'white',
              padding: '40px 30px',
              borderRadius: '8px',
              borderTop: '4px solid #00857C',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            }}>
              <h3 style={{ color: '#003087', marginBottom: '12px', fontSize: '1.2rem' }}>
                {feature.title}
              </h3>
              <p style={{ color: '#555', lineHeight: '1.6' }}>
                {feature.description}
              </p>
            </div>
          ))}
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
    </main>
  )
}