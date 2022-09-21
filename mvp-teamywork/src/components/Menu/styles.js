import styled from "styled-components";

export const ContainerHeader = styled.div`
  background-color: #1d1d1d;
  color: whitesmoke;
  padding: 15px 115px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UL = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const LI = styled.a`
  text-decoration: none;
  font-size: 15px;
  cursor: pointer;
  transition-duration: 1s;
  padding: 15px;
  color: #dcdcdc;
  &:hover {
    color: #8e1faa;
    transition-duration: 1s;
  }
`;

export const ImageLogo = styled.img`
  width: 153px;
  height: 74.51px;
`;
