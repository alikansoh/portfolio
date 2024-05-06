import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bone from "../../Assets/Projects/boneguy.png";
import emotion from "../../Assets/Projects/spaceloom.png";
import digit from "../../Assets/Projects/digitcrops.png";
import ttl from "../../Assets/Projects/ttl.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bone}
              isBlog={false}
              title="Bone Guy"
              description=" e-commerce platform for pet food products, focusing exclusively on cat and dog nutrition, using the MERN stack. This platform offers a comprehensive selection of pet food items, from dry kibble to wet canned food, catering to various dietary needs and preferences. It features advanced filtering capabilities, enabling users to easily find products based on brand, type, and specific nutritional requirements, enhancing the shopping experience by presenting only the most relevant options. The platform's design prioritizes user convenience and accessibility, ensuring pet owners can quickly find the right food for their pets.

              "
              ghLink="https://github.com/aliartach/real-client-project-front"
              demoLink="https://boneguy.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={digit}
              isBlog={false}
              title="Digit crops "
              description=" platform designed to facilitate the purchase of social media followers and engagement, leveraging the MERN stack for its robustness and scalability. This platform serves as a marketplace where businesses and individuals can buy targeted followers and engagement packages to boost their online presence. Utilizing MongoDB for database management, Express.js for server-side logic, React for a dynamic user interface, and Node.js for server execution, the platform ensures a seamless and secure user experience"
              ghLink="https://github.com/alikansoh/Digit-gorw"
              demoLink="https://digitcrops.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Space loom"
              description="The Interior Design Visualization Tool is a cutting-edge platform designed to revolutionize the way people visualize and plan their interior spaces. Built on the MERN stack, this platform offers a comprehensive suite of features aimed at empowering users to explore, customize, and visualize their interior design projects with unparalleled precision and realism."
              ghLink="https://github.com/alikansoh/Codi-grp2-frontend"
              demoLink="https://spaceloom.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ttl}
              isBlog={false}
              title="TTL"
              description="LebnenEle is a transformative digital platform designed to empower Lebanese students by providing them with access to educational resources and opportunities. Launched with a vision to serve as a beacon of hope, LebnenEle aims to bridge the gap between education and the realization of dreams for the youth of Lebanon. The platform is built on the MERN stack, ensuring a robust, scalable, and user-friendly experience for its users.

              "
              ghLink="https://github.com/FlightRipper/Project3-FrontEnd"
              demoLink="https://main--deluxe-pasca-725a53.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
