import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCampers, fetchCamperById } from "./operation.js";

export const camperSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    camper: {},
    total: 0,
    isLoading: false,
    isError: null,
    favorites: [],
    page: 1,
    filters: {
      location: "",
      form: {},
      equipment: {},
    },
  },
  reducers: {
    setFilters: (state, action) => {
      state.filters = {
        ...state.filters,
        ...action.payload,
      };
    },
    resetFilters: (state) => {
      state.filters = {
        location: "",
        form: "",
        equipment: {},
      };
    },
    setPage: (state, action) => {
      console.log(action.payload);
      state.page = action.payload;
    },
    addToFavorites(state, action) {
      const isFavorite = state.favorites.some(
        (favorite) => favorite.id === action.payload.id
      );
      if (!isFavorite) {
        state.favorites.push(action.payload);
      }
    },
    removeFromFavorites(state, action) {
      state.favorites = state.favorites.filter(
        (favorite) => favorite.id !== action.payload.id
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCampers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllCampers.fulfilled, (state, action) => {
        if (state.page === 1) {
          state.items = action.payload.items;
        } else {
          state.items = [...state.items, ...action.payload.items];
        }

        state.total = action.payload.total;
        state.isLoading = false;
      })
      .addCase(fetchAllCampers.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(fetchCamperById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.camper = action.payload;
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(fetchCamperById.rejected, (state) => {
        state.isError = null;
      });
  },
});

export const {
  setFilters,
  resetFilters,
  setPage,
  addToFavorites,
  removeFromFavorites,
} = camperSlice.actions;
export const camperReducer = camperSlice.reducer;
