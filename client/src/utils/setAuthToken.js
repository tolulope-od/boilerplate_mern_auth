import axios from "axios";

const setAuthToken = token => {
  if (token) {
    // Apply authorization token to every request if loggen in
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
