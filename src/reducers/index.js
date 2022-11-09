export const initialState = {
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
};

export const favoriteReducer = (state, action) => {
  switch (action.type) {
  case 'ADD_TO_FAVORITE':
    return {
      ...state,
      favorites: [...state.favorites, action.payload],
    };

  case 'DELETE_TO_FAVORITE':
    return {
      ...state,
      favorites: state.favorites.filter(
        (favorite) => favorite.id !== action.payload,
      ),
    };

  default:
    return state;
  }
};
