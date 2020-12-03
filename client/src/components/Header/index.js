import React from "react";
import "./style.css";
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'

export default function Header() {
    return (
        <div>
            
            <Navbar className="bg-dark justify-content-between">
                <Form>
                    <InputGroup>
                        <FormControl
                            placeholder="Callsign"
                            aria-label="Callsign"
                            aria-describedby="basic-addon1"
                        />
                        <FormControl
                            placeholder="Password"
                            aria-label="Password"
                            aria-describedby="basic-addon1"
                        />
                        <Button type="submit">Login</Button>
                    </InputGroup>
                </Form>
            </Navbar>
            <div id="header">
                <h1 className="text-center" id="title">Utah Amateur Radio Club</h1>
            </div>
            
        </div>
    )
}