import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'

export class Header extends Component {
    render() {
        return (
            <Nav defaultActiveKey="/home" as="ul">
            <Nav.Item as="li">
              <Nav.Link href="/">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/favorite">Link</Nav.Link>
            </Nav.Item>
          </Nav>
        )
    }
}

export default Header
