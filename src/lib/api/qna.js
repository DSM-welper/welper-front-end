import { client } from "./client";

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

export async function getQnADetail(id) {
  const { data } = await client.get(process.env.NEXT_PUBLIC_APP_URL + `/post/detail/${id}`);
  return {
    data,
  };
}

export async function getComment(id, page) {
  const { data } = await client.get(process.env.NEXT_PUBLIC_APP_URL + `/comments/${id}?page=${page}`);
  return {
    data,
  };
}

export async function addComment(id, content) {
  const { data } = await client.post(process.env.NEXT_PUBLIC_APP_URL + `/comments/${id}`, content);
  return {
    data,
  };
}
