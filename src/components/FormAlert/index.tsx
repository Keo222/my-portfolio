// Styled Components
import { ErrorContainer, ErrorMessage } from "./styledFormAlert";

type Props = {
  alertMsg?: string;
  alertType: "success" | "error";
};

const FormAlert = ({ alertMsg, alertType }: Props) => {
  return (
    <ErrorContainer
      data-testid="message-container"
      success={alertType === "success"}
    >
      <ErrorMessage>{alertMsg}</ErrorMessage>
    </ErrorContainer>
  );
};

export default FormAlert;
