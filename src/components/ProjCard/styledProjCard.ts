import styled from "styled-components";

export const ProjArticle = styled.article<{ bgColor: boolean }>`
  margin-bottom: 8rem;
  padding: 5rem 4rem;
  /* border: 2px solid ${(props) => props.theme.color.highlight1}; */
  border-radius: 10px;
  background-color: ${({ bgColor }) =>
    bgColor === true ? "#f2f7f1" : "#f1eff6"};
`;

export const ImgDiv = styled.div`
  margin-inline: auto;
  width: clamp(200px, 75%, 800px);
`;

export const ProjImg = styled.img`
  object-fit: contain;
  width: 100%;
  aspect-ratio: 1.777777777777777777777;
`;

export const TechUsedText = styled.p`
  text-align: center;
  font-size: 1.3rem;
`;

export const ProjTitle = styled.h3<{ mainHighlight: boolean }>`
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

export const AboutProjText = styled.p`
  font-size: 1.6rem;
  line-height: 1.8em;
  width: clamp(240px, 80%, 700px);
  margin-inline: auto;
`;
