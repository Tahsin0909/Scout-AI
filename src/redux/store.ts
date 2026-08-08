import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "@/features/user/store/user.slice";
import { baseApi } from "@/redux/api/baseApi";
import { resourceReducer } from "@/features/resource/store/resource.slice";
import { admindashboardReducer } from "@/features/admin/store/admindashboard.slice";
import { memberReducer } from "@/features/member/store/member.slice";
import { metricksandchartsReducer } from "@/features/metricksandcharts/store/metricksandcharts.slice";
import { partnershipReducer } from "@/features/partnership/store/partnership.slice";
import { paymentReducer } from "@/features/payment/store/payment.slice";
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
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem(_key: string) {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: string) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const persistConfig = {
  key: "root",
  version: 1,
  whitelist: [],
  storage,
};

const appReducer = combineReducers({
  resource: resourceReducer,
  admindashboard: admindashboardReducer,
  member: memberReducer,
  metricksandcharts: metricksandchartsReducer,
  partnerApplication: partnershipReducer,
  payment: paymentReducer,
  exploreMap: exploreMapReducer,
  affiliation: affiliationReducer,
  articles: articlesReducer,
  user: userReducer,
  auth: authReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

const rootReducer: typeof appReducer = (state, action) => {
  if (state) {
    const validKeys = new Set([
      ...Object.keys(appReducer(undefined, { type: "@@INIT" })),
      "_persist",
    ]);
    const stateKeys = Object.keys(state);
    const hasUnexpectedKeys = stateKeys.some((key) => !validKeys.has(key));
    if (hasUnexpectedKeys) {
      const sanitizedState: Record<string, any> = { ...state };
      stateKeys.forEach((key) => {
        if (!validKeys.has(key)) {
          delete sanitizedState[key];
        }
      });
      return appReducer(sanitizedState as any, action);
    }
  }
  return appReducer(state, action);
};

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
