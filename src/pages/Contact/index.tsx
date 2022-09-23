import React, { useState } from "react";
import { Helmet } from "react-helmet";

// Components
import FormAlert from "components/FormAlert";

// Styled Components
import {
  ContactHeading,
  ContactForm,
  InputGrouping,
  StyledLabel,
  StyledTextInput,
  StyledTextArea,
  CenteringDiv,
  StyledSubmitButton,
} from "./styled";

const Contact = () => {
  // Form States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");

  // Error States
  const [nameInvalid, setNameInvalid] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [subjectInvalid, setSubjectInvalid] = useState(false);
  const [msgInvalid, setMsgInvalid] = useState(false);
  const [success, setSuccess] = useState<boolean | "none">("none");
  const [tooManyEmails, setTooManyEmails] = useState(false);

  // Loading State
  const [loadingState, setLoadingState] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoadingState(true);

    // FORM VALIDATION
    let valid = true;

    // NAME VALIDATION
    if (name === "") {
      console.log("name required");
      setNameInvalid(true);
      valid = false;
    } else {
      setNameInvalid(false);
    }

    // EMAIL VALIDATION
    const emailRegex = new RegExp(/^.+@.+\.[a-zA-Z]{2,3}$/gm);

    if (!emailRegex.test(email)) {
      console.log("invalid email");
      setEmailInvalid(true);
      valid = false;
    } else {
      setEmailInvalid(false);
    }

    // SUBJECT VALIDATION
    if (subject === "") {
      console.log("subject required");
      setSubjectInvalid(true);
      valid = false;
    } else {
      setSubjectInvalid(false);
    }

    // MESSAGE VALIDATION
    if (msg === "") {
      console.log("message required");
      setMsgInvalid(true);
      valid = false;
    } else {
      setMsgInvalid(false);
    }

    // IF INAVLID
    if (!valid) {
      setLoadingState(false);
      return;
    }

    const emails = window.sessionStorage.getItem("emails");

    if (emails !== null && parseInt(emails) > 5) {
      setTooManyEmails(true);
      setLoadingState(false);
      return;
    }

    const data = { name: name, email: email, subject: subject, msg: msg };

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
      setSuccess(true);
      if (emails === null) {
        window.sessionStorage.setItem("emails", "1");
      } else if (typeof parseInt(emails) === "number") {
        window.sessionStorage.setItem(
          "emails",
          (parseInt(emails) + 1).toString()
        );
      } else {
        console.log("Type Error Occurred");
        setLoadingState(false);
        return;
      }
      setName("");
      setEmail("");
      setSubject("");
      setMsg("");
    } else {
      setSuccess(false);
    }
    setLoadingState(false);
    return;
  };

  return (
    <>
      <Helmet>
        <title>Kyle Olsen: Contact</title>
        <meta
          name="description"
          content="Kyle Olsen is a web developer in the Portland, Oregon area. Kyle Olsen is a fullstack web developer focusing on React.js, Node.js, Express.js, and PostgreSQL. Contact him here."
        />
      </Helmet>
      <ContactHeading>Contact</ContactHeading>
      <ContactForm aria-label="contact form">
        {success === true && (
          <FormAlert
            alertMsg="Message sent successfully!"
            alertType="success"
          />
        )}
        {success === false && (
          <FormAlert alertMsg="Message failed!" alertType="error" />
        )}
        {tooManyEmails === true && (
          <FormAlert
            alertMsg="You've reached your max number of messages"
            alertType="error"
          />
        )}
        <InputGrouping>
          <StyledLabel htmlFor="name">Name:</StyledLabel>
          <StyledTextInput
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameInvalid && (
            <FormAlert alertMsg={"Name is required"} alertType="error" />
          )}
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
          {emailInvalid && (
            <FormAlert alertMsg={"Invalid email"} alertType="error" />
          )}
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
          {subjectInvalid && (
            <FormAlert
              alertMsg={"Subject is required"}
              alertType="error"
            />
          )}
        </InputGrouping>
        <InputGrouping>
          <StyledLabel htmlFor="message">Message:</StyledLabel>
          <StyledTextArea
            name="message"
            id="message"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          {msgInvalid && (
            <FormAlert
              alertMsg={"Message is required"}
              alertType="error"
            />
          )}
        </InputGrouping>
        <CenteringDiv>
          <StyledSubmitButton
            loading={loadingState}
            onClick={(e) => handleSubmit(e)}
          >
            Send Message
          </StyledSubmitButton>
        </CenteringDiv>
      </ContactForm>
    </>
  );
};

export default Contact;
