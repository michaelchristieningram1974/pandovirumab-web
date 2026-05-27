import type { Metadata } from 'next'
import { client } from '../../../sanity.client'
import AgentEmbed from '../AgentEmbed'

export const revalidate = 60

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const lesson = await client.fetch(`*[_type == "vocabularyLesson" && slug.current == $slug][0]{ title }`, { slug })
  return {
    title: `${lesson?.title ?? 'Vocabulary Lesson'} | Pandozab`,
    description: `Learn English vocabulary: ${lesson?.title ?? 'Vocabulary Lesson'}`,
  }
}

async function getLesson(slug: string) {
  return client.fetch(`*[_type == "vocabularyLesson" && slug.current == $slug][0]{
    title,
    introduction,
    vocabularyEnabled,
    vocabularyItems,
    usageExplanation,
    practiceAgentEnabled,
    practiceAgentLabel,
    practiceAgentDescription,
    practiceAgentType,
    practiceAgentId,
    scenarioAgentEnabled,
    scenarioAgentLabel,
    scenarioAgentDescription,
    scenarioAgentType,
    scenarioAgentId
  }`, { slug })
}

const partOfSpeechColors: Record<string, { bg: string, color: string }> = {
  noun: { bg: '#E8F0FE', color: '#0000CC' },
  verb: { bg: '#E6F4F0', color: '#00857C' },
  adjective: { bg: '#FFF3E0', color: '#e67e22' },
  adverb: { bg: '#F3E5F5', color: '#8e44ad' },
  phrase: { bg: '#E8F5E9', color: '#2e7d32' },
  idiom: { bg: '#FCE4EC', color: '#c0392b' },
}

