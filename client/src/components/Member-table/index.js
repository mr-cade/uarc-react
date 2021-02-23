import React, { Component } from 'react';
import API from '../../utils/api';
import TableRow from './tableRow'

class MemberTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            items: [],

        }
    }

    componentDidMount() {
        API.getMembers()
            .then(
                members => {
                    console.log(members)
                    this.setState({
                        items: members.data,
                        loading: true
                    })
                })

    }

    render() {
        if (this.state.items.length === 0) {
            return null;
        }
        console.log("state: " + this.state)

        return (

            <table style={{ marginTop: "5%", width: "70%", marginLeft: "15%", marginRight: "15%", textAlign: "center" }} className="table table-hover table-bordered table-gradient">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">callsign</th>
                        <th scope="col">License Level</th>
                        <th scope="col">email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Street Address</th>
                        <th scope="col">Address2</th>
                        <th scope="col">City</th>
                        <th scope="col">State</th>
                        <th scope="col">Zipcode</th>
                        {/* <th scope="col">Expiration Month</th>
                        <th scope="col">Expiration Year</th> */}
                    </tr>
                </thead>
                <tbody>
                    {this.state.items.map((items) => {
                        console.log("item: " + items[0])
                        return (
                            <TableRow
                                key={items.id}
                                fName={items.fName}
                                lName={items.lName}
                                callsign={items.callsign}
                                license={items.License}
                                email={items.Email}
                                phone={items.phone}
                                address1={items.Address1}
                                address2={items.Address2}
                                city={items.City}
                                state={items.stateLocation}
                                zipcode={items.Zip}
                                // expDateMonth={items.expDateMonth}
                                // expDateYear={items.expDateYear}
                            />)
                    })
                    }
                </tbody>
            </table>
        )
    }
}


export default MemberTable;