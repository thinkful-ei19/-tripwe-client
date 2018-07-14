require("dotenv").config();

export const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:8080/api";
// "https://tripwe-server.herokuapp.com/api";

export const CLIENT_ORIGIN =
  process.env.CLIENT_ORIGIN || "http://localhost:3000";
export const MAPS_API_KEY = process.env.REACT_APP_MAPS_API_KEY;
