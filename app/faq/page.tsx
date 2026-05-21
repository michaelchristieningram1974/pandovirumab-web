import type { Metadata } from 'next'
import { client } from '../../sanity.client'

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
      <section style={{
        background: 'linear-gradient(135deg, #003087 0%, #00857C 100%)',
        color: 'white',
        padding: '60px 40px',
        textAlign: 'center',
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '16px' }}>
          Frequently Asked Questions
        </h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
          Everything you need to know about Pandovab
        </p>
      </section>

      {/* FAQ CONTENT */}
      <section style={{ padding: '60px 40px', maxWidth: '900px', margin: '0 auto' }}>
        {faqs.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#555' }}>
            No FAQs available yet. Check back soon.
          </p>
        ) : (
          categories.map((cat) => {
            const catFaqs = faqs.filter((f: any) => f.category === cat.value)
            if (catFaqs.length === 0) return null

            return (
              <div key={cat.value} style={{ marginBottom: '50px' }}>
                <h2 style={{
                  color: '#00857C',
                  fontSize: '1.4rem',
                  borderBottom: '2px solid #E6F4F3',
                  paddingBottom: '10px',
                  marginBottom: '24px',
                }}>
                  {cat.label}
                </h2>
                {catFaqs.map((faq: any, index: number) => (
                  <div key={index} style={{
                    background: '#F5F7FA',
                    borderRadius: '8px',
                    padding: '24px',
                    marginBottom: '16px',
                    borderLeft: '4px solid #003087',
                  }}>
                    <h3 style={{
                      color: '#003087',
                      fontSize: '1.1rem',
                      marginBottom: '12px',
                    }}>
                      {faq.question}
                    </h3>
                    <div style={{ color: '#555', lineHeight: '1.7' }}>
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
    
    
    
    
    
    
    
    
    
    </main>
  )
}