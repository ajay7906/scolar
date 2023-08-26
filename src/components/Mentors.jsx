import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './MiddlePage.css';

const mentors = [
  {
    id: 1,
    name: 'John Doe',
    title: 'Frontend Developer',
    bio: 'John is an experienced frontend developer with a passion for creating user-friendly interfaces.',
    imageUrl: 'https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVudG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'Backend Developer',
    bio: 'Jane is a skilled backend developer who enjoys solving complex problems.',
    imageUrl: 'https://images.unsplash.com/photo-1522881193457-37ae97c905bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVudG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    title: 'UX Designer',
    bio: 'Bob is a talented UX designer who specializes in creating intuitive and beautiful user experiences.',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVudG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 4,
    name: 'Alice Brown',
    title: 'Data Scientist',
    bio: 'Alice is a data scientist with expertise in machine learning and data analysis.',
    imageUrl: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVudG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 5,
    name: 'Eve Wilson',
    title: 'Product Manager',
    bio: 'Eve is a product manager with a track record of successful product launches.',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWVudG9yfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 6,
    name: 'Michael Lee',
    title: 'DevOps Engineer',
    bio: 'Michael is a DevOps engineer who specializes in automating and optimizing development pipelines.',
    imageUrl: 'https://media.istockphoto.com/id/1369408412/photo/business-colleagues-having-a-conversation.webp?b=1&s=170667a&w=0&k=20&c=G8YNg0UXjN4Sq07j6Nc5BJz3iUah3ci8HYbQKSCqyPM=',
  },
  {
    id: 7,
    name: 'Sara Taylor',
    title: 'UI Designer',
    bio: 'Sara is a UI designer who creates visually appealing and user-friendly interfaces.',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1661777460631-aaf3f854432a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1lbnRvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 8,
    name: 'Alex Green',
    title: 'Full Stack Developer',
    bio: 'Alex is a full-stack developer with expertise in both frontend and backend technologies.',
    imageUrl: 'https://media.istockphoto.com/id/1496376771/photo/woman-giving-speaker-presentation.webp?b=1&s=170667a&w=0&k=20&c=wKhNQsOWsufrd0Qb-HOjmUuqhkqMlucMk08Jh3DVUec=',
  },
];

const MeetOurMentors = () => {
  return (
    <Container className='Mentors'>
      <h2 className="text-center">Meet Our Eight Mentors</h2>
      <Row>
        {mentors.map((mentor) => (
          <Col key={mentor.id} md={3}>
            <Card className="mb-4">
              <Card.Img variant="top" src={mentor.imageUrl} alt={mentor.name} />
              <Card.Body>
                <Card.Title>{mentor.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{mentor.title}</Card.Subtitle>
                <Card.Text>{mentor.bio}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MeetOurMentors;
