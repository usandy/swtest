import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import { api } from 'api'
import { IPeople } from 'types/SWapi'

export const fetchPerson = createAsyncThunk('person/fetchPerson', async (id: number) => {
  return await api.people.getPerson({ id })
})

export const injectPreloadPerson = createAction<IPeople>('person/injectPreloadPerson')
export const updatePerson = createAction<Partial<IPeople>>('person/updatePerson')
