import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const heroesData = [
  {
    id: 1,
    name: 'Abbadon',
    image: 'https://i.ytimg.com/vi/D_7CJp0xFL4/maxresdefault.jpg',
    roles: ['Carry', 'Support', 'Durable'],
  },
  {
    id: 2,
    name: 'Anti-Mage',
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/diretide2020/tier2/antimage.jpg',
    roles: ['Carry', 'Escape'],
  },
  // Add more hero data as needed
];

function Gallery() {
  return (
    <Row xs={1} md={3} className="g-4">
      {heroesData.map((hero) => (
        <Col key={hero.id}>
          <Card>
            <Card.Img
              variant="top"
              src={hero.image}
              alt={hero.name}
              style={{ width: '407px', height: '407px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title>{hero.name}</Card.Title>
              <Card.Text>
                Roles: {hero.roles.join(', ')}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Gallery;
