import { getClientAccessToken, client } from "./client";

export async function getQnAList(page) {
  const { data } = await client.get(process.env.NEXT_PUBLIC_APP_URL + `/post?page=${page}`);
  return {
    data,
  };
}

export async function getMyQnAList(page) {
  const { data } = await client.get(process.env.NEXT_PUBLIC_APP_URL + `/post/mine?page=${page}`);
  return {
    data,
  };
}
