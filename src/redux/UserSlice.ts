import { createSlice } from '@reduxjs/toolkit'


const initialState = {

}


export const UserSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
  },
  extraReducers(builder) {}
})

export const {} = UserSlice.actions

export default UserSlice.reducer