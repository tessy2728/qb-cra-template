import { combineReducers } from '@reduxjs/toolkit';
import articlesReducer from '../pages/Home/Article/slice';
import authReducer from '../pages/Auth/slice';
import toasterReducer from '../slices/toaster.slice';
import themeReducer from '../core/theme/slice';
const reducerList = {
  auth: authReducer,
  articles: articlesReducer,
  toaster: toasterReducer,
  theme: themeReducer
};
const rootReducer = combineReducers(reducerList);
export default rootReducer;