import styled from '@emotion/styled'
import type { theme } from '@/theme'

interface FlexContainerProps {
  direction?: 'row' | 'column'
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  align?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  gap?: keyof typeof theme.spacing
  wrap?: boolean
  className?: string
}

const FlexContainer = styled.div<FlexContainerProps>(
  ({
    theme,
    direction = 'row',
    justify = 'flex-start',
    align = 'flex-start',
    gap = 'md',
    wrap = false,
  }) => {
    return `
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
    flex-wrap: ${wrap ? 'wrap' : 'nowrap'};
    gap: ${theme.spacing[gap]}px;
    width: 100%;
  `
  },
)

export default FlexContainer
