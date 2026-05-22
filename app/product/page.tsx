import type { Metadata } from 'next'
import { client } from '../../sanity.client'
import { theme } from '../../theme'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'About Pandovab (pandovirumab)',
  description: 'Learn about Pandovab (pandovirumab), a prescription medication indicated for the treatment of hypertension in adults.',
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
      <section style={{ background: '#F5F5F5', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#0000CC', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
            pandovirumab
          </p>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', lineHeight: '1.15', marginBottom: '24px', color: '#1A1A1A', fontFamily: 'Georgia, serif', maxWidth: '700px' }}>
            {product?.name ?? 'Pandovab'}
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: '1.7', marginBottom: '16px', maxWidth: '700px' }}>
            {product?.tagline ?? 'A new standard in blood pressure control'}
          </p>
          <div style={{
            background: 'white',
            borderLeft: '4px solid #0000CC',
            padding: '20px 24px',
            borderRadius: '4px',
            maxWidth: '700px',
            marginBottom: '40px',
          }}>
            <p style={{ color: '#444', lineHeight: '1.8', margin: 0, fontSize: '0.95rem' }}>
              {product?.indication ?? ''}
            </p>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="/faq" style={{ ...theme.buttons.primary }}>Read FAQs</a>
            <a href="/hcp" style={{ ...theme.buttons.outline }}>Healthcare Professionals</a>
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section style={{ background: '#FFFFFF', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#0000CC', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Key Features
          </p>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#1A1A1A', marginBottom: '60px', fontFamily: 'Georgia, serif', maxWidth: '600px' }}>
            What makes Pandovab different
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
            {product?.keyFeatures?.map((feature: any, index: number) => (
              <div key={index} style={{ borderTop: '3px solid #0000CC', paddingTop: '24px' }}>
                <h3 style={{ color: '#1A1A1A', marginBottom: '12px', fontSize: '1.2rem', fontWeight: '700', fontFamily: 'Georgia, serif' }}>
                  {feature.title}
                </h3>
                <p style={{ color: '#555', lineHeight: '1.7', fontSize: '0.95rem' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section style={{ background: '#F5F5F5', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#0000CC', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Benefits
          </p>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#1A1A1A', marginBottom: '60px', fontFamily: 'Georgia, serif', maxWidth: '600px' }}>
            Why patients and doctors choose Pandovab
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {product?.benefits?.map((benefit: any, index: number) => (
              <div key={index} style={{ background: 'white', padding: '32px', borderRadius: '8px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
                <h3 style={{ color: '#1A1A1A', marginBottom: '10px', fontSize: '1.1rem', fontWeight: '700' }}>
                  {benefit.title}
                </h3>
                <p style={{ color: '#555', lineHeight: '1.7', fontSize: '0.95rem', margin: 0 }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MECHANISM OF ACTION */}
      <section style={{ background: '#FFFFFF', padding: '100px 40px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ color: '#0000CC', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Science
          </p>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#1A1A1A', marginBottom: '40px', fontFamily: 'Georgia, serif' }}>
            Mechanism of Action
          </h2>
          <div style={{ borderTop: '3px solid #0000CC', paddingTop: '32px', color: '#444', lineHeight: '1.9', fontSize: '1rem' }}>
            {product?.mechanismOfAction?.map((block: any, i: number) => (
              <p key={i} style={{ marginBottom: '16px' }}>
                {block.children?.map((child: any) => child.text).join('')}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0000CC', padding: '100px 40px', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '40px' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '16px', fontFamily: 'Georgia, serif' }}>
              Ready to learn more?
            </h2>
            <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7', maxWidth: '500px' }}>
              Speak to your doctor about whether Pandovab is right for you.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="/faq" style={{ ...theme.buttons.white }}>Read FAQs</a>
            <a href="/hcp" style={{ ...theme.buttons.outlineWhite }}>HCP Portal</a>
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
            "name": "About Pandovab (pandovirumab)",
            "description": "Learn about Pandovab (pandovirumab), a prescription medication for the treatment of hypertension in adults.",
            "url": "https://pandovab.com/product",
            "about": {
              "@type": "Drug",
              "name": "Pandovab",
              "alternateName": "pandovirumab",
              "indication": { "@type": "MedicalIndication", "name": "Hypertension" },
              "administrationRoute": "Oral",
              "drugClass": "Antihypertensive"
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