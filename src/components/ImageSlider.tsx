import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { animated, useTransition, useSpringRef } from "react-spring";

// Images of Me
import ORSymph from "../images/me/ORSymphony500x500.jpg";
import flamingo from "../images/me/flamingo500x750.jpg";
import bear from "../images/me/bear500x750.jpg";

// Icons Images
import right_arrow from "../images/icons/right_arrow.svg";
import left_arrow from "../images/icons/left_arrow.svg";

// Styled Components
const ImgAndArrows = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

const NavigateArrow = styled.img`
  height: 5rem;
  margin-inline: 5px;
  vertical-align: bottom;
  user-select: none;
  opacity: 0.2;
  transition: all 0.15s;
  &:hover {
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
`;

const Image = styled(animated.img)`
  max-width: 100%;
  max-height: 100%;
  border-radius: 10px;
`;

const ImageSlider = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const images = [
    {
      src: ORSymph,
      alt: "Picture of Kyle and the Oregon Symphony bassoon section after a concert",
    },
    {
      src: flamingo,
      alt: "Picture of a flamingo",
    },
    {
      src: bear,
      alt: "Picture of a bear",
    },
  ];

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

  return (
    <ImgAndArrows>
      <NavigateArrow
        src={left_arrow}
        alt="Go back to previous image"
        onClick={() => prevImg()}
      />
      {transitions((styles, i) => (
        <ImgDiv>
          <Image
            key={i}
            style={styles}
            src={images[i].src}
            alt={images[i].alt}
          />
        </ImgDiv>
      ))}
      {/* <ImgDiv>
        <Image src={flamingo} alt="its a flamingo" />
      </ImgDiv> */}
      <NavigateArrow
        src={right_arrow}
        alt="Go back to previous image"
        onClick={() => nextImg()}
      />
    </ImgAndArrows>
  );
};

export default ImageSlider;
