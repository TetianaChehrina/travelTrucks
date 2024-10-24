import { configureStore } from "@reduxjs/toolkit";
import { camperReducer } from "./campers/camperSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const campersPersistConfig = {
  key: "campers",
  storage,
  whitelist: ["favorites"],
};

const persistCampersReducer = persistReducer(
  campersPersistConfig,
  camperReducer
);

export const store = configureStore({
  reducer: {
    campers: persistCampersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export default store;

export const persistor = persistStore(store);
