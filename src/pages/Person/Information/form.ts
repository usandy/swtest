import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

export const schema = yup.object({
  name: yup.string().required(),
  height: yup.number().required(),
  birth_year: yup.string().required(),
})
export const formScheme = {
  resolver: yupResolver(schema),
}
