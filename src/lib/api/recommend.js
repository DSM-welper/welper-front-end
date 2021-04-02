import client from "./client";

export async function getRecommendList() {
  const { data } = await client.get(process.env.NEXT_PUBLIC_APP_URL + "/main");
  return {
    data,
  };
}
