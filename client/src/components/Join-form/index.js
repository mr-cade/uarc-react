import React from "react";
import API from "../../utils/api"
import "./style.css";

class JoinForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            fName: '', 
            lName: '',
            nName: '',
            callsign: '',
            membershipType: '',
            licenseLevel: '',
            address: '',
            city: '',
            zipcode: '',
            email: '',
            arrl: '',
            phone: '',
            message: ''
        };

        this.handleFNameChange = this.handleFNameChange.bind(this);
        this.handleLNameChange = this.handleLNameChange.bind(this);
        // this.handleNNameChange = this.handleNNameChange.bind(this);
        this.handleCallsignChange = this.handleCallsignChange.bind(this);
        // this.handleMembershipTypeChange = this.handleMembershipTypeChange.bind(this);
        // this.handleLicenseLevelChange = this.handleLicenseLevelChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleZipcodeChange = this.handleZipcodeChange.bind(this);
        // this.handleEmailChange = this.handleEmailChange.bind(this);
        // this.handleARRLChange = this.handleARRLChange.bind(this);
        // this.handlePhoneChange = this.handlePhoneChange.bind(this);
        // this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(event) {
        alert('Thank You for your Submission, ' + this.state.name);
        event.preventDefault();
        console.log(this.state.email)

        API.saveMembers({
            fName: this.state.fName,
            lName: this.state.lName,
            // nName: this.state.nName,
            callsign: this.state.callsign,
            // membership: this.state.membershipType,
            // license: this.state.licenseLevel,
            address: this.state.address,
            city: this.state.city,
            zipcode: this.state.zipcode,
            // email: this.state.email,
            // arrl: this.state.arrl,
            // phone: this.state.phone,
            // message: this.state.message,
        })
            .catch(err => console.log(err))
        //   need to write a post route here 
    }

    handleFNameChange(event) {
        this.setState({
            fName: event.target.value
        });
    }

    handleLNameChange(event) {
        this.setState({
            lName: event.target.value
        });
    }

    handleCallsignChange(event) {
        this.setState({
            callsign: event.target.value
        });
    }

    handleAddressChange(event) {
        this.setState({
            address: event.target.value
        });
    }

    handleCityChange(event) {
        this.setState({
            city: event.target.value
        });
    }

    handleStateChange(event) {
        this.setState({
            state: event.target.value
        });
    }

    handleZipcodeChange(event) {
        this.setState({
            zipcode: event.target.value
        });
    }

    handleEmailChange(event) {
        this.setState({
            email: event.target.value
        });
    }


    render() {

        return (
            <div className="m-3">
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="fName">First name:</label>
                <input type="" name="fName" value={this.state.value} onChange={this.handleFNameChange}  />
                <label htmlFor="lName">Last name:</label>
                <input type="" name="lName" value={this.state.value} onChange={this.handleLNameChange} />
                <label htmlFor="nName">Preferred Nickname:</label>
                <input type="" name="nName"  />
                <br />
                <label htmlFor="callsign">Callsign:</label>
                <input type="" name="callsign" value={this.state.value} onChange={this.handleCallsignChange} />
                <label htmlFor="membership">Membership Type:</label>
                <select id="membership">
                    <option value="membership">$20</option>
                    <option value="addHousehold">$12</option>
                </select>
                <label htmlFor="license">License Level:</label>
                <select id="license">
                    <option value="unlicensed">Unlicensed</option>
                    <option value="novice">Novice</option>
                    <option value="technician">Technician</option>
                    <option value="general">General</option>
                    <option value="advanced">Advanced</option>
                    <option value="extra">Extra</option>
                </select>
                <br />
                <label htmlFor="address">Address:</label>
                <input type="" name="address" value={this.state.value} onChange={this.handleAddressChange}/>
                <label htmlFor="city">City:</label>
                <input type="" name="city" value={this.state.value} onChange={this.handleCityChange}/>
                <label htmlFor="state">State:</label>
                <input type="" name="state" value={this.state.value} onChange={this.handleStateChange}/>
                <label htmlFor="zipcode">Zipcode:</label>
                <input type="" name="zipcode" value={this.state.value} onChange={this.handleZipcodeChange}/>
                <br />
                <label htmlFor="email">Email:</label>
                <input type="" name="email" value={this.state.value} onChange={this.handleEmailChange}/>
                <label htmlFor="arrlMembership">ARRL Member:</label>
                <select id="arrlMembership">
                    <option value="yes" >Yes</option>
                    <option value="no" >No</option>
                </select>
                <br />
                <label htmlFor="phone">Phone Number:</label>
                <input type="" name="phone" />
                <br />
                <label htmlFor="message">Optional note to the secretary (Let us know about any of the above items you would prefer not to be published):</label>
                <br />
                <textarea name="message">
                </textarea>
                <br/>
                <br/>
                <br></br>
                <input type="submit" className="btn-primary" value="Join!" />
                {/* <input src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-large.png" type="image" border="0"
                    name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" /> */}
            </form>     
        </div>
            
            
            
            
            
            
            
            
            // <div>
            //     <br />
            //     <div className="card col-md-4 " id="infoCard">
            //         <div className="card-body">
            //             <div className="card-title"><h4>Our Newsletter</h4></div>
            //             <div className="card-text">Stay up-to-date with all things Tangible Creativity! New crafts, events, and news will be at your fingertips so you never miss a beat! Craft on!</div>
            //         </div>
            //         <img src="" className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt=""></img>
            //     </div>
            //     <br />
            //     <div className="card col-md-4 " id="signupCard">
            //         <div className="card-title"><h4>Signup for our newsletter!</h4>
            //         </div>
            //         <form onSubmit={this.handleSubmit}>
            //             <label>
            //                 Name:
            //         <br></br>
            //                 <input type="text" name="name" value={this.state.value} onChange={this.handleNameChange} />
            //             </label>
            //             <br></br>
            //             <label>
            //                 Email:
            //         <br></br>
            //                 <input type="email" name="email" value={this.state.value} onChange={this.handleEmailChange} />
            //             </label>
            //             <br></br>
            //             <input type="submit" className="btn-primary" value="Subscribe!" />
            //         </form>
            //     </div>
            //     <br />
            // </div>
        );
    }
}

export default JoinForm