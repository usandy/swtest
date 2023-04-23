import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react'

import { BASE_NUMBERS } from 'constants/numbers'
import { fetchPeople, resetStore } from 'store/people/actions'
import { injectPreloadPerson } from 'store/person/actions'
import { useAppDispatch, useAppSelector } from 'store/hooks'

import { IPeople } from 'types/SWapi'
import { UseHomePeopleProps } from 'types/pages/home'
import { debounce } from '../../utils/debounce'

const API_LIMIT = 10
export const useHomePeople = (): UseHomePeopleProps => {
  const [currentPage, setCurrentPage] = useState(1)

  const [filterNameValue, setFilterNameValue] = useState('')

  const dispatch = useAppDispatch()
  const { list, count, isLoading } = useAppSelector((state) => state.people)

  useEffect(() => {
    const defaultParams = { page: currentPage }
    const params = filterNameValue ? { ...defaultParams, name: filterNameValue } : defaultParams

    dispatch(fetchPeople(params))
  }, [currentPage, filterNameValue])

  useEffect(() => {
    return () => {
      dispatch(resetStore())
    }
  }, [])

  const onInjectPersonData = (person: IPeople) => {
    if (person) {
      dispatch(injectPreloadPerson(person))
    }
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterNameValue(e.target.value)
    setCurrentPage(1)
  }

  const onChangeFilter = useCallback(debounce(onChangeHandler, BASE_NUMBERS.DEBOUNCE_DELAY), [])

  const onNextPage = () => setCurrentPage((prev) => prev + 1)

  const onPrevPage = () => setCurrentPage((prev) => prev - 1)

  const isDisabledPrev = useMemo(() => {
    return currentPage - 1 <= 0 || isLoading
  }, [currentPage, isLoading])

  const isDisabledNext = useMemo(() => {
    return (currentPage + 1) * API_LIMIT > count || isLoading
  }, [currentPage, count, isLoading])

  return {
    people: list,
    isLoading,
    onNextPage,
    onPrevPage,
    currentPage,
    onChangeFilter,
    isDisabledPrev,
    isDisabledNext,
    onInjectPersonData,
  }
}
