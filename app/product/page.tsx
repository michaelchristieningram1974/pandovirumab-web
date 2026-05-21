import type { Metadata } from 'next'
import { client } from '../../sanity.client'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'About Pandovab (pandovirumab)',
  description: 'Learn about Pandovab (pandovirumab), a prescription medication indicated for the treatment of hypertension in adults. Discover its features, benefits and indication.',
  keywords: 'Pandovab, pandovirumab, hypertension medication, blood pressure treatment',
  openGraph: {
    title: 'About Pandovab (pandovirumab)',
    description: 'A new standard in blood pressure control.',
    type: 'website',
  },
}

async function getProduct() {
  return client.fetch(`*[_type == "product"][0]{
    name,
    tagline,
    indication,
    mechanismOfAction,
    heroImage,
    keyFeatures,
    benefits,
    howItWorks
  }`)
}

export default async function ProductPage() {
  const product = await getProduct()

  return (
    <main>
      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #003087 0%, #00857C 100%)',
        color: 'white',
        padding: '80px 40px',
        textAlign: 'center',
      }}>
        <p style={{ fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.8, marginBottom: '16px' }}>
          pandovirumab
        </p>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px' }}>
          {product?.name ?? 'Pandovab'}
        </h1>
        <p style={{ fontSize: '1.3rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto 24px' }}>
          {product?.tagline ?? 'A new standard in blood pressure control'}
        </p>
        <div style={{
          background: 'rgba(255,255,255,0.15)',
          borderRadius: '8px',
          padding: '20px 40px',
          maxWidth: '800px',
          margin: '0 auto',
          fontSize: '0.95rem',
          lineHeight: '1.7',
          opacity: 0.95,
        }}>
          {product?.indication ?? ''}
        </div>
      </section>

      {/* KEY FEATURES */}
      <section style={{ padding: '80px 40px', background: '#F5F7FA' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', color: '#003087', fontSize: '2rem', marginBottom: '12px' }}>
            Key Features
          </h2>
          <p style={{ textAlign: 'center', color: '#555', marginBottom: '50px', fontSize: '1.05rem' }}>
            What makes Pandovab different
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
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
                <p style={{ color: '#555', lineHeight: '1.7', margin: 0 }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section style={{ padding: '80px 40px', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', color: '#003087', fontSize: '2rem', marginBottom: '12px' }}>
            Benefits
          </h2>
          <p style={{ textAlign: 'center', color: '#555', marginBottom: '50px', fontSize: '1.05rem' }}>
            Why patients and doctors choose Pandovab
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}>
            {product?.benefits?.map((benefit: any, index: number) => (
              <div key={index} style={{
                background: '#E6F4F3',
                padding: '30px',
                borderRadius: '8px',
                borderLeft: '4px solid #00857C',
              }}>
                <h3 style={{ color: '#003087', marginBottom: '10px', fontSize: '1.1rem' }}>
                  {benefit.title}
                </h3>
                <p style={{ color: '#444', lineHeight: '1.7', margin: 0 }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MECHANISM OF ACTION */}
      <section style={{ padding: '80px 40px', background: '#F5F7FA' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', color: '#003087', fontSize: '2rem', marginBottom: '12px' }}>
            Mechanism of Action
          </h2>
          <p style={{ textAlign: 'center', color: '#555', marginBottom: '40px', fontSize: '1.05rem' }}>
            How Pandovab works in the body
          </p>
          <div style={{
            background: 'white',
            padding: '40px',
            borderRadius: '8px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            color: '#444',
            lineHeight: '1.8',
            fontSize: '1rem',
          }}>
            {product?.mechanismOfAction?.map((block: any, i: number) => (
              <p key={i}>{block.children?.map((child: any) => child.text).join('')}</p>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: '#003087',
        color: 'white',
        padding: '60px 40px',
        textAlign: 'center',
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>
          Ready to learn more?
        </h2>
        <p style={{ opacity: 0.85, marginBottom: '32px', fontSize: '1.05rem' }}>
          Speak to your doctor about whether Pandovab is right for you.
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
          <a href="/hcp" style={{
            background: 'transparent',
            color: 'white',
            padding: '14px 32px',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1rem',
            border: '2px solid white',
          }}>
            Healthcare Professionals
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
      "name": "About Pandovab (pandovirumab)",
      "description": "Learn about Pandovab (pandovirumab), a prescription medication for the treatment of hypertension in adults.",
      "url": "https://pandovab.com/product",
      "about": {
        "@type": "Drug",
        "name": "Pandovab",
        "alternateName": "pandovirumab",
        "indication": {
          "@type": "MedicalIndication",
          "name": "Hypertension"
        },
        "administrationRoute": "Oral",
        "drugClass": "Antihypertensive"
      },
      "audience": {
        "@type": "Patient"
      },
      "medicalAudience": "Patient"
    })
  }}
/>





    
    
    
    
    </main>
  )
}