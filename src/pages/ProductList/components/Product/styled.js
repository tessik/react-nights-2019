import styled from 'styled-components/macro'
import { Link as BaseLink } from 'react-router-dom'
import theme from 'common/theme'

export const Wrapper = styled.li`
  width: 100%;
  margin-bottom: 20px;
  transition: all 300ms;

  @media screen and (min-width: ${theme.breakpoint.sm}) {
    width: calc(50% - 20px);
  }

  @media screen and (min-width: ${theme.breakpoint.md}) {
    width: calc(33.333% - 20px);
  }

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 2px 2px 10px ${theme.color.transparentBlack};
  }
`

export const Link = styled(BaseLink)`
  text-decoration: none;
  color: initial;
  background-color: ${theme.color.white};
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const ImgWrap = styled.div`
  height: 16rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Price = styled.div`
  color: ${theme.color.pink};
  font-size: 1.8rem;
  margin-top: 2rem;
`

export const Img = styled.img`
  max-height: 15rem;
  max-width: 100%;
`

export const TitleWrap = styled.div`
  height: 6.7rem;
  overflow: hidden;
`

export const Title = styled.h3`
  font-size: 1.6rem;
  font-weight: 100;
`
