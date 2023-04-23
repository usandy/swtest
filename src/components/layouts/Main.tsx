import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}
export const Main = ({ children }: Props) => {
  return <div className='flex flex-col min-h-screen p-2'>{children}</div>
}
