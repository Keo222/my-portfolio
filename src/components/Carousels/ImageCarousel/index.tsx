import { useState, useEffect, KeyboardEvent } from "react";
import styled from "styled-components";

import { animated, useTransition, useSpringRef } from "react-spring";

// Icons Images
import right_arrow from "images/icons/right_arrow.svg";
import left_arrow from "images/icons/left_arrow.svg";

// Types
import { ImgArray } from "customTypes";

// Styled Components
const ImgAndArrows = styled.div`
  display: flex;
  height: 100%;
  align-items: center;

  @media screen and (${(props) => props.theme.responsive.lg}) {
    width: clamp(180px, 90%, 700px);
  }
`;

const NavigateArrow = styled.img`
  height: 5rem;
  margin-inline: 5px;
  vertical-align: bottom;
  user-select: none;
  opacity: 0.2;
  transition: all 0.15s;
  &:hover,
  &:focus,
  &:focus-visible {
    cursor: pointer;
    opacity: 1;
  }
`;

const ImgDiv = styled(animated.div)`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  width: clamp(150px, 40vw, 500px);
  aspect-ratio: 0.8;
  border-radius: 10px;
  @media screen and (${(props) => props.theme.responsive.lg}) {
    width: clamp(150px, 80vw, 600px);
  }
`;

const Image = styled(animated.img)`
  max-width: 100%;
  max-height: 100%;
  border-radius: 10px;
`;

type Props = {
  images: ImgArray;
};

type DirType = "next" | "prev";

const ImageCarousel = ({ images }: Props) => {
  const [currentImg, setCurrentImg] = useState(0);
  // Slider Animations
  const transRef = useSpringRef();
  const transitions = useTransition(currentImg, {
    ref: transRef,
    keys: currentImg,
    from: {
      opacity: 0,
    },
    enter: { opacity: 1 },
    leave: {
      opacity: 0,
    },
    config: { duration: 600 },
    exitBeforeEnter: true,
  });

  useEffect(() => {
    transRef.start();
  }, [currentImg, transRef]);

  // Navigate Images
  const nextImg = () => {
    setCurrentImg(currentImg === images.length - 1 ? 0 : currentImg + 1);
  };
  const prevImg = () => {
    setCurrentImg(currentImg === 0 ? images.length - 1 : currentImg - 1);
  };

  const keyboardHandleNav = (
    e: KeyboardEvent<HTMLDivElement>,
    dir: DirType
  ) => {
    if (e.key === "Enter") {
      if (dir === "prev") {
        prevImg();
      } else {
        nextImg();
      }
    }
  };

  return (
    <ImgAndArrows>
      <NavigateArrow
        src={left_arrow}
        alt="Go back to previous image"
        tabIndex={0}
        onClick={() => prevImg()}
        onKeyDown={(e) => keyboardHandleNav(e, "prev")}
      />
      {transitions((styles, i) => (
        <ImgDiv data-testid="imgContainer-testId">
          <Image
            key={i}
            style={styles}
            src={images[i].src}
            alt={images[i].alt}
          />
        </ImgDiv>
      ))}
      <NavigateArrow
        src={right_arrow}
        alt="Go back to next image"
        tabIndex={0}
        onClick={() => nextImg()}
        onKeyDown={(e) => keyboardHandleNav(e, "next")}
      />
    </ImgAndArrows>
  );
};

export default ImageCarousel;
