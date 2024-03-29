import styled from "styled-components";

export const ErrorContainer = styled.div<{ success: boolean }>`
  border: 2px solid
    ${({ success }) => (success ? "rgb(47, 245, 47)" : "rgb(255, 0, 0)")};
  border-radius: 5px;
  background-color: ${({ success }) =>
    success ? "rgba(47, 245, 47, 0.2)" : "rgba(255, 0, 0, 0.2)"};
  margin-top: 0.5rem;
  padding: 0.3em;
  font-weight: bold;
`;
export const ErrorMessage = styled.p`
  font-size: 1.4rem;
  margin-block: 0;
  margin-left: 0.5rem;
`;
