import React, { Component } from 'react'
import {Navbar, Nav, NavDropdown} from "react-bootstrap";

export default class CustomNav extends Component {
  render() {
    return (
      <Navbar bg="light" sticky="top">
        <Nav className="mr-auto">
          <Navbar.Brand>Breeze Academy</Navbar.Brand>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Intro">소개</Nav.Link>
          <Nav.Link href="/Event">행사</Nav.Link>
          <NavDropdown title="게시판" id="board-dropdown">
            <NavDropdown.Item href="">음악교구활동</NavDropdown.Item>
            <NavDropdown.Item href="">특강</NavDropdown.Item>
            <NavDropdown.Item href="">외부 출강</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/Info">이용안내</Nav.Link>
        </Nav>
      </Navbar>
    )
  }
}
