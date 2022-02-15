import React from 'react';
import {Button, Alert, Breadcrumb, Card, Form, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Recent = (props) => {
      const p = props.post_lists
    return (
        <>
            <Container>
                <Form>
                    <Form.Label></Form.Label>
                </Form>
                <Row>
                    <Col>
                    <Card >
                        <Card.Body>
                        <Card.Title>
                           {p.category}
                        </Card.Title>
                        <Card.Text>
                        {p.content}{p.name}
                        </Card.Text>
                        <span>
                        {p.name}
                        </span>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
            </>
    );
};


export default Recent;