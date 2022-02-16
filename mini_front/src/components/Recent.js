import React from 'react';
import {Button, Alert, Breadcrumb, Card, Form, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Grid } from '../elements';

const Recent = (props) => {
      const p = props.post_lists
    return (
        <>
            <Grid width="380px" height="380px">
                <Row>
                    <Col>
                    <Card >
                        <Card.Body>
                        <div  className="Gothic-900">
                           {p.category}
                        </div>
                        <hr></hr>
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
            </Grid>
            </>
    );
};


export default Recent;