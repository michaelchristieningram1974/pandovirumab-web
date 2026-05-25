import type { Metadata } from 'next'
import { client } from '../sanity.client'

export const revalidate = 0

export const metadata: Metadata = {
  title: 'Pandozab (pandovirumab) | Blood Pressure Treatment',
  description: 'Pandozab (pandovirumab) is a prescription medication indicated for the treatment of hypertension in adults aged 18 and above. Once daily oral tablet clinically proven to reduce blood pressure.',
  keywords: 'Pandozab, pandovirumab, hypertension treatment, blood pressure medication, antihypertensive',
  openGraph: {
    title: 'Pandozab (pandovirumab) | Blood Pressure Treatment',
    description: 'A new standard in blood pressure control.',
    type: 'website',
  },
}

async function getProduct() {
  return client.fetch(`*[_type == "product"][0]{ name, tagline, indication, keyFeatures, benefits }`)
}

async function getFeaturedFaqs() {
  return client.fetch(`*[_type == "patientFaq" && featured == true] | order(order asc)[0...3]{ question, answer }`)
}

async function getFeaturedTestimonial() {
  return client.fetch(`*[_type == "testimonial" && featured == true][0]{ name, credentials, quote, type }`)
}

export default async function Home() {
  const product = await getProduct()
  const faqs = await getFeaturedFaqs()
  const testimonial = await getFeaturedTestimonial()

  return (
    <main>

      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #0a1628 60%, #003087 100%)', padding: '120px 40px', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: 'rgba(0,200,150,0.15)', border: '1px solid rgba(0,200,150,0.4)', color: '#00C896', padding: '6px 16px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.1em', marginBottom: '32px', textTransform: 'uppercase' as const }}>
            pandovirumab
          </div>
          <h1 style={{ fontSize: '4rem', fontWeight: '900', lineHeight: '1.05', marginBottom: '32px', textTransform: 'uppercase' as const, maxWidth: '700px' }}>
            <span style={{ color: '#00C896' }}>ONCE DAILY.</span><br />
            <span style={{ color: '#00C896' }}>PROVEN RESULTS.</span><br />
            <span style={{ color: 'white' }}>ALWAYS IN CONTROL.</span>
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.85, lineHeight: '1.7', marginBottom: '16px', maxWidth: '550px' }}>
            {product?.tagline ?? 'A new standard in blood pressure control'}
          </p>
          <p style={{ fontSize: '0.95rem', opacity: 0.65, lineHeight: '1.8', marginBottom: '48px', maxWidth: '550px' }}>
            {product?.indication ?? 'Pandozab (pandovirumab) is indicated for the treatment of hypertension in adults aged 18 and above.'}
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' as const }}>
            <a href="/product" style={{ background: '#00C896', color: '#0a1628', padding: '14px 32px', borderRadius: '50px', fontWeight: '700', fontSize: '0.9rem', textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' as const }}>
              Learn About Pandozab →
            </a>
            <a href="/hcp" style={{ background: 'transparent', color: 'white', padding: '14px 32px', borderRadius: '50px', fontWeight: '700', fontSize: '0.9rem', textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' as const, border: '2px solid rgba(255,255,255,0.4)' }}>
              For HCPs
            </a>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section style={{ background: '#0000CC', padding: '40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', textAlign: 'center' as const }}>
          {[
            { stat: '87%', label: 'patients achieved target blood pressure' },
            { stat: '1x', label: 'daily dosing — simple and convenient' },
            { stat: '2,400+', label: 'patients in Phase III clinical trial' },
            { stat: '24wk', label: 'sustained blood pressure control' },
          ].map((item, i) => (
            <div key={i}>
              <p style={{ color: '#00C896', fontSize: '2.5rem', fontWeight: '900', fontFamily: 'Georgia, serif', margin: '0 0 8px' }}>{item.stat}</p>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', margin: 0, lineHeight: '1.5' }}>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT IS PANDOZAB */}
      <section style={{ background: '#FFFFFF', padding: '100px 40px', textAlign: 'center' as const }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#0a1628', marginBottom: '16px', textTransform: 'uppercase' as const }}>
            WHAT IS <span style={{ color: '#0000CC' }}>PANDOZAB?</span>
          </h2>
          <p style={{ color: '#888', fontSize: '1rem', marginBottom: '40px', lineHeight: '1.7' }}>
            Understanding Pandozab and what it is used as a treatment for
          </p>
          <p style={{ color: '#555', lineHeight: '1.9', fontSize: '1.05rem', marginBottom: '16px', textAlign: 'left' as const }}>
            Pandozab (pandovirumab) is a once-daily prescription tablet indicated for the treatment of <strong>hypertension (high blood pressure)</strong> in adults aged 18 and above.
          </p>
          <p style={{ color: '#555', lineHeight: '1.9', fontSize: '1.05rem', marginBottom: '40px', textAlign: 'left' as const }}>
            It belongs to a new class of antihypertensive agents that work by targeting key pathways involved in blood pressure regulation, offering clinically proven reductions in both systolic and diastolic blood pressure.
          </p>
          <a href="/product" style={{ background: '#0000CC', color: 'white', padding: '14px 32px', borderRadius: '50px', fontWeight: '700', fontSize: '0.9rem', textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' as const, display: 'inline-block' }}>
            Learn More →
          </a>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: '#F5F5F5', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#0a1628', marginBottom: '16px', textTransform: 'uppercase' as const, textAlign: 'center' as const }}>
            HOW DOES <span style={{ color: '#0000CC' }}>PANDOZAB</span> WORK?
          </h2>
          <p style={{ color: '#888', fontSize: '1rem', marginBottom: '60px', lineHeight: '1.7', textAlign: 'center' as const }}>
            The mechanism of action behind Pandozab's proven efficacy
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {[
              { step: '01', title: 'Targets blood pressure pathways', description: 'Pandozab acts on key biological pathways responsible for regulating blood vessel tone and fluid balance.' },
              { step: '02', title: 'Reduces vascular resistance', description: 'By relaxing blood vessel walls, Pandozab reduces the resistance against which the heart must pump.' },
              { step: '03', title: 'Lowers blood pressure', description: 'The result is a clinically significant and sustained reduction in both systolic and diastolic blood pressure.' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'white', padding: '36px', borderRadius: '12px' }}>
                <div style={{ color: '#00C896', fontSize: '2.5rem', fontWeight: '900', marginBottom: '16px', fontFamily: 'Georgia, serif' }}>{item.step}</div>
                <h3 style={{ color: '#0a1628', fontSize: '1.1rem', fontWeight: '700', marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ color: '#555', lineHeight: '1.7', fontSize: '0.95rem', margin: 0 }}>{item.description}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' as const, marginTop: '40px' }}>
            <a href="/how-it-works" style={{ color: '#0000CC', fontWeight: '700', fontSize: '0.9rem', textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' as const, border: '2px solid #0000CC', padding: '12px 28px', borderRadius: '50px', display: 'inline-block' }}>
              Full Mechanism of Action →
            </a>
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section style={{ background: '#0a1628', padding: '100px 40px', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.8rem', fontWeight: '900', marginBottom: '16px', textTransform: 'uppercase' as const, textAlign: 'center' as const }}>
            WHY CHOOSE <span style={{ color: '#00C896' }}>PANDOZAB?</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', marginBottom: '60px', textAlign: 'center' as const }}>
            Key clinical features that set Pandozab apart
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '32px' }}>
            {product?.keyFeatures?.map((feature: any, index: number) => (
              <div key={index} style={{ borderTop: '3px solid #00C896', paddingTop: '24px' }}>
                <h3 style={{ color: 'white', marginBottom: '12px', fontSize: '1.1rem', fontWeight: '700' }}>{feature.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.7', fontSize: '0.95rem', margin: 0 }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO CAN TAKE PANDOZAB */}
      <section style={{ background: '#FFFFFF', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#0a1628', marginBottom: '16px', textTransform: 'uppercase' as const, textAlign: 'center' as const }}>
            WHO CAN TAKE <span style={{ color: '#0000CC' }}>PANDOZAB?</span>
          </h2>
          <p style={{ color: '#888', fontSize: '1rem', marginBottom: '60px', textAlign: 'center' as const }}>
            Important information about patient eligibility
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {[
              { icon: '✅', color: '#0000CC', title: 'Adults aged 18 and above', description: 'Pandozab is indicated for adult patients with diagnosed hypertension.' },
              { icon: '✅', color: '#0000CC', title: 'Patients with hypertension', description: 'Both newly diagnosed patients and those who have not responded to other treatments.' },
              { icon: '⚠️', color: '#e67e22', title: 'Speak to your doctor first', description: 'Pandozab may not be suitable for everyone. Always consult your healthcare provider before starting treatment.' },
            ].map((item, i) => (
              <div key={i} style={{ borderTop: `3px solid ${item.color}`, paddingTop: '24px' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '12px' }}>{item.icon}</div>
                <h3 style={{ color: '#0a1628', fontSize: '1rem', fontWeight: '700', marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: '1.7', margin: 0 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ STRIP */}
      {faqs.length > 0 && (
        <section style={{ background: '#F5F5F5', padding: '100px 40px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.8rem', fontWeight: '900', color: '#0a1628', marginBottom: '16px', textTransform: 'uppercase' as const, textAlign: 'center' as const }}>
              COMMON <span style={{ color: '#0000CC' }}>QUESTIONS</span>
            </h2>
            <p style={{ color: '#888', fontSize: '1rem', marginBottom: '48px', textAlign: 'center' as const }}>
              Frequently asked questions about Pandozab
            </p>
            <div style={{ display: 'flex', flexDirection: 'column' as const }}>
              {faqs.map((faq: any, i: number) => (
                <div key={i} style={{ borderTop: i === 0 ? '3px solid #0000CC' : '1px solid #E0E0E0', paddingTop: '28px', paddingBottom: '28px' }}>
                  <h3 style={{ color: '#0a1628', fontSize: '1.05rem', fontWeight: '700', marginBottom: '12px' }}>{faq.question}</h3>
                  <p style={{ color: '#555', lineHeight: '1.8', fontSize: '0.95rem', margin: 0 }}>
                    {faq.answer?.[0]?.children?.map((child: any) => child.text).join('')}
                  </p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center' as const, marginTop: '40px' }}>
              <a href="/faq" style={{ color: '#0000CC', fontWeight: '700', fontSize: '0.9rem', textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' as const, border: '2px solid #0000CC', padding: '12px 28px', borderRadius: '50px', display: 'inline-block' }}>
                View All FAQs →
              </a>
            </div>
          </div>
        </section>
      )}

      {/* TESTIMONIAL */}
      {testimonial && (
        <section style={{ background: '#0a1628', padding: '100px 40px', color: 'white' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' as const }}>
            <div style={{ fontSize: '4rem', color: '#00C896', marginBottom: '24px', lineHeight: 1 }}>"</div>
            <p style={{ fontSize: '1.4rem', lineHeight: '1.8', fontFamily: 'Georgia, serif', marginBottom: '32px', opacity: 0.95 }}>
              {testimonial.quote}
            </p>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', fontWeight: '600', textTransform: 'uppercase' as const, letterSpacing: '0.05em' }}>
              {testimonial.name}{testimonial.credentials && `, ${testimonial.credentials}`}
            </p>
          </div>
        </section>
      )}

      {/* HCP CTA */}
      <section style={{ background: '#00C896', padding: '80px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' as const, gap: '40px' }}>
          <div>
            <p style={{ fontSize: '0.8rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginBottom: '12px', color: 'rgba(10,22,40,0.6)' }}>
              Healthcare Professionals
            </p>
            <h2 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '16px', color: '#0a1628', textTransform: 'uppercase' as const }}>
              Access Full Clinical Data
            </h2>
            <p style={{ color: 'rgba(10,22,40,0.7)', fontSize: '1rem', lineHeight: '1.7', maxWidth: '500px' }}>
              View Phase III trial results, dosing guides, drug interactions and prescribing information in the HCP portal.
            </p>
          </div>
          <a href="/hcp" style={{ background: '#0a1628', color: 'white', padding: '16px 36px', borderRadius: '50px', fontWeight: '700', fontSize: '0.9rem', textDecoration: 'none', letterSpacing: '0.05em', textTransform: 'uppercase' as const, whiteSpace: 'nowrap' as const }}>
            Enter HCP Portal →
          </a>
        </div>
      </section>

      {/* SCHEMA.ORG JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Drug",
            "name": "Pandozab",
            "alternateName": "pandovirumab",
            "description": "Pandozab (pandovirumab) is a once-daily prescription tablet indicated for the treatment of hypertension in adults aged 18 and above.",
            "url": "https://pandozab.com",
            "medicineSystem": "https://schema.org/WesternConventional",
            "relevantSpecialty": "https://schema.org/Cardiovascular",
            "indication": {
              "@type": "MedicalIndication",
              "name": "Hypertension",
              "alternateName": "High Blood Pressure"
            },
            "administrationRoute": "Oral",
            "dosageForm": "Tablet",
            "drugClass": "Antihypertensive",
            "manufacturer": {
              "@type": "Organization",
              "name": "Pandozab Pharmaceuticals"
            },
            "prescriptionStatus": "PrescriptionOnly",
            "availableStrength": {
              "@type": "DrugStrength",
              "activeIngredient": "pandovirumab"
            }
          })
        }}
      />

      {/* DISCLAIMER */}
      <section style={{ background: '#1A1A1A', color: '#888', padding: '20px 40px', textAlign: 'center' as const, fontSize: '0.8rem' }}>
        <p>This website is intended for informational purposes only. Please consult your healthcare provider before starting any medication.</p>
      </section>

    </main>
  )
}