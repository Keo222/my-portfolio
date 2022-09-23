import styled from "styled-components";

export const TopLineDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ToggleSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
`;
export const ToggleDescriptor = styled.label`
  font-size: 1.6rem;
  font-weight: 500;
  margin-inline: 1rem;
  line-height: 3rem;
`;

export const Toggle = styled.div<{ bColor: boolean }>`
  width: 6rem;
  height: 3rem;
  border-radius: 20px;
  background-color: ${(props) =>
    props.bColor ? "hsl(103, 74%, 18%)" : "hsl(255, 100%, 77%)"};
  display: flex;
  align-items: center;
  transition: all 0.4s;

  &:hover {
    cursor: pointer;
  }
`;

export const ToggleBall = styled.div<{ pos: boolean }>`
  border-radius: 50%;
  height: 2.4rem;
  width: 2.4rem;
  transform: translateX(${(props) => (props.pos ? "3px" : "3.2rem")});
  background-color: ${(props) => props.theme.color.primary1};
  transition: all 0.4s;
`;

export const LongDescSection = styled.section`
  width: clamp(260px, 80%, 900px);
  margin-inline: auto;
`;
export const SectionTitle = styled.h2<{ mainHighlight: boolean }>`
  font-size: 2.6rem;
  text-decoration: underline;
  color: ${(props) =>
    props.mainHighlight === true
      ? props.theme.color.highlight1
      : props.theme.color.highlight2};
  margin-bottom: 3rem;
`;
