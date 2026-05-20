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
      <head>
        <style>{`
          * { box-sizing: border-box; }
          body { margin: 0; font-family: system-ui, -apple-system, sans-serif; }

          .nav-links {
            display: flex;
            gap: 32px;
            align-items: center;
          }

          .hamburger {
            display: none;
            flex-direction: column;
            gap: 5px;
            cursor: pointer;
            background: none;
            border: none;
            padding: 4px;
          }

          .hamburger span {
            display: block;
            width: 25px;
            height: 2px;
            background: #003087;
          }

          .mobile-menu {
            display: none;
            flex-direction: column;
            background: white;
            border-top: 1px solid #e0e0e0;
            padding: 16px 40px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.06);
          }

          .mobile-menu a {
            color: #333;
            text-decoration: none;
            font-size: 0.95rem;
            padding: 12px 0;
            border-bottom: 1px solid #f0f0f0;
          }

          .mobile-menu a:last-child {
            border-bottom: none;
          }

          .mobile-menu .hcp-link {
            color: #003087;
            font-weight: bold;
          }

          @media (max-width: 768px) {
            .nav-links { display: none; }
            .hamburger { display: flex; }
            .mobile-menu.open { display: flex; }
          }
        `}</style>
        <script dangerouslySetInnerHTML={{
          __html: `
            function toggleMenu() {
              var menu = document.getElementById('mobile-menu');
              menu.classList.toggle('open');
            }
          `
        }} />
      </head>
      <body>

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

          {/* DESKTOP NAV LINKS */}
          <div className="nav-links">
            <a href="/product" style={{ color: '#333', textDecoration: 'none', fontSize: '0.95rem' }}>About Pandovab</a>
            <a href="/how-it-works" style={{ color: '#333', textDecoration: 'none', fontSize: '0.95rem' }}>How It Works</a>
            <a href="/side-effects" style={{ color: '#333', textDecoration: 'none', fontSize: '0.95rem'