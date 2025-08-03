import { configureStore } from "@reduxjs/toolkit";
import carSlice from "../Slice/carSlice";


export const store = configureStore({
    reducer:{
      cars: carSlice
    }
})