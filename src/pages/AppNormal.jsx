import RightMainPart from '../components/RightMainPart'
import Sidebar from '../components/Sidebar'

const AppNormal = () => {
  return (
    <div className="flex flex-row min-h-screen bg-gray-200">
      <Sidebar />
      <RightMainPart />
    </div>
  )
}

export default AppNormal
