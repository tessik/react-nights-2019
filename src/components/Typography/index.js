import styled, { css } from 'styled-components'
import { textAlign } from 'styled-system'
import theme from '../../common/theme'

const headerFonts = css`
  font-family: circular, serif;
  font-weight: 400;
  color: ${theme.color.pink};
  text-transform: uppercase;
  ${textAlign}
`

export const H1 = styled.h1`
  ${headerFonts}
`

export const H3 = styled.h3`
  ${headerFonts}
`

export const Paragraph = styled.p`
  ${textAlign}
`
