import React from 'react';

function TableRow(props) {
    // console.log("props: " + props.fName)
    return (
    <tr>
        <td>{props.id}</td>
        <td>{props.fName}</td>
        <td>{props.lName}</td>
        <td>{props.callsign}</td>
        <td>{props.license}</td>
        <td>{props.email}</td>
        <td>{props.phone}</td>
        <td>{props.address1}</td>
        <td>{props.address2}</td>
        <td>{props.city}</td>
        <td>{props.state}</td>
        <td>{props.zipcode}</td>
    </tr>
    
    )
}


export default TableRow;