import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Funtion to read
export const carRead = createAsyncThunk(
  'carRead', async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("https://682a0815ab2b5004cb359a3c.mockapi.io/database");
      const result = await res.data;
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// add new car
export const carAdd = createAsyncThunk(
  'carAdd', async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post("https://682a0815ab2b5004cb359a3c.mockapi.io/database", data);
      const result = await res.data;
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// delete car
export const carDelete = createAsyncThunk(
  'carDelete', async (id, { rejectWithValue }) => {
    try {
      const res = await axios.delete(`https://682a0815ab2b5004cb359a3c.mockapi.io/database/${id}`);
      const result = await res.data;
      return id;  // return id to filter in reducer
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// update cars
export const carUpdate = createAsyncThunk(
  'carUpdate', async (data, { rejectWithValue }) => {
    try {
      const res = await axios.put(`https://682a0815ab2b5004cb359a3c.mockapi.io/database/${data.id}`, data);
      const result = await res.data;
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const carSlice = createSlice({
  name: "carDetails",
  initialState: {
    cars: [],
    loading: false,
    error: ""
  },
  reducers: {
    // pending
    carPending: (state) => {
      state.loading = true;
    },
    // fulfilled
    carFulfilled: (state, action) => {
      state.loading = false;
      state.cars.push(action.payload);
    },
    // rejected
    carRejected: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      // read
      .addCase(carRead.pending, (state) => {
        state.loading = true;
      })
      .addCase(carRead.fulfilled, (state, action) => {
        state.loading = false;
        state.cars = action.payload;
      })
      .addCase(carRead.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // add
      .addCase(carAdd.pending, (state) => {
        state.loading = true;
      })
      .addCase(carAdd.fulfilled, (state, action) => {
        state.loading = false;
        state.cars.push(action.payload);
      })
      .addCase(carAdd.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // delete
      .addCase(carDelete.pending, (state) => {
        state.loading = true;
      })
      .addCase(carDelete.fulfilled, (state, action) => {
        state.loading = false;
        // Filter out deleted cars by ID
        state.cars = state.cars.filter(car => car.id !== action.payload);
      })
      .addCase(carDelete.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // update
      .addCase(carUpdate.pending, (state) => {
        state.loading = true;
      })
      .addCase(carUpdate.fulfilled, (state, action) => {
        state.loading = false;
        state.cars = state.cars.map(car =>
          car.id === action.payload.id ? action.payload : car
        );
      })
      .addCase(carUpdate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export const { carPending, carFulfilled, carRejected } = carSlice.actions;

export default carSlice.reducer;