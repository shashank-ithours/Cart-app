import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "https://fakestoreapi.com/products";

export const fetchItems = createAsyncThunk("item/fetchItems", async () => {
  let data = await fetch(url);
  data = await data.json();
  return data;
});
export const itemSlice = createSlice({
  name: "item",
  
  initialState: {
    items: [],
    loading: true,
    error: "",
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      console.log(action);
      state.loading = false;
      state.items = action.payload;
      state.error = "";
    });
    builder.addCase(fetchItems.rejected, (state, action) => {
      state.loading = false;
      state.items = [];
      state.error = action.error.message;
    });
  },
});

export default itemSlice.reducer;
