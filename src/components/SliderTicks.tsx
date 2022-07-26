import styled from "styled-components";

import { ProjArray } from "../customTypes";

// Styled Components
const TickContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Tick = styled.div<{ current: boolean; pType: string }>`
  height: 1rem;
  width: 1rem;
  border: 1px solid
    ${(props) =>
      props.current && props.pType === "client"
        ? props.theme.color.highlight1
        : props.current && props.pType === "personal"
        ? props.theme.color.highlight2
        : "#000"};
  border-radius: 50%;
  margin-top: 1rem;
  margin-bottom: 2rem;
  background-color: ${(props) =>
    props.current && props.pType === "client"
      ? props.theme.color.highlight1
      : props.current && props.pType === "personal"
      ? props.theme.color.highlight2
      : ""};
  transition: all 0.2s;

  &:hover {
    cursor: pointer;
  }
`;

type Props = {
  projects: ProjArray;
  setCurrentProj: Function;
  currentProj: number;
  projType: boolean;
};

const SliderTicks = ({
  projects,
  setCurrentProj,
  currentProj,
  projType,
}: Props) => {
  return (
    <TickContainer>
      {projects.map((p, i) => (
        <Tick
          key={i}
          onClick={() => setCurrentProj(i)}
          current={currentProj === i}
          pType={projType ? "client" : "personal"}
        />
      ))}
    </TickContainer>
  );
};

export default SliderTicks;
