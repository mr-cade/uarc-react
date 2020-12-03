import React from "react";
import "./style.css";

export default function JoinForm() {
    return (
        <div className="m-3">
            <form action="https://www.paypal.com/" method="post" target="_top">
                <label for="fName">First name:</label>
                <input type="" name="fName" value="" />
                <label for="lName">Last name:</label>
                <input type="" name="lName" value="" />
                <label for="nName">Preferred Nickname:</label>
                <input type="" name="nName" value="" />
                <br />
                <label for="callsign">Callsign:</label>
                <input type="" name="callsign" value="" />
                <label for="membership">Membership Type:</label>
                <select id="membership">
                    <option value="membership">$20</option>
                    <option value="addHousehold">$12</option>
                </select>
                <label for="license">License Level:</label>
                <select id="license">
                    <option value="unlicensed">Unlicensed</option>
                    <option value="novice">Novice</option>
                    <option value="technician">Technician</option>
                    <option value="general">General</option>
                    <option value="advanced">Advanced</option>
                    <option value="extra">Extra</option>
                </select>
                <br />
                <label for="address">Address:</label>
                <input type="" name="address" value="" />
                <label for="city">City:</label>
                <input type="" name="city" value="" />
                <label for="state">State:</label>
                <input type="" name="state" value="" />
                <label for="zipcode">Zipcode:</label>
                <input type="" name="zipcode" value="" />
                <br />
                <label for="email">Email:</label>
                <input type="" name="email" value="" />
                <label for="arrlMembership">ARRL Member:</label>
                <select id="arrlMembership">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <br />
                <label for="phone">Phone Number:</label>
                <input type="" name="phone" value="" />
                <br />
                <label for="message">Optional note to the secretary (Let us know about any of the above items you would prefer not to be published):</label>
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