import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-8ace2.cloudfunctions.net/api", // API URL (cloud function)
});

export default instance;

// http://localhost:5001/clone-8ace2/us-central1/api
