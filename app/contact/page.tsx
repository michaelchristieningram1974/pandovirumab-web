import type { Metadata } from 'next'
import { client } from '../../sanity.client'

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
      <section style={{
        background: 'linear-gradient(135deg, #003087 0%, #00857C 100%)',
        color: 'white',
        padding: '80px 40px',
        textAlign: 'center',
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
          Contact Us
        </h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
          We are here to help. Reach out with any questions about Pandovab.
        </p>
      </section>

      {/* CONTACT CARDS */}
      <section style={{ padding: '80px 40px', background: '#F5F7FA' }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px',
        }}>

          {/* MEDICAL INFO */}
          <div style={{
            background: 'white',
            padding: '40px 30px',
            borderRadius: '8px',
            borderTop: '4px solid #00857C',
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>💊</div>
            <h3 style={{ color: '#003087', fontSize: '1.2rem', marginBottom: '12px' }}>
              Medical Information
            </h3>
            <p style={{ color: '#555', lineHeight: '1.7', marginBottom: '20px', fontSize: '0.95rem' }}>
              For medical enquiries about Pandovab including dosing, safety, and clinical data.
            </p>
            {settings?.email && (
              <a href={`mailto:${settings.email}`} style={{
                color: '#00857C',
                fontWeight: 'bold',
                textDecoration: 'none',
                fontSize: '0.95rem',
              }}>
                {settings.email}
              </a>
            )}
          </div>

          {/* PATIENT SUPPORT */}
          <div style={{
            background: 'white',
            padding: '40px 30px',
            borderRadius: '8px',
            borderTop: '4px solid #003087',
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🩺</div>
            <h3 style={{ color: '#003087', fontSize: '1.2rem', marginBottom: '12px' }}>
              Patient Support
            </h3>
            <p style={{ color: '#555', lineHeight: '1.7', marginBottom: '20px', fontSize: '0.95rem' }}>
              For patients and caregivers with questions about taking Pandovab or managing side effects.
            </p>
            {settings?.phone && (
              <a href={`tel:${settings.phone}`} style={{
                color: '#00857C',
                fontWeight: 'bold',
                textDecoration: 'none',
                fontSize: '0.95rem',
              }}>
                {settings.phone}
              </a>
            )}
          </div>

          {/* HCP */}
          <div style={{
            background: 'white',
            padding: '40px 30px',
            borderRadius: '8px',
            borderTop: '4px solid #00857C',
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🏥</div>
            <h3 style={{ color: '#003087', fontSize: '1.2rem', marginBottom: '12px' }}>
              Healthcare Professionals
            </h3>
            <p style={{ color: '#555', lineHeight: '1.7', marginBottom: '20px', fontSize: '0.95rem' }}>
              For HCPs requiring clinical information, prescribing data or to access the HCP portal.
            </p>
            <a href="/hcp" style={{
              color: '#00857C',
              fontWeight: 'bold',
              textDecoration: 'none',
              fontSize: '0.95rem',
            }}>
              Access HCP Portal →
            </a>
          </div>

        </div>
      </section>

      {/* IMPORTANT NOTICE */}
      <section style={{ padding: '60px 40px', background: 'white' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{
            background: '#E6F4F3',
            borderLeft: '4px solid #00857C',
            padding: '30px',
            borderRadius: '8px',
          }}>
            <h3 style={{ color: '#003087', marginBottom: '12px', fontSize: '1.1rem' }}>
              ⚠️ Important Notice
            </h3>
            <p style={{ color: '#555', lineHeight: '1.8', margin: 0, fontSize: '0.95rem' }}>
              If you are experiencing a medical emergency, please call your local emergency services immediately. This contact form is not monitored 24/7 and should not be used for urgent medical situations. Always consult your doctor or pharmacist for personal medical advice.
            </p>
          </div>
        </div>
      </section>

      {/* ADVERSE EVENT REPORTING */}
      <section style={{ padding: '60px 40px', background: '#F5F7FA' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ color: '#003087', fontSize: '1.8rem', marginBottom: '16px' }}>
            Reporting Adverse Events
          </h2>
          <p style={{ color: '#555', lineHeight: '1.8', marginBottom: '16px' }}>
            If you experience any side effects while taking Pandovab, please report them to your healthcare provider. You can also report side effects directly to your national medicines regulatory authority.
          </p>
          <p style={{ color: '#555', lineHeight: '1.8' }}>
            Adverse events can also be reported to us directly at{' '}
            <a href={`mailto:${settings?.email ?? 'safety@pandovab.com'}`} style={{ color: '#00857C', fontWeight: 'bold' }}>
              {settings?.email ?? 'safety@pandovab.com'}
            </a>
          </p>
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