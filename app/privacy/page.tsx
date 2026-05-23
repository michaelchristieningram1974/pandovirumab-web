import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Pandozab (pandovirumab)',
  description: 'Privacy policy for Pandozab (pandovirumab) website. Learn how we collect, use and protect your personal data.',
  openGraph: {
    title: 'Privacy Policy | Pandozab (pandovirumab)',
    description: 'Privacy policy for Pandozab.',
    type: 'website',
  },
}

export default function PrivacyPage() {
  return (
    <main>
      {/* HERO */}
      <section style={{ background: '#F5F5F5', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#0000CC', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
            Legal
          </p>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', lineHeight: '1.15', marginBottom: '24px', color: '#1A1A1A', fontFamily: 'Georgia, serif', maxWidth: '700px' }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#444', lineHeight: '1.7', maxWidth: '600px' }}>
            Last updated: January 2026
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ background: '#FFFFFF', padding: '100px 40px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>

          {[
            {
              title: '1. Introduction',
              content: 'Pandozab Pharmaceuticals ("we", "us", "our") is committed to protecting your personal data. This privacy policy explains how we collect, use, and protect information about you when you visit pandozab.com.'
            },
            {
              title: '2. Information We Collect',
              content: 'We may collect information you provide directly to us, such as when you contact us through our website. This may include your name, email address, and the content of your message. We also collect certain technical information automatically, including your IP address, browser type, and pages visited.'
            },
            {
              title: '3. How We Use Your Information',
              content: 'We use the information we collect to respond to your enquiries, improve our website, and comply with legal obligations. We do not sell your personal data to third parties. We do not use your data for marketing purposes without your explicit consent.'
            },
            {
              title: '4. Medical Information',
              content: 'This website is for informational purposes only. Any information you provide when contacting us about medical matters will be handled with the utmost confidentiality and used solely to respond to your enquiry.'
            },
            {
              title: '5. Cookies',
              content: 'We use essential cookies to ensure our website functions correctly. We do not use tracking or advertising cookies. For more information please see our Cookie Policy.'
            },
            {
              title: '6. Data Retention',
              content: 'We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by law. Contact form submissions are retained for a maximum of 12 months.'
            },
            {
              title: '7. Your Rights',
              content: 'You have the right to access, correct, or delete your personal data. You also have the right to object to processing and to data portability. To exercise any of these rights please contact us at privacy@pandozab.com.'
            },
            {
              title: '8. Security',
              content: 'We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction.'
            },
            {
              title: '9. Changes to This Policy',
              content: 'We may update this privacy policy from time to time. We will notify you of any significant changes by posting the new policy on this page with an updated date.'
            },
            {
              title: '10. Contact Us',
              content: 'If you have any questions about this privacy policy or our data practices, please contact us at privacy@pandozab.com.'
            },
          ].map((section, i) => (
            <div key={i} style={{ borderTop: i === 0 ? '3px solid #0000CC' : '1px solid #E0E0E0', paddingTop: '32px', marginBottom: '32px' }}>
              <h2 style={{ color: '#1A1A1A', fontSize: '1.3rem', fontWeight: '700', fontFamily: 'Georgia, serif', marginBottom: '16px' }}>
                {section.title}
              </h2>
              <p style={{ color: '#555', lineHeight: '1.9', fontSize: '0.95rem', margin: 0 }}>
                {section.content}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* DISCLAIMER */}
      <section style={{ background: '#1A1A1A', color: '#888', padding: '20px 40px', textAlign: 'center', fontSize: '0.8rem' }}>
        <p>This website is intended for informational purposes only. Please consult your healthcare provider before starting any medication.</p>
      </section>
    </main>
  )
}