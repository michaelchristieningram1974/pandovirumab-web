import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Hamburger from './Hamburger'

export const metadata: Metadata = {
  title: {
    template: '%s | pandozab',
    default: 'pandozab (pandovirumab) | Blood Pressure Treatment',
  },
  description: 'pandozab (pandovirumab) is a prescription medication indicated for the treatment of hypertension in adults.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script src="https://unpkg.com/@elevenlabs/convai-widget-embed" async></script>
        <style>{`
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { font-family: system-ui, -apple-system, Arial, sans-serif; color: #1A1A1A; background: #fff; }
          a { text-decoration: none; }
          .nav-wrapper { background: white; border-bottom: 1px solid #E0E0E0; position: sticky; top: 0; z-index: 100; }
          .nav-inner { max-width: 1200px; margin: 0 auto; padding: 0 40px; display: flex; align-items: center; justify-content: space-between; height: 70px; }
          .nav-logo-name { color: #0000CC; font-weight: 800; font-size: 1.4rem; letter-spacing: -0.02em; }
          .nav-logo-sub { color: #444; font-size: 0.7rem; letter-spacing: 0.05em; }
          .nav-links { display: flex; gap: 32px; align-items: center; }
          .nav-links a { color: #444444; font-size: 0.88rem; font-weight: 400; transition: color 0.2s; letter-spacing: 0.01em; }
          .nav-links a:hover { color: #0000CC; }
          .nav-btn { background: #0000CC; color: white !important; padding: 9px 22px; border-radius: 50px; font-weight: 400 !important; font-size: 0.88rem !important; }
          .nav-btn:hover { background: #0000AA; color: white !important; }
          .hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; background: none; border: none; padding: 4px; }
          .hamburger span { display: block; width: 25px; height: 2px; background: #1A1A1A; }
          .mobile-menu { display: none; flex-direction: column; background: white; border-top: 1px solid #E0E0E0; padding: 16px 40px; box-shadow: 0 4px 8px rgba(0,0,0,0.06); position: sticky; top: 70px; z-index: 99; }
          .mobile-menu a { color: #444444; font-size: 0.88rem; padding: 12px 0; border-bottom: 1px solid #f0f0f0; display: block; font-weight: 400; }
          .mobile-menu a:last-child { border-bottom: none; }
          .mobile-menu .hcp-link { color: #0000CC; font-weight: 600; }
          @media (max-width: 768px) {
            .nav-links { display: none; }
            .hamburger { display: flex; }
            .mobile-menu.open { display: flex; }
            .nav-inner { padding: 0 20px; }
          }
          .footer { background: #0000CC; color: white; padding: 60px 40px 30px; }
          .footer-inner { max-width: 1200px; margin: 0 auto; }
          .footer-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 40px; margin-bottom: 40px; }
          .footer-brand-name { font-weight: 800; font-size: 1.3rem; margin-bottom: 4px; }
          .footer-brand-sub { color: rgba(255,255,255,0.6); font-size: 0.8rem; margin-bottom: 16px; }
          .footer-brand-desc { color: rgba(255,255,255,0.7); font-size: 0.85rem; line-height: 1.7; }
          .footer-heading { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.08em; color: rgba(255,255,255,0.6); margin-bottom: 16px; font-weight: 600; }
          .footer-link { display: block; color: rgba(255,255,255,0.85); font-size: 0.9rem; margin-bottom: 10px; transition: color 0.2s; }
          .footer-link:hover { color: white; }
          .footer-bottom { border-top: 1px solid rgba(255,255,255,0.15); padding-top: 24px; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 12px; }
          .footer-bottom p { color: rgba(255,255,255,0.5); font-size: 0.8rem; }
        `}</style>
      </head>
      <body>

        <div className="nav-wrapper">
          <div className="nav-inner">
            <a href="/" style={{ textDecoration: 'none' }}>
              <div className="nav-logo-name">pandozab</div>
              <div className="nav-logo-sub">pandovirumab</div>
            </a>

            <div className="nav-links">
              <a href="/product">About pandozab</a>
              <a href="/how-it-works">How It Works</a>
              <a href="/side-effects">Side Effects</a>
              <a href="/case-studies">Case Studies</a>
              <a href="/faq">FAQ</a>
              <a href="/voice-assistant">Voice Assistant</a>
              <a href="/contact">Contact</a>
              <a href="/hcp" className="nav-btn">For HCPs</a>
            </div>

            <Hamburger />
          </div>
        </div>

        <div id="mobile-menu" className="mobile-menu">
          <a href="/product">About pandozab</a>
          <a href="/how-it-works">How It Works</a>
          <a href="/side-effects">Side Effects</a>
          <a href="/case-studies">Case Studies</a>
          <a href="/faq">FAQ</a>
          <a href="/voice-assistant">Voice Assistant</a>
          <a href="/contact">Contact</a>
          <a href="/hcp" className="hcp-link">For HCPs</a>
        </div>

        {children}

        <footer className="footer">
          <div className="footer-inner">
            <div className="footer-grid">
              <div>
                <div className="footer-brand-name">pandozab</div>
                <div className="footer-brand-sub">pandovirumab</div>
                <p className="footer-brand-desc">A new standard in blood pressure control.</p>
              </div>
              <div>
                <h4 className="footer-heading">For Patients</h4>
                <a href="/product" className="footer-link">About pandozab</a>
                <a href="/how-it-works" className="footer-link">How It Works</a>
                <a href="/side-effects" className="footer-link">Side Effects</a>
                <a href="/faq" className="footer-link">FAQ</a>
                <a href="/voice-assistant" className="footer-link">Voice Assistant</a>
                <a href="/contact" className="footer-link">Contact</a>
              </div>
              <div>
                <h4 className="footer-heading">For Healthcare Professionals</h4>
                <a href="/hcp/clinical-trials" className="footer-link">Clinical Trials</a>
                <a href="/hcp/dosing" className="footer-link">Dosing Guide</a>
                <a href="/hcp/drug-interactions" className="footer-link">Drug Interactions</a>
                <a href="/hcp/case-studies" className="footer-link">Case Studies</a>
                <a href="/hcp/prescribing-info" className="footer-link">Prescribing Information</a>
                <a href="/hcp/real-world-evidence" className="footer-link">Real World Evidence</a>
              </div>
              <div>
                <h4 className="footer-heading">Legal</h4>
                <a href="/privacy" className="footer-link">Privacy Policy</a>
                <a href="/terms" className="footer-link">Terms of Use</a>
                <a href="/cookies" className="footer-link">Cookie Policy</a>
              </div>
            </div>
            <div className="footer-bottom">
              <p>© 2026 pandozab. All rights reserved.</p>
              <p>This site is intended for informational purposes only. Always consult your healthcare provider.</p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  )
}