import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from '.';
import { IBlog } from "../pages/Blog";

interface IBlogState {
    listBlog: IBlog[] | null;
  }
interface IBlogsState {
    blogs: IBlogState;
  }

const initialState: IBlogsState = {
    blogs: {
        listBlog: []
    }
}

export const blogsSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        setBlogs: (state, action: PayloadAction<IBlog[]>) => {
            state.blogs.listBlog = action.payload
        }
    }
})

export const { setBlogs } = blogsSlice.actions;
export const selectBlogs = (state: RootState) => state.blogs;
export default blogsSlice.reducer;