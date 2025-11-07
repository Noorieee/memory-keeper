import { useParams } from '@tanstack/react-router'
import { useJournalEntryBySlug } from '../api/get-journal-entry'
import { generateImageUrl } from '../../../lib/generateImageUrl'
import styled from '@emotion/styled'
import { format } from 'date-fns'
import DateLabel from './DateLabel'
import type { ColorKeys } from '../../../theme'
import Tag from './Tag'
import { type IconProp } from '@fortawesome/fontawesome-svg-core'

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
      color: white;
      display: flex;
      justify-content: center;
    `
  })

  const TagsContainer = styled.div(({ theme }) => {
    return `
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: ${theme.spacing.sm}px;
    `
  })

  const EntryContainer = styled.div(({ theme }) => {
    return `
      background-color: ${theme.colors.surface.main};
      color: ${theme.colors.primary.light};
      padding: ${theme.spacing.xxl}px;
      margin: ${theme.spacing.xxl}px ${theme.spacing.lg}px;
      border-radius: ${theme.radii.lg}px;
      gap: ${theme.spacing.md}px;
      width: 100%;
      max-width: 1200px;
      height: fit-content;
      box-shadow: ${theme.shadows.lg};
      display: flex;
      flex-direction: column;
    `
  })

  console.log(data)
  return (
    <Container>
      <EntryContainer>
        <TagsContainer>
          {/* Date */}
          <DateLabel accentColor={data.accentColour as ColorKeys}>
            {format(new Date(data.date), 'EEEE, MMMM ii, yyyy')}
          </DateLabel>
          {/* Tags */}
          {data.tags.map((tag) => {
            return (
              <Tag
                key={tag.id}
                icon={tag.icon.className as IconProp}
                label={tag.label}
              />
            )
          })}
        </TagsContainer>
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
