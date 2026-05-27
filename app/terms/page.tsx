import type { Metadata } from 'next'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Terms of Use | Pandozab (pandovirumab)',
  description: 'Terms of use for the Pandozab (pandovirumab) website. Please read these terms carefully before using our website.',
  openGraph: {
    title: 'Terms of Use | Pandozab (pandovirumab)',
    description: 'Terms of use for Pandozab.',
    type: 'website',
  },
}

export default function TermsPage() {
  return (
    <main>
      {/* HERO */}
      <section style={{ background: '#F5F5F5', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#0000CC', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
            Legal
          </p>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', lineHeight: '1.15', marginBottom: '24px', color: '#1A1A1A', fontFamily: 'Georgia, serif', maxWidth: '700px' }}>
            Terms of Use
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
              title: '1. Acceptance of Terms',
              content: 'By accessing and using pandozab.com, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use this website.'
            },
            {
              title: '2. Purpose of This Website',
              content: 'This website is provided for informational purposes only. The information contained on this site is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.'
            },
            {
              title: '3. Medical Disclaimer',
              content: 'The content on this website, including text, graphics, and other material, is for informational purposes only and does not constitute medical advice. Pandozab Pharmaceuticals does not recommend or endorse any specific tests, physicians, products, procedures, opinions, or other information that may be mentioned on this website.'
            },
            {
              title: '4. HCP Portal',
              content: 'The Healthcare Professional section of this website is intended solely for qualified healthcare professionals. By accessing this section, you confirm that you are a licensed healthcare professional and that you will use the information provided in your professional capacity only.'
            },
            {
              title: '5. Intellectual Property',
              content: 'All content on this website, including text, graphics, logos, and images, is the property of Pandozab Pharmaceuticals and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.'
            },
            {
              title: '6. Voice Assistant',
              content: 'The AI voice assistant on this website is provided for informational purposes only. Responses from the voice assistant do not constitute medical advice and should not be relied upon as such. Always consult a qualified healthcare professional for medical guidance.'
            },
            {
              title: '7. External Links',
              content: 'This website may contain links to third party websites. These links are provided for your convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.'
            },
            {
              title: '8. Limitation of Liability',
              content: 'To the fullest extent permitted by law, Pandozab Pharmaceuticals shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website or reliance on any information provided herein.'
            },
            {
              title: '9. Changes to Terms',
              content: 'We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website following any changes constitutes your acceptance of the new terms.'
            },
            {
              title: '10. Governing Law',
              content: 'These terms shall be governed by and construed in accordance with applicable law. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the relevant courts.'
            },
            {
              title: '11. Contact Us',
              content: 'If you have any questions about these Terms of Use, please contact us at legal@pandozab.com.'
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