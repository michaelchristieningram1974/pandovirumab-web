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
      <section style={{ background: 'linear-gradient(135deg, #0a1628 60%, #003087 100%)', padding: '80px 40px', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <a href="/subjects" style={{ color: '#00C896', fontSize: '0.9rem', fontWeight: '600', display: 'inline-block', marginBottom: '24px' }}>
            ← Back to Subject Areas
          </a>
          {subject.icon && (
            <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{subject.icon}</div>
          )}
          <h1 style={{ fontSize: '3rem', fontWeight: '900', lineHeight: '1.1', marginBottom: '24px', textTransform: 'uppercase', maxWidth: '700px' }}>
            {subject.title}
          </h1>
          {subject.description && (
            <p style={{ fontSize: '1.1rem', opacity: 0.85, lineHeight: '1.7', maxWidth: '600px' }}>
              {subject.description}
            </p>
          )}
        </div>
      </section>

      {/* LESSONS */}
      <section style={{ background: '#F5F5F5', padding: '80px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ color: '#0000CC', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>
            {subject.lessons?.length ?? 0} {subject.lessons?.length === 1 ? 'Lesson' : 'Lessons'} Available
          </p>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#0a1628', marginBottom: '48px', fontFamily: 'Georgia, serif' }}>
            Vocabulary Lessons
          </h2>

          {!subject.lessons?.length ? (
            <p style={{ color: '#555' }}>No lessons available yet in this subject area. Check back soon.</p>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              {subject.lessons.map((lesson: any) => (
                <a key={lesson._id} href={`/vocabulary/${lesson.slug?.current}`} style={{
                  textDecoration: 'none',
                  display: 'block',
                  background: 'white',
                  borderRadius: '8px',
                  padding: '32px',
                  borderTop: `3px solid ${subject.color ?? '#0000CC'}`,
                  boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                }}>
                  <h3 style={{ color: '#0a1628', fontSize: '1.2rem', fontWeight: '700', marginBottom: '12px', fontFamily: 'Georgia, serif' }}>
                    {lesson.title}
                  </h3>
                  {lesson.introduction && (
                    <p style={{ color: '#555', lineHeight: '1.7', fontSize: '0.9rem', marginBottom: '20px' }}>
                      {lesson.introduction.length > 100 ? lesson.introduction.substring(0, 100) + '...' : lesson.introduction}
                    </p>
                  )}
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '20px' }}>
                    {lesson.wordCount > 0 && (
                      <span style={{ background: '#F5F5F5', color: '#555', padding: '4px 12px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: '600' }}>
                        {lesson.wordCount} {lesson.wordCount === 1 ? 'word' : 'words'}
                      </span>
                    )}
                    {lesson.practiceAgentEnabled && (
                      <span style={{ background: '#E6F4F0', color: '#00857C', padding: '4px 12px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: '600' }}>
                        Practice Agent
                      </span>
                    )}
                    {lesson.scenarioAgentEnabled && (
                      <span style={{ background: '#E8F0FE', color: '#0000CC', padding: '4px 12px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: '600' }}>
                        Scenario Agent
                      </span>
                    )}
                  </div>
                  <span style={{ color: subject.color ?? '#0000CC', fontWeight: '700', fontSize: '0.9rem' }}>
                    Start Lesson →
                  </span>
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