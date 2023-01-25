import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const userNameSlice = createSlice({
		name: 'userName',
    initialState: "Layenx",
    reducers: {
      changeUserName : (state, action) => {
        const input = action.payload
        return input
      }
        
    }
})

export const { changeUserName } = userNameSlice.actions;

export default userNameSlice.reducer;