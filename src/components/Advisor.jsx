import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import './MiddlePage.css';

const mentorsAndAdvisors = [
  {
    id: 1,
    name: 'John Doe',
    title: 'Frontend Developer',
    bio: 'John is an experienced frontend developer with a passion for creating user-friendly interfaces.',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWR2aXNvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'Backend Developer',
    bio: 'Jane is a skilled backend developer who enjoys solving complex problems.',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1666954642307-f9e1e3327262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWR2aXNvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    title: 'UX Designer',
    bio: 'Bob is a talented UX designer who specializes in creating intuitive and beautiful user experiences.',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFkdmlzb3J8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
  },
 
  
];

const MeetOurMentorsAndAdvisors = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handleShowModal = (person) => {
    setSelectedPerson(person);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPerson(null);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    // Add your logic to send a message here.
    // You can use selectedPerson to determine which mentor/advisor the message is intended for.
    // For this example, we'll just close the modal.
    handleCloseModal();
  };

  return (
    <Container>
      <h2 className="text-center">Meet Our Mentors and Advisors</h2>
      <Row>
        {mentorsAndAdvisors.map((person) => (
          <Col key={person.id} md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src={person.imageUrl} alt={person.name} />
              <Card.Body>
                <Card.Title>{person.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{person.title}</Card.Subtitle>
                <Card.Text>{person.bio}</Card.Text>
                <Button variant="primary" onClick={() => handleShowModal(person)}>Message Him</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Message Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Send a Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You are sending a message to: {selectedPerson ? selectedPerson.name : ''}</p>
          <Form onSubmit={sendMessage}>
            <Form.Group controlId="message">
              <Form.Label>Your Message</Form.Label>
              <Form.Control as="textarea" rows={4} required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default MeetOurMentorsAndAdvisors;
