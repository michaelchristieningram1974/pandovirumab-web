// 1. Add this import to the top of your file alongside 'next' metadata
import Script from 'next/script'

// ... rest of your code stays the same ...

      {/* SCHEMA.ORG JSON-LD (FIXED) */}
      <Script
        id="json-ld-schema" // Next.js requires an ID for tracking inline scripts
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