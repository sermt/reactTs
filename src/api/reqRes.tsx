import axios from "axios";

export const reqApi = axios.create({
  baseURL: "https://reqres.in/api",
});
