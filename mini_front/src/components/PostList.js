import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//bootstrap
import {Button, Alert, Breadcrumb, Card, Form, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';

const PostList = () => {

    const [post, setPost] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
         const fetchPosts = async () => {
             try {
                 const response = await axios.get('/boards');
                 setPost(response.data);
             } catch (err) {
                if(err.response) {
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                } else {
                    console.log(`Error:&{err.message}`)
                }
             }
         }
         fetchPosts();
    }, [])

    return (
        <Container>
            <Breadcrumb>
                <Button>카테</Button>
                <Button>고리</Button>
                <Button>가능?</Button>
            </Breadcrumb>

            <Card>
                <Card.Header>1번 예시</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                    <p>
                        {' '}
                        이것
                        은
                        예
                        시
                        입니
                        다
                        {' '}
                    </p>
                    <footer className="blockquote-footer">
                        모집완료 <cite title="Source Title">모집인원 6/6</cite>
                    </footer>
                    </blockquote>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header>2번</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                    <p>
                        {' '}
                       하나씩
                       고치자
                       {' '}
                    </p>
                    <footer className="blockquote-footer">
                        모집중 <cite title="Source Title">인원</cite>
                    </footer>
                    </blockquote>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header>3</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                    <p>
                        {' '}
                        ^^
                        {' '}
                    </p>
                    <footer className="blockquote-footer">
                        ! <cite title="Source Title">?</cite>
                    </footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </Container> 
    );
};

export default PostList;