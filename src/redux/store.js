import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/reducers/theme";
import projectReducer from "./features/reducers/project";
import storage from "redux-persist/lib/storage/";
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";

const reducers = combineReducers({
  theme: themeReducer,
  project: projectReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: "theme",
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});
