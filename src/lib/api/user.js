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
