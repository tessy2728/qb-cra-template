import React from 'react';
import ArticleCard from '../Card';
import { useLoaderData } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserId } from '../../../Auth/helper';
import { selectArticles, selectArticlesDomain } from '../slice/selectors';

const ArticleList = () => {
  let articles = useSelector(selectArticles);
  const data = useLoaderData();
  if (!data.error)
    articles = data.payload.result;

  const userId = getUserId();
  return <div className="flex flex-column">
    <p className="text-left">Here are some articles for you:</p>
    <div className="grid grid-cols-3">{articles.filter(article => article.user_id == userId).map(article => <ArticleCard key={article.id} article={article} />)}</div>
  </div>;
};
export default ArticleList;