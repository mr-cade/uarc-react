import React from 'react';

function TableRow(props) {
    // console.log("props: " + props.fName)
    return (
    <tr>
        <td>{props.id}</td>
        <td>{props.fName}</td>
        <td>{props.lName}</td>
        <td>{props.callsign}</td>
        <td>{props.streetAddress}</td>
        <td>{props.city}</td>
        <td>{props.state}</td>
        <td>{props.zipcode}</td>
    </tr>
    
    )
}


export default TableRow;