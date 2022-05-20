import styled from "styled-components";

export const LeftDiv = styled.div `
  position: absolute;
  width: 160px;
  height: 1002px;
  left: 0px;
  top: 0px;

  background: #ffe4d6;
  border-radius: 24px 0px 0px 0px;
  /* position: absolute;
  margin-top: 5px;
  margin-left: 5px;
  width: 160px;
  height: 1002px;
  left: 5px;
  top: 5px;
  background: #ffe4d6;
  border-radius: 24px 0px 0px 0px; */
`;

export const Menu = styled.div `
  display: flex;
  margin-top: 100px;
  margin-left: 50px;
`;

export const Home = styled.div `
  position: absolute;
  width: 48px;
  height: 48px;
  left: 56px;
  top: 127px;
  & > a > img {
    filter: brightness(0) saturate(100%) invert(75%) sepia(2%) saturate(4286%)
      hue-rotate(327deg) brightness(96%) contrast(90%);
  }
  & :focus {
    filter: brightness(0) saturate(100%) invert(26%) sepia(41%) saturate(2081%)
      hue-rotate(234deg) brightness(97%) contrast(79%);
  }
`;

export const List = styled.div `
  position: absolute;
  width: 48px;
  height: 48px;
  left: 54px;
  top: 247px;
  & > a > img {
    filter: brightness(0) saturate(100%) invert(75%) sepia(2%) saturate(4286%)
      hue-rotate(327deg) brightness(96%) contrast(90%);
  }
  & :focus {
    filter: brightness(0) saturate(100%) invert(26%) sepia(41%) saturate(2081%)
      hue-rotate(234deg) brightness(97%) contrast(79%);
  }
`;

export const Customer = styled.div `
  position: absolute;
  width: 48px;
  height: 48px;
  left: 56px;
  top: 367px;
  & > a:focus > img {
    filter: brightness(0) saturate(100%) invert(26%) sepia(41%) saturate(2081%)
      hue-rotate(234deg) brightness(97%) contrast(79%);
  }
  & > a > img {
    filter: brightness(0) saturate(100%) invert(75%) sepia(2%) saturate(4286%)
      hue-rotate(327deg) brightness(96%) contrast(90%);
  }
  & :focus {
  }
`;