import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Container = styled.div(({ theme }) => {
  return `
    background-color: ${theme.colors.surface.light};
    width: fit-content;
    height: fit-content;
    color: ${theme.colors.text.light};
    font-size: ${theme.fontSizes.xxs}px;
    display: flex;
    align-items: center;
    gap: ${theme.spacing.xs}px;
    padding: ${theme.spacing.xs}px ${theme.spacing.sm}px;
    border-radius: ${theme.radii.lg}px;
  `
})

interface TagProps {
  icon: IconProp
  label: string
}

const Tag = ({ icon, label }: TagProps) => {
  return (
    <Container>
      <FontAwesomeIcon icon={icon} size="1x" />
      {label}
    </Container>
  )
}

export default Tag
