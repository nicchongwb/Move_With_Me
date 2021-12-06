export const setSessionStorage = (key, value) => {
  try {
    window.sessionStorage.setItem(key, value);
  } catch (e) {
    // For catching errors
  }
};

export const getSessionStorage = (key, initialValue) => {
  try {
    const value = window.sessionStorage.getItem(key);
    return value ?? initialValue;
  } catch (e) {
    // if error, return initial value
    return initialValue;
  }
};
