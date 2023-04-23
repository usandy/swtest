import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='flex bg-base-100 border-accent'>
      <Link to='/' className='btn btn-ghost normal-case text-xl'>
        Main
      </Link>
    </div>
  )
}
