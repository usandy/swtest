import { ReactNode } from 'react'

type Props = {
  title?: string
  children: ReactNode
}
export const FormLabel = ({ title, children }: Props) => {
  return (
    <div className='form-control w-full max-w-xs'>
      <label className='label'>
        <span className='label-text text-xl'>{title}</span>
      </label>
      {children}
    </div>
  )
}
