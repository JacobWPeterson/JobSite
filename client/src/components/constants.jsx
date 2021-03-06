import styled, { createGlobalStyle } from 'styled-components';

const primary = '#ACBDBA';
const secondary = '#A599B5';
const tertiary = '#CDDDDD';

const title = 'JobSite';
const slogan = 'Connecting people with jobs and jobs with people';
const url = 'http://localhost:4000/api';

const GlobalStyle = createGlobalStyle`
  body {
    scroll-behavior: smooth;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 300;
    ::-webkit-scrollbar { display: none }
    margin-left: 0px;
    color: '#051014';
  }
`;

const corner = styled.div`
  display: none;
  z-index: 0;

  @media (min-width: 1120px) {
    display: inline;
    width: 20vw;
    height: 40vh;
    overflow: hidden;
    position: absolute;
    top: 60vh;
    right: 0;

    &:before {
      content: "";
      display: block;
      width: 200%;
      height: 200%;
      position: absolute;
      border-radius: 50%;
      bottom: 0;
      right: 0;
      box-shadow: 20vh 10vw 0 0 #A599B5;
    }
  }

  @media (min-width: 1325px) {
    &:before {
      box-shadow: 20vh 10vw 0 0 #CDDDDD;
    }
  }
`;

const modalBackdrop = `
  background-color: #02020280;
  backdrop-filter: blur(5px);
  animation-name: blur-in;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  animation-duration: 0.25s;
  @keyframes blur-in {
    0% {
      opacity: 0.2;
      backdrop-filter: blur(0px);
    }
    100% {
      opacity: 1;
      backdrop-filter: blur(5px);
    }
  }`;

const modalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 4;
  ${modalBackdrop}
`;

const hoverEffect = `
  transition-duration: 0.25s;
  &:hover {
    cursor: pointer;
    filter: opacity(0.8) saturate(125%);
  }`;

const navButtonDiv = styled.div`
  height: 6vh;
  width: auto;
  position: absolute;
  top: 0;
  right: 5vw;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const navButton = styled.a`
  position: relative;
  text-align: center;
  height: 4vh;
  margin: 0 1vw;
  line-height: 4vh;
  letter-spacing: 2px;
  font-weight: bold;
  width: auto;
  padding: .25vh 1.5vw;
  text-decoration: none;
  background: ${secondary};
  border: none;
  outline: none;
  border-radius: 25px;
  color: #fff;
  ${hoverEffect}
`;

const outlinedButton = styled.button`
  width: max(10vw, 150px);
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 2px;
  height: 5vh;
  padding: 0 1.25vw;
  background: #fff;
  border: 2px solid ${secondary};
  outline: none;
  border-radius: 25px;
  color: ${secondary};
  ${hoverEffect}
`;

const searchButton = styled.button`
  width: max(10vw, 150px);
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 2px;
  height: 5vh;
  padding: 0 1.25vw;
  background: ${secondary};
  border: none;
  outline: none;
  border-radius: 25px;
  color: #fff;
  ${hoverEffect}
`;

const searchField = styled.input`
  width: max(21vw, 250px);
  font-size: 1rem;
  font-weight: bold;
  height: 4.8vh;
  padding: 0 1.25vw;
  background: #fff;
  border: 1px solid #aeaeae;
  border-radius: 25px;
  color: #424242;
`;

const listCard = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 10vh;
  width: 95%;
  background-color: #fff;
  border: solid 1px #e0e0e0;
  border-radius: 5px;
  margin: .25vh 0;
  padding: .5vh 1% 1vh 1%;
  color: #424242;
  transition-duration: 0.2s;
  &:hover {
    cursor: pointer;
    border-color: ${secondary};
  }
`;

export default {
  primary,
  secondary,
  tertiary,
  title,
  slogan,
  url,
  listCard,
  corner,
  modalBackdrop,
  modalBackground,
  hoverEffect,
  navButton,
  navButtonDiv,
  searchButton,
  searchField,
  outlinedButton,
  GlobalStyle,
};
