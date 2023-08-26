// src/components/MiddlePage.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './MiddlePage.css';

const MiddlePage = () => {
  return (
    <Container fluid className="middle-page">
      <img
        src="https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_640.jpg" // Replace with your image URL
        alt="Research Scholar"
        className="background-image"
      />
      <Row>
        <Col className="overlay">
          <h1>WELCOME TO THE RESEARCH SCHOLAR WEBITE</h1>
          <h1>THIS IS NO RESEARCH COMPANY IN THE WORLD</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            interdum urna, at tincidunt quam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia voluptatum delectus tempora labore esse reiciendis quasi quo expedita ipsa possimus, eum ullam eaque sunt itaque voluptatibus nostrum enim rerum facere.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt dignissimos ipsa, corporis quas nihil, illum minima enim deserunt quae esse voluptas soluta ut ratione maxime dolorum eveniet consequatur eius?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos ullam aspernatur inventore, impedit, earum cumque vel exercitationem optio dolorum facere eveniet eligendi pariatur ea numquam explicabo, magnam molestias. Eos, ut!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos asperiores, mollitia, quo hic repudiandae illo obcaecati eum molestias sequi sint sunt doloremque enim reprehenderit cumque consectetur qui ut, fugit at?
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default MiddlePage;
