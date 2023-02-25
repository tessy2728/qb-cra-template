import { createSelector } from '@reduxjs/toolkit';
import { initialState } from '.';
// First select the relevant part from the state
export const selectArticlesDomain = state => state.articles || initialState;

export const selectArticles = createSelector(
    [selectArticlesDomain],
    articlesState => articlesState.articles);

export const selectArticleDetails = createSelector([selectArticlesDomain], articlesState => articlesState.articleDetails);