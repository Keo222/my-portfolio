import React from "react";
import styled from "styled-components";

// Styled Components
const ProjDiv = styled.div<{ bgColor: boolean }>`
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
`;

const ProjTitle = styled.a<{ mainHighlight: boolean }>`
  font-size: 2rem;
  font-weight: 400;
  /* text-align: center; */
  color: inherit;
  display: inline-block;
  margin-block: 2rem;
  transition: color 0.2s;

  &:hover {
    color: ${(props) =>
      props.mainHighlight === true
        ? props.theme.color.highlight1
        : props.theme.color.highlight2};
  }
`;

const AboutProjText = styled.p`
  font-size: 1.6rem;
  line-height: 1.8em;
  width: 80%;
  margin-inline: auto;
`;
type Props = {
  mainHighlight: boolean;
  projName: string;
  projId: string;
  tech: string[];
  link: string;
  mainImg: string;
};

const LongProjDesc = ({
  mainHighlight,
  projName,
  projId,
  tech,
  link,
  mainImg,
}: Props) => {
  return (
    <ProjDiv bgColor={mainHighlight} id={`#${projId}`}>
      <ImgDiv>
        <ProjImg src={mainImg} />
      </ImgDiv>
      <TechUsedText>Tech: {tech.join(", ")}</TechUsedText>
      <ProjTitle
        mainHighlight={mainHighlight}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {projName}
      </ProjTitle>
      <AboutProjText>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti vero
        quis libero earum consectetur, consequuntur provident quaerat
        repudiandae voluptatem ratione totam, aut in repellendus veniam deleniti
        neque soluta maiores? Culpa doloribus vel labore eius, nesciunt eaque!
        Aliquid ducimus officiis consequuntur, delectus harum hic quam qui
        dolorum tenetur similique quia vitae numquam voluptatum minima a at sunt
        possimus eligendi! Soluta architecto earum est unde, repellendus quaerat
        non amet officia, vel quia enim perferendis illo iusto omnis, a alias
        explicabo consequuntur iste animi dolor? Facilis laboriosam, iure
        corrupti, laudantium odio vero consectetur nemo voluptatem magnam illum
        nam consequuntur cumque cum illo? Tempore fugiat laborum culpa? Vero
        unde aliquid, ipsam doloribus architecto quasi fugiat nemo, ut itaque
        aut nihil natus id atque, quam nesciunt voluptatum blanditiis minima.
        Tenetur corrupti porro amet ipsam deleniti suscipit adipisci. Recusandae
        possimus quisquam unde. Atque recusandae rem molestias, laboriosam
        similique odio minus repellat sequi omnis aspernatur maiores soluta
        magni sapiente ratione aliquam officia eligendi aut ullam. Impedit,
        tempore eveniet. Facere ducimus, dolore quidem eaque illum natus aliquid
        aperiam aut? Error voluptatem accusamus, aliquam aspernatur quam nisi
        fugiat, eos suscipit saepe obcaecati, ducimus dicta repudiandae
        doloribus. Molestiae assumenda doloremque rem quo veniam, odit delectus
        temporibus architecto ab, fugit vitae.
      </AboutProjText>
    </ProjDiv>
  );
};

export default LongProjDesc;
