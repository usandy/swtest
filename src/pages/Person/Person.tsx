import { Loader } from 'components/common'
import { usePerson } from 'services/person'
import { DefaultLayout } from 'components/layouts/DefaultLayout'

import { Information } from './Information'

export const Person = () => {
  const { person, isLoading } = usePerson()

  return (
    <DefaultLayout>
      <div className='flex flex-col space-y-4 w-full'>
        {isLoading && !person ? (
          <div className='flex justify-center items-center h-full'>
            <div className='flex w-16 h-16'>
              <Loader />
            </div>
          </div>
        ) : (
          <div className='hero bg-base-200'>
            <div className='hero-content flex-col lg:flex-row items-start space-x-6'>
              <img src={`/people/${person?.id}.jpg`} alt={person?.name} className='max-w-sm rounded-lg shadow-2xl' />
              {person && <Information person={person} />}
            </div>
          </div>
        )}
      </div>
    </DefaultLayout>
  )
}
