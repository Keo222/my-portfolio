// Styled Components
import { PageContainer, ErrorMsg, LinkButton } from "./styled";

const Error404 = () => {
  return (
    <PageContainer>
      <ErrorMsg>404 Error: Page Not Found</ErrorMsg>
      <LinkButton to="/">Return to Home</LinkButton>
    </PageContainer>
  );
};

export default Error404;
