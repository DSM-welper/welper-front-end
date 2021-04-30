import { client } from "./client";

export async function getSearchList(page, content) {
  const { data } = await client.get(`/category/search?content=${encodeURI(content)}&numOfPage=${page}`);
  return { data };
}
