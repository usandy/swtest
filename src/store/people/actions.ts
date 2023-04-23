import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import { api } from 'api'
import { GetPeopleRequestParams } from '../../types/api/people'

export const fetchPeople = createAsyncThunk('people/fetchPeople', async ({ name, page }: GetPeopleRequestParams) => {
  const result = await api.people.getPeople({ name, page })

  return { ...result }
})

export const resetStore = createAction('people/resetStore')
