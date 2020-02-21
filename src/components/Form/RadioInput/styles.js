import styled, { css } from "styled-components";

export const RadioBall = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${({ active }) => (active ? "#e0312c" : "#fff")};
  position: relative;
  transition: border-color 0.24s;
  margin-right: 14px;
  margin-top: 2px;

  ::before {
    content: " ";
    background-color: ${({ active }) => (active ? "#e0312c" : "transparent")};
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;

    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    transition: background-color 0.25s;
  }
`;

export const OptionLabel = styled.label`
  cursor: pointer;
  width: calc(100% - 40px);
  line-height: 28px;
`;

export const RadioItemWrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 15px;
  width: 100%;
  ${RadioBall} {
    transform: ${({ inline }) => (inline ? "none" : "translateY(2px)")};
  }

  ${({ inline }) =>
    inline &&
    `${css`
      display: inline-flex;
      align-items: center;
      margin-right: 2rem;
      width: auto;
    `}`};
`;
