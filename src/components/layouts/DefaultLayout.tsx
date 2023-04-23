import React, { ReactNode } from 'react'
import { Header } from 'components/common'

type Props = {
  children?: ReactNode
}
export const DefaultLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div className='p-4 flex flex-1'>{children}</div>
    </>
  )
}
