import type { Metadata } from 'next'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Cookie Policy | Pandozab (pandovirumab)',
  description: 'Cookie policy for the Pandozab (pandovirumab) website. Learn about how we use cookies and how to manage them.',
  openGraph: {
    title: 'Cookie Policy | Pandozab (pandovirumab)',
    description: 'Cookie policy for Pandozab.',
    type: 'website',
  },
}

export default function CookiesPage() {
  return (
    <main>
      {/* HERO */}
      <section style={{ background: '#F5F5F5', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#0000CC', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
            Legal
          </p>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', lineHeight: '1.15', marginBottom: '24px', color: '#1A1A1A', fontFamily: 'Georgia, serif', maxWidth: '700px' }}>
            Cookie Policy
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#444', lineHeight: '1.7', maxWidth: '600px' }}>
            Last updated: January 2026
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ background: '#FFFFFF', padding: '100px 40px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>

          {/* INTRO */}
          <div style={{ borderTop: '3px solid #0000CC', paddingTop: '32px', marginBottom: '32px' }}>
            <h2 style={{ color: '#1A1A1A', fontSize: '1.3rem', fontWeight: '700', fontFamily: 'Georgia, serif', marginBottom: '16px' }}>
              1. What Are Cookies
            </h2>
            <p style={{ color: '#555', lineHeight: '1.9', fontSize: '0.95rem', margin: 0 }}>
              Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
            </p>
          </div>

          {/* COOKIE TYPES TABLE */}
          <div style={{ borderTop: '1px solid #E0E0E0', paddingTop: '32px', marginBottom: '32px' }}>
            <h2 style={{ color: '#1A1A1A', fontSize: '1.3rem', fontWeight: '700', fontFamily: 'Georgia, serif', marginBottom: '24px' }}>
              2. Cookies We Use
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                {
                  name: 'Essential Cookies',
                  purpose: 'Required for the website to function correctly. These cannot be disabled.',
                  examples: 'Session management, security tokens',
                  duration: 'Session',
                  canDisable: false,
                },
                {
                  name: 'Performance Cookies',
                  purpose: 'Help us understand how visitors interact with our website by collecting anonymous information.',
                  examples: 'Page views, time on site, error logs',
                  duration: 'Up to 12 months',
                  canDisable: true,
                },
                {
                  name: 'Functional Cookies',
                  purpose: 'Remember your preferences to provide a more personalised experience.',
                  examples: 'Language preferences, region settings',
                  duration: 'Up to 12 months',
                  canDisable: true,
                },
              ].map((cookie, i) => (
                <div key={i} style={{ background: '#F5F5F5', padding: '24px', borderRadius: '8px', borderLeft: '4px solid #0000CC' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
                    <h3 style={{ color: '#1A1A1A', fontSize: '1rem', fontWeight: '700', margin: 0 }}>{cookie.name}</h3>
                    <span style={{
                      background: cookie.canDisable ? '#E0E0E0' : '#0000CC',
                      color: cookie.canDisable ? '#555' : 'white',
                      padding: '4px 12px',
                      borderRadius: '50px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                    }}>
                      {cookie.canDisable ? 'Optional' : 'Required'}
                    </span>
                  </div>
                  <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: '1.6', margin: '0 0 8px' }}>{cookie.purpose}</p>
                  <p style={{ color: '#888', fontSize: '0.85rem', margin: '0 0 4px' }}>Examples: {cookie.examples}</p>
                  <p style={{ color: '#888', fontSize: '0.85rem', margin: 0 }}>Duration: {cookie.duration}</p>
                </div>
              ))}
            </div>
          </div>

          {[
            {
              title: '3. Third Party Cookies',
              content: 'Our website uses ElevenLabs for our AI voice assistant. This service may set its own cookies when you interact with the voice assistant. We recommend reviewing ElevenLabs\' privacy policy for more information about how they use cookies.'
            },
            {
              title: '4. Managing Cookies',
              content: 'You can control and manage cookies through your browser settings. Please note that removing or blocking cookies may impact your user experience and some parts of the website may not function correctly. Most browsers allow you to refuse to accept cookies and to delete cookies already set.'
            },
            {
              title: '5. Browser Settings',
              content: 'To manage cookies in your browser, please refer to your browser\'s help documentation. Most modern browsers allow you to view, delete, and block cookies from specific websites. You can also use private or incognito browsing mode to prevent cookies from being stored.'
            },
            {
              title: '6. Changes to This Policy',
              content: 'We may update this cookie policy from time to time. Any changes will be posted on this page with an updated date. We encourage you to review this policy periodically.'
            },
            {
              title: '7. Contact Us',
              content: 'If you have any questions about our use of cookies, please contact us at privacy@pandozab.com.'
            },
          ].map((section, i) => (
            <div key={i} style={{ borderTop: '1px solid #E0E0E0', paddingTop: '32px', marginBottom: '32px' }}>
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