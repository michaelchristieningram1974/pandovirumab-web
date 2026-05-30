import type { Metadata } from 'next'
import { client } from '../../../sanity.client'

export const revalidate = 60

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const subject = await client.fetch(`*[_type == "subjectArea" && slug.current == $slug][0]{ title, description }`, { slug })
  return {
    title: `${subject?.title ?? 'Subject Area'} | Pandozab`,
    description: subject?.description ?? `Browse vocabulary lessons in ${subject?.title}`,
  }
}

async function getSubject(slug: string) {
  return client.fetch(`*[_type == "subjectArea" && slug.current == $slug][0]{
    title,
    slug,
    description,
    icon,
    color,
    lessons[] -> {
      _id,
      title,
      slug,
      introduction,
      vocabularyEnabled,
      practiceAgentEnabled,
      scenarioAgentEnabled,
      "wordCount": count(vocabularyItems)
    }
  }`, { slug })
}

export default async function SubjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const subject = await getSubject(slug)

  if (!subject) {
    return (
      <main>
        <section style={{ background: '#F5F5F5', padding: '100px 40px', textAlign: 'center' }}>
          <h1 style={{ color: '#1A1A1A', fontSize: '2rem', fontFamily: 'Georgia, serif' }}>Subject Not Found</h1>
          <a href="/subjects" style={{ color: '#0000CC', fontWeight: '600', marginTop: '24px', display: 'inline-block' }}>
            Back to Subjects
          </a>
        </section>
      </main>
    )
  }

  return (
    <main>
      {/* HERO */}
      <section style={{ background: '#0a1628', padding: '100px 40px', color: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <a href="/subjects" style={{ color: '#00C896', fontSize: '0.85rem', fontWeight: '600', display: 'inline-block', marginBottom: '24px', letterSpacing: '0.05em' }}>
            ← All Subject Areas
          </a>
          <p style={{ color: '#00C896', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
            Subject Area
          </p>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '900', lineHeight: '1.05', marginBottom: '24px', fontFamily: 'Georgia, serif' }}>
            {subject.title}
          </h1>
          {subject.description && (
            <p style={{ fontSize: '1.2rem', opacity: 0.75, lineHeight: '1.8', maxWidth: '600px' }}>
              {subject.description}
            </p>
          )}
        </div>
      </section>

      {/* LESSONS LIST */}
      <section style={{ background: '#FFFFFF', padding: '40px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ color: '#888', fontSize: '0.85rem', marginBottom: '24px' }}>
            {subject.lessons?.length ?? 0} {subject.lessons?.length === 1 ? 'lesson' : 'lessons'} available
          </p>

          {!subject.lessons?.length ? (
            <div style={{ padding: '80px 0', textAlign: 'center' }}>
              <p style={{ color: '#555' }}>No lessons available yet in this subject area. Check back soon.</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {subject.lessons.map((lesson: any, i: number) => (
                <a key={lesson._id} href={`/vocabulary/${lesson.slug?.current}`} style={{
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
                    padding: '40px 48px 40px 40px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '40px',
                  }}>
                    <div style={{ flex: 1 }}>
                      <h2 style={{
                        color: '#0a1628',
                        fontSize: '1.3rem',
                        fontWeight: '800',
                        marginBottom: '12px',
                        fontFamily: 'Georgia, serif',
                        lineHeight: '1.3',
                      }}>
                        {lesson.title}
                      </h2>
                      {lesson.introduction && (
                        <p style={{
                          color: '#555',
                          lineHeight: '1.7',
                          fontSize: '0.9rem',
                          margin: '0 0 16px',
                          maxWidth: '600px',
                        }}>
                          {lesson.introduction.length > 120 ? lesson.introduction.substring(0, 120) + '...' : lesson.introduction}
                        </p>
                      )}
                      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                        {lesson.wordCount > 0 && (
                          <span style={{ color: '#888', fontSize: '0.8rem' }}>
                            {lesson.wordCount} {lesson.wordCount === 1 ? 'word' : 'words'}
                          </span>
                        )}
                        {lesson.practiceAgentEnabled && (
                          <span style={{ color: '#888', fontSize: '0.8rem' }}>· Practice Agent</span>
                        )}
                        {lesson.scenarioAgentEnabled && (
                          <span style={{ color: '#888', fontSize: '0.8rem' }}>· Scenario Agent</span>
                        )}
                      </div>
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