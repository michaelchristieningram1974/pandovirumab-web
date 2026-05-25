import type { Metadata } from 'next'
import { client } from '../sanity.client'
import { theme } from '../theme'

export const revalidate = 0

export const metadata: Metadata = {
  title: 'Pandozab (pandovirumab) | Blood Pressure Treatment',
  description: 'Pandozab (pandovirumab) is a prescription medication indicated for the treatment of hypertension in adults. Learn about dosing, side effects, and clinical data.',
  keywords: 'Pandozab, pandovirumab, hypertension, blood pressure, treatment, medication',
  openGraph: {
    title: 'Pandozab (pandovirumab) | Blood Pressure Treatment',
    description: 'A new standard in blood pressure control.',
    type: 'website',
  },
}

async function getProduct() {
  return client.fetch(`*[_type == "product"][0]{
    name,
    tagline,
    indication,
    keyFeatures,
    benefits
  }`)
}

export default async function Home() {
  const product = await getProduct()

  return (
    <main>
      {/* HERO */}
      <section style={{ background: '#F5F5F5', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
          <div>
            <p style={{ color: '#0000CC', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
              pandovirumab
            </p>
            <h1 style={{ fontSize: '3rem', fontWeight: '800', lineHeight: '1.15', marginBottom: '24px', color: '#1A1A1A', fontFamily: 'Georgia, serif' }}>
              {product?.name ?? 'Pandozab'}
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: '1.7', marginBottom: '16px' }}>
              {product?.tagline ?? 'A new standard in blood pressure control'}
            </p>
            <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.8', marginBottom: '40px' }}>
              {product?.indication ?? ''}
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="/product" style={{ ...theme.buttons.primary }}>Learn More</a>
              <a href="/hcp" style={{ ...theme.buttons.outline }}>Healthcare Professionals</a>
            </div>
          </div>
          <div style={{
            background: 'linear-gradient(135deg, #0000CC 0%, #00857C 100%)',
            borderRadius: '16px',
            minHeight: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            textAlign: 'center',
            padding: '40px',
          }}>
            <div>
              <p style={{ fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.8, marginBottom: '16px' }}>
                Indicated for
              </p>
              <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '16px', fontFamily: 'Georgia, serif' }}>
                Hypertension
              </h2>
              <p style={{ fontSize: '1rem', opacity: 0.85, lineHeight: '1.7' }}>
                Clinically proven blood pressure control for adults
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section style={{ background: '#FFFFFF', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#0000CC', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Why Pandozab
          </p>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#1A1A1A', marginBottom: '60px', fontFamily: 'Georgia, serif', maxWidth: '600px' }}>
            A breakthrough in hypertension treatment
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
            Why patients and doctors choose Pandozab
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

      {/* CTA */}
      <section style={{ background: '#0000CC', padding: '100px 40px', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '20px', fontFamily: 'Georgia, serif', lineHeight: '1.2' }}>
              Ready to learn more about Pandozab?
            </h2>
            <p style={{ opacity: 0.85, lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '40px' }}>
              Speak to your doctor about whether Pandozab is right for you, or access our full clinical data in the HCP portal.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="/faq" style={{ ...theme.buttons.white }}>Read FAQs</a>
              <a href="/hcp" style={{ ...theme.buttons.outlineWhite }}>HCP Portal</a>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { label: 'About Pandozab', href: '/product' },
              { label: 'How It Works', href: '/how-it-works' },
              { label: 'Side Effects', href: '/side-effects' },
              { label: 'Case Studies', href: '/case-studies' },
              { label: 'Voice Assistant', href: '/voice-assistant' },
            ].map((link) => (
              <a key={link.href} href={link.href} style={{
                color: 'white',
                fontSize: '1rem',
                fontWeight: '600',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px 0',
                borderBottom: '1px solid rgba(255,255,255,0.2)',
                opacity: 0.9,
              }}>
                {link.label}
                <span>→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SCHEMA.ORG JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Drug",
            "name": "Pandozab",
            "alternateName": "pandovirumab",
            "description": "Pandozab (pandovirumab) is a prescription medication indicated for the treatment of hypertension in adults aged 18 and above.",
            "url": "https://pandozab.com",
            "medicineSystem": "https://schema.org/WesternConventional",
            "relevantSpecialty": "https://schema.org/Cardiovascular",
            "indication": {
              "@type": "MedicalIndication",
              "name": "Hypertension",
              "alternateName": "High Blood Pressure"
            },
            "administrationRoute": "Oral",
            "drugClass": "Antihypertensive",
            "manufacturer": {
              "@type": "Organization",
              "name": "Pandozab Pharmaceuticals"
            }
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