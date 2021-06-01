import { client } from "./client";

export async function getSearchList(page, content) {
  return await client.get(`/category/search?content=${decodeURI(content)}&numOfPage=${page}`);
}
