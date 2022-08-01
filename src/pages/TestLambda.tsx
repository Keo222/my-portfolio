import axios from "axios";
import { FormEvent, useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  width: clamp(300px, 60%, 600px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

type Props = {};

const TestLambda = (props: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  async function handleFormSubmission(e: FormEvent) {
    e.preventDefault();
    const formattedName = encodeURIComponent(name);
    const formattedEmail = encodeURIComponent(message);
    const formattedSubject = encodeURIComponent(email);
    const formattedMessage = encodeURIComponent(subject);
    // const fetchURL = `https://hwuc2agny7.execute-api.us-west-2.amazonaws.com/default/sendPortfolioContactEmail/?name=${formattedName}&email=${formattedEmail}&subject=${formattedSubject}&message=${formattedMessage}`;
    const fetchURL = "https://481nloupo2.execute-api.us-west-2.amazonaws.com";
    const data = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };
    fetch(fetchURL, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(data),
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <StyledForm onSubmit={(e) => handleFormSubmission(e)}>
      <label>Name: </label>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <label>Email: </label>
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <label>Subject: </label>
      <input type="text" onChange={(e) => setSubject(e.target.value)} />
      <label>Message: </label>
      <textarea onChange={(e) => setMessage(e.target.value)} />
      <button type="submit">Submit</button>
    </StyledForm>
  );
};

export default TestLambda;
