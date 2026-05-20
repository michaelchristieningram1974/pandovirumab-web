import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: {
    template: '%s | Pandovab',
    default: 'Pandovab (pandovirumab) | Blood Pressure Treatment',
  },
  description: 'Pandovab (pandovirumab) is a prescription medication indicated for the treatment of hypertension in adults.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>

        {/* NAVIGATION */}
        <nav style={{
          background: 'white',
          borderBottom: '1px solid #e0e0e0',
          padding: '0 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '70px',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        }}>
          {/* LOGO */}
          <a href="/" style={{
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'column',
            lineHeight: 1.2,
          }}>
            <span style={{ color: '#003087', fontWeight: 'bold', fontSize: '1.4rem' }}>
              Pandovab
            </span>
            <span style={{ color: '#00857C', fontSize: '0.7rem', letterSpacing: '0.05em' }}>
              pandovirumab
            </span>
          </a>

          {/* NAV LINKS */}
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            <a href="/product" style={{ color: '#333', textDecoration: 'none', fontSize: '0.95rem' }}>
              About Pandovab
            </a>
            <a href="/how-it-works" style={{ color: '#333', textDecoration: 'none', fontSize: '0.95rem' }}>
              How It Works
            </a>
            <a href="/side-effects" style={{ color: '#333', textDecoration: 'none', fontSize: '0.95rem' }}>
              Side Effects
            </a>
            <a href="/case-studies" style={{ color: '#333', textDecoration: 'none', fontSize: '0.95rem' }}>
              Case Studies
            </a>
            <a href="/faq" style={{ color: '#333', textDecoration: 'none', fontSize: '0.95rem' }}>
              FAQ
            </a>
            <a href="/contact" style={{ color: '#333', textDecoration: 'none', fontSize: '0.95rem' }}>
              Contact
            </a>
            <a href="/hcp" style={{
              background: '#003087',
              color: 'white',
              padding: '8px 20px',
              borderRadius: '4px',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: 'bold',
            }}>
              For HCPs
            </a>
          </div>
        </nav>

        {/* PAGE CONTENT */}
        {children}

        {/* FOOTER */}
        <footer style={{ background: '#003087', color: 'white', padding: '60px 40px 30px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            maxWidth: '1200px',
            margin: '0 auto 40px',
          }}>
            {/* BRAND */}
            <div>
              <div style={{ fontWeight: 'bold', fontSize: '1.3rem', marginBottom: '8px' }}>
                Pandovab
              </div>
              <div style={{ color: '#00857C', fontSize: '0.8rem', marginBottom: '16px' }}>
                pandovirumab
              </div>
              <p style={{ color: '#aaa', fontSize: '0.85rem', lineHeight: '1.6' }}>
                A new standard in blood pressure control.
              </p>
            </div>

            {/* PATIENTS */}
            <div>
              <h4 style={{ marginBottom: '16px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#00857C' }}>
                For Patients
              </h4>
              {[
                { label: 'About Pandovab', href: '/product' },
                { label: 'How It Works', href: '/how-it-works' },
                { label: 'Side Effects', href: '/side-effects' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <a key={link.href} href={link.href} style={{
                  display: 'block',
                  color: '#ccc',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  marginBottom: '8px',
                }}>
                  {link.label}
                </a>
              ))}
            </div>

            {/* HCP */}
            <div>
              <h4 style={{ marginBottom: '16px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#00857C' }}>
                For Healthcare Professionals
              </h4>
              {[
                { label: 'Clinical Trials', href: '/hcp/clinical-trials' },
                { label: 'Dosing Guide', href: '/hcp/dosing' },
                { label: 'Drug Interactions', href: '/hcp/drug-interactions' },
                { label: 'Case Studies', href: '/hcp/case-studies' },
                { label: 'Prescribing Information', href: '/hcp/prescribing-info' },
              ].map((link) => (
                <a key={link.href} href={link.href} style={{
                  display: 'block',
                  color: '#ccc',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  marginBottom: '8px',
                }}>
                  {link.label}
                </a>
              ))}
            </div>

            {/* LEGAL */}
            <div>
              <h4 style={{ marginBottom: '16px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#00857C' }}>
                Legal
              </h4>
              {[
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms of Use', href: '/terms' },
                { label: 'Cookie Policy', href: '/cookies' },
              ].map((link) => (
                <a key={link.href} href={link.href} style={{
                  display: 'block',
                  color: '#ccc',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  marginBottom: '8px',
                }}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '24px',
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}>
            <p style={{ color: '#aaa', fontSize: '0.8rem', margin: 0 }}>
              © 2026 Pandovab. All rights reserved.
            </p>
            <p style={{ color: '#aaa', fontSize: '0.8rem', margin: 0 }}>
              This site is intended for informational purposes only. Always consult your healthcare provider.
            </p>
          </div>
        </footer>

      </body>
    </html>
  )
}