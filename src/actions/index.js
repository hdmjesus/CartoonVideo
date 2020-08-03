export const actions = {
  setFavorite: 'setFavorite',
  deleteFavorite: 'deleteFavorite',
};

export const setFavorite = (payload) => ({
  type: actions.setFavorite,
  payload,
});

export const deleteFavorite = (payload) => ({
  type: actions.deleteFavorite,
  payload,
});
