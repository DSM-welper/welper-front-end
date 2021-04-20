import { client } from "./client";

export async function getQnAList(page) {
  const { data } = await client.get(`/post?page=${page}`);
  return {
    data,
  };
}

export async function getMyQnAList(page) {
  const { data } = await client.get(`/post/mine?page=${page}`);
  return {
    data,
  };
}

export async function getQnADetail(id) {
  const { data } = await client.get(`/post/detail/${id}`);
  return {
    data,
  };
}

export async function getComment(id, page) {
  const { data } = await client.get(`/comments/${id}?page=${page}`);
  return {
    data,
  };
}

export async function addComment(id, content) {
  const { data } = await client.post(`/comments/${id}`, content);
  return {
    data,
  };
}

export async function CreateQnA(postData) {
  return await client.post("/post", postData);
}

export async function deleteComment(postId, commentId) {
  return await client.delete(`/comments/${postId}/${commentId}`);
}
