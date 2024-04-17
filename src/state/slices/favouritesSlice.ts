import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface FavouritesState {
  value: FavouritesItem[];
}

interface FavouritesItem {
  idMeal: string;
  name: string;
}

const initialState: FavouritesState = {
  value: [],
};

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addToFavourites: (state, action: PayloadAction<FavouritesItem>) => {
      state.value.push(action.payload);
    },
    removeFromFavourites: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((obj) => obj.idMeal !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToFavourites, removeFromFavourites } = favouritesSlice.actions;

export default favouritesSlice.reducer;
