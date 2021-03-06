import { client } from "./client";
export async function GetMyProfile() {
  const { data } = await client.get("/user");
  return {
    data,
  };
}

export async function login(loginData) {
  const { data } = await client.post("/auth", loginData);
  return data;
}

export async function EditProfile(profileData) {
  return await client.patch("/user", profileData);
}

export async function Email(mail) {
  return await client.post("/mail", { mail: mail });
}

export async function AuthEmail(code, mail) {
  return await client.patch("/mail", { authCode: code, mail: mail });
}

export async function SignUp(data) {
  return await client.post("/auth/signup", data);
}

export async function refreshToken() {
  return await client.patch("/auth");
}

export async function secession(password) {
  return await client.delete(`/auth?password=${password}`);
}

export async function addBookMark(id) {
  const servId = id;
  return await client.post(`/category/bookMark/${servId}`);
}

export async function cancelBookMark(id) {
  return await client.delete(`/category/bookMark/${id}`);
}
