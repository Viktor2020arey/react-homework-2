import axios from "axios";

axios.defaults.headers.common["Authorization"] =
  "Bearer 5be165b6653240ec96b78cb03ebe4321";

const fetchArticles = ({ searchQuery = "", currentPage = 1, pageSize = 5 }) => {
  return axios
    .get(
      `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=${pageSize}&page=${currentPage}`
    )
    .then((response) => response.data.articles);
};

export default { fetchArticles };
