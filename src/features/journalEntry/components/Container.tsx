import { useParams } from '@tanstack/react-router'
import { useJournalEntryBySlug } from '../api/get-journal-entry'
import { generateImageUrl } from '../../../lib/generateImageUrl'

const Container = () => {
  const { journalEntry } = useParams({ from: '/$journalEntry/' })
  const { data, isLoading, isError } = useJournalEntryBySlug(journalEntry)

  if (isLoading) {
    return <div>Loading</div>
  }

  if (isError || !data) {
    return <div>Error</div>
  }

  return (
    <div>
      {/* Tags */}
      {data.tags.map((tag) => {
        console.log(tag)
        return <p key={tag.id}>{tag.label}</p>
      })}
      {/* Title */}
      <p>{data.title}</p>
      {/* Image */}
      {data.images.map((image) => {
        return (
          <img
            key={image.id}
            src={generateImageUrl(image.url)}
            alt={image.alt}
          />
        )
      })}
      {/* Text */}
      {data.sections.map((section) => {
        return (
          <p key={section.id} style={{ color: section.accentColour }}>
            {section.content}
          </p>
        )
      })}
    </div>
  )
}

export default Container
