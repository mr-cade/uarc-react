import React from "react";
import "./style.css";

export default function MeetingLocation() {
    return (
        <div className="col-8 mx-auto mt-5">
        <h3>UARC Meeting Schedule and Location</h3>
            <p>The Utah Amateur Radio Club meets on the second Thursday of each month except July and August at 7:30 P.M. Meeting place is on the University of Utah campus in the John and Marva Warnock Engineering Building. The room varies. Check the latest meeting announcement for details for the upcoming meeting.</p>
            <img src="./images/map4.gif" alt="map of meeting location at the University of Utah"></img>
        <h4>Reaching the Building</h4>
        <h5>From the West:</h5>
            <p>Approach the campus by driving east on 100 South. Follow the road as it makes a left turn and a right turn to become “North Campus Drive.” Turn right at the traffic signal onto “Central Campus Drive.” After passing the Merrill Engineering Building you will come to the front of the Warnock Engineering Building on the west side of the road. Parking lots are on the east side. You may use the one directly across the road from the building, or the ones immediately north and south of that one. (These lots are outlined in green on the map.) Parking in any other lot may result in a citation.</p>
        <h5>From the Southeast:</h5>
            <p>Approach the campus by going north on Foothill Boulevard. Turn right onto Mario Capecchi Drive. Move into the left turn lane as you approach the George S. Eccles 2002 Legacy pedestrian bridge. Continue under the bridge and complete the left turn onto Wasatch Drive. Then turn left at the T-junction onto North Campus Drive. Make another left turn at the next traffic signal onto “Central Campus Drive.” Continue to the Warnock Engineering building as in the paragraph above.</p>
        <h4>Finding the Room</h4>
            <p>Enter the Warnock Engineering Building (WEB) through the main door on the east side of the bulding. For rooms 1230 or 1250, walk down the main corridor to the west end of the building. The rooms can be found on either side of the corridor. For 2230 or 2250, take the elevator or stairway to the second floor and look for the room at the west end of the corridor on that floor.</p>
            <p>Finding rooms with three-digit numbers is a bit more obscure. In the southwest corner of the bulding is an elevator that can be used to access lower floors. From the front door walk west until you are just past the large open area, and look for a small walkway on the left. Take it past some conference rooms and around a corner past restrooms. At the end of this corridor will be an elevator on the right and a stairway on the left. Take the elevator to level “L1” (or take the stairs as far down as they go), then look for the specified room number.</p>
        </div>
    )
}