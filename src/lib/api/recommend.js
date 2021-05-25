import client from "./client";

export async function getRecommendList() {
  return await client.get("/main");
}
