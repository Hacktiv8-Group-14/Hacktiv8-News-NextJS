import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {HYDRATE} from 'next-redux-wrapper';
import axios from 'axios';

const initialState = {
    isPending: false,
    isSuccess: false,
    errorMessage: '',
    newsList: [],
    totalResult: null
}

export const fetchNews = createAsyncThunk('news/fetchNews', async (API) => {
    try {
        const response = await axios.get(API)
        return response.data
    } catch (e) {
        throw(e)   
    }
})

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        resetErrorMessage: (state) => {
            state.errorMessage = ''
        }
    },
    extraReducers: 
    (builder) => {
        builder
        .addCase(fetchNews.pending, (state) => {
            state.isPending = true
            state.isSuccess = false
            state.errorMessage = ''
        })
        .addCase(fetchNews.rejected, (state, action) => {
            state.isPending = false
            state.isSuccess = false
            state.errorMessage = action.error.message
            state.newsList = []
        })
        .addCase(fetchNews.fulfilled, (state, action) => {
            state.totalResult = action.payload.totalResults
            state.newsList = [...action.payload.articles]
            state.isSuccess = true
            state.isPending = false
            state.errorMessage = ''
        })
    },
    [HYDRATE]: (state, action) => {
        return {
            ...state,
            ...action.payload.news,
        };
    },
})

export const { resetErrorMessage } = newsSlice.actions
export default newsSlice.reducer