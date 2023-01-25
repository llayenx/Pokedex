import { configureStore } from '@reduxjs/toolkit'
import userNameSlice from './slices/userName.Slice'

export default configureStore({
  reducer: {
    userName: userNameSlice

	}
})