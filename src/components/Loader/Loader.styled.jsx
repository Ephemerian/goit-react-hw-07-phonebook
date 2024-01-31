import styled from "styled-components";

export const Backdropp = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom:0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 10000;
`
export const Span = styled.span`
 width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  border-top: 3px solid #FFF;
  border-right: 3px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;

  @keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}  
`;