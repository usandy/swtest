import { Route, Routes } from 'react-router-dom'
import { links } from 'constants/link'

import { Home } from './Home'
import { Person } from './Person'

const routes = [
  {
    path: links.home,
    component: Home,
  },
  {
    path: links.person,
    component: Person,
  },
]
const Router = () => {
  return (
    <Routes>
      {routes.map((route) => {
        const Component = route.component

        return <Route key={route.path} element={<Component />} path={route.path} />
      })}
    </Routes>
  )
}
export default Router
