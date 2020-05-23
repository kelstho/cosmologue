import axios from "axios";

export default {
  getUserInfo: function () {
    return axios.get("/api/user/data")
  },

  getAllNews: function () {
    return axios.get("/api/article")
  },

  getDailyPic: function () {
    return axios.get("/api/picOTD")
  },

  getCalEvents: function () {
    return axios.get("/api/event/2020/05")
  }
}
