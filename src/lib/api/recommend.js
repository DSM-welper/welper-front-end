import client from "./client";

export async function getRecommendList() {
  const { data } = await client.get("/main");
  return {
    data,
  };
}
