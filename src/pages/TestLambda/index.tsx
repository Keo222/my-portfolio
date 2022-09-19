import { FormEvent, useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  width: clamp(300px, 60%, 600px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const TestLambda = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  async function lambdaTest(e: FormEvent) {
    e.preventDefault();
    const res = await fetch(
      "https://hefhiaszu3.execute-api.us-west-2.amazonaws.com/test"
    );

    const lambdaResponse = await res.json();

    console.log(res);
    console.log(lambdaResponse);
  }

  async function handleFormSubmission(e: FormEvent) {
    e.preventDefault();
    const formattedName = encodeURIComponent(name);
    const formattedEmail = encodeURIComponent(message);
    const formattedSubject = encodeURIComponent(email);
    const formattedMessage = encodeURIComponent(subject);
    // const fetchURL = `https://hwuc2agny7.execute-api.us-west-2.amazonaws.com/default/sendPortfolioContactEmail/?name=${formattedName}&email=${formattedEmail}&subject=${formattedSubject}&message=${formattedMessage}`;
    const fetchURL =
      "https://hefhiaszu3.execute-api.us-west-2.amazonaws.com/contact";
    const data = {
      name: formattedName,
      email: formattedEmail,
      subject: formattedSubject,
      message: formattedMessage,
    };
    try {
      const res = await fetch(fetchURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const resData = await res.json();
      console.log(res);
      console.log(resData);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
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
      <button onClick={(e) => lambdaTest(e)}>TEST LAMBDA</button>
    </>
  );
};

export default TestLambda;
