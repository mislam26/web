import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';

const HomePage = () => {
  return (
    <Container>

      <Navbar expand={false}>
        <Navbar.Brand href="/" className="font-accent">Maima Islam</Navbar.Brand>
        <Nav className="flex-row">
          <Nav.Link href="/">About</Nav.Link>
          <Nav.Link href="/Maima_Islam_Resume.pdf">Resume</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar>

      <Row className="justify-content-center mt-5">
        <Col md={4} className="transition-1 text-center">
          <img 
            src="/headshot.jpg" 
            alt="Headshot" 
            className="my-4 mr-2"
            style={{ 
              borderRadius: '60% 40% / 50% 40%', 
              width: '100%', 
              maxWidth: '300px', 
              objectFit: 'cover', 
            }} 
          />
        </Col>
        <Col md={4} className="transition-2">
          <div>
            <h2 className="font-accent text-center">Maima Islam</h2>
            <p>
            Hi! I am a junior at Brown University studying Computer Science with a concentration in AI and Machine Learning.
            I am particularly interested in applying these fields within data science to solve complex problems. My academic journey has involved projects like building knowledge graphs and classifiers, where I used Python and various machine learning tools.
            </p>
            <p>
            Outside of tech, I love singing and cooking, which help me bring creativity and balance to my life.
            </p>
          </div>
        </Col>
      </Row>
      <div className="text-center mt-3 transition-3">
        <p id="contact">
          <img src="/brown.png" alt="Brown University" height="48"/>
          <a className="link-color text-decoration-none" href="mailto:maima_islam@brown.edu">maima_islam@brown.edu</a>
          <span className="mx-2"> | </span>
          <a className="link-color text-decoration-none" href="http://linkedin.com/in/maimaislam" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span className="mx-2"> | </span>
          <a className="link-color text-decoration-none" href="http://github.com/mislam26" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>

      </div>
    </Container>
  );
};

export default HomePage;