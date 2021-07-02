import React, { Component } from "react";
import SearchForm from "../SearchForm";
import newsApi from "../services/news-api";

class ArticlesView extends Component {
  state = {
    articles: [],
    currentPage: 1,
    searchQuery: "",
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchArticles();
    }
  }

  onChangeQuery = (query) => {
    //   не самый хорошый вариант
    // this.setState({ searchQuery: query }, this.fetchArticles);
    this.setState({
      searchQuery: query,
      currentPage: 1,
      articles: [],
      error: null,
    });
  };

  fetchArticles = () => {
    const { currentPage, searchQuery } = this.state;
    const options = {
      searchQuery,
      currentPage,
    };

    this.setState({ isLoading: true });

    newsApi
      .fetchArticles(options)
      .then((articles) => {
        this.setState((prevState) => ({
          articles: [...prevState.articles, ...articles],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { articles, isLoading, error } = this.state;
    const ShouldMoreButton = articles.length > 0 && !isLoading;
    return (
      <div>
        {error && <h1>Ой ошибка, все пропало!!!</h1>}
        <h1>Статьи</h1>

        <SearchForm onSubmit={this.onChangeQuery} />

        <ul>
          {articles.map(({ title, url }) => (
            <li key={title}>
              <a href={url}>{title}</a>
            </li>
          ))}
        </ul>

        {isLoading && <h1>Загружаем...</h1>}

        {ShouldMoreButton && (
          <button type="button" onClick={this.fetchArticles}>
            Загрузить еще
          </button>
        )}
      </div>
    );
  }
}
export default ArticlesView;
