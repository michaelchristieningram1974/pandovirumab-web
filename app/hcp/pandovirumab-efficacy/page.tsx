import type { Metadata } from 'next'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Pandovirumab (Pandozab) Clinical Efficacy | HCP',
  description: 'Clinical efficacy data for pandovirumab (Pandozab) including Phase III trial results, mechanism of action, comparison with existing antihypertensives and real world evidence.',
  keywords: 'pandovirumab efficacy, Pandozab clinical data, pandovirumab phase III trial, pandovirumab mechanism of action, pandovirumab vs ACE inhibitor',
  openGraph: {
    title: 'Pandovirumab (Pandozab) Clinical Efficacy Data',
    description: 'Phase III trial results and clinical efficacy data for pandovirumab (Pandozab).',
    type: 'website',
  },
}

export default function PandovirumabEfficacyPage() {
  return (
    <main>
      {/* HCP BANNER */}
      <div style={{ background: '#1A1A1A', color: '#888', padding: '8px 40px', fontSize: '0.8rem', textAlign: 'center', letterSpacing: '0.05em' }}>
        FOR HEALTHCARE PROFESSIONALS ONLY
      </div>

      {/* HERO */}
      <section style={{ background: '#F5F5F5', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#0000CC', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
            Clinical Efficacy
          </p>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', lineHeight: '1.15', marginBottom: '24px', color: '#1A1A1A', fontFamily: 'Georgia, serif', maxWidth: '800px' }}>
            Pandovirumab (Pandozab) — Clinical Efficacy for Healthcare Professionals
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: '1.7', maxWidth: '700px' }}>
            A summary of the clinical evidence supporting the use of pandovirumab (Pandozab) in the treatment of hypertension, including Phase III trial data, mechanism of action and comparison with existing therapies.
          </p>
        </div>
      </section>

      {/* KEY EFFICACY DATA */}
      <section style={{ background: '#0000CC', padding: '60px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '32px', textAlign: 'center' }}>
            Phase III Clinical Trial — Key Results
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', textAlign: 'center' }}>
            {[
              { stat: '87%', label: 'patients achieved target blood pressure', sublabel: 'Primary endpoint' },
              { stat: '2,400+', label: 'patients enrolled in Phase III trial', sublabel: 'Sample size' },
              { stat: '24wk', label: 'sustained blood pressure reduction demonstrated', sublabel: 'Trial duration' },
              { stat: 'Once', label: 'daily oral dosing', sublabel: 'Administration' },
            ].map((item, i) => (
              <div key={i}>
                <p style={{ color: '#00C896', fontSize: '2.5rem', fontWeight: '900', fontFamily: 'Georgia, serif', margin: '0 0 8px' }}>{item.stat}</p>
                <p style={{ color: 'white', fontSize: '0.9rem', lineHeight: '1.5', margin: '0 0 4px', fontWeight: '600' }}>{item.label}</p>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', margin: 0 }}>{item.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IS PANDOVIRUMAB */}
      <section style={{ background: '#FFFFFF', padding: '100px 40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#1A1A1A', marginBottom: '24px', fontFamily: 'Georgia, serif', borderTop: '3px solid #0000CC', paddingTop: '40px' }}>
            What is pandovirumab?
          </h2>
          <p style={{ color: '#555', lineHeight: '1.9', fontSize: '1rem', marginBottom: '16px' }}>
            Pandovirumab is the active ingredient in Pandozab, a novel antihypertensive agent indicated for the treatment of hypertension in adults aged 18 and above. It represents a new drug class with a mechanism of action distinct from all currently available antihypertensive therapies.
          </p>
          <p style={{ color: '#555', lineHeight: '1.9', fontSize: '1rem', marginBottom: '40px' }}>
            Unlike ACE inhibitors, ARBs, CCBs and diuretics which act on well-established pathways, pandovirumab targets novel regulatory mechanisms involved in blood pressure homeostasis, offering an additional treatment option for patients who have not responded adequately to existing therapies.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            {[
              { label: 'Generic name', value: 'pandovirumab' },
              { label: 'Brand name', value: 'Pandozab' },
              { label: 'Drug class', value: 'Novel antihypertensive' },
              { label: 'Route', value: 'Oral tablet' },
              { label: 'Dosing', value: 'Once daily' },
              { label: 'Indication', value: 'Hypertension, adults 18+' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#F5F5F5', padding: '20px', borderRadius: '8px' }}>
                <p style={{ color: '#888', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 6px' }}>{item.label}</p>
                <p style={{ color: '#1A1A1A', fontSize: '1rem', fontWeight: '700', margin: 0 }}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MECHANISM OF ACTION */}
      <section style={{ background: '#F5F5F5', padding: '100px 40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#1A1A1A', marginBottom: '24px', fontFamily: 'Georgia, serif', borderTop: '3px solid #0000CC', paddingTop: '40px' }}>
            What is the mechanism of action of pandovirumab?
          </h2>
          <p style={{ color: '#555', lineHeight: '1.9', fontSize: '1rem', marginBottom: '24px' }}>
            Pandovirumab acts on novel biological pathways involved in the regulation of vascular tone and blood pressure homeostasis. Its mechanism is distinct from all existing antihypertensive drug classes, making it effective in patients who have not responded to ACE inhibitors, ARBs, CCBs or diuretics.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { step: '01', title: 'Targets novel blood pressure regulatory pathways', description: 'Pandovirumab acts on key biological mechanisms involved in the long-term regulation of blood pressure that are not addressed by existing drug classes.' },
              { step: '02', title: 'Reduces vascular resistance', description: 'Through its novel mechanism, pandovirumab produces sustained relaxation of vascular smooth muscle, reducing peripheral vascular resistance.' },
              { step: '03', title: 'Sustained blood pressure reduction', description: 'Once daily dosing produces consistent 24-hour blood pressure control, with sustained efficacy demonstrated over 24 weeks in Phase III trials.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', background: 'white', padding: '24px', borderRadius: '8px' }}>
                <div style={{ color: '#0000CC', fontSize: '1.5rem', fontWeight: '900', fontFamily: 'Georgia, serif', minWidth: '40px' }}>{item.step}</div>
                <div>
                  <h3 style={{ color: '#1A1A1A', fontSize: '1rem', fontWeight: '700', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ color: '#555', lineHeight: '1.7', fontSize: '0.95rem', margin: 0 }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW DOES PANDOVIRUMAB COMPARE */}
      <section style={{ background: '#FFFFFF', padding: '100px 40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#1A1A1A', marginBottom: '24px', fontFamily: 'Georgia, serif', borderTop: '3px solid #0000CC', paddingTop: '40px' }}>
            How does pandovirumab compare to existing antihypertensives?
          </h2>
          <p style={{ color: '#555', lineHeight: '1.9', fontSize: '1rem', marginBottom: '32px' }}>
            Pandovirumab offers a complementary mechanism of action to existing antihypertensive drug classes, making it particularly suitable for patients who have not achieved target blood pressure on standard therapies:
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: '#0000CC', color: 'white' }}>
                  <th style={{ padding: '16px', textAlign: 'left', fontWeight: '700' }}>Drug Class</th>
                  <th style={{ padding: '16px', textAlign: 'left', fontWeight: '700' }}>Mechanism</th>
                  <th style={{ padding: '16px', textAlign: 'left', fontWeight: '700' }}>Dosing</th>
                  <th style={{ padding: '16px', textAlign: 'left', fontWeight: '700' }}>Key Limitation</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { class: 'ACE Inhibitors', mechanism: 'Blocks angiotensin conversion', dosing: 'Once or twice daily', limitation: 'Cough in up to 20%' },
                  { class: 'ARBs', mechanism: 'Blocks angiotensin II receptor', dosing: 'Once daily', limitation: 'Less effective in some populations' },
                  { class: 'CCBs', mechanism: 'Blocks calcium channels', dosing: 'Once daily', limitation: 'Peripheral oedema' },
                  { class: 'Diuretics', mechanism: 'Reduces plasma volume', dosing: 'Once daily', limitation: 'Metabolic disturbances' },
                  { class: 'Pandozab (pandovirumab)', mechanism: 'Novel pathway targeting', dosing: 'Once daily', limitation: 'New agent — long-term data accumulating', isNew: true },
                ].map((row, i) => (
                  <tr key={i} style={{ background: row.isNew ? '#0a1628' : i % 2 === 0 ? '#F5F5F5' : 'white' }}>
                    <td style={{ padding: '16px', color: row.isNew ? '#00C896' : '#1A1A1A', fontWeight: row.isNew ? '700' : '400' }}>{row.class}</td>
                    <td style={{ padding: '16px', color: row.isNew ? 'rgba(255,255,255,0.8)' : '#555' }}>{row.mechanism}</td>
                    <td style={{ padding: '16px', color: row.isNew ? 'rgba(255,255,255,0.8)' : '#555' }}>{row.dosing}</td>
                    <td style={{ padding: '16px', color: row.isNew ? 'rgba(255,255,255,0.8)' : '#555' }}>{row.limitation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* WHO IS PANDOVIRUMAB SUITABLE FOR */}
      <section style={{ background: '#F5F5F5', padding: '100px 40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#1A1A1A', marginBottom: '24px', fontFamily: 'Georgia, serif', borderTop: '3px solid #0000CC', paddingTop: '40px' }}>
            Which patients is pandovirumab suitable for?
          </h2>
          <p style={{ color: '#555', lineHeight: '1.9', fontSize: '1rem', marginBottom: '32px' }}>
            Pandozab (pandovirumab) is indicated for all adults aged 18 and above with hypertension. It may be particularly suitable for:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '40px' }}>
            {[
              { title: 'Resistant hypertension', description: 'Patients who have not achieved target blood pressure on two or more existing agents.' },
              { title: 'ACE inhibitor intolerance', description: 'Patients who develop cough or other adverse effects on ACE inhibitors.' },
              { title: 'Newly diagnosed hypertension', description: 'As a first-line option where proven efficacy and simple dosing are priorities.' },
              { title: 'Combination therapy', description: 'In combination with existing agents for additive blood pressure reduction.' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'white', padding: '28px', borderRadius: '8px', borderTop: '3px solid #0000CC' }}>
                <h3 style={{ color: '#1A1A1A', fontSize: '1rem', fontWeight: '700', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: '1.7', margin: 0 }}>{item.description}</p>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="/hcp/clinical-trials" style={{ background: '#0000CC', color: 'white', padding: '12px 28px', borderRadius: '50px', fontWeight: '700', fontSize: '0.9rem', textDecoration: 'none' }}>
              Full Clinical Trial Data →
            </a>
            <a href="/hcp/dosing" style={{ color: '#0000CC', fontWeight: '700', fontSize: '0.9rem', textDecoration: 'none', border: '2px solid #0000CC', padding: '12px 28px', borderRadius: '50px' }}>
              Dosing Guide →
            </a>
          </div>
        </div>
      </section>

      {/* SCHEMA.ORG JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "name": "Pandovirumab (Pandozab) Clinical Efficacy",
            "description": "Clinical efficacy data for pandovirumab (Pandozab) including Phase III trial results, mechanism of action and comparison with existing antihypertensives.",
            "url": "https://pandozab.com/hcp/pandovirumab-efficacy",
            "about": {
              "@type": "Drug",
              "name": "Pandozab",
              "alternateName": "pandovirumab",
              "description": "Novel antihypertensive agent indicated for the treatment of hypertension in adults aged 18 and above.",
              "clinicalPharmacology": "Novel mechanism targeting key pathways in blood pressure regulation distinct from existing drug classes.",
              "indication": {
                "@type": "MedicalIndication",
                "name": "Hypertension"
              },
              "contraindication": "Known hypersensitivity to pandovirumab or excipients.",
              "administrationRoute": "Oral",
              "dosageForm": "Tablet",
              "drugClass": "Novel Antihypertensive"
            },
            "audience": { "@type": "MedicalAudience", "audienceType": "Clinician" }
          })
        }}
      />

      {/* BACK TO HCP */}
      <section style={{ padding: '40px', textAlign: 'center', background: '#F5F5F5' }}>
        <a href="/hcp/home" style={{ color: '#0000CC', fontWeight: '600', fontSize: '0.95rem' }}>
          ← Back to HCP Portal
        </a>
      </section>

      {/* DISCLAIMER */}
      <section style={{ background: '#1A1A1A', color: '#888', padding: '20px 40px', textAlign: 'center', fontSize: '0.8rem' }}>
        <p>This information is intended for healthcare professionals only. For patient information please visit the <a href="/" style={{ color: '#888', textDecoration: 'underline' }}>main site</a>.</p>
      </section>
    </main>
  )
}