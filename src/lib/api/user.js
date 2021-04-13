import { client } from "./client";

export async function login(loginData) {
  const { data } = await client.post("/auth", loginData);
  return data;
}
