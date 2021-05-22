import React from 'react'
import { Navbar } from 'react-bootstrap'

const NavbarComponent = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home" className='m-auto'>
                <img
                    alt=""
                    src="https://react-bootstrap.github.io/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                REACT PROJECT
                </Navbar.Brand>
            </Navbar>
        </div>
    )
}

export default NavbarComponent;