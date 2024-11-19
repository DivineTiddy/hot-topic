import styled, { css } from "styled-components";

const Text = styled.p`
  ${(props) =>
    props.type === "news" &&
    css`
      font-weight: bold;
      font-size: 16px;
      line-height: 21px;
      color: var(--white-color);
      background-color: var(--black-color);
      width: 40px;
      border-radius: 4px;
      font-family: "Playfair Display", serif;
      padding: 8px 8px !important;
    `}
  ${(props) =>
    props.type === "portal" &&
    css`
      font-weight: bold;
      font-size: 16px;
      line-height: 21px;
      color: var(--black-color);
      background-color: var(--white-color);
      width: 40px;
      font-family: "Playfair Display", serif;
    `}
    ${(props) =>
    props.as === "h1" &&
    css`
      font-weight: bold;
      font-size: 36px;
      line-height: 42px;
      color: var(--black-color);
      font-family: "Roboto", sans-serif;
    `}
    ${(props) =>
    props.as === "h2" &&
    css`
      font-weight: normal;
      font-size: 24px;
      line-height: 28px;
      color: var(--black-color);
      font-family: "Roboto", sans-serif;
    `}
    ${(props) =>
    props.as === "h3" &&
    css`
      margin: 0px 12px !important;
      font-weight: bold;
      font-size: 16px;
      line-height: 21px;
      color: var(--white-color);
      font-family: "Playfair Display", serif;
      @media (min-width: 768px) {
        font-size: 24px;
      }
      @media (min-width: 1100px) {
        font-size: 32px;
        width: 543px;
        height: 144px;
        line-height: 150%;
      }
    `}
    ${(props) =>
    props.as === "h4" &&
    css`
      margin: 0px 12px !important;
      font-weight: normal;
      font-size: 8px;
      line-height: 150%;
      color: var(--white-color);
      font-family: "Roboto", sans-serif;
      @media (min-width: 768px) {
        font-size: 12px;
      }
    `}
    ${(props) =>
    props.as === "h5" &&
    css`
      font-weight: bold;
      font-size: 16px;
      line-height: 21px;
      font-family: "Playfair Display", serif;
      color: var(--black-color);
      &:hover{
        color: blue;
      }
      @media (min-width: 768px) {
        font-size: 18px;
      }
      @media (min-width: 1100px) {
        font-size: 24px;
        line-height: 32px;
      }
    `}
    ${(props) =>
    props.as === "h6" &&
    css`
      font-weight: normal;
      font-size: 8px;
      line-height: 150%;
      color: var(--white-20);
      font-family: "Roboto", sans-serif;
      @media (min-width: 768px) {
        font-size: 12px;
      }
    `}
    ${(props) =>
    props.type === "footer" &&
    css`
      font-weight: bold;
      font-size: 16px;
      line-height: 21px;
      color: var(--white-20);
      font-family: "Roboto", sans-serif;
    `}
    
    padding:0px;
  margin: 0px;
`;
export default Text;
