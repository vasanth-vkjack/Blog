import { configureStore } from "@reduxjs/toolkit";
import blogreducer from "../slices/blogSlice";

const store = configureStore({
  reducer: {
    blogs: blogreducer,
  },
});

export default store;
