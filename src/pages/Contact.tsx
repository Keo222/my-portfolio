import React, { useState } from "react";
import styled from "styled-components";

// Components
import FormAlert from "../components/FormAlert";

// Styled Components
const ContactHeading = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: 3.6rem;
  font-weight: 400;
  color: ${(props) => props.theme.color.highlight1};
  text-align: center;
  letter-spacing: 6px;
  margin-top: 3rem;
  margin-bottom: 5rem;
`;

const ContactForm = styled.form`
  font-size: 1.6rem;
  width: clamp(180px, 70%, 800px);
  margin-inline: auto;
  margin-bottom: 5rem;
`;

const InputGrouping = styled.div`
  margin-block: 2.5rem;
`;

const StyledLabel = styled.label`
  display: inline-block;
  margin-left: 0.5rem;
  margin-bottom: 3px;
`;

const StyledTextInput = styled.input`
  width: 100%;
  border: 2px solid ${(props) => props.theme.color.primaryMid};
  border-radius: 5px;

  &:focus,
  &:focus-visible {
    outline: none;
    border: 2px solid ${(props) => props.theme.color.highlight1};
  }
`;

const StyledTextArea = styled.textarea`
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

const CenteringDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledSubmitButton = styled.button`
  font-family: "Montserrat", sans-serif;
  font-size: 1.6rem;
  font-weight: 500;
  color: ${(props) => props.theme.color.primary1};
  text-decoration: none;
  padding: 1rem 2rem;
  background-color: ${(props) => props.theme.color.highlight2};
  border-radius: 5px;
  border: 3px solid ${(props) => props.theme.color.highlight2};
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.color.highlight2};
    background-color: ${(props) => props.theme.color.primary1};
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

type Props = {};

const Contact = (props: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");

  const [nameInvalid, setNameInvalid] = useState(false)
  const [emailInvalid, setEmailInvalid] = useState(false)
  const [subjectInvalid, setSubjectInvalid] = useState(false)
  const [msgInvalid, setMsgInvalid] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // FORM VALIDATION
    let valid = true

    // NAME VALIDATION
    if (name === "") {
      console.log("name required")
      setNameInvalid(true)
      valid = false
    } else {
      setNameInvalid(false)
    }

    // EMAIL VALIDATION
    const emailRegex = new RegExp(/^.+@.+\.[a-zA-Z]{2,3}$/gm)

    if (!emailRegex.test(email)) {
      console.log("invalid email")
      setEmailInvalid(true)
      valid = false
    } else {
      setEmailInvalid(false)
    }

    // SUBJECT VALIDATION
    if (subject === "") {
      console.log("subject required")
      setSubjectInvalid(true)
      valid = false
    } else {
      setSubjectInvalid(false)
    }

    // MESSAGE VALIDATION
    if (msg === "") {
      console.log("message required")
      setMsgInvalid(true)
      valid = false
    } else {
      setMsgInvalid(false)
    }

    // IF INAVLID
    if (!valid) {
      return
    }

    const data = { name: name, email: email, subject: subject, msg: msg };

    setName("")
    setEmail("")
    setSubject("")
    setMsg("")

    const res = await fetch("/api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      const resData = await res.json();
      console.log(resData);
    } else {
      console.log("error");
    }
  };

  return (
    <>
      <ContactHeading>Contact</ContactHeading>
      <ContactForm>
        <InputGrouping>
          <StyledLabel htmlFor="name">Name:</StyledLabel>
          <StyledTextInput
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameInvalid && <FormAlert errMsg={"Name is required"} />}
        </InputGrouping>
        <InputGrouping>
          <StyledLabel htmlFor="email">Email:</StyledLabel>
          <StyledTextInput
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailInvalid && <FormAlert errMsg={"Invalid email"} /> }
        </InputGrouping>
        <InputGrouping>
          <StyledLabel htmlFor="subject">Subject:</StyledLabel>
          <StyledTextInput
            type="text"
            name="subject"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          {subjectInvalid && <FormAlert errMsg={"Subject is required"} />}
        </InputGrouping>
        <InputGrouping>
          <StyledLabel htmlFor="message">Message:</StyledLabel>
          <StyledTextArea
            name="message"
            id="message"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          {msgInvalid && <FormAlert errMsg={"Message is required"} />} 
        </InputGrouping>
        <CenteringDiv>
          <StyledSubmitButton onClick={(e) => handleSubmit(e)}>
            Send Message
          </StyledSubmitButton>
        </CenteringDiv>
      </ContactForm>
    </>
  );
};

export default Contact;
