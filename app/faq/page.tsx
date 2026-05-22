import type { Metadata } from 'next'
import { client } from '../../sanity.client'
import { theme } from '../../theme'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'FAQs | Pandovab (pandovirumab)',
  description: 'Frequently asked questions about Pandovab (pandovirumab) including dosing, side effects, lifestyle advice, and cost information.',
  keywords: 'Pandovab FAQ, pandovirumab questions, blood pressure medication FAQ',
  openGraph: {
    title: 'FAQs | Pandovab (pandovirumab)',
    description: 'Everything you need to know about Pandovab.',
    type: 'website',
  },
}

async function getFaqs() {
  return client.fetch(`*[_type == "patientFaq"] | order(order asc) {
    question,
    answer,
    category,
    featured
  }`)
}

export default async function FaqPage() {
  const faqs = await getFaqs()

  const categories = [
    { value: 'taking_medication', label: 'Taking the Medication' },
    { value: 'side_effects', label: 'Side Effects' },
    { value: 'lifestyle', label: 'Lifestyle' },
    { value: 'cost', label: 'Cost & Coverage' },
    { value: 'storage', label: 'Storage' },
    { value: 'general', label: 'General' },
  ]

  return (
    <main>
      {/* HERO */}
      <section style={{ background: '#F5F5F5', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#0000CC', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
            Patient Information
          </p>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', lineHeight: '1.15', marginBottom: '24px', color: '#1A1A1A', fontFamily: 'Georgia, serif', maxWidth: '700px' }}>
            Frequently Asked Questions
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: '1.7', maxWidth: '600px' }}>
            Everything you need to know about Pandovab
          </p>
        </div>
      </section>

      {/* FAQ CONTENT */}
      <section style={{ background: '#FFFFFF', padding: '100px 40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {faqs.length === 0 ? (
            <p style={{ color: '#555' }}>No FAQs available yet. Check back soon.</p>
          ) : (
            categories.map((cat) => {
              const catFaqs = faqs.filter((f: any) => f.category === cat.value)
              if (catFaqs.length === 0) return null
              return (
                <div key={cat.value} style={{ marginBottom: '60px' }}>
                  <h2 style={{
                    color: '#1A1A1A',
                    fontSize: '1.5rem',
                    fontWeight: '800',
                    fontFamily: 'Georgia, serif',
                    borderTop: '3px solid #0000CC',
                    paddingTop: '24px',
                    marginBottom: '32px',
                  }}>
                    {cat.label}
                  </h2>
                  {catFaqs.map((faq: any, index: number) => (
                    <div key={index} style={{
                      borderBottom: '1px solid #E0E0E0',
                      paddingBottom: '24px',
                      marginBottom: '24px',
                    }}>
                      <h3 style={{ color: '#1A1A1A', fontSize: '1.05rem', marginBottom: '12px', fontWeight: '700' }}>
                        {faq.question}
                      </h3>
                      <div style={{ color: '#555', lineHeight: '1.8', fontSize: '0.95rem' }}>
                        {faq.answer?.map((block: any, i: number) => (
                          <p key={i}>{block.children?.map((child: any) => child.text).join('')}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )
            })
          )}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0000CC', padding: '100px 40px', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '40px' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '16px', fontFamily: 'Georgia, serif' }}>
              Still have questions?
            </h2>
            <p style={{ opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.7', maxWidth: '500px' }}>
              Get in touch with our team or speak to your healthcare provider.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="/contact" style={{ ...theme.buttons.white }}>Contact Us</a>
            <a href="/voice-assistant" style={{ ...theme.buttons.outlineWhite }}>Voice Assistant</a>
          </div>
        </div>
      </section>

      {/* SCHEMA.ORG JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "name": "Pandovab FAQ",
            "description": "Frequently asked questions about Pandovab (pandovirumab)",
            "url": "https://pandovab.com/faq",
            "mainEntity": faqs.map((faq: any) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer?.map((block: any) =>
                  block.children?.map((child: any) => child.text).join('')
                ).join(' ')
              }
            }))
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