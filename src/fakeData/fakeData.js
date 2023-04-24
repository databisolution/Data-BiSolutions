import styled from "styled-components";

export const Paraph = styled.div`


  span {
    &:hover {
      & ~ div {
        transform: translateX(0) scale(1);
        opacity: 1;
      }
    }
  }
`;
