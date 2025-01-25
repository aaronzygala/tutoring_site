import {
    Body,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
  } from "@react-email/components";
  import * as React from "react";
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "";
  
  export const ContactUsAutoReplyEmail = () => (
    <Html>
      <Head />
      <Preview>We got your message!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            <Img
              src={`${baseUrl}/logo_black.png`}
              width="150"
              height="107"
              alt="Axiom Test Prep"
              style={image}
            />
            <Hr style={hr} />
            <Text style={paragraph}>
              Thank you for reaching out!
            </Text>
            <Text style={paragraph}>
              This auto reply is just to let you know that you will receive a response as soon as possible. 
            </Text>
            <Text style={paragraph}>
              During our business hours (Monday - Friday from 8:00 am to 5:00 pm), it is usually within a couple of hours. 
              Otherwise, it may take up to a day.
            </Text>
            <Text style={paragraph}>
              Sit tight, and we&apos;ll get back to you soon.
            </Text>
            <Hr style={hr} />
            <Text style={paragraph}>
              If you have any specific questions about the tutoring programs we offer, check out the full breakdown on { }
                <Link
                  style={anchor}
                  href="https://axiomtestprep.com/tutoring"
                >
                  our website
                </Link>
              .
            </Text>
            <Text style={paragraph}>
              If you have any additional information you want to add to your message, feel free to reply to this email.
            </Text>
            <Text style={paragraph}>
              We look forward to chatting soon!
            </Text>
            <Text style={paragraph}>— The Axiom team</Text>
            <Hr style={hr} />
          </Section>
        </Container>
      </Body>
    </Html>
  );
  
  export default ContactUsAutoReplyEmail;
  
  const main = {
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  };
  
  const image = {
    marginLeft:'auto', 
    marginRight:'auto'
  }
  
  const container = {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    padding: "20px 0 48px",
    marginBottom: "64px",
  };
  
  const box = {
    padding: "0 48px",
  };
  
  const hr = {
    borderColor: "#e6ebf1",
    margin: "20px 0",
  };
  
  const paragraph = {
    color: "#000000",
  
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "left" as const,
  };
  
  const anchor = {
    color: "#0000a3",
    textDecoration:'underline',
  };
  
  const button = {
    backgroundColor: "#656ee8",
    borderRadius: "5px",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "block",
    width: "100%",
    padding: "10px",
  };
  
  const footer = {
    color: "#8898aa",
    fontSize: "12px",
    lineHeight: "16px",
  };
  