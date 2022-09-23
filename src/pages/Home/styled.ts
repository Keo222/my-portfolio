import styled from "styled-components";
import { LinkButton } from "styled/links";

// Cursor Image
import harold_cursor from "images/icons/hardold_purp_crayon_sm.png";

export const HomeContainer = styled.div`
  min-height: calc(100vh - 173px);
  width: 100vw;
  overflow: hidden;
`;

export const LargeOutlineSection = styled.section`
  width: clamp(280px, calc(80% - 5rem), 1400px);
  min-height: calc(95vh - 173px - 5rem);

  margin-inline: auto;
  margin-top: calc(100vh - (98vh - 173px) - 173px);

  padding-top: 2rem;
  padding-bottom: 2rem;

  background-color: ${(props) => props.theme.color.primary2};
  border: 1px solid ${(props) => props.theme.color.primary2};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: relative;

  @media screen and (${(props) => props.theme.responsive.md}) {
    margin-inline: auto;
  }
  @media screen and (${(props) => props.theme.responsive.xs}) {
    width: 95vw;
  }
`;

export const HomeHeader = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 6rem;
  font-weight: 600;
  color: ${(props) => props.theme.color.primary1};
  margin: 0;
  z-index: 2;
  pointer-events: none;

  @media screen and (${(props) => props.theme.responsive.md}) {
    font-size: 4rem;
  }
  @media screen and (${(props) => props.theme.responsive.sm}) {
    font-size: 3rem;
  }
`;

export const HomeBlurb = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 2.3rem;
  font-weight: 200;
  font-style: italic;
  width: clamp(200px, 70%, 900px);
  margin: 0 auto;
  line-height: 3;
  text-align: center;
  color: ${(props) => props.theme.color.primary1};
  z-index: 2;
  pointer-events: none;
  @media screen and (${(props) => props.theme.responsive.md}) {
    font-size: 2rem;
    line-height: 2.3;
  }
  @media screen and (${(props) => props.theme.responsive.sm}) {
    font-size: 1.6rem;
  }
`;

export const PortfolioLinkButton = styled(LinkButton)`
  z-index: 2;
`;

export const MyCanvas = styled.canvas`
  position: absolute;
  z-index: 1;
  cursor: url(${harold_cursor}), crosshair;
`;
