// Styled Components
import {
  ProjArticle,
  ImgDiv,
  ProjImg,
  TechUsedText,
  ProjTitle,
  AboutProjText,
} from "./styledProjCard";

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
