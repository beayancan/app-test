import { configureStore } from "@reduxjs/toolkit";

import dogsReducer from "./reducers/dogs/dogsSlice";
import filterReducer from "./reducers/selectedBreed/filtersSlice";

export default configureStore({
  reducer: {
    dogs: dogsReducer,
    filters: filterReducer,
  }
});
