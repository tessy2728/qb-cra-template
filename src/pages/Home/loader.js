import { fetchArticleById, fetchArticles } from './Article/slice';
import store from "../../store";
export const articlesLoader = async () => {
  return await store.dispatch(fetchArticles());
};
export const articleDetailLoader = async ({
  params: {
    articleId
  }
}) => {
  return await store.dispatch(fetchArticleById(articleId));
};