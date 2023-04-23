import { createReducer } from '@reduxjs/toolkit'
import { IPeople } from 'types/SWapi'
import { fetchPeople, resetStore } from './actions'
import { getIdByPersonUrl } from '../../utils/people'

export type PeopleState = {
  list: IPeople[]
  count: number
  isLoading: boolean
  isError: boolean
}

export const initialState: PeopleState = {
  list: [],
  isLoading: false,
  isError: false,
  count: 0,
}

export default createReducer(initialState, (builder) =>
  builder
    .addCase(fetchPeople.fulfilled, (state, action) => {
      state.count = action.payload.count
      state.isLoading = false
      state.isError = false

      state.list = action.payload.results.map((person) => {
        return { ...person, id: getIdByPersonUrl(person.url) }
      })
    })
    .addCase(fetchPeople.pending, (state) => {
      state.isLoading = true
    })
    .addCase(fetchPeople.rejected, (state) => {
      state.isError = true
    })
    .addCase(resetStore, () => {
      return initialState
    }),
)
