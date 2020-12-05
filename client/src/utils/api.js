import axios from "axios";

export default {
    // Gets all subs
    getMembers: function() {
      return axios
      .get("/api/members")
      // .then(res => {
       
      //   const subs = res.data.results;
      //   return subs.map(sub => {
      //     return {
      //       fullname : sub.name,
      //       email : sub.email,
      //     };
      //   });
      // })
    },
    
    // Saves a sub to the database
    saveSub: function(subData) {
      return axios.post("/api/members", subData);
    }
  };