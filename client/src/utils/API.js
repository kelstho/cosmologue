import axios from "axios";

export default {
  getUserInfo: function () {
    return axios.get("/api/user/data")
  }
}
