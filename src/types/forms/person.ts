import { IPeople } from '../SWapi'

export type FormFieldsValues = Pick<IPeople, 'name' | 'height' | 'birth_year'>
