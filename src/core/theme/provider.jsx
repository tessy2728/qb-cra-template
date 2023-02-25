import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { selectThemeKey } from './slice/selectors';
import { themes } from './themes';
export const AppThemeProvider = props => {
  const themeKey = useSelector(selectThemeKey);
  console.log(themeKey, themes);
  const selectedTheme = themes[themeKey];
  return <ThemeProvider theme={selectedTheme}>
      {React.Children.only(props.children)}
    </ThemeProvider>;
};