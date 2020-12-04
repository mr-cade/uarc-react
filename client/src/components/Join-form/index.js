import React from "react";
import "./style.css";

// import api from "../../utils/api.js"

export default function JoinForm() {
    return (
        <div className="m-3">
            <form onSubmit>
                <label htmlFor="fName">First name:</label>
                <input type="" name="fName"   />
                <label htmlFor="lName">Last name:</label>
                <input type="" name="lName"  />
                <label htmlFor="nName">Preferred Nickname:</label>
                <input type="" name="nName"  />
                <br />
                <label htmlFor="callsign">Callsign:</label>
                <input type="" name="callsign"  />
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
                <input type="" name="address" />
                <label htmlFor="city">City:</label>
                <input type="" name="city" />
                <label htmlFor="state">State:</label>
                <input type="" name="state" />
                <label htmlFor="zipcode">Zipcode:</label>
                <input type="" name="zipcode" />
                <br />
                <label htmlFor="email">Email:</label>
                <input type="" name="email" />
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
                <input src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-large.png" type="image" border="0"
                    name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            </form>     </div>
    )
}