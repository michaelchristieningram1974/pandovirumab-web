'use client'

export default function AgentEmbed({ type, agentId }: { type: string, agentId: string }) {
  if (!agentId) return null

  if (type === 'elevenlabs_widget') {
    return (
      <div dangerouslySetInnerHTML={{ __html: `<elevenlabs-convai agent-id="${agentId}"></elevenlabs-convai>` }} />
    )
  }

  if (type === 'vapi_widget') {
    return (
      <div dangerouslySetInnerHTML={{ __html: `<vapi-button assistant-id="${agentId}"></vapi-button>` }} />
    )
  }

  return (
    <p style={{ color: '#888', fontSize: '0.9rem' }}>
      API integration coming soon for agent: {agentId}
    </p>
  )
}