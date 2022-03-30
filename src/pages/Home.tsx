import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled Components

const HomeContainer = styled.div<{ h: number }>`
  height: calc(100vh - ${(props) => props.h}px);
  width: 100vw;
  overflow: hidden;
`;

const LargeOutlineDiv = styled.div<{ h: number }>`
  margin-left: 20vw;
  margin-top: calc(
    100vh - (95vh - ${(props) => props.h}px) - ${(props) => props.h}px
  );
  width: calc(80vw - 5rem);
  height: calc(95vh - ${(props) => props.h}px - 5rem);
  border: 1px solid ${(props) => props.theme.color.black};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const HomeHeader = styled.h1`
  font-size: 6rem;
  font-weight: 400;
  color: ${(props) => props.theme.color.highlight2};
  margin: 0;
`;

const HomeBlurb = styled.p`
  font-size: 3rem;
  font-weight: 200;
  font-style: italic;
  width: 60%;
  margin: 0 auto;
  line-height: 3;
  text-align: center;
`;

const LinkButton = styled(Link)`
  font-size: 1.8rem;
  color: ${(props) => props.theme.color.white};
  text-decoration: none;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.color.highlight1};
  border-radius: 5px;
`;

const Home = () => {
  let navElem = document.querySelector("#navElem") as HTMLElement;
  let navHeight = navElem.offsetHeight;
  return (
    <HomeContainer h={navHeight}>
      <LargeOutlineDiv h={navHeight}>
        <HomeHeader>Kyle Olsen</HomeHeader>
        <HomeBlurb>
          “My name is Kyle Olsen. I am a curious web developer perpetually
          learning more about the state of the web and how to make websites
          beautiful and intuitive”
        </HomeBlurb>
        <LinkButton to="/">Contact Kyle</LinkButton>
      </LargeOutlineDiv>
    </HomeContainer>
  );
};

export default Home;
