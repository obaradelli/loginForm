import styled, { css } from 'styled-components'

export const GridTemplate = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100vw;
    height: 100vh;

    .side-img {
      max-width: 100%;
      min-width: 100%;
      max-height: 100%;
      min-height: 100%;
      height: 100%;
    }

    @media (max-width: 860px) {
      grid-template-columns: none;
      .side-img {
        display: none;
      }
    }
  `}
`

export const DivContainerLeft = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    gap: 7.9rem;

    .logo {
      width: 100%;

      display: flex;
      flex-direction: row;

      position: relative;

      select {
        position: absolute;

        top: 40px;
        right: 40px;

        color: ${theme.colors['--text-base']};
        background-color: ${theme.colors['--background-geral']};
        border: none;
        padding: 0 1em 0 0;
        margin: 0;

        font-family: inherit;
        font-size: inherit;
        cursor: inherit;
        line-height: inherit;

        z-index: 1;

        &::-ms-expand {
          display: none;
        }

        outline: none;
      }

      .select {
        display: grid;
        grid-template-areas: none;
        align-items: center;
        position: absolute;

        select,
        &::after {
          grid-area: none;
        }

        /* min-width: 15ch;
        max-width: 30ch; */

        border: 2px solid ${theme.colors['--border-input']};
        border-radius: 0.25em;
        padding: 0.25em 0.5em;

        font-size: 1.25rem;
        cursor: pointer;
        line-height: 1.1;

        color: ${theme.colors['--text-base']};
        background-color: ${theme.colors['--background-geral']};
        /* background-image: ; */
      }

      select:focus + .focus {
        position: absolute;
        top: -1px;
        left: -1px;
        right: -1px;
        bottom: -1px;
        border: 2px solid ${theme.colors['--focus-color']};
        border-radius: inherit;
      }

      img {
        position: absolute;
        left: 40px;
        top: 40px;
      }
    }

    .formBackground {
      width: 80%;
      height: 65%;

      display: flex;
      flex-direction: column;
      margin-left: 4.625rem;

      background: ${theme.colors['--form-background']};
    }

    .contentForm {
      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: center;
      padding: 5.44rem 7.44rem;

      img {
        width: 25px;
        height: 25px;
      }
    }

    .titleLogin {
      display: flex;
      flex-direction: column;

      width: 100%;
      height: 100%;

      h1 {
        font-family: ${theme.fontFamily.Poppins};
        font-weight: ${theme.fontWeight.semiBold};
        font-size: ${theme.fontSize[24]};
        line-height: ${theme.lineHeight[160]};

        font-style: normal;
        color: ${theme.colors['--text-title']};
      }

      span {
        font-family: ${theme.fontFamily.Roboto};
        font-weight: ${theme.fontWeight.regular};
        font-size: ${theme.fontSize[16]};
        line-height: ${theme.lineHeight[130]};

        font-style: normal;
        color: ${theme.colors['--text-base']};
      }
    }

    .titleLogin2 {
      width: 100%;
      /* height: 100%; */

      display: flex;
      flex-direction: row;
      align-items: center;

      gap: 0.6rem;
    }

    .formLogin {
      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: column;
    }

    .formLogin1 {
      width: 100%;
      height: 100%;

      display: flex;

      flex-direction: column;
      margin-top: 1.25rem;

      gap: 1.2rem;
    }

    .inputs {
      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: column;
      position: relative;

      label {
        font-family: ${theme.fontFamily.Poppins};
        font-weight: ${theme.fontWeight.medium};
        font-size: ${theme.fontSize[16]};
        line-height: ${theme.lineHeight[160]};

        font-style: normal;
        color: ${theme.colors['--text-base']};
      }

      input {
        all: unset;

        padding: 0.875rem;
        padding-left: 40px;
        border: 1px solid ${theme.colors['--border-input']};
        border-radius: 4px;

        font-family: ${theme.fontFamily.Roboto};
        font-weight: ${theme.fontWeight.regular};
        font-size: ${theme.fontSize[14]};
        line-height: ${theme.lineHeight[160]};

        font-style: normal;
        color: ${theme.colors['--text-base']};

        background: ${theme.colors['--background-geral']};
      }

      img,
      svg {
        width: 20px;
        height: 20px;

        position: absolute;

        left: 15px;
        top: 40px;

        color: ${theme.colors['--primary-color']} !important;
      }
    }

    .footer {
      width: 100%;
      height: 100%;

      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .footer1 {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;

      align-items: center;

      gap: 5px;

      font-family: ${theme.fontFamily.Roboto};
      font-weight: ${theme.fontWeight.regular};
      font-size: ${theme.fontSize[16]};
      line-height: ${theme.lineHeight[160]};

      font-style: normal;
      color: ${theme.colors['--text-base']};

      input {
        -webkit-appearance: none;

        width: 1.25rem;
        height: 1.25rem;
        border: 1px solid ${theme.colors['--border-input']};
        border-radius: 4px;
        /* vertical-align: sub; */
        outline: none;
        cursor: pointer;
        background: ${theme.colors['--background-geral']};
      }

      input:checked {
        width: 1.25rem;
        height: 1.25rem;
        border: 1px solid ${theme.colors['--primary-color']};
        background: ${theme.colors['--primary-color']};

        border-radius: 4px;
        outline: none;
        cursor: pointer;
      }
    }

    .footer2 {
      width: 100%;
      height: 100%;
      display: flex;

      align-items: flex-end;
      justify-content: flex-end;

      font-family: ${theme.fontFamily.Poppins};
      font-weight: ${theme.fontWeight.semiBold};
      font-size: ${theme.fontSize[14]};
      line-height: ${theme.lineHeight[160]};

      font-style: normal;
      color: ${theme.colors['--primary-color']};

      cursor: pointer;

      a {
        font-family: ${theme.fontFamily.Poppins};
        font-weight: ${theme.fontWeight.semiBold};
        font-size: ${theme.fontSize[14]};
        line-height: ${theme.lineHeight[160]};

        font-style: normal;
        text-decoration: none;
        color: ${theme.colors['--primary-color']};
        border: 1px solid transparent;

        cursor: pointer;
      }
    }

    .gapLastFooter {
      display: flex;
      flex-direction: column;

      width: 100%;
      height: 100%;

      justify-content: center;
      align-items: center;

      gap: 14px;

      font-family: ${theme.fontFamily.Poppins};
      font-weight: ${theme.fontWeight.regular};
      font-size: ${theme.fontSize[14]};
      line-height: ${theme.lineHeight[160]};

      font-style: normal;
      color: ${theme.colors['--primary-color']};

      a {
        font-family: ${theme.fontFamily.Poppins};
        font-weight: ${theme.fontWeight.semiBold};
        font-size: ${theme.fontSize[14]};
        line-height: ${theme.lineHeight[160]};

        font-style: normal;
        text-decoration: none;
        color: ${theme.colors['--primary-color']};
        border: 1px solid transparent;

        cursor: pointer;
      }
    }

    .gapLastFooter2 {
      display: flex;
      flex-direction: column;

      width: 100%;
      height: 100%;

      justify-content: center;
      align-items: center;

      gap: 0.875rem;

      button {
        width: 100%;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        padding: 12px 24px;

        background: ${theme.colors['--primary-color']};
        border: 1px solid ${theme.colors['--primary-color']};
        border-radius: 4px;

        font-family: ${theme.fontFamily.Poppins};
        font-weight: ${theme.fontWeight.semiBold};
        font-size: ${theme.fontSize[18]};
        line-height: ${theme.lineHeight[160]};

        font-style: normal;
        color: ${theme.colors['--text-button']};

        letter-spacing: 0.015em;

        text-align: center;

        cursor: pointer;
      }

      .lastFooter {
        text {
          font-family: ${theme.fontFamily.Poppins};
          font-weight: ${theme.fontWeight.semiBold};
          font-size: ${theme.fontSize[18]};
          line-height: ${theme.lineHeight[160]};

          font-style: normal;
          color: ${theme.colors['--primary-color']};
          border: 1px solid transparent;

          a {
            border: 1px solid transparent;
          }
        }
      }
    }

    @media (max-width: 1375px) {
      .formBackground {
        margin-left: 4.625rem;
      }

      .contentForm {
        padding: 5.44rem 5.44rem;
      }
    }

    @media (max-width: 1210px) {
      .formBackground {
        margin-left: 4.625rem;
      }

      .contentForm {
        padding: 5.44rem 2.44rem;
      }
    }

    @media (max-width: 1210px) {
      .formBackground {
        margin-left: 3.625rem;
      }
    }

    @media (max-width: 1100px) {
      .contentForm {
        padding: 5.44rem 1rem;
      }
    }

    @media (max-width: 1020px) {
      .formBackground {
        margin-left: 3rem;
      }
    }

    @media (max-width: 860px) {
      width: 100%;

      .formBackground {
        background: transparent;
        width: 85%;
        margin-left: 3.625rem;
      }
    }

    @media (max-width: 715px) {
      .formBackground {
        width: 90%;
        margin-left: 2.625rem;
      }

      .contentForm {
        padding: 5.44rem 0.5rem;
      }
    }

    @media (max-width: 690px) {
      .formBackground {
        width: 93%;
        margin-left: 1.625rem;
      }

      .contentForm {
        padding: 5.44rem 0.5rem;
      }
    }

    @media (max-width: 550px) {
      .formBackground {
        width: 97%;
        margin-left: 0.5rem;
      }
      .logo {
        img {
          position: absolute;
          left: 8px;
          top: 40px;
        }

        select {
          position: absolute;
          right: 8px;
          top: 40px;
        }
      }
    }

    @media (max-width: 355px) {
      .formBackground {
        width: 98%;
        margin-left: 0.3rem;
      }
    }

    @media (max-width: 344px) {
      .formBackground {
        margin-left: 0rem;
      }
    }

    @media (max-width: 333px) {
      min-width: 320px;

      .footer2 {
        a {
          font-size: 0.8rem;
        }
      }

      .footer1 {
        footer {
          font-size: 0.8rem;
        }
      }
    }
  `}
`
