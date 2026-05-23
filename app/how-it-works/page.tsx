import type { Metadata } from 'next'
import { client } from '../../sanity.client'
import { theme } from '../../theme'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'How pandozab Works',
  description: 'Learn how pandozab (pandovirumab) works to treat hypertension. Understand the mechanism of action and step by step process of how it controls blood pressure.',
  keywords: 'how does pandozab work, pandovirumab mechanism of action, blood pressure medication how it works',
  openGraph: {
    title: 'How pandozab Works',
    description: 'Understanding how pandozab controls blood pressure.',
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
      <section style={{ background: '#F5F5F5', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#0000CC', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
            Science
          </p>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', lineHeight: '1.15', marginBottom: '24px', color: '#1A1A1A', fontFamily: 'Georgia, serif', maxWidth: '700px' }}>
            How pandozab Works
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: '1.7', maxWidth: '600px' }}>
            Understanding how pandozab controls your blood pressure
          </p>
        </div>
      </section>

      {/* STEPS */}
      <section style={{ background: '#FFFFFF', padding: '100px 40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ color: '#0000CC', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Step by Step
          </p>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#1A1A1A', marginBottom: '60px', fontFamily: 'Georgia, serif' }}>
            How it works in your body
          </h2>
          {product?.howItWorks?.length > 0 ? (
            product.howItWorks.map((step: any, index: number) => (
              <div key={index} style={{
                display: 'flex',
                gap: '32px',
                marginBottom: '48px',
                alignItems: 'flex-start',
                borderTop: index === 0 ? '3px solid #0000CC' : '1px solid #E0E0E0',
                paddingTop: '32px',
              }}>
                <div style={{
                  color: '#0000CC',
                  fontSize: '2rem',
                  fontWeight: '800',
                  fontFamily: 'Georgia, serif',
                  minWidth: '50px',
                  lineHeight: 1,
                }}>
                  {String(step.step ?? index + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 style={{ color: '#1A1A1A', marginBottom: '10px', fontSize: '1.2rem', fontWeight: '700', fontFamily: 'Georgia, serif' }}>
                    {step.title}
                  </h3>
                  <p style={{ color: '#555', lineHeight: '1.7', margin: 0, fontSize: '0.95rem' }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p style={{ color: '#555' }}>Content coming soon.</p>
          )}
        </div>
      </section>

      {/* MECHANISM OF ACTION */}
      <section style={{ background: '#F5F5F5', padding: '100px 40px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ color: '#0000CC', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Mechanism of Action
          </p>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#1A1A1A', marginBottom: '40px', fontFamily: 'Georgia, serif' }}>
            The science behind pandozab
          </h2>
          <div style={{ borderTop: '3px solid #0000CC', paddingTop: '32px', color: '#444', lineHeight: '1.9', fontSize: '1rem' }}>
            {product?.mechanismOfAction?.length > 0 ? (
              product.mechanismOfAction.map((block: any, i: number) => (
                <p key={i} style={{ marginBottom: '16px' }}>
                  {block.children?.map((child: any) => child.text).join('')}
                </p>
              ))
            ) : (
              <p>Content coming soon.</p>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0000CC', padding: '100px 40px', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '40px' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '16px', fontFamily: 'Georgia, serif' }}>
              Want to know more?
            </h2>
            <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7', maxWidth: '500px' }}>
              Read our FAQs or speak to your doctor about pandozab.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="/faq" style={{ ...theme.buttons.white }}>Read FAQs</a>
            <a href="/side-effects" style={{ ...theme.buttons.outlineWhite }}>Side Effects</a>
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
            "name": "How pandozab Works",
            "description": "Learn how pandozab (pandovirumab) works to treat hypertension through its unique mechanism of action.",
            "url": "https://pandozab.com/how-it-works",
            "about": {
              "@type": "Drug",
              "name": "pandozab",
              "alternateName": "pandovirumab",
              "mechanismOfAction": "pandozab works by targeting key pathways involved in blood pressure regulation.",
              "indication": { "@type": "MedicalIndication", "name": "Hypertension" }
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