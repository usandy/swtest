import { IPeople } from '../SWapi'

export type GetPeopleRequestParams = {
  name?: string
  page?: number
}

export type GetPeopleResponse = {
  count: number
  next: string | null
  previous: string | null
  results: IPeople[]
}

export type GetPersonRequestParams = {
  id: number
}
export type GetPersonResponse = IPeople
