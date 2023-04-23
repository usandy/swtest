import { FormLabel, Loader } from 'components/common'
import { useHomePeople } from 'services/people'
import { DefaultLayout } from 'components/layouts/DefaultLayout'

import { PersonCard } from './PersonCard'

export const Home = () => {
  const {
    people,
    isLoading,
    onNextPage,
    onPrevPage,
    currentPage,
    onChangeFilter,
    isDisabledPrev,
    isDisabledNext,
    onInjectPersonData,
  } = useHomePeople()

  return (
    <DefaultLayout>
      <div className='flex flex-col space-y-4 w-full'>
        <h1 className='text-3xl font-bold underline'>People</h1>
        <div className='flex'>
          <FormLabel title='Filter by name'>
            <input
              onChange={onChangeFilter}
              className='input input-bordered w-full max-w-xs'
              type='text'
              placeholder='Type here'
            />
          </FormLabel>
        </div>

        {isLoading ? (
          <div className='flex w-full justify-center h-full items-center py-20'>
            <div className='flex w-16 h-16'>
              <Loader />
            </div>
          </div>
        ) : (
          <>
            <div className='grid w-full gap-10 mt-8 2xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1'>
              {people?.map((person) => (
                <PersonCard key={person.name} {...person} onInjectPersonData={onInjectPersonData} />
              ))}
            </div>

            {!!people?.length && (
              <div className='flex w-full justify-center py-6'>
                <div className='btn-group'>
                  <button className='btn' disabled={isDisabledPrev} onClick={onPrevPage}>
                    «
                  </button>
                  <button className='btn'>Page {currentPage}</button>
                  <button className='btn' disabled={isDisabledNext} onClick={onNextPage}>
                    »
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </DefaultLayout>
  )
}
