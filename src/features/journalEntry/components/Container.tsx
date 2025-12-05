import { useParams } from '@tanstack/react-router'
import { useJournalEntryBySlug } from '../api/get-journal-entry'
import styled from '@emotion/styled'
import { format } from 'date-fns'
import { type ColorKeys } from '@/theme'
import { type IconProp } from '@fortawesome/fontawesome-svg-core'
import FlexContainer from '@/common/components/FlexContainer'
import Pill from './Pill'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TextBlock from './TextBlock'
import LineDoodle from '../../../assets/line-doodle.svg?react'
import DiamondDoodle from '../../../assets/diamond-doodle.svg?react'
import getImageUrl from '@/lib/getImageUrl'

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

  const DetailsContainer = styled.div(({ theme }) => {
    return `
      display: grid;
      grid-template-columns: fit-content(100%) 1fr;
      gap: ${theme.spacing.sm}px;
    `
  })

  const DatePill = styled(Pill)(() => {
    return `
      height: fit-content;
    `
  })

  const PillContainer = styled(FlexContainer)(() => {
    return `
      flex-wrap: wrap;
    `
  })

  const IconContainer = styled(FlexContainer)(({ theme }) => {
    return `
      color: ${theme.colors.primary.light};
      width: auto;
    `
  })

  const EntryTitle = styled.h1(({ theme }) => {
    return `
      font-size: ${theme.fontSizes.xxl}px;
      font-family: ${theme.fontFamilies.heading};
    `
  })

  const ImagesContainer = styled.div(({ theme }) => {
    return `
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: ${theme.spacing.xl}px;
    `
  })

  const JournalImageFrame = styled.div<{ isFirst: boolean }>(
    ({ theme, isFirst }) => {
      return `
        border: 16px solid ${theme.colors.neutral.light};
        border-radius: ${theme.radii.md}px;
        box-shadow: ${theme.shadows.md};
        margin: ${theme.spacing.md}px 0;
        transform: rotate(${isFirst ? '-3deg' : '3deg'});
        transition: transform 0.2s ease;
        
        &::before {
          content: '';
          position: absolute;
          top: -24px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 20px;
          background-color: ${isFirst ? theme.colors.amber.main : theme.colors.violet.main};
          opacity: 0.6;
        }

        &:hover {
          transform: rotate(0deg) scale(1.05);
        }
      `
    },
  )

  const JournalImage = styled.img(() => {
    return `
      aspect-ratio: 3 / 2;
    `
  })

  const EntryFooter = styled(FlexContainer)(({ theme }) => {
    return `
      border-top: 2px dashed ${theme.colors.primary.main};
      padding: ${theme.spacing.lg}px 0 0;
      margin-top: ${theme.spacing.md}px;
    `
  })

  const FooterSlogan = styled.p(({ theme }) => {
    return `
      color: ${theme.colors.primary.main};
      font-family: ${theme.fontFamilies.heading};
      font-size: ${theme.fontSizes.md}px;
      text-align: center;
    `
  })

  const imageList = data.images
    .map((image) => getImageUrl(image).standard)
    .filter((image) => image !== undefined)

  return (
    <Container justify="center" align="center">
      <EntryContainer direction="column" gap="lg">
        <DetailsContainer>
          {/* Date */}
          <DatePill
            color={data.accentColour as ColorKeys}
            colorVariant="main"
            size="md"
            icon={'fa-solid fa-calendar' as IconProp}
          >
            {format(new Date(data.date), 'EEEE, MMMM ii, yyyy')}
          </DatePill>
          <PillContainer gap="sm" align="center">
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
          </PillContainer>
        </DetailsContainer>
        {/* Title */}
        <EntryTitle>{data.title}</EntryTitle>
        {/* Image */}
        <ImagesContainer>
          {/* if index is first*/}
          {imageList.map((image, index) => {
            return (
              <JournalImageFrame
                isFirst={index === 0}
                key={`${image.url}-${index}`}
              >
                <JournalImage src={image.url || ''} alt={image.alt} />
              </JournalImageFrame>
            )
          })}
        </ImagesContainer>
        {/* Text */}
        {data.sections.map((section, index) => {
          return (
            <TextBlock
              index={index}
              color={section.accentColour as ColorKeys}
              key={section.id}
            >
              {section.content}
            </TextBlock>
          )
        })}
        {/* Footer */}
        <EntryFooter justify="space-between">
          <LineDoodle />
          <FooterSlogan>♡ precious memories ♡</FooterSlogan>
          <DiamondDoodle />
        </EntryFooter>
      </EntryContainer>
    </Container>
  )
}

export default Container
