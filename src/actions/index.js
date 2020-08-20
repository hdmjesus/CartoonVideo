export const actions = {
  setFavorite: 'setFavorite',
  deleteFavorite: 'deleteFavorite',
  loginRequest: 'loginRequest',
  logoutRequest: 'logoutRequest',
  registerRequest: 'registerRequest',
  getVideoSource: 'getVideoSource',
};

export const setFavorite = (payload) => ({
  type: actions.setFavorite,
  payload,
});

export const deleteFavorite = (payload) => ({
  type: actions.deleteFavorite,
  payload,
});

export const loginRequest = (payload) => ({
  type: actions.loginRequest,
  payload,
});

export const logoutRequest = (payload) => ({
  type: actions.logoutRequest,
  payload,
});

export const registerRequest = (payload) => ({
  type: actions.registerRequest,
  payload,
});

export const getVideoSource = (payload) => ({
  type: actions.getVideoSource,
  payload,
});
