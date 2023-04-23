import { store } from 'store'
import { getIdByPersonUrl } from 'utils/people'
import { fetchPerson, injectPreloadPerson, updatePerson } from 'store/person/actions'
import { personResponseMock } from './mocks/person'

describe('tests for person store', () => {
  test('check isLoading person', () => {
    store.dispatch(fetchPerson.pending('', 1))
    const personState = store.getState().person

    expect(personState).toEqual({
      isError: false,
      isLoading: true,
      person: null,
    })
  })

  test('check isError person', () => {
    store.dispatch(fetchPerson.rejected(Error('test isError people'), '', 1))

    const personState = store.getState().person

    expect(personState).toEqual({
      isError: true,
      isLoading: false,
      person: null,
    })
  })

  test('check fetch person fulfilled', () => {
    store.dispatch(fetchPerson.fulfilled(personResponseMock, '', 1))

    const personState = store.getState().person

    expect(personState).toEqual({
      isError: false,
      isLoading: false,
      person: { ...personResponseMock, id: getIdByPersonUrl(personResponseMock.url) },
    })
  })

  test('check injectPreloadPerson', () => {
    store.dispatch(injectPreloadPerson(personResponseMock))

    const personState = store.getState().person

    expect(personState).toEqual({
      isError: false,
      isLoading: false,
      person: { ...personResponseMock },
    })
  })

  test('check updatePerson', () => {
    store.dispatch(updatePerson({ height: '123', name: 'Chewbacca' }))

    const personState = store.getState().person

    expect(personState).toEqual({
      isError: false,
      isLoading: false,
      person: { ...personResponseMock, height: '123', name: 'Chewbacca' },
    })
  })
})
