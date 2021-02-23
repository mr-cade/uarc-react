import React, {useState} from "react";
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import { Formik } from 'formik';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import API from "../../utils/api"
import "./style.css";

export default function JoinFormRS() {
    return (
        <Formik
    //   validationSchema={schema}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        // alert(JSON.stringify(values, null, 2));
        API.saveMembers({
            fName: values.fName,
            lName: values.lName,
            // nName: values.nName,
            callsign: values.callsign,
            // membership: values.membershipType,
            license: values.License,
            email: values.Email,
            phone: values.phone,
            address1: values.Address1,
            address2: values.Address2,
            city: values.City,
            stateLocation: values.stateLocation,
            zipcode: values.Zip,
            // arrl: values.arrl,
            // message: values.message,
        })
            .catch(err => console.log(err))
    }}
      initialValues={{
        fName: '',
        lName: '',
        callsign: '',
        License: '',
        Email: '',
        phone: '',
        Address1: '',
        Address2: '',
        City: '',
        stateLocation: '',
        Zip: ''
      }}
    >
      {({
        handleSubmit,
        handleChange,
      }) => (
        <Form onSubmit={handleSubmit}>
            <Form.Row>
                <Form.Group as={Col} controlId="fName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                        placeholder="Enter First Name" 
                        onChange={handleChange}
                        />
                </Form.Group>

                <Form.Group as={Col} controlId="lName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                        placeholder="Enter Last Name" 
                        onChange={handleChange}
                        />
                </Form.Group>

                <Form.Group as={Col} controlId="callsign">
                    <Form.Label>Callsign</Form.Label>
                    <Form.Control 
                        placeholder="Enter Callsign" 
                        onChange={handleChange}
                        />
                </Form.Group>
            </Form.Row>

            <Form.Row>
            <Form.Group as={Col} controlId="License">
                    <Form.Label>License Level</Form.Label>
                    <Form.Control 
                        as="select" 
                        defaultValue="Choose..."
                        onChange={handleChange}
                        >
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
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        onChange={handleChange}
                        />
                </Form.Group>

                <Form.Group as={Col} controlId="phone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control 
                        placeholder="Enter Phone Number" 
                        onChange={handleChange}
                        />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="Address1">
                <Form.Label>Address</Form.Label>
                <Form.Control 
                    placeholder="1234 Main St" 
                    onChange={handleChange}
                    />
            </Form.Group>

            <Form.Group controlId="Address2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control 
                    placeholder="Apartment, studio, or floor" 
                    onChange={handleChange}
                    />
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} controlId="City">
                    <Form.Label>City</Form.Label>
                    <Form.Control 
                        placeholder="City"
                        onChange={handleChange}
                        />
                </Form.Group>

                <Form.Group as={Col} controlId="stateLocation">
                    <Form.Label>State</Form.Label>
                    <Form.Control 
                        as="select" 
                        defaultValue="Choose..."
                        onChange={handleChange}
                        >
                        <option>Choose...</option>
                        <option>UT</option>
                        <option>...</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="Zip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control 
                        onChange={handleChange}
                        />
                </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )}
    </Formik>
    );
}