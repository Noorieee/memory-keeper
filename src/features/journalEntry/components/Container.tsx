import { useParams } from '@tanstack/react-router'
import { useJournalEntryBySlug } from '../api/get-journal-entry'
import { generateImageUrl } from '@/lib/generateImageUrl'
import styled from '@emotion/styled'
import { format } from 'date-fns'
import type { ColorKeys } from '@/theme'
import { type IconProp } from '@fortawesome/fontawesome-svg-core'
import FlexContainer from '@/common/components/FlexContainer'
import Pill from './Pill'

const Container = () => {
  const { journalEntry } = useParams({ from: '/$journalEntry/' })
  const { data, isLoading, isError } = useJournalEntryBySlug(journalEntry)

  if (isLoading) {
    return <div>Loading</div>
  }

  if (isError || !data) {
    return <div>Error</div>
  }

  const Container = styled(FlexContainer)(({ theme }) => {
    return `
      background-color: ${theme.colors.background.dark};
    `
  })

  const EntryContainer = styled(FlexContainer)(({ theme }) => {
    return `
      background-color: ${theme.colors.surface.main};
      color: ${theme.colors.primary.light};
      padding: ${theme.spacing.xxl}px;
      margin: ${theme.spacing.xxl}px ${theme.spacing.lg}px;
      border-radius: ${theme.radii.lg}px;
      max-width: 1200px;
      height: fit-content;
      box-shadow: ${theme.shadows.lg};
    `
  })

  return (
    <Container justify="center">
      <EntryContainer direction="column" gap="md">
        <FlexContainer gap="sm" align="center">
          {/* Date */}
          <Pill
            color={data.accentColour as ColorKeys}
            colorVariant="main"
            size="md"
            icon={'fa-solid fa-tag' as IconProp}
          >
            {format(new Date(data.date), 'EEEE, MMMM ii, yyyy')}
          </Pill>
          {/* Tags */}
          {data.tags.map((tag) => {
            return (
              <Pill
                key={tag.id}
                color="surface"
                colorVariant="light"
                size="sm"
                icon={tag.icon.className as IconProp}
              >
                {tag.label}
              </Pill>
            )
          })}
        </FlexContainer>
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
