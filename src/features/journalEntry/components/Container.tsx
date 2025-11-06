import { useParams } from '@tanstack/react-router'
import { useJournalEntryBySlug } from '../api/get-journal-entry'
import { generateImageUrl } from '../../../lib/generateImageUrl'
import styled from '@emotion/styled'
import { format } from 'date-fns'
import DateLabel from './DateLabel'
import type { ColorKeys } from '../../../theme'

const Container = () => {
  const { journalEntry } = useParams({ from: '/$journalEntry/' })
  const { data, isLoading, isError } = useJournalEntryBySlug(journalEntry)

  if (isLoading) {
    return <div>Loading</div>
  }

  if (isError || !data) {
    return <div>Error</div>
  }

  const Container = styled.div(({ theme }) => {
    return `
      background-color: ${theme.colors.background.dark};
      // height: 100vh;
      color: white;
      display: flex;
      justify-content: center;
      // align-items: center;
    `
  })

  const EntryContainer = styled.div(({ theme }) => {
    return `
      background-color: ${theme.colors.surface.main};
      color: ${theme.colors.primary.light};
      padding: ${theme.spacing.lg}px;
      margin: ${theme.spacing.xl}px ${theme.spacing.lg}px;
      border-radius: ${theme.radii.lg}px;
      gap: ${theme.spacing.md}px;
      width: 100%;
      max-width: 700px;
      height: fit-content;
      box-shadow: ${theme.shadows.lg};
      display: flex;
      flex-direction: column;
    `
  })

  return (
    <Container>
      <EntryContainer>
        {/* Date */}
        <DateLabel accentColor={data.accentColour as ColorKeys}>
          {format(new Date(data.date), 'EEEE, MMMM ii, yyyy')}
        </DateLabel>
        {/* Tags */}
        {data.tags.map((tag) => {
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
      </EntryContainer>
    </Container>
  )
}

export default Container
