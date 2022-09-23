import { useState, useEffect, KeyboardEvent } from "react";

import { useTransition, useSpringRef } from "react-spring";

// Components
import CarouselTicks from "../CarouselTicks";

// Icons Images
import right_arrow from "images/icons/right_arrow.svg";
import left_arrow from "images/icons/left_arrow.svg";

// Types
import { ImgArray } from "customTypes";

// Styled Components
import {
  SliderAndTicks,
  ImgAndArrows,
  NavigateArrow,
  ImgDiv,
  Image,
} from "./styledImageCarousel";

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
    <SliderAndTicks>
      <ImgAndArrows>
        <NavigateArrow
          src={left_arrow}
          alt="Go back to previous image"
          role="button"
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
          role="button"
          tabIndex={0}
          onClick={() => nextImg()}
          onKeyDown={(e) => keyboardHandleNav(e, "next")}
        />
      </ImgAndArrows>
      <CarouselTicks
        numSlides={images.length}
        current={currentImg}
        setCurrent={setCurrentImg}
        color="secondary"
      />
    </SliderAndTicks>
  );
};

export default ImageCarousel;
