import { client } from "./client";
const qs = require("qs");
export async function AllCategory(numOfPage) {
  const { data } = await client.get("/category", numOfPage);
  return {
    data,
  };
}

export async function CategoryDetail(id) {
  const { data } = await client.get(`/category/detail/${id}`);
  return {
    data,
  };
}

export async function CategorySearch(content, numOfPage) {
  const { data } = await client.get("/category/search", {
    content,
    numOfPage,
  });
  return {
    data,
  };
}

export async function CategoryTag(numOfPage, categoryName) {
  return await client.get("/category/tag", {
    params: {
      numOfPage: numOfPage,
      categoryName: categoryName,
    },
    paramsSerializer: (params) => {
      return qs.stringify(params, { arrayFormat: "repeat" });
    },
  });
}
