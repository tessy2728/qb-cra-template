import { createSelector } from '@reduxjs/toolkit';
import { initialState } from '.';
// First select the relevant part from the state
export const selectAuthDomain = state => state.auth || initialState;
export const selectUserName = createSelector([selectAuthDomain], authState => authState.name);
export const selectUserDetails = createSelector([selectAuthDomain], authState => authState.userDetails);
export const selectAccessToken = createSelector([selectAuthDomain], authState => authState.accessToken);
export const selectIsSignedIn = createSelector([selectAuthDomain], authState => authState.isSignedIn);
export const selectLoading = createSelector([selectAuthDomain], authState => authState.loading);
export const selectLoginError = createSelector([selectAuthDomain], authState => authState.loginError);