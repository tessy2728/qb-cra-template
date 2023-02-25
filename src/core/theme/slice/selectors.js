import { createSelector } from '@reduxjs/toolkit';
import { initialState } from '.';
export const selectThemeDomain = state => state.theme || initialState;

// export const selectTheme = createSelector(
//     [selectThemeDomain],
//     theme => themes[theme.selectedTheme],
// );
export const selectThemeKey = createSelector([selectThemeDomain], themeState => themeState.selectedTheme);