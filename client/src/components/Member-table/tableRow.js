import React from 'react';

function TableRow(props) {
    // console.log("props: " + props.fName)
    return (
    <tr>
        <td>{props.id}</td>
        <td>{props.fName}</td>
        <td>{props.lName}</td>
        <td>{props.callsign}</td>
        <td>{props.License}</td>
        <td>{props.Email}</td>
        <td>{props.phone}</td>
        <td>{props.Address1}</td>
        <td>{props.Address2}</td>
        <td>{props.city}</td>
        <td>{props.stateLocation}</td>
        <td>{props.Zip}</td>
    </tr>
    
    )
}


export default TableRow;