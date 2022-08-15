const LOGGED_IN_KEY = "LOGGED_IN";

const isLoggedIn = () => localStorage.getItem(LOGGED_IN_KEY) || false;

const login = (username, password) => {
  if (
    username.toLowerCase() === "admin" &&
    password.toLowerCase() === "admin"
  ) {
    localStorage.setItem(LOGGED_IN_KEY, true);
    return true;
  }

  return false;
};

const logout = () => {
  localStorage.removeItem(LOGGED_IN_KEY);
};

export const authService = { login, logout, isLoggedIn };
