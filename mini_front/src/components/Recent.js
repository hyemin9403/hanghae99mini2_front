import React from 'react';
import {Button, Alert, Breadcrumb, Card, Form, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Grid } from '../elements';

const Recent = (props) => {
      const p = props.post_lists
    return (
        <>
            <Grid borderRadius="10px" width="300px" height="200px" bg="white">
                <Card.Body>
                        <Grid fontWeight="900" fontSize="32px">
                           {p.category}
                        </Grid>
                        <hr></hr>
                        <Grid
                        width="280px"
                        height="50px"
                        fontWeight="900"
                        fontSize="32px"
                        textOverflow="ellipsis"
                        overflow="hidden"
                        whiteSpace="nowrap"
                        >
                        {p.content}
                        </Grid>
                        <Grid margin="10px 0px 0px 0px" color="#219f94" fontWeight="400" fontSize="16px">
                        {p.name}
                        </Grid>
                        </Card.Body>
            </Grid>
            </>
    );
};


export default Recent;