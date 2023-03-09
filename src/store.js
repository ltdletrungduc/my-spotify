import { configureStore } from "@reduxjs/toolkit";
import appReducer from "@redux/app.slice";

const rootReducer = {
  app: appReducer,
};

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
