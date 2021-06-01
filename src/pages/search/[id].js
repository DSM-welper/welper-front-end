import { KeywordSearch } from "../../containers";
import { getSearchList } from "../../lib/api/search";

const Search = ({ data, keyword }) => {
  return (
    <>
      <KeywordSearch list={data} keyword={keyword} />
    </>
  );
};

Search.getInitialProps = async (context) => {
  try {
    const { servList } = await (await getSearchList(context.query.page, context.query.id)).data;
    return {
      data: servList,
      keyword: context.query.id,
    };
  } catch (err) {
    return { data: err.code, keyword: context.query.id };
  }
};
export default Search;
