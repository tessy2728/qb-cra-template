import React from 'react';
import { useSelector } from 'react-redux';
import { useLoaderData, useParams } from 'react-router-dom';
import { selectArticleDetails } from '../slice/selectors';
import { ArticleBody, ArticleHeader, ArticleImage, Divider } from '../styled';
const ArticleDetails = () => {
  const {
    articleId
  } = useParams();
  let article = useSelector(selectArticleDetails)[articleId];
  const data = useLoaderData();
  if (!data.error && data.payload)
    article = data.payload.result[0];

  return <div className="flex flex-column">
    <ArticleHeader className="card__item">
      <h6 className="card__item card__item--small card__label">Featured</h6>
      <h2 className="card__item card__item--small card__title">{article.title}</h2>
    </ArticleHeader>
    <ArticleImage>
      <img src={article.picture} alt="waves" />
    </ArticleImage>
    <Divider className="card__item" />

    <ArticleBody className="card__item card__body">
      <p>{article.body}</p>
    </ArticleBody>
  </div>;
};
export default ArticleDetails;