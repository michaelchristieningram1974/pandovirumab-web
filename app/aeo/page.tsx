import type { Metadata } from 'next'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Answer Engine Optimisation (AEO) for Pharmaceutical Brands',
  description: 'Learn how Answer Engine Optimisation (AEO) can help pharmaceutical brands appear in AI-generated answers on ChatGPT, Perplexity, Google AI Overviews and other AI engines.',
  keywords: 'AEO pharmaceutical, answer engine optimisation pharma, AI search pharmaceutical, ChatGPT pharmaceutical marketing, Perplexity pharma',
  openGraph: {
    title: 'Answer Engine Optimisation (AEO) for Pharmaceutical Brands',
    description: 'How AEO helps pharmaceutical brands appear in AI-generated answers.',
    type: 'website',
  },
}

export default function AEOPage() {
  return (
    <main>
      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #0a1628 60%, #003087 100%)', padding: '120px 40px', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: 'rgba(0,200,150,0.15)', border: '1px solid rgba(0,200,150,0.4)', color: '#00C896', padding: '6px 16px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.1em', marginBottom: '32px', textTransform: 'uppercase' as const }}>
            Proof of Concept
          </div>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '900', lineHeight: '1.05', marginBottom: '32px', textTransform: 'uppercase' as const, maxWidth: '800px' }}>
            <span style={{ color: '#00C896' }}>ANSWER ENGINE</span><br />
            <span style={{ color: 'white' }}>OPTIMISATION FOR</span><br />
            <span style={{ color: '#00C896' }}>PHARMACEUTICAL BRANDS</span>
          </h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.85, lineHeight: '1.7', marginBottom: '16px', maxWidth: '650px' }}>
            This website is a demonstration of how Answer Engine Optimisation (AEO) can be applied to a pharmaceutical product website.
          </p>
          <p style={{ fontSize: '1rem', opacity: 0.65, lineHeight: '1.8', marginBottom: '48px', maxWidth: '650px' }}>
            This site exists to show pharmaceutical brands, marketing agencies and healthcare communications professionals how AEO works in practice.
          </p>
          <a href="/contact" style={{ background: '#00C896', color: '#0a1628', padding: '14px 32px', borderRadius: '50px', fontWeight: '700', fontSize: '0.9rem', textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' as const, display: 'inline-block' }}>
            Discuss AEO for Your Brand →
          </a>
        </div>
      </section>

      {/* WHAT IS AEO */}
      <section style={{ background: '#FFFFFF', padding: '100px 40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ color: '#0000CC', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: '12px' }}>
            The Basics
          </p>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#0a1628', marginBottom: '32px', fontFamily: 'Georgia, serif', textTransform: 'uppercase' as const }}>
            What is <span style={{ color: '#0000CC' }}>Answer Engine Optimisation?</span>
          </h2>
          <p style={{ color: '#555', lineHeight: '1.9', fontSize: '1.05rem', marginBottom: '24px' }}>
            Answer Engine Optimisation (AEO) is the practice of structuring your website content so that AI-powered answer engines - including ChatGPT, Perplexity, Google AI Overviews, Claude, and Microsoft Copilot - can easily find, understand, and cite your content when answering user queries.
          </p>
          <p style={{ color: '#555', lineHeight: '1.9', fontSize: '1.05rem', marginBottom: '40px' }}>
            Unlike traditional SEO which focuses on ranking in search results, AEO focuses on being the <strong>source that AI engines cite</strong> when generating answers. The goal is not to rank - it is to be referenced.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {[
              { title: 'SEO', description: 'Optimise for search engine rankings. User clicks a link and visits your site.', color: '#888' },
              { title: 'AEO', description: 'Optimise for AI answer engines. AI cites your content directly in its answer — whether or not the user visits your site.', color: '#0000CC' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#F5F5F5', padding: '32px', borderRadius: '8px', borderTop: `3px solid ${item.color}` }}>
                <h3 style={{ color: item.color, fontSize: '1.2rem', fontWeight: '800', marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ color: '#555', lineHeight: '1.7', fontSize: '0.95rem', margin: 0 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY PHARMA NEEDS AEO */}
      <section style={{ background: '#F5F5F5', padding: '100px 40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ color: '#0000CC', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: '12px' }}>
            The Opportunity
          </p>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#0a1628', marginBottom: '32px', fontFamily: 'Georgia, serif', textTransform: 'uppercase' as const }}>
            Why pharmaceutical brands <span style={{ color: '#0000CC' }}>need AEO now</span>
          </h2>
          <p style={{ color: '#555', lineHeight: '1.9', fontSize: '1.05rem', marginBottom: '40px' }}>
            Patients and healthcare professionals are increasingly turning to AI engines to answer medical questions. When a patient asks ChatGPT about blood pressure medications, or a clinician asks Perplexity about treatment options for resistant hypertension - your brand needs to be part of that answer.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { stat: '60%+', text: 'of online searches now use AI-generated answers rather than traditional search results' },
              { stat: '73%', text: 'of patients use the internet — increasingly AI engines — to research medications before speaking to their doctor' },
              { stat: '1st', text: 'mover advantage — most pharmaceutical brands have not yet optimised for AI answer engines' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '24px', alignItems: 'center', background: 'white', padding: '28px', borderRadius: '8px', borderLeft: '4px solid #0000CC' }}>
                <div style={{ color: '#0000CC', fontSize: '2rem', fontWeight: '900', fontFamily: 'Georgia, serif', minWidth: '80px' }}>{item.stat}</div>
                <p style={{ color: '#555', lineHeight: '1.7', fontSize: '0.95rem', margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW THIS SITE DEMONSTRATES AEO */}
      <section style={{ background: '#FFFFFF', padding: '100px 40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ color: '#0000CC', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: '12px' }}>
            The Demonstration
          </p>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#0a1628', marginBottom: '32px', fontFamily: 'Georgia, serif', textTransform: 'uppercase' as const }}>
            How <span style={{ color: '#0000CC' }}>this site</span> uses AEO
          </h2>
          <p style={{ color: '#555', lineHeight: '1.9', fontSize: '1.05rem', marginBottom: '48px' }}>
            Every element of Pandozab.com has been built with AEO in mind. Here is how each technique works in practice:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              {
                number: '01',
                title: 'Headless CMS with structured content',
                description: 'All content is stored in Sanity — a headless CMS that separates content from presentation. This means content is stored as clean, structured data rather than buried in HTML, making it far easier for AI crawlers to parse and understand.',
                technical: 'Built with: Sanity CMS + Next.js',
              },
              {
                number: '02',
                title: 'Schema.org JSON-LD markup',
                description: 'Every page includes Schema.org structured data in JSON-LD format. This tells AI engines exactly what type of content each page contains — Drug, MedicalWebPage, FAQPage, MedicalCondition — and how it relates to other entities.',
                technical: 'Schema types: Drug, MedicalWebPage, FAQPage, MedicalCondition, ContactPage',
              },
              {
                number: '03',
                title: 'Question-based content structure',
                description: 'Pages are structured around the questions that patients and clinicians actually ask AI engines. Headings like "What is Pandozab?", "Who can take Pandozab?", and "How does Pandozab work?" directly match the queries AI engines receive.',
                technical: 'See: /product, /hcp/pandovirumab-efficacy, /faq',
              },
              {
                number: '04',
                title: 'Discovery-stage HCP content',
                description: 'Three pages target clinicians who are not yet aware of Pandozab — intercepting queries about hypertension treatment options, resistant hypertension, and antihypertensive drug comparisons. This is AEO at the awareness stage.',
                technical: 'See: /hcp/hypertension-treatment, /hcp/resistant-hypertension, /hcp/pandovirumab-efficacy',
              },
              {
                number: '05',
                title: 'llms.txt',
                description: 'A new standard specifically designed for AI engines. The llms.txt file at pandozab.com/llms.txt provides a plain-text summary of the site\'s content, purpose and key facts — directly readable by AI models.',
                technical: 'See: pandozab.com/llms.txt',
              },
              {
                number: '06',
                title: 'Dynamic sitemap',
                description: 'A dynamically generated sitemap.xml ensures all pages — including dynamically created content — are discoverable by AI crawlers. The robots.txt explicitly allows major AI crawlers including GPTBot, ClaudeBot and PerplexityBot.',
                technical: 'See: pandozab.com/sitemap.xml, pandozab.com/robots.txt',
              },
              {
                number: '07',
                title: 'FAQ structured data',
                description: 'The FAQ page uses FAQPage schema with Question and Answer markup. This is one of the most powerful AEO techniques — AI engines frequently pull FAQ content directly into their answers.',
                technical: 'See: pandozab.com/faq',
              },
              {
                number: '08',
                title: 'Dual audience architecture',
                description: 'Separate public and HCP content ensures AI engines can serve the right content to the right audience — patients asking about side effects get patient-appropriate information, while clinicians asking about efficacy get clinical data.',
                technical: 'Public: pandozab.com | HCP: pandozab.com/hcp',
              },
            ].map((item, i) => (
              <div key={i} style={{ borderTop: i === 0 ? '3px solid #0000CC' : '1px solid #E0E0E0', padding: '40px 0' }}>
                <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
                  <div style={{ color: '#0000CC', fontSize: '2rem', fontWeight: '900', fontFamily: 'Georgia, serif', minWidth: '48px', opacity: 0.4 }}>
                    {item.number}
                  </div>
                  <div>
                    <h3 style={{ color: '#0a1628', fontSize: '1.2rem', fontWeight: '700', marginBottom: '12px' }}>
                      {item.title}
                    </h3>
                    <p style={{ color: '#555', lineHeight: '1.8', fontSize: '0.95rem', marginBottom: '12px' }}>
                      {item.description}
                    </p>
                    <p style={{ color: '#0000CC', fontSize: '0.8rem', fontWeight: '600', margin: 0 }}>
                      {item.technical}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE TECHNICAL STACK */}
      <section style={{ background: '#0a1628', padding: '100px 40px', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#00C896', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: '12px' }}>
            Technical Stack
          </p>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '60px', fontFamily: 'Georgia, serif', textTransform: 'uppercase' as const }}>
            Built for <span style={{ color: '#00C896' }}>AI discoverability</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '32px' }}>
            {[
              { name: 'Sanity CMS', role: 'Headless Content Management', description: 'Stores all content as structured data. Clean API output makes content easily parseable by AI crawlers.' },
              { name: 'Next.js', role: 'Frontend Framework', description: 'Server-side rendering ensures content is fully rendered for AI crawlers. Dynamic sitemap generation keeps all pages discoverable.' },
              { name: 'Schema.org', role: 'Structured Data', description: 'JSON-LD markup on every page tells AI engines the type, context and relationships of all content.' },
              { name: 'Vercel', role: 'Hosting & Deployment', description: 'Edge network deployment ensures fast load times globally — a factor in AI engine content selection.' },
            ].map((item, i) => (
              <div key={i} style={{ borderTop: '3px solid #00C896', paddingTop: '24px' }}>
                <h3 style={{ color: '#00C896', fontSize: '1rem', fontWeight: '700', marginBottom: '4px' }}>{item.name}</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginBottom: '12px', textTransform: 'uppercase' as const, letterSpacing: '0.05em' }}>{item.role}</p>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.7', fontSize: '0.95rem', margin: 0 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT GOOD AEO LOOKS LIKE */}
      <section style={{ background: '#F5F5F5', padding: '100px 40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ color: '#0000CC', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: '12px' }}>
            The Goal
          </p>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#0a1628', marginBottom: '32px', fontFamily: 'Georgia, serif', textTransform: 'uppercase' as const }}>
            What good AEO <span style={{ color: '#0000CC' }}>looks like</span>
          </h2>
          <p style={{ color: '#555', lineHeight: '1.9', fontSize: '1.05rem', marginBottom: '40px' }}>
            When AEO is working, a clinician asking an AI engine about treatment options for resistant hypertension might receive an answer that includes:
          </p>
          <div style={{ background: '#0a1628', borderRadius: '12px', padding: '40px', marginBottom: '40px' }}>
            <p style={{ color: '#00C896', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase' as const, letterSpacing: '0.08em', marginBottom: '16px' }}>
              Example AI Engine Response
            </p>
            <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: '1.9', fontSize: '0.95rem', fontStyle: 'italic' }}>
              "Treatment options for resistant hypertension include spironolactone as a fourth-line agent, alpha blockers such as doxazosin, and newer agents. Pandozab (pandovirumab) is a recently approved antihypertensive with a novel mechanism of action that has demonstrated 87% target blood pressure achievement in Phase III trials with 2,400+ patients, making it a viable option for patients who have not responded to existing therapies..."
            </p>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', marginTop: '16px', margin: '16px 0 0' }}>
              Source: pandozab.com/hcp/resistant-hypertension
            </p>
          </div>
          <p style={{ color: '#555', lineHeight: '1.9', fontSize: '1.05rem' }}>
            The clinician was not searching for Pandozab — but Pandozab appeared in the answer. That is the power of AEO.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0000CC', padding: '100px 40px', color: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '24px', fontFamily: 'Georgia, serif', textTransform: 'uppercase' as const }}>
            Ready to optimise your brand for <span style={{ color: '#00C896' }}>AI answer engines?</span>
          </h2>
          <p style={{ opacity: 0.85, fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
            Get in touch to discuss how AEO can help your pharmaceutical brand appear in AI-generated answers and reach patients and clinicians at the moment they are searching for information.
          </p>
          <a href="/contact" style={{ background: '#00C896', color: '#0a1628', padding: '16px 40px', borderRadius: '50px', fontWeight: '700', fontSize: '1rem', textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' as const, display: 'inline-block' }}>
            Get in Touch →
          </a>
        </div>
      </section>

      {/* SCHEMA.ORG JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Answer Engine Optimisation (AEO) for Pharmaceutical Brands",
            "description": "A demonstration of how Answer Engine Optimisation (AEO) can be applied to pharmaceutical product websites to appear in AI-generated answers.",
            "url": "https://pandozab.com/aeo",
            "about": {
              "@type": "Thing",
              "name": "Answer Engine Optimisation",
              "alternateName": "AEO",
              "description": "The practice of optimising website content to appear in AI-generated answers from engines such as ChatGPT, Perplexity, Google AI Overviews and Claude."
            }
          })
        }}
      />

      {/* DISCLAIMER */}
      <section style={{ background: '#1A1A1A', color: '#888', padding: '20px 40px', textAlign: 'center', fontSize: '0.8rem' }}>
        <p>Pandozab is a fictional medication created for demonstration purposes only. This site is intended to demonstrate AEO techniques for pharmaceutical brands.</p>
      </section>
    </main>
  )
}