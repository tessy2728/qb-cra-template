import { createSlice } from '@reduxjs/toolkit';
import { LS } from '../../../store/webStore';
export const initialState = {
  selectedTheme: LS.getFromLS('theme') || 'light'
};
const theme = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme(state, action) {
      state.selectedTheme = action.payload;
    }
  }
});
export const {
  changeTheme
} = theme.actions;
export default theme.reducer;
console.log(theme.getInitialState());