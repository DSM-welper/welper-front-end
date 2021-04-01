import axios from "axios";

export const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getClientAccessToken = () =>
  axios.create({
    baseURL: process.env.NEXT_PUBLIC_APP_URL,
    headers: {
      Authorization: `${localStorage.getItem("accessToken")}`,
    },
  });

export default client;
