import type { Metadata } from 'next'
import { client } from '../../sanity.client'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Subject Areas | Pandozab',
  description: 'Browse all subject areas and vocabulary lessons available on Pandozab.',
  openGraph: {
    title: 'Subject Areas | Pandozab',
    description: 'Browse all subject areas and vocabulary lessons.',
    type: 'website',
  },
}

async function getSubjectAreas() {
  return client.fetch(`*[_type == "subjectArea"] | order(order asc) {
    _id,
    title,
    slug,
    description,
    icon,
    color,
    "lessonCount": count(lessons)
  }`)
}

export default async function SubjectsPage() {
  const subjects = await getSubjectAreas()

  return (
    <main>
      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #0a1628 60%, #003087 100%)', padding: '100px 40px', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#00C896', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
            Learning Resources
          </p>
          <h1 style={{ fontSize: '3rem', fontWeight: '900', lineHeight: '1.1', marginBottom: '24px', textTransform: 'uppercase', maxWidth: '700px' }}>
            <span style={{ color: '#00C896' }}>SUBJECT</span>{' '}
            <span style={{ color: 'white' }}>AREAS</span>
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.85, lineHeight: '1.7', maxWidth: '550px' }}>
            Browse all subject areas and find the vocabulary lessons you need.
          </p>
        </div>
      </section>

      {/* SUBJECTS GRID */}
      <section style={{ background: '#F5F5F5', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {subjects.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#555' }}>No subject areas available yet. Check back soon.</p>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
              {subjects.map((subject: any) => (
                <a key={subject._id} href={`/subjects/${subject.slug?.current}`} style={{
                  textDecoration: 'none',
                  display: 'block',
                  background: 'white',
                  borderRadius: '8px',
                  padding: '36px',
                  borderTop: `4px solid ${subject.color ?? '#0000CC'}`,
                  boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                  transition: 'transform 0.2s',
                }}>
                  {subject.icon && (
                    <div style={{ fontSize: '2rem', marginBottom: '16px' }}>{subject.icon}</div>
                  )}
                  <h2 style={{ color: '#0a1628', fontSize: '1.3rem', fontWeight: '800', marginBottom: '12px', fontFamily: 'Georgia, serif' }}>
                    {subject.title}
                  </h2>
                  {subject.description && (
                    <p style={{ color: '#555', lineHeight: '1.7', fontSize: '0.95rem', marginBottom: '20px' }}>
                      {subject.description}
                    </p>
                  )}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: '#888', fontSize: '0.85rem' }}>
                      {subject.lessonCount ?? 0} {subject.lessonCount === 1 ? 'lesson' : 'lessons'}
                    </span>
                    <span style={{ color: subject.color ?? '#0000CC', fontWeight: '700', fontSize: '0.9rem' }}>
                      Browse →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* DISCLAIMER */}
      <section style={{ background: '#1A1A1A', color: '#888', padding: '20px 40px', textAlign: 'center', fontSize: '0.8rem' }}>
        <p>© 2026 Pandozab. All rights reserved.</p>
      </section>
    </main>
  )
}