import { client } from "./client";
export async function GetMyProfile() {
  const { data } = await client.get("/user");
  return {
    data,
  };
}

export async function EditProfile(marry, gender, disorder, age, name) {
  return await client.patch("/user", {
    marry: marry,
    gender: gender,
    disorder: disorder,
    age: age,
    name: name,
  });
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