export default async function VocabularyLessonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const lesson = await getLesson(slug)

  if (!lesson) {
    return (
      <main>
        <section style={{ background: '#F5F5F5', padding: '100px 40px', textAlign: 'center' }}>
          <h1 style={{ color: '#1A1A1A', fontSize: '2rem', fontFamily: 'Georgia, serif' }}>Lesson Not Found</h1>
          <a href="/" style={{ color: '#0000CC', fontWeight: '600', marginTop: '24px', display: 'inline-block' }}>Back to Home</a>
        </section>
      </main>
    )
  }

  return (
    <main>
      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #0a1628 60%, #003087 100%)', padding: '80px 40px', color: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ color: '#00C896', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>
            Vocabulary Lesson
          </p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', lineHeight: '1.2', marginBottom: '24px', fontFamily: 'Georgia, serif' }}>
            {lesson.title}
          </h1>
          {lesson.introduction && (
            <p style={{ fontSize: '1.1rem', opacity: 0.8, lineHeight: '1.8', maxWidth: '700px' }}>
              {lesson.introduction}
            </p>
          )}
        </div>
      </section>

      {/* VOCABULARY SECTION */}
      {lesson.vocabularyEnabled && lesson.vocabularyItems?.length > 0 && (
        <section style={{ background: '#FFFFFF', padding: '80px 40px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <p style={{ color: '#0000CC', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Vocabulary
            </p>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#0a1628', marginBottom: '48px', fontFamily: 'Georgia, serif' }}>
              Words & Phrases
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {lesson.vocabularyItems.map((item: any, i: number) => (
                <div key={i} style={{ borderTop: i === 0 ? '3px solid #0000CC' : '1px solid #E0E0E0', padding: '32px 0' }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                    <div style={{ flex: 1, minWidth: '200px' }}>
                      <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap' }}>
                        <h3 style={{ color: '#0a1628', fontSize: '1.4rem', fontWeight: '800', margin: 0, fontFamily: 'Georgia, serif' }}>
                          {item.englishWord}
                        </h3>
                        {item.partOfSpeech && (
                          <span style={{
                            background: partOfSpeechColors[item.partOfSpeech]?.bg ?? '#F5F5F5',
                            color: partOfSpeechColors[item.partOfSpeech]?.color ?? '#555',
                            padding: '3px 10px',
                            borderRadius: '50px',
                            fontSize: '0.75rem',
                            fontWeight: '700',
                          }}>
                            {item.partOfSpeech}
                          </span>
                        )}
                      </div>
                      {item.definition && (
                        <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: '1.6', margin: '0 0 12px' }}>
                          {item.definition}
                        </p>
                      )}
                      {item.exampleEnglish && (
                        <div style={{ borderLeft: '3px solid #00C896', paddingLeft: '16px', marginTop: '12px' }}>
                          <p style={{ color: '#0a1628', fontSize: '0.95rem', lineHeight: '1.7', margin: '0 0 4px', fontStyle: 'italic' }}>
                            "{item.exampleEnglish}"
                          </p>
                          {item.exampleThai && (
                            <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: '1.7', margin: 0 }}>
                              {item.exampleThai}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                    {item.thaiTranslation && (
                      <div style={{ background: '#F5F5F5', borderRadius: '8px', padding: '16px 20px', minWidth: '160px', textAlign: 'center' }}>
                        <p style={{ color: '#888', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 8px' }}>Thai</p>
                        <p style={{ color: '#0a1628', fontSize: '1.3rem', fontWeight: '700', margin: 0 }}>{item.thaiTranslation}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* USAGE EXPLANATION */}
      {lesson.vocabularyEnabled && lesson.usageExplanation?.length > 0 && (
        <section style={{ background: '#F5F5F5', padding: '80px 40px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <p style={{ color: '#0000CC', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Usage Guide
            </p>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#0a1628', marginBottom: '32px', fontFamily: 'Georgia, serif' }}>
              When to use these words
            </h2>
            <div style={{ background: 'white', borderRadius: '12px', padding: '40px', borderLeft: '4px solid #0000CC', color: '#555', lineHeight: '1.9', fontSize: '1rem' }}>
              {lesson.usageExplanation.map((block: any, i: number) => (
                <p key={i} style={{ marginBottom: '16px' }}>
                  {block.children?.map((child: any) => child.text).join('')}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PRACTICE AGENT */}
      {lesson.practiceAgentEnabled && lesson.practiceAgentId && (
        <section style={{ background: '#FFFFFF', padding: '80px 40px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ color: '#0000CC', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Step 1 — Practice
            </p>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#0a1628', marginBottom: '16px', fontFamily: 'Georgia, serif' }}>
              {lesson.practiceAgentLabel ?? 'Practice the vocabulary'}
            </h2>
            {lesson.practiceAgentDescription && (
              <p style={{ color: '#555', marginBottom: '40px', fontSize: '0.95rem', lineHeight: '1.7', maxWidth: '600px', margin: '0 auto 40px' }}>
                {lesson.practiceAgentDescription}
              </p>
            )}
            <div style={{ background: '#F5F5F5', borderRadius: '16px', padding: '48px 40px', border: '2px solid #E0E0E0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
              <AgentEmbed type={lesson.practiceAgentType} agentId={lesson.practiceAgentId} />
              <p style={{ color: '#888', fontSize: '0.8rem', margin: 0 }}>
                {lesson.practiceAgentType?.includes('elevenlabs') ? 'Powered by ElevenLabs AI' : 'Powered by Vapi AI'}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* SCENARIO AGENT */}
      {lesson.scenarioAgentEnabled && lesson.scenarioAgentId && (
        <section style={{ background: '#F5F5F5', padding: '80px 40px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ color: '#0000CC', fontSize: '0.85rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>
              Step 2 — Real Conversation
            </p>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#0a1628', marginBottom: '16px', fontFamily: 'Georgia, serif' }}>
              {lesson.scenarioAgentLabel ?? 'Now try a real conversation'}
            </h2>
            {lesson.scenarioAgentDescription && (
              <div style={{ background: 'white', borderRadius: '12px', padding: '24px 32px', borderLeft: '4px solid #00C896', marginBottom: '40px', textAlign: 'left', maxWidth: '600px', margin: '0 auto 40px' }}>
                <p style={{ color: '#0a1628', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 8px' }}>
                  Your Scenario
                </p>
                <p style={{ color: '#555', lineHeight: '1.8', margin: 0, fontSize: '0.95rem' }}>
                  {lesson.scenarioAgentDescription}
                </p>
              </div>
            )}
            <div style={{ background: 'white', borderRadius: '16px', padding: '48px 40px', border: '2px solid #E0E0E0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
              <AgentEmbed type={lesson.scenarioAgentType} agentId={lesson.scenarioAgentId} />
              <p style={{ color: '#888', fontSize: '0.8rem', margin: 0 }}>
                {lesson.scenarioAgentType?.includes('elevenlabs') ? 'Powered by ElevenLabs AI' : 'Powered by Vapi AI'}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* DISCLAIMER */}
      <section style={{ background: '#1A1A1A', color: '#888', padding: '20px 40px', textAlign: 'center', fontSize: '0.8rem' }}>
        <p>© 2026 Pandozab. All rights reserved.</p>
      </section>
    </main>
  )
}