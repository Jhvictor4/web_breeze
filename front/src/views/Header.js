import React from 'react'
import {Col, Container, Row} from "react-bootstrap";
export default function Header() {
    return (
        <div className="Header">
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="2"> </Col>
                    <Col md="auto">Breeze Academy</Col>
                    <Col >login</Col>
                    <Col >join</Col>
                </Row>
            </Container>
        </div>
    )
}
