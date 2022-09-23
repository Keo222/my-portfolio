import {
  CarouselTicksDiv,
  TickMarkContainer,
  Tick,
} from "./styledCarouselTicks";

type Props = {
  numSlides: number;
  setCurrent: Function;
  current: number;
  color: "primary" | "secondary";
};

const CarouselTicks = ({ numSlides, current, setCurrent, color }: Props) => {
  return (
    <CarouselTicksDiv>
      <TickMarkContainer>
        {[...Array(numSlides).keys()].map((p, i) => (
          <Tick
            key={i}
            onClick={() => setCurrent(i)}
            current={current === i}
            color={color}
            role="button"
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </TickMarkContainer>
    </CarouselTicksDiv>
  );
};

export default CarouselTicks;
