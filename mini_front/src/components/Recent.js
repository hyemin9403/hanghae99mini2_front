import React from 'react';
import {Button, Alert, Breadcrumb, Card, Form, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';



const Recent = (props) => {
    
  


    return (
        <div style={{}}>
            <Container>
                <Form>
                    <Form.Label>안녕하세요~!</Form.Label>
                </Form>
                <Row>
                    <Col>
                    <Card>
                        <Card.Body>
                        <Card.Title>
                            가장 최근
                        </Card.Title>
                        <Card.Text>
                            게시글입니다.
                        </Card.Text>
                        <Button variant='primary'> 상세보기 </Button>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col>
                    <Card>
                        <Card.Body>
                        <Card.Title>
                            최근
                        </Card.Title>
                        <Card.Text>
                            게글입니다.
                        </Card.Text>
                        <Button variant='primary'> 상세보기 </Button>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col>
                    <Card>
                        <Card.Body>
                        <Card.Title>
                            최근
                        </Card.Title>
                        <Card.Text>
                            게시글입니다
                        </Card.Text>
                        <Button variant='primary'> ㅇㅇㅇ </Button>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </div>
       
    );
};

const Con = styled.div`
 height : "250px";
 background-color : "#219F94"
`;
export default Recent;