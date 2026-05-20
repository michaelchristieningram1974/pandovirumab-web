import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Hamburger from './Hamburger'

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
      <head>
        <style>{`
          * { box-sizing: border-box; }
          body { margin: 0; font-family: system-ui, -apple-system, sans-serif; }
          .nav-links { display: flex; gap: 32px; align-items: center; }
          .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; background: none; border: none; padding: 4px; }
          .hamburger span { display: block; width: 25px; height: 2px; background: #003087; }
          .mobile-menu { display: none; flex-direction: column; background: white; border-top: 1px solid #e0e0e0; padding: 16px 40px; box-shadow: 0 4px 8px rgba(0,0,0,0.06); position: sticky; top: 70px; z-index: 99; }
          .mobile-menu a { color: #333; text-decoration: none; font-size: 0.95rem; padding: 12px 0; border-bottom: 1px solid #f0f0f0; }
          .mobile-menu a:last-child { border-bottom: none; }
          .mobile-menu .hcp-link { color: #003087; font-weight: bold; }
          @media (max-width: 768px) { .nav-links { display: none; } .hamburger { display: flex; } .mobile-menu.open { display: flex; } }
        `}</style>
      </head>
      <body>
        <nav style={{ background: 'white', borderBottom: '1px solid #e0e0e0', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <a href="/" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
            <span style={{ color: '#003087', fontWeight: 'bold', fontSize: '1.4rem' }}>Pandovab</span>
            <span style={{ color: '#00857C', fontSize: '0.7rem', letterSpacing: '0.05em' }}>pandovirumab</span>
          </a>
          <div className="nav-links">
            <a href="/product" style={{ color: '#333', textDecoration: 'none', fontSize: '0.95rem' }}>About Pandovab</a>
            <a href="/how-it-works" style={{ color: '#333', textDecoration: 'none', fontSize: '0.95rem' }}>How It Works</a>
            <a href="/side-effects" style={{ color: '#333', textDecoration: 'none', fontSize: '0.95rem' }}>Side Effects</a>
            <a href="/case-studies" style={{ color: '#333', textDecoration: 'none', fontSize: '0.95rem' }}>Case Studies</a>
            <a href="/faq" style={{ color: '#333', textDecoration: 'none', fontSize: '0.95rem' }}>FAQ</a>
            <a href="/contact" style={{ color: '#333', textDecoration: 'none', fontSize: '0.95rem' }}>Contact</a>
            <a href="/hcp" style={{ background: '#003087', color: 'white', padding: '8px 20px', borderRadius: '4px', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 'bold' }}>For HCPs</a>
          </div>
          <Hamburger />
        </nav>
        <div id="mobile-menu" className="mobile-menu">
          <a href="/product">About Pandovab</a>
          <a href="/how-it-works">How It Works</a>
          <a href="/side-effects">Side Effects</a>
          <a href="/case-studies">Case Studies</a>
          <a href="/faq">FAQ</a>
          <a href="/contact">Contact</a>
          <a href="/hcp" className="hcp-link">For HCPs</a>
        </div>
        {children}
        <footer style={{ background: '#003087', color: 'white', padding: '60px 40px 30px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', maxWidth: '1200px', margin: '0 auto 40px' }}>
            <div>
              <div style={{ fontWeight: 'bold', fontSize: '1.3rem', marginBottom: '8px' }}>Pandovab</div>
              <div style={{ color: '#00857C', fontSize: '0.8rem', marginBottom: '16px' }}>pandovirumab</div>
              <p style={{ color: '#aaa', fontSize: '0.85rem', lineHeight: '1.6' }}>A new standard in blood pressure control.</p>
            </div>
            <div>
              <h4 style={{ marginBottom: '16px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#00857C' }}>For Patients</h4>
              <a href="/product" style={{ display: 'block', color: '#ccc', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '8px' }}>About Pandovab</a>
              <a href="/how-it-works" style={{ display: 'block', color: '#ccc', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '8px' }}>How It Works</a>
              <a href="/side-effects" style={{ display: 'block', color: '#ccc', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '8px' }}>Side Effects</a>
              <a href="/faq" style={{ display: 'block', color: '#ccc', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '8px' }}>FAQ</a>
              <a href="/contact" style={{ display: 'block', color: '#ccc', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '8px' }}>Contact</a>
            </div>
            <div>
              <h4 style={{ marginBottom: '16px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#00857C' }}>For Healthcare Professionals</h4>
              <a href="/hcp/clinical-trials" style={{ display: 'block', color: '#ccc', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '8px' }}>Clinical Trials</a>
              <a href="/hcp/dosing" style={{ display: 'block', color: '#ccc', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '8px' }}>Dosing Guide</a>
              <a href="/hcp/drug-interactions" style={{ display: 'block', color: '#ccc', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '8px' }}>Drug Interactions</a>
              <a href="/hcp/case-studies" style={{ display: 'block', color: '#ccc', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '8px' }}>Case Studies</a>
              <a href="/hcp/prescribing-info" style={{ display: 'block', color: '#ccc', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '8px' }}>Prescribing Information</a>
            </div>
            <div>
              <h4 style={{ marginBottom: '16px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#00857C' }}>Legal</h4>
              <a href="/privacy" style={{ display: 'block', color: '#ccc', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '8px' }}>Privacy Policy</a>
              <a href="/terms" style={{ display: 'block', color: '#ccc', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '8px' }}>Terms of Use</a>
              <a href="/cookies" style={{ display: 'block', color: '#ccc', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '8px' }}>Cookie Policy</a>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px', maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            <p style={{ color: '#aaa', fontSize: '0.8rem', margin: 0 }}>© 2026 Pandovab. All rights reserved.</p>
            <p style={{ color: '#aaa', fontSize: '0.8rem', margin: 0 }}>This site is intended for informational purposes only. Always consult your healthcare provider.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}