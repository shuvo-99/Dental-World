import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import profile from "../../images/profile.jpg";

const About = () => {
  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col>
            <p>Name: Md. Anonto Shuvo</p>
            Goal: I am currently a CSE student and that's why my goal is to
            become a software developer. I am learning web development beacuse
            it is also an important part for a developer. I am looking forward
            to do freelancing by learning web development.
          </Col>
          <Col>
            <img style={{ width: "50%" }} src={profile} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default About;
