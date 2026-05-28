import type { Metadata } from 'next'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Hypertension Treatment Options | Pandozab (pandovirumab) HCP',
  description: 'A comprehensive guide to hypertension treatment options for healthcare professionals, including drug classes, treatment guidelines, and where Pandozab (pandovirumab) fits in the treatment landscape.',
  keywords: 'hypertension treatment options, antihypertensive drugs, resistant hypertension treatment, new blood pressure medications, pandovirumab, Pandozab',
  openGraph: {
    title: 'Hypertension Treatment Options for Healthcare Professionals',
    description: 'Overview of antihypertensive drug classes and where Pandozab fits in the treatment landscape.',
    type: 'website',
  },
}

export default function HypertensionTreatmentPage() {
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
            Hypertension Treatment Options for Healthcare Professionals
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#444', lineHeight: '1.7', maxWidth: '700px' }}>
            An overview of antihypertensive drug classes, treatment guidelines, and emerging therapies including Pandozab (pandovirumab).
          </p>
        </div>
      </section>

      {/* WHAT ARE THE TREATMENT OPTIONS FOR HYPERTENSION */}
      <section style={{ background: '#FFFFFF', padding: '100px 40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#1A1A1A', marginBottom: '24px', fontFamily: 'Georgia, serif', borderTop: '3px solid #0000CC', paddingTop: '40px' }}>
            What are the treatment options for hypertension?
          </h2>
          <p style={{ color: '#555', lineHeight: '1.9', fontSize: '1rem', marginBottom: '16px' }}>
            Hypertension (high blood pressure) is one of the most common cardiovascular conditions worldwide, affecting approximately 1.28 billion adults. Current treatment guidelines recommend a stepwise approach, beginning with lifestyle modification and progressing to pharmacological intervention when blood pressure targets are not achieved.
          </p>
          <p style={{ color: '#555', lineHeight: '1.9', fontSize: '1rem', marginBottom: '40px' }}>
            The major drug classes used in the treatment of hypertension include:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
            {[
              {
                drugClass: 'ACE Inhibitors',
                examples: 'Lisinopril, Ramipril, Enalapril',
                mechanism: 'Block the conversion of angiotensin I to angiotensin II, reducing vasoconstriction and aldosterone secretion.',
                considerations: 'First-line in patients with diabetes, CKD, or heart failure. Contraindicated in pregnancy. Associated with dry cough in up to 20% of patients.',
              },
              {
                drugClass: 'Angiotensin Receptor Blockers (ARBs)',
                examples: 'Losartan, Valsartan, Candesartan',
                mechanism: 'Block angiotensin II receptors, producing similar effects to ACE inhibitors without the cough side effect.',
                considerations: 'Alternative to ACE inhibitors in patients who develop cough. Contraindicated in pregnancy.',
              },
              {
                drugClass: 'Calcium Channel Blockers (CCBs)',
                examples: 'Amlodipine, Nifedipine, Diltiazem',
                mechanism: 'Inhibit calcium entry into vascular smooth muscle and cardiac cells, causing vasodilation.',
                considerations: 'Particularly effective in elderly patients and those of African origin. Associated with peripheral oedema.',
              },
              {
                drugClass: 'Thiazide Diuretics',
                examples: 'Indapamide, Hydrochlorothiazide, Chlorthalidone',
                mechanism: 'Reduce sodium and water reabsorption in the distal convoluted tubule, decreasing plasma volume.',
                considerations: 'Effective and low cost. May cause hypokalaemia and metabolic disturbances.',
              },
              {
                drugClass: 'Beta Blockers',
                examples: 'Atenolol, Bisoprolol, Metoprolol',
                mechanism: 'Block beta-adrenergic receptors, reducing heart rate and cardiac output.',
                considerations: 'No longer recommended as first-line unless there is a specific indication such as heart failure or post-MI.',
              },
              {
                drugClass: 'Pandozab (pandovirumab) — New Class',
                examples: 'Pandozab',
                mechanism: 'Targets key pathways involved in blood pressure regulation through a novel mechanism of action distinct from existing drug classes.',
                considerations: 'Indicated for adults aged 18 and above. Once daily oral dosing. Phase III data demonstrates 87% of patients achieving target blood pressure. Suitable for patients who have not responded adequately to existing therapies.',
                isNew: true,
              },
            ].map((drug, i) => (
              <div key={i} style={{
                background: drug.isNew ? '#0a1628' : '#F5F5F5',
                borderRadius: '8px',
                padding: '32px',
                borderLeft: `4px solid ${drug.isNew ? '#00C896' : '#0000CC'}`,
              }}>
                <h3 style={{ color: drug.isNew ? '#00C896' : '#0000CC', fontSize: '1.1rem', fontWeight: '800', marginBottom: '8px' }}>
                  {drug.drugClass}
                </h3>
                <p style={{ color: drug.isNew ? 'rgba(255,255,255,0.6)' : '#888', fontSize: '0.85rem', marginBottom: '12px' }}>
                  Examples: {drug.examples}
                </p>
                <p style={{ color: drug.isNew ? 'rgba(255,255,255,0.8)' : '#555', fontSize: '0.95rem', lineHeight: '1.7', marginBottom: '12px' }}>
                  <strong style={{ color: drug.isNew ? 'white' : '#1A1A1A' }}>Mechanism:</strong> {drug.mechanism}
                </p>
                <p style={{ color: drug.isNew ? 'rgba(255,255,255,0.8)' : '#555', fontSize: '0.95rem', lineHeight: '1.7', margin: 0 }}>
                  <strong style={{ color: drug.isNew ? 'white' : '#1A1A1A' }}>Clinical considerations:</strong> {drug.considerations}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TREATMENT GUIDELINES */}
      <section style={{ background: '#F5F5F5', padding: '100px 40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#1A1A1A', marginBottom: '24px', fontFamily: 'Georgia, serif', borderTop: '3px solid #0000CC', paddingTop: '40px' }}>
            What do hypertension treatment guidelines recommend?
          </h2>
          <p style={{ color: '#555', lineHeight: '1.9', fontSize: '1rem', marginBottom: '24px' }}>
            Current guidelines from the European Society of Cardiology (ESC) and the American College of Cardiology (ACC) recommend:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
            {[
              { step: '01', title: 'Lifestyle modification first', description: 'Dietary changes, exercise, weight reduction, smoking cessation and alcohol reduction should be initiated in all patients.' },
              { step: '02', title: 'Single agent therapy', description: 'For Stage 1 hypertension, initiate with a single agent — typically an ACE inhibitor, ARB, CCB or thiazide diuretic.' },
              { step: '03', title: 'Combination therapy', description: 'For Stage 2 hypertension or failure to achieve targets on monotherapy, combine two agents — typically an ACE inhibitor or ARB with a CCB or diuretic.' },
              { step: '04', title: 'Triple therapy', description: 'If targets are still not achieved, add a third agent. At this point, consider specialist referral and investigation for secondary causes.' },
              { step: '05', title: 'Resistant hypertension', description: 'Defined as failure to achieve blood pressure targets despite three agents including a diuretic. Consider spironolactone, alpha blockers, or newer agents such as Pandozab (pandovirumab).' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '24px', alignItems: 'flex-start', background: 'white', padding: '24px', borderRadius: '8px' }}>
                <div style={{ color: '#0000CC', fontSize: '1.5rem', fontWeight: '900', fontFamily: 'Georgia, serif', minWidth: '40px' }}>
                  {item.step}
                </div>
                <div>
                  <h3 style={{ color: '#1A1A1A', fontSize: '1rem', fontWeight: '700', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ color: '#555', lineHeight: '1.7', fontSize: '0.95rem', margin: 0 }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHERE DOES PANDOZAB FIT */}
      <section style={{ background: '#FFFFFF', padding: '100px 40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#1A1A1A', marginBottom: '24px', fontFamily: 'Georgia, serif', borderTop: '3px solid #0000CC', paddingTop: '40px' }}>
            Where does Pandozab fit in the treatment landscape?
          </h2>
          <p style={{ color: '#555', lineHeight: '1.9', fontSize: '1rem', marginBottom: '24px' }}>
            Pandozab (pandovirumab) represents a new class of antihypertensive agent with a novel mechanism of action distinct from all existing drug classes. It is indicated for the treatment of hypertension in adults aged 18 and above.
          </p>
          <p style={{ color: '#555', lineHeight: '1.9', fontSize: '1rem', marginBottom: '24px' }}>
            Pandozab may be particularly suitable for:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '40px' }}>
            {[
              { title: 'Patients with resistant hypertension', description: 'Who have not achieved target blood pressure on two or more existing antihypertensive agents.' },
              { title: 'Patients intolerant of existing therapies', description: 'Including those who develop cough on ACE inhibitors or oedema on CCBs.' },
              { title: 'Newly diagnosed patients', description: 'As a first-line option where once-daily dosing and proven efficacy are priorities.' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#F5F5F5', padding: '28px', borderRadius: '8px', borderTop: '3px solid #0000CC' }}>
                <h3 style={{ color: '#1A1A1A', fontSize: '1rem', fontWeight: '700', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: '1.7', margin: 0 }}>{item.description}</p>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="/hcp/clinical-trials" style={{ background: '#0000CC', color: 'white', padding: '12px 28px', borderRadius: '50px', fontWeight: '700', fontSize: '0.9rem', textDecoration: 'none' }}>
              View Clinical Trial Data →
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
            "name": "Hypertension Treatment Options for Healthcare Professionals",
            "description": "A comprehensive guide to hypertension treatment options including drug classes, treatment guidelines, and where Pandozab (pandovirumab) fits in the treatment landscape.",
            "url": "https://pandozab.com/hcp/hypertension-treatment",
            "about": [
              {
                "@type": "MedicalCondition",
                "name": "Hypertension",
                "alternateName": "High Blood Pressure",
                "possibleTreatment": [
                  { "@type": "Drug", "name": "ACE Inhibitors" },
                  { "@type": "Drug", "name": "Angiotensin Receptor Blockers" },
                  { "@type": "Drug", "name": "Calcium Channel Blockers" },
                  { "@type": "Drug", "name": "Thiazide Diuretics" },
                  { "@type": "Drug", "name": "Pandozab", "alternateName": "pandovirumab" },
                ]
              }
            ],
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