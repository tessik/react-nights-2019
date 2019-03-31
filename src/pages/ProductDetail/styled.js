import styled from 'styled-components'
import theme from 'common/theme'

export const Content = styled.div`
  display: flex;
  flex-direction: column-reverse;
  text-align: center;

  @media screen and (min-width: 600px) {
    flex-direction: row-reverse;
    text-align: left;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 600px) {
    align-items: flex-start;
    width: 50%;
    padding-left: 20px;
  }
`

export const Img = styled.img`
  width: 100%;
`

export const ImgWrapper = styled.div`
  @media screen and (min-width: 600px) {
    width: 50%;
  }
`

export const Title = styled.h1`
  margin-bottom: 1em;
  color: ${theme.color.pink};
`

export const Description = styled.p`
  margin: 0 0 1em;
`

export const Price = styled.p`
  margin: 0 0 1em;
  color: ${theme.color.pink};
`

export const Button = styled.button`
  padding: 10px 30px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${theme.color.white};
  background: ${theme.color.pink};
`
