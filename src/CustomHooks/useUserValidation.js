import authAPI from "../Services/AuthServices/authAPI";

export const useUserValidation = () => {
  const currentUser = authAPI.getCurrentUser();
  if (!currentUser) {
    return false;
  }
  if (currentUser) {
    var decodedJwt = parseJwt(currentUser);
    if (decodedJwt.exp * 1000 < Date.now()) {
      authAPI.logout();
      return false;
    }
  }
  return true;
};

const parseJwt = (token) => {
  try {
    return JSON.parse(window.atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};