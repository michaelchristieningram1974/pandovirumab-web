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
      <section style={{ background: '#0a1628', padding: '100px 40px', color: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ color: '#00C896', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '24px' }}>
            Learning Resources
          </p>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '900', lineHeight: '1.05', marginBottom: '32px', fontFamily: 'Georgia, serif' }}>
            Subject Areas
          </h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.75, lineHeight: '1.8', maxWidth: '600px' }}>
            Browse our full range of subject areas and find the vocabulary lessons and practice activities you need.
          </p>
        </div>
      </section>

      {/* SUBJECTS LIST */}
      <section style={{ background: '#FFFFFF', padding: '40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {subjects.length === 0 ? (
            <div style={{ padding: '80px 0', textAlign: 'center' }}>
              <p style={{ color: '#555' }}>No subject areas available yet. Check back soon.</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {subjects.map((subject: any, i: number) => (
                <a key={subject._id} href={`/subjects/${subject.slug?.current}`} style={{
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'stretch',
                  borderTop: '1px solid #E0E0E0',
                  borderBottom: '1px solid #E0E0E0',
                  background: 'white',
                  transition: 'background 0.2s',
                }}>
                  {/* COLOR STRIP */}
                  <div style={{
                    width: '6px',
                    background: subject.color ?? '#0000CC',
                    flexShrink: 0,
                  }} />

                  {/* CONTENT */}
                  <div style={{
                    flex: 1,
                    padding: '48px 48px 48px 40px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '40px',
                  }}>
                    <div style={{ flex: 1 }}>
                      <h2 style={{
                        color: '#0a1628',
                        fontSize: '1.5rem',
                        fontWeight: '800',
                        marginBottom: '12px',
                        fontFamily: 'Georgia, serif',
                        lineHeight: '1.3',
                      }}>
                        {subject.title}
                      </h2>
                      {subject.description && (
                        <p style={{
                          color: '#555',
                          lineHeight: '1.7',
                          fontSize: '0.95rem',
                          margin: '0 0 16px',
                          maxWidth: '600px',
                        }}>
                          {subject.description}
                        </p>
                      )}
                      <p style={{ color: '#888', fontSize: '0.85rem', margin: 0 }}>
                        {subject.lessonCount ?? 0} {subject.lessonCount === 1 ? 'lesson' : 'lessons'}
                      </p>
                    </div>

                    {/* ARROW */}
                    <div style={{
                      color: subject.color ?? '#0000CC',
                      fontSize: '1.5rem',
                      fontWeight: '300',
                      flexShrink: 0,
                    }}>
                      →
                    </div>
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