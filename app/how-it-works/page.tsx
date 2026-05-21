import type { Metadata } from 'next'
import { client } from '../../sanity.client'

export const metadata: Metadata = {
  title: 'How Pandovab Works',
  description: 'Learn how Pandovab (pandovirumab) works to treat hypertension. Understand the mechanism of action and step by step process of how it controls blood pressure.',
  keywords: 'how does Pandovab work, pandovirumab mechanism of action, blood pressure medication how it works',
  openGraph: {
    title: 'How Pandovab Works',
    description: 'Understanding how Pandovab controls blood pressure.',
    type: 'website',
  },
}

async function getProduct() {
  return client.fetch(`*[_type == "product"][0]{
    name,
    mechanismOfAction,
    howItWorks
  }`)
}

export default async function HowItWorksPage() {
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
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
          How Pandovab Works
        </h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
          Understanding how Pandovab controls your blood pressure
        </p>
      </section>

      {/* STEPS */}
      <section style={{ padding: '80px 40px', background: '#F5F7FA' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', color: '#003087', fontSize: '2rem', marginBottom: '12px' }}>
            Step by Step
          </h2>
          <p style={{ textAlign: 'center', color: '#555', marginBottom: '60px', fontSize: '1.05rem' }}>
            How Pandovab works in your body
          </p>
          {product?.howItWorks?.length > 0 ? (
            product.howItWorks.map((step: any, index: number) => (
              <div key={index} style={{
                display: 'flex',
                gap: '30px',
                marginBottom: '40px',
                alignItems: 'flex-start',
              }}>
                <div style={{
                  background: '#003087',
                  color: 'white',
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  flexShrink: 0,
                }}>
                  {step.step ?? index + 1}
                </div>
                <div style={{
                  background: 'white',
                  padding: '30px',
                  borderRadius: '8px',
                  flex: 1,
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  borderLeft: '4px solid #00857C',
                }}>
                  <h3 style={{ color: '#003087', marginBottom: '10px', fontSize: '1.2rem' }}>
                    {step.title}
                  </h3>
                  <p style={{ color: '#555', lineHeight: '1.7', margin: 0 }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p style={{ textAlign: 'center', color: '#555' }}>
              Content coming soon.
            </p>
          )}
        </div>
      </section>

      {/* MECHANISM OF ACTION */}
      <section style={{ padding: '80px 40px', background: 'white' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', color: '#003087', fontSize: '2rem', marginBottom: '12px' }}>
            Mechanism of Action
          </h2>
          <p style={{ textAlign: 'center', color: '#555', marginBottom: '40px', fontSize: '1.05rem' }}>
            The science behind Pandovab
          </p>
          <div style={{
            background: '#E6F4F3',
            padding: '40px',
            borderRadius: '8px',
            borderLeft: '4px solid #00857C',
            color: '#444',
            lineHeight: '1.8',
            fontSize: '1rem',
          }}>
            {product?.mechanismOfAction?.length > 0 ? (
              product.mechanismOfAction.map((block: any, i: number) => (
                <p key={i}>{block.children?.map((child: any) => child.text).join('')}</p>
              ))
            ) : (
              <p style={{ margin: 0 }}>Content coming soon.</p>
            )}
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
          Want to know more?
        </h2>
        <p style={{ opacity: 0.85, marginBottom: '32px', fontSize: '1.05rem' }}>
          Read our FAQs or speak to your doctor about Pandovab.
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
          <a href="/side-effects" style={{
            background: 'transparent',
            color: 'white',
            padding: '14px 32px',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1rem',
            border: '2px solid white',
          }}>
            Side Effects
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
      "name": "How Pandovab Works",
      "description": "Learn how Pandovab (pandovirumab) works to treat hypertension through its unique mechanism of action.",
      "url": "https://pandovab.com/how-it-works",
      "about": {
        "@type": "Drug",
        "name": "Pandovab",
        "alternateName": "pandovirumab",
        "mechanismOfAction": "Pandovab works by targeting key pathways involved in blood pressure regulation.",
        "indication": {
          "@type": "MedicalIndication",
          "name": "Hypertension"
        }
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