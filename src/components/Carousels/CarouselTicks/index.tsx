import styled from "styled-components";

// Styled Components
const CarouslTicksDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const TickMarkContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Tick = styled.div<{
  current: boolean;
  color: "primary" | "secondary";
}>`
  height: 1rem;
  width: 1rem;
  border: 1px solid
    ${(props) =>
      props.current && props.color === "primary"
        ? props.theme.color.highlight1
        : props.current && props.color === "secondary"
        ? props.theme.color.highlight2
        : "#000"};
  border-radius: 50%;
  margin-top: 1rem;
  margin-bottom: 2rem;
  background-color: ${(props) =>
    props.current && props.color === "primary"
      ? props.theme.color.highlight1
      : props.current && props.color === "secondary"
      ? props.theme.color.highlight2
      : ""};
  transition: all 0.2s;

  &:hover {
    cursor: pointer;
  }
`;

type Props = {
  numSlides: number;
  setCurrent: Function;
  current: number;
  color: "primary" | "secondary";
};

const CarouselTicks = ({ numSlides, current, setCurrent, color }: Props) => {
  return (
    <CarouslTicksDiv>
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
    </CarouslTicksDiv>
  );
};

export default CarouselTicks;
