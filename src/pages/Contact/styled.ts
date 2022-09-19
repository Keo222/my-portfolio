import styled from "styled-components";

export const ContactHeading = styled.h1`
  text-align: center;

  font-family: "Montserrat", sans-serif;
  font-size: 3.6rem;
  font-weight: 400;
  letter-spacing: 3px;

  margin-top: 3rem;
  margin-bottom: 5rem;
  color: ${(props) => props.theme.color.highlight1};
  text-transform: uppercase;
`;

export const ContactForm = styled.form`
  font-size: 1.6rem;
  width: clamp(180px, 70%, 800px);
  margin-inline: auto;
  margin-bottom: 5rem;
`;

export const InputGrouping = styled.div`
  margin-block: 2.5rem;
`;

export const StyledLabel = styled.label`
  display: inline-block;
  margin-left: 0.5rem;
  margin-bottom: 3px;
`;

export const StyledTextInput = styled.input`
  width: 100%;
  border: 2px solid ${(props) => props.theme.color.primaryMid};
  border-radius: 5px;

  &:focus,
  &:focus-visible {
    outline: none;
    border: 2px solid ${(props) => props.theme.color.highlight1};
  }
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  height: clamp(100px, 25vh, 400px);
  border: 2px solid ${(props) => props.theme.color.primaryMid};
  border-radius: 5px;

  &:focus,
  &:focus-visible {
    outline: none;
    border: 2px solid ${(props) => props.theme.color.highlight1};
  }
`;

export const CenteringDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledSubmitButton = styled.button<{ loading: boolean }>`
  font-family: "Montserrat", sans-serif;
  font-size: 1.6rem;
  font-weight: 500;
  color: ${(props) => props.theme.color.primary1};
  text-decoration: none;
  padding: 1rem 2rem;
  background-color: ${(props) =>
    props.loading
      ? props.theme.color.primaryMid
      : props.theme.color.highlight2};
  border-radius: 5px;
  border: 3px solid
    ${(props) =>
      props.loading
        ? props.theme.color.primaryMid
        : props.theme.color.highlight2};
  transition: all 0.2s;
  cursor: ${({ loading }) => (loading ? "wait" : "pointer")};

  &:hover {
    color: ${(props) =>
      props.loading
        ? props.theme.color.primary1
        : props.theme.color.highlight2};
    background-color: ${(props) =>
      props.loading
        ? props.theme.color.primaryMid
        : props.theme.color.primary1};
    outline: none;
  }

  &:focus,
  &:focus-visible {
    transform: scale(1.05);
  }

  @media screen and (${(props) => props.theme.responsive.lg}) {
    margin-top: 2rem;
  }
`;
