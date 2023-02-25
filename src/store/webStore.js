import { isEmpty } from '../core/utils/utils';
export class LS {
  static setToLS = (name, value) => {
    if (window.localStorage && !isEmpty(name)) {
      window.localStorage.setItem(name, value);
      return true;
    }
    return false;
  };
  static getFromLS = name => {
    if (window.localStorage && !isEmpty(name)) {
      return window.localStorage.getItem(name);
    }
    return undefined;
  };
  static removeFromLS = name => {
    if (window.localStorage && !isEmpty(name)) {
      return window.localStorage.removeItem(name);
    }
  };
  static clear = () => {
    if (window.localStorage) {
      return window.localStorage.clear();
    }
  };
}
export class SS {
  static setToSS = (name, value) => {
    if (window.sessionStorage && !isEmpty(name)) {
      window.sessionStorage.setItem(name, value);
      return true;
    }
    return false;
  };
  static getFromSS = name => {
    if (window.sessionStorage && !isEmpty(name)) {
      return window.sessionStorage.getItem(name);
    }
    return undefined;
  };
  static removeFromSS = name => {
    if (window.sessionStorage && !isEmpty(name)) {
      return window.sessionStorage.removeItem(name);
    }
  };
  static clear = () => {
    if (window.sessionStorage) {
      return window.sessionStorage.clear();
    }
  };
}