import { configureStore } from '@reduxjs/toolkit'
import itemSlice from './Counterslice'

export default configureStore({
  reducer: {itemSlice}
})