import { Routes, Route } from 'react-router-dom'
import routes from '../data/routes'

const RightMainPart = () => {
  return (
    <div className=" bg-white rounded-2xl my-2 mr-3 w-5/6">
      <div className="">
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </div>
  )
}

export default RightMainPart
