import React from "react";
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import API from "../../utils/api"
import "./style.css";

export default function JoinFormRS() {
    return (
        <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="fName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control placeholder="Enter First Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="lName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control placeholder="Enter Last Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="callsign">
                    <Form.Label>Callsign</Form.Label>
                    <Form.Control placeholder="Enter Callsign" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
            <Form.Group as={Col} controlId="License">
                    <Form.Label>License Level</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>Technician</option>
                        <option>General</option>
                        <option>Extra</option>
                        <option>Novice</option>
                        <option>Technician Plus</option>
                        <option>Advanced</option>
                        <option>Unlicensed</option>
                    </Form.Control>
                </Form.Group>
                
                <Form.Group as={Col} controlId="Email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="Password">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control placeholder="Enter Phone Number" />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="Address1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group controlId="Address2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} controlId="City">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="State">
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select" defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>UT</option>
                        <option>...</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="Zip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                </Form.Group>
            </Form.Row>

            <Form.Group id="Checkbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}