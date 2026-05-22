import type { Metadata } from 'next'
import { client } from '../../sanity.client'
import { theme } from '../../theme'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Contact Us | Pandovab (pandovirumab)',
  description: 'Get in touch with the Pandovab team. Contact us for medical information, patient support or general enquiries about pandovirumab.',
  keywords: 'Pandovab contact, pandovirumab enquiries, medical information contact',
  openGraph: {
    title: 'Contact Us | Pandovab (pandovirumab)',
    description: 'Get in touch with the Pandovab team.',
    type: 'website',
  },
}

async function getSiteSettings() {
  return client.fetch(`*[_type == "siteSettings"][0]{
    email,
    phone,
    companyName,
    socialLinks
  }`)
}

export default async function ContactPage() {
  const settings = await getSiteSettings()

  return (
    <main>
      {/* HERO */}
      <section style={{ background: '#F5F5F5', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#0000CC', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
            Get in Touch
          </p>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', lineHeight: '1.15', marginBottom: '24px', color: '#1A1A1A', fontFamily: 'Georgia, serif', maxWidth: '700px' }}>
            Contact Us
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: '1.7', maxWidth: '600px' }}>
            We are here to help. Reach out with any questions about Pandovab.
          </p>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section style={{ background: '#FFFFFF', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>

            {/* MEDICAL INFO */}
            <div style={{ borderTop: '3px solid #0000CC', paddingTop: '24px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '16px' }}>💊</div>
              <h3 style={{ color: '#1A1A1A', fontSize: '1.2rem', marginBottom: '12px', fontWeight: '700', fontFamily: 'Georgia, serif' }}>
                Medical Information
              </h3>
              <p style={{ color: '#555', lineHeight: '1.7', marginBottom: '20px', fontSize: '0.95rem' }}>
                For medical enquiries about Pandovab including dosing, safety, and clinical data.
              </p>
              {settings?.email && (
                <a href={`mailto:${settings.email}`} style={{ color: '#0000CC', fontWeight: '600', fontSize: '0.95rem' }}>
                  {settings.email}
                </a>
              )}
            </div>

            {/* PATIENT SUPPORT */}
            <div style={{ borderTop: '3px solid #0000CC', paddingTop: '24px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '16px' }}>🩺</div>
              <h3 style={{ color: '#1A1A1A', fontSize: '1.2rem', marginBottom: '12px', fontWeight: '700', fontFamily: 'Georgia, serif' }}>
                Patient Support
              </h3>
              <p style={{ color: '#555', lineHeight: '1.7', marginBottom: '20px', fontSize: '0.95rem' }}>
                For patients and caregivers with questions about taking Pandovab or managing side effects.
              </p>
              {settings?.phone && (
                <a href={`tel:${settings.phone}`} style={{ color: '#0000CC', fontWeight: '600', fontSize: '0.95rem' }}>
                  {settings.phone}
                </a>
              )}
            </div>

            {/* HCP */}
            <div style={{ borderTop: '3px solid #0000CC', paddingTop: '24px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '16px' }}>🏥</div>
              <h3 style={{ color: '#1A1A1A', fontSize: '1.2rem', marginBottom: '12px', fontWeight: '700', fontFamily: 'Georgia, serif' }}>
                Healthcare Professionals
              </h3>
              <p style={{ color: '#555', lineHeight: '1.7', marginBottom: '20px', fontSize: '0.95rem' }}>
                For HCPs requiring clinical information, prescribing data or to access the HCP portal.
              </p>
              <a href="/hcp" style={{ color: '#0000CC', fontWeight: '600', fontSize: '0.95rem' }}>
                Access HCP Portal →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* IMPORTANT NOTICE */}
      <section style={{ background: '#F5F5F5', padding: '60px 40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ borderLeft: '4px solid #0000CC', paddingLeft: '24px' }}>
            <h3 style={{ color: '#1A1A1A', marginBottom: '12px', fontSize: '1.1rem', fontWeight: '700' }}>
              ⚠️ Important Notice
            </h3>
            <p style={{ color: '#555', lineHeight: '1.8', margin: 0, fontSize: '0.95rem' }}>
              If you are experiencing a medical emergency, please call your local emergency services immediately. This contact information is not monitored 24/7 and should not be used for urgent medical situations. Always consult your doctor or pharmacist for personal medical advice.
            </p>
          </div>
        </div>
      </section>

      {/* ADVERSE EVENT REPORTING */}
      <section style={{ background: '#FFFFFF', padding: '100px 40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ color: '#0000CC', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Safety Reporting
          </p>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#1A1A1A', marginBottom: '24px', fontFamily: 'Georgia, serif' }}>
            Reporting Adverse Events
          </h2>
          <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '16px', fontSize: '0.95rem' }}>
            If you experience any side effects while taking Pandovab, please report them to your healthcare provider. You can also report side effects directly to your national medicines regulatory authority.
          </p>
          <p style={{ color: '#555', lineHeight: '1.8', fontSize: '0.95rem' }}>
            Adverse events can also be reported to us directly at{' '}
            <a href={`mailto:${settings?.email ?? 'safety@pandovab.com'}`} style={{ color: '#0000CC', fontWeight: '600' }}>
              {settings?.email ?? 'safety@pandovab.com'}
            </a>
          </p>
        </div>
      </section>

      {/* SCHEMA.ORG JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Pandovab",
            "description": "Get in touch with the Pandovab team for medical information, patient support or general enquiries.",
            "url": "https://pandovab.com/contact",
            "contactPoint": {
              "@type": "ContactPoint",
              "email": settings?.email ?? "info@pandovab.com",
              "telephone": settings?.phone ?? "",
              "contactType": "Medical Information"
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