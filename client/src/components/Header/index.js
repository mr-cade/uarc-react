import React from "react";
import "./style.css";
import Navbar from 'react-bootstrap/Navbar';

// for login bar: 
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl'
// import Button from 'react-bootstrap/Button'
// import InputGroup from 'react-bootstrap/InputGroup'

export default function Header() {
    return (
        <div>
               <div id="header">
                <h1 className="text-center" id="title">Utah Amateur Radio Club</h1>
            </div>
            <Navbar className="bg-dark justify-content-between"  style={{ padding:"15px"}}>
                <div className="container" style={{ marginLeft:"60px"}}>
                <button
          className="navbar-toggler ml-auto"
          type="button"
   
        >
          <span className="navbar-toggler-icon"></span>
        </button>
                {/* Login Bar: */}
                {/* <Form className="form-inline">
                    <InputGroup >
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
                        <Button type="submit"  style={{ marginLeft:"10px"}}>Login</Button>
                    </InputGroup>
                </Form> */}
                </div>
            </Navbar>
        </div>
    )
}