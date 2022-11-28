import styled, { css } from 'styled-components'

export const FixButton = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    position: relative;

    .accent {
      position: absolute;

      top: 40px;
      left: 650px;
    }
  `}
`
