import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 67831e913981b3140ff243d3b68e1689b362ab0552fae4b0dbc7f41774abbb86"
  }
});
