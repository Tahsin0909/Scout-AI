import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "@/features/user/store/user.slice";
import { baseApi } from "@/redux/api/baseApi";
import { exploreMapReducer } from "@/features/explore-map/store/explore-map.slice";
import { affiliationReducer } from "@/features/affiliation/store/affiliation.slice";
import { articlesReducer } from "@/features/articles/store/articles.slice";
import { authReducer } from "@/features/auth/store/auth.slice";

import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  whitelist: [],
  storage,
};

const rootReducer = combineReducers({
  exploreMap: exploreMapReducer,
  affiliation: affiliationReducer,
  articles: articlesReducer,
  user: userReducer,
  auth: authReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(baseApi.middleware)
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
