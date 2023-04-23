import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchPerson, updatePerson } from 'store/person/actions'

import { FormFieldsValues } from 'types/forms/person'
import { useAppDispatch, useAppSelector } from 'store/hooks'

export const usePerson = () => {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const { person, isLoading, isError } = useAppSelector((state) => state.person)

  useEffect(() => {
    dispatch(fetchPerson(Number(id)))
  }, [id])

  return {
    person,
    isLoading,
    isError,
  }
}
export const usePersonForm = () => {
  const dispatch = useAppDispatch()
  const [editMode, setEditMode] = useState(false)

  const toggleSetEditMode = () => {
    setEditMode((prev) => !prev)
  }

  const onEditData = (data: FormFieldsValues) => {
    toggleSetEditMode()
    dispatch(updatePerson(data))
  }

  return {
    editMode,
    onEditData,
    toggleSetEditMode,
  }
}
