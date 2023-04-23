import { store } from 'store'
import { initialState } from 'store/people/reducer'
import { fetchPeople, resetStore } from 'store/people/actions'
import { getIdByPersonUrl } from 'utils/people'

import { peopleListResponseMock } from './mocks/people'

describe('tests for people store', () => {
  test('check people utils', () => {
    const url = 'https://swapi.dev/api/people/999/'

    expect(getIdByPersonUrl(url)).toEqual(999)
  })

  test('check isLoading people', () => {
    store.dispatch(fetchPeople.pending('', {}))

    const peopleStore = store.getState().people

    expect(peopleStore).toEqual({
      list: [],
      isLoading: true,
      isError: false,
      count: 0,
    })
  })

  test('check isError people', () => {
    store.dispatch(fetchPeople.rejected(Error('test isError people'), '', {}))

    const peopleStore = store.getState().people

    expect(peopleStore).toEqual({
      list: [],
      isLoading: true,
      isError: true,
      count: 0,
    })
  })

  test('check fetch people fulfilled', () => {
    store.dispatch(fetchPeople.fulfilled(peopleListResponseMock, '1', { name: '' }))

    const peopleStore = store.getState().people

    expect(peopleStore).toEqual({
      list: peopleListResponseMock.results.map((person) => ({ ...person, id: getIdByPersonUrl(person.url) })),
      isLoading: false,
      isError: false,
      count: peopleListResponseMock.count,
    })
  })

  test('resetStore', () => {
    store.dispatch(resetStore())

    const peopleStore = store.getState().people

    expect(peopleStore).toEqual(initialState)
  })
})
