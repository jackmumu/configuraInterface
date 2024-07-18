import axios from "axios";
export const getButton = () => {
  return axios.get("../../static/config.json");
};
