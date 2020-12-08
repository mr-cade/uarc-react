import axios from "axios";

const memberRoutes = {
    // Gets all subs
    getMembers: function() {
      return axios
      .get("/api/members")
      
    },
    
    // Saves a sub to the database
    saveMembers: function(memberData) {
      return axios.post("/api/members", memberData);
    }
  };

  export default memberRoutes