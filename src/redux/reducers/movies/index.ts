/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createReducer } from '@reduxjs/toolkit'
import { findMovies } from '../../middlewares'

type MovieState = {
  data: any[]
  totalResults: number | null
  loading: boolean
  error: any
}

const initialState: MovieState = {
  data: [],
  totalResults: null,
  loading: false,
  error: {}
}

const moviesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(findMovies.fulfilled, (state, { payload }) => {
      if (payload?.Error) {
        state.loading = false
        return
      }
      state.data = [...state.data, ...payload?.Search]
      state.totalResults = Number(payload?.totalResults)
      state.loading = false
    })
    .addCase(findMovies.pending, (state) => {
      state.loading = true
    })
    .addCase(findMovies.rejected, (state, { payload }) => {
      state.error = payload
      state.totalResults = null
    })
})

export { moviesReducer }
