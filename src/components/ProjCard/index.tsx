import styled from "styled-components";

// Styled Components
const ProjArticle = styled.article<{ bgColor: boolean }>`
  margin-bottom: 8rem;
  padding: 5rem 4rem;
  /* border: 2px solid ${(props) => props.theme.color.highlight1}; */
  border-radius: 10px;
  background-color: ${({ bgColor }) =>
    bgColor === true ? "#f2f7f1" : "#f1eff6"};
`;

const ImgDiv = styled.div`
  margin-inline: auto;
  width: clamp(200px, 75%, 800px);
`;

const ProjImg = styled.img`
  object-fit: contain;
  width: 100%;
  aspect-ratio: 1.777777777777777777777;
`;

const TechUsedText = styled.p`
  text-align: center;
  font-size: 1.3rem;
`;

const ProjTitle = styled.h3<{ mainHighlight: boolean }>`
  font-size: 2rem;
  font-weight: 400;
  margin-block: 2rem;
  transition: color 0.1s;

  & > a {
    color: inherit;
  }

  & > a:hover {
    color: ${(props) =>
      props.mainHighlight === true
        ? props.theme.color.highlight1
        : props.theme.color.highlight2};
  }
`;

const AboutProjText = styled.p`
  font-size: 1.6rem;
  line-height: 1.8em;
  width: clamp(240px, 80%, 700px);
  margin-inline: auto;
`;
type Props = {
  mainHighlight: boolean;
  projName: string;
  projId: string;
  tech: string[];
  link: string;
  imgs: { 600: string; 900: string; 1200: string };
  longDesc: string;
};

const ProjCard = ({
  mainHighlight, // used for styling & highlighting the title to one of the main colors on the website
  projName,
  projId,
  tech, // used to display logos for tech stack used
  link, // link to website
  imgs, // screenshot of website
  longDesc, // description of website
}: Props) => {
  return (
    <ProjArticle
      bgColor={mainHighlight}
      id={projId}
      aria-labelledby={`${projId}-header`}
    >
      <ImgDiv>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${projName}`}
        >
          <ProjImg
            srcSet={`${imgs[600]} 600w,
                ${imgs[900]} 900w,
                ${imgs[1200]} 1200w,`}
            src={imgs[1200]}
            alt={`{${projName} Website}`}
          />
        </a>
      </ImgDiv>
      <TechUsedText>
        <b>Tech:</b> {tech.join(", ")}
      </TechUsedText>
      <ProjTitle id={`${projId}-header`} mainHighlight={mainHighlight}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {projName}
        </a>
      </ProjTitle>
      <AboutProjText>{longDesc}</AboutProjText>
    </ProjArticle>
  );
};

export default ProjCard;