import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ali Kansoh </span>
            from <span className="purple"> Beirut, Lebanon.</span>
            <br />
            I've been diving into Java and Node.js for about two years now, and
            it's been quite the journey. Over at Codi Tech, I've been rocking it
            as a full-stack web developer, focusing mainly on the MERN stack.
            <br />
            My academic background includes a bachelor's degree from the
            esteemed Conservatoire National des Arts et des Métiers (CNAM) in
            Paris, reflecting my commitment to acquiring comprehensive knowledge
            in the field. Mesra.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching football
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
