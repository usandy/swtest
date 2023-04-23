import { IPeople } from '../../types/SWapi'
import { createReducer } from '@reduxjs/toolkit'
import { fetchPerson, injectPreloadPerson, updatePerson } from './actions'
import { getIdByPersonUrl } from '../../utils/people'

export type PersonState = {
  person: IPeople | null
  isLoading: boolean
  isError: boolean
}

const initialState: PersonState = {
  person: null,
  isError: false,
  isLoading: false,
}

export default createReducer(initialState, (builder) =>
  builder
    .addCase(fetchPerson.fulfilled, (state, action) => {
      state.person = { ...action.payload, id: getIdByPersonUrl(action.payload.url) }
      state.isLoading = false
      state.isError = false
    })
    .addCase(fetchPerson.pending, (state) => {
      state.isError = false
      state.isLoading = true
    })
    .addCase(fetchPerson.rejected, (state) => {
      state.isError = true
      state.isLoading = false
    })
    .addCase(injectPreloadPerson, (state, action) => {
      state.person = action.payload
    })
    .addCase(updatePerson, (state, action) => {
      if (state.person) {
        Object.assign(state.person, action.payload)
      }
    }),
)
