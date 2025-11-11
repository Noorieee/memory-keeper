import { useParams } from '@tanstack/react-router'
import { useJournalEntryBySlug } from '../api/get-journal-entry'
import { generateImageUrl } from '@/lib/generateImageUrl'
import styled from '@emotion/styled'
import { format } from 'date-fns'
import type { ColorKeys } from '@/theme'
import { type IconProp } from '@fortawesome/fontawesome-svg-core'
import FlexContainer from '@/common/components/FlexContainer'
import Pill from './Pill'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
      max-width: 1024px;
      height: fit-content;
      box-shadow: ${theme.shadows.lg};
    `
  })

  const IconContainer = styled(FlexContainer)(({ theme }) => {
    return `
      color: ${theme.colors.warning.dark};
      width: auto;
    `
  })

  const EntryTitle = styled.h1(({ theme }) => {
    return `
      font-size: ${theme.fontSizes.xxl}px;
      font-family: ${theme.fontFamilies.heading};
    `
  })

  return (
    <Container justify="center" align="center">
      <EntryContainer direction="column" gap="lg">
        <FlexContainer gap="sm" align="center">
          {/* Date */}
          <Pill
            color={data.accentColour as ColorKeys}
            colorVariant="main"
            size="md"
            icon={'fa-solid fa-calendar' as IconProp}
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
          {/* Favourited */}
          <IconContainer>
            {data.favourited ? (
              <FontAwesomeIcon icon={faHeartSolid} size="1x" />
            ) : (
              <FontAwesomeIcon icon={faHeart} size="1x" />
            )}
          </IconContainer>
        </FlexContainer>
        {/* Title */}
        <EntryTitle>{data.title}</EntryTitle>
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
