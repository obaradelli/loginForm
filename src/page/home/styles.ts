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
  `}
`

export const DivContainerLeft = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    padding: 2.5rem;
    gap: 7.9rem;

    .formBackground {
      width: 90%;
      height: 65%;

      display: flex;
      flex-direction: column;
      margin-left: 2.1875rem;

      background: ${theme.colors['--form-background']};
    }

    .contentForm {
      width: 100%;
      height: 100%;

      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: center;
      padding: 3.44rem 7.44rem;

      img {
        width: 25px;
        height: 25px;
      }

      @media screen and (max-width: 425px) {
        height: 100%;
        width: 100%;

        padding: 40px 20px;
        margin-left: 0;
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
      height: 100%;

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

      button {
        all: unset;

        width: 1.125rem;
        height: 1.125rem;
        background: none;
        border-radius: 4px;
        border: 1px solid ${theme.colors['--border-input']};

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
  `}
`

// p.textCompleted {
//   color: var(--gray-300);
//   text-decoration: line-through;
// }

// .checkContainer {
//   width: 1.125rem;
//   height: 1.125rem;
//   background: none;
//   border: none;
// }

// .checkContainer div {
//   width: 100%;
//   height: 100%;
//   border-radius: 999px;
//   border: 2px solid var(--blue);
// }

// .checkContainer svg {
//   width: 100%;
//   height: 100%;
//   color: var(--purple);
// }
