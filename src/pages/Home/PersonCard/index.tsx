import { Link } from 'react-router-dom'

import { IPeople } from 'types/SWapi'
import { links } from 'constants/link'
import { UseHomePeopleProps } from 'types/pages/home'

type Props = IPeople & Pick<UseHomePeopleProps, 'onInjectPersonData'>
export const PersonCard = ({ onInjectPersonData, ...person }: Props) => {
  const { name, id } = person

  return (
    <div key={name} className='card-compact lg:card-side bg-base-200 shadow-xl'>
      <div className='flex justify-center mt-4'>
        <img src={`/people/${id}.jpg`} alt={name} />
      </div>
      <div className='card-body'>
        <h2 className='card-title justify-center'>
          {name} (id: {id})
        </h2>
        <div className='card-actions justify-end'>
          <Link to={links.person.replace(':id', String(id))}>
            <button onClick={() => onInjectPersonData(person)} className='btn btn-primary'>
              Preview
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
