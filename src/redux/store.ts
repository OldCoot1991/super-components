import { configureStore } from '@reduxjs/toolkit'
import userReducer from './UserSlice'
import themeReducer from './ThemeSlice'
import fontsizeReducer from './FontSize' 

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    fontsize: fontsizeReducer,
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store;
