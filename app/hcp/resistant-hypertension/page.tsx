import type { Metadata } from 'next'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Resistant Hypertension Treatment Options | Pandozab (pandovirumab) HCP',
  description: 'Clinical guidance on resistant hypertension for healthcare professionals, including definition, causes, treatment options and the role of Pandozab (pandovirumab) in resistant hypertension management.',
  keywords: 'resistant hypertension treatment, refractory hypertension, treatment resistant hypertension, new antihypertensive drugs, pandovirumab resistant hypertension',
  openGraph: {
    title: 'Resistant Hypertension Treatment Options',
    description: 'Clinical guidance on resistant hypertension management including the role of Pandozab (pandovirumab).',
    type: 'website',
  },
}

export default function ResistantHypertensionPage() {
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
            Clinical Reference
          </p>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', lineHeight: '1.15', marginBottom: '24px', color: '#1A1A1A', fontFamily: 'Georgia, serif', maxWidth: '800px' }}>
            Resistant Hypertension — Treatment Options for Healthcare Professionals
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: '1.7', maxWidth: '700px' }}>
            Clinical guidance on the definition, causes, investigation and management of resistant hypertension, including emerging treatment options.
          </p>
        </div>
      </section>

      {/* WHAT IS RESISTANT HYPERTENSION */}
      <section style={{ background: '#FFFFFF', padding: '100px 40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#1A1A1A', marginBottom: '24px', fontFamily: 'Georgia, serif', borderTop: '3px solid #0000CC', paddingTop: '40px' }}>
            What is resistant hypertension?
          </h2>
          <p style={{ color: '#555', lineHeight: '1.9', fontSize: '1rem', marginBottom: '24px' }}>
            Resistant hypertension is defined as blood pressure that remains above target despite concurrent use of three antihypertensive agents of different classes, one of which should be a diuretic, all prescribed at optimal or best-tolerated doses.
          </p>
          <p style={{ color: '#555', lineHeight: '1.9', fontSize: '1rem', marginBottom: '40px' }}>
            True resistant hypertension affects approximately 10-15% of treated hypertensive patients and is associated with significantly increased cardiovascular risk, including stroke, myocardial infarction, heart failure and chronic kidney disease.
          </p>

          {/* KEY STATS */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px', marginBottom: '40px' }}>
            {[
              { stat: '10-15%', label: 'of treated hypertensive patients have resistant hypertension' },
              { stat: '3x', label: 'higher cardiovascular risk compared to controlled hypertension' },
              { stat: '50%', label: 'of resistant hypertension cases may have an identifiable secondary cause' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#0000CC', padding: '28px', borderRadius: '8px', textAlign: 'center' }}>
                <p style={{ color: '#00C896', fontSize: '2rem', fontWeight: '900', fontFamily: 'Georgia, serif', margin: '0 0 8px' }}>{item.stat}</p>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem', lineHeight: '1.5', margin: 0 }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAUSES */}
      <section style={{ background: '#F5F5F5', padding: '100px 40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#1A1A1A', marginBottom: '24px', fontFamily: 'Georgia, serif', borderTop: '3px solid #0000CC', paddingTop: '40px' }}>
            What causes resistant hypertension?
          </h2>
          <p style={{ color: '#555', lineHeight: '1.9', fontSize: '1rem', marginBottom: '32px' }}>
            Before diagnosing true resistant hypertension, secondary and pseudoresistant causes should be excluded:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '40px' }}>
            {[
              {
                title: 'Pseudoresistance',
                items: ['Poor medication adherence', 'White coat hypertension', 'Inaccurate blood pressure measurement', 'Suboptimal drug dosing'],
              },
              {
                title: 'Lifestyle Factors',
                items: ['High dietary sodium intake', 'Excessive alcohol consumption', 'Obesity', 'Physical inactivity'],
              },
              {
                title: 'Drug Interactions',
                items: ['NSAIDs', 'Oral contraceptives', 'Sympathomimetics', 'Ciclosporin and tacrolimus'],
              },
              {
                title: 'Secondary Causes',
                items: ['Primary aldosteronism', 'Obstructive sleep apnoea', 'Renal artery stenosis', 'Chronic kidney disease', 'Phaeochromocytoma'],
              },
            ].map((group, i) => (
              <div key={i} style={{ background: 'white', padding: '24px', borderRadius: '8px', borderTop: '3px solid #0000CC' }}>
                <h3 style={{ color: '#1A1A1A', fontSize: '1rem', fontWeight: '700', marginBottom: '12px' }}>{group.title}</h3>
                <ul style={{ paddingLeft: '20px', color: '#555', fontSize: '0.9rem', lineHeight: '1.9', margin: 0 }}>
                  {group.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TREATMENT OPTIONS */}
      <section style={{ background: '#FFFFFF', padding: '100px 40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#1A1A1A', marginBottom: '24px', fontFamily: 'Georgia, serif', borderTop: '3px solid #0000CC', paddingTop: '40px' }}>
            What are the treatment options for resistant hypertension?
          </h2>
          <p style={{ color: '#555', lineHeight: '1.9', fontSize: '1rem', marginBottom: '32px' }}>
            Once secondary causes have been excluded and medication adherence confirmed, the following treatment options are available:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
            {[
              {
                title: 'Optimise existing regimen',
                description: 'Ensure all three agents are at optimal doses. Confirm adherence. Review drug interactions and switch to longer-acting formulations where possible.',
                isNew: false,
              },
              {
                title: 'Add a mineralocorticoid receptor antagonist',
                description: 'Spironolactone (25-50mg daily) is recommended as a fourth-line agent in resistant hypertension, particularly where primary aldosteronism is suspected. Monitor for hyperkalaemia.',
                isNew: false,
              },
              {
                title: 'Add an alpha blocker or beta blocker',
                description: 'Doxazosin or bisoprolol may be considered as fifth-line agents where spironolactone is contraindicated or not tolerated.',
                isNew: false,
              },
              {
                title: 'Pandozab (pandovirumab) — Emerging Option',
                description: 'Pandozab represents a new class of antihypertensive with a novel mechanism of action. In Phase III clinical trials, 87% of patients including those with prior treatment failure achieved target blood pressure. Its unique mechanism makes it suitable for patients who have not responded to existing drug classes.',
                isNew: true,
              },
              {
                title: 'Device-based therapies',
                description: 'Renal denervation is an emerging interventional option for patients with true resistant hypertension who are not candidates for or have failed pharmacological management.',
                isNew: false,
              },
            ].map((item, i) => (
              <div key={i} style={{
                background: item.isNew ? '#0a1628' : '#F5F5F5',
                padding: '28px',
                borderRadius: '8px',
                borderLeft: `4px solid ${item.isNew ? '#00C896' : '#0000CC'}`,
              }}>
                <h3 style={{ color: item.isNew ? '#00C896' : '#1A1A1A', fontSize: '1.05rem', fontWeight: '700', marginBottom: '10px' }}>
                  {item.title}
                </h3>
                <p style={{ color: item.isNew ? 'rgba(255,255,255,0.8)' : '#555', fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PANDOZAB IN RESISTANT HYPERTENSION */}
      <section style={{ background: '#0a1628', padding: '100px 40px', color: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ color: '#00C896', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Emerging Evidence
          </p>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '24px', fontFamily: 'Georgia, serif' }}>
            Pandozab (pandovirumab) in resistant hypertension
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.9', fontSize: '1rem', marginBottom: '24px' }}>
            Pandozab (pandovirumab) has demonstrated significant efficacy in patients with resistant hypertension in Phase III clinical trials. Its novel mechanism of action, targeting pathways not addressed by existing drug classes, makes it a valuable addition to the treatment armamentarium for this challenging patient population.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
            {[
              { stat: '87%', label: 'of patients achieved target blood pressure' },
              { stat: '24wk', label: 'sustained blood pressure reduction' },
              { stat: 'Once', label: 'daily oral dosing' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '8px', padding: '24px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.15)' }}>
                <p style={{ color: '#00C896', fontSize: '2rem', fontWeight: '900', fontFamily: 'Georgia, serif', margin: '0 0 8px' }}>{item.stat}</p>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', margin: 0, lineHeight: '1.5' }}>{item.label}</p>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="/hcp/clinical-trials" style={{ background: '#00C896', color: '#0a1628', padding: '12px 28px', borderRadius: '50px', fontWeight: '700', fontSize: '0.9rem', textDecoration: 'none' }}>
              View Clinical Trial Data →
            </a>
            <a href="/hcp/pandovirumab-efficacy" style={{ color: 'white', fontWeight: '700', fontSize: '0.9rem', textDecoration: 'none', border: '2px solid rgba(255,255,255,0.4)', padding: '12px 28px', borderRadius: '50px' }}>
              Efficacy Data →
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
            "name": "Resistant Hypertension Treatment Options",
            "description": "Clinical guidance on resistant hypertension including definition, causes, investigation and treatment options including Pandozab (pandovirumab).",
            "url": "https://pandozab.com/hcp/resistant-hypertension",
            "about": {
              "@type": "MedicalCondition",
              "name": "Resistant Hypertension",
              "alternateName": "Treatment-Resistant Hypertension",
              "associatedAnatomy": {
                "@type": "AnatomicalStructure",
                "name": "Cardiovascular System"
              },
              "possibleTreatment": [
                { "@type": "Drug", "name": "Spironolactone" },
                { "@type": "Drug", "name": "Doxazosin" },
                { "@type": "Drug", "name": "Pandozab", "alternateName": "pandovirumab" },
              ]
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