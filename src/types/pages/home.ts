import { ChangeEvent } from 'react'
import { IPeople } from '../SWapi'

export type UseHomePeopleProps = {
  currentPage: number
  isLoading: boolean
  isDisabledPrev: boolean
  isDisabledNext: boolean
  people: IPeople[]
  onNextPage: VoidFunction
  onPrevPage: VoidFunction
  onInjectPersonData: (person: IPeople) => void
  onChangeFilter: (e: ChangeEvent<HTMLInputElement>) => void
}
