import { Link, useLocation } from 'react-router-dom'
import routes from '../data/routes.jsx'
import zhengcheng_logo from '../assets/zhengcheng_logo.png'
import Footer from './Footer' // ✅ 引入 Footer

const Sidebar = () => {
  const location = useLocation()

  return (
    <div className="flex flex-col items-start justify-between w-1/6 min-h-screen bg-gray-200 pt-8 pl-4 pr-2 ">
      {/* 上半部分：Logo + 导航 */}
      <div>
        {/* ✅ 点击 Logo 区域跳转首页 */}
        <Link to="/" className="flex items-center gap-2 mb-10 cursor-default">
          <img
            src={zhengcheng_logo}
            alt="上海峥程"
            className="pl-2.5 h-6 w-auto object-contain"
          />
          <h1 className="font-extrabold text-2xl tracking-wider text-green-600">
            峥程
          </h1>
        </Link>

        {/* 导航区 */}
        <nav className="flex flex-col w-full space-y-2">
          {routes.map((route) => {
            const isActive = location.pathname === route.path
            const Icon = route.icon

            return (
              <Link
                key={route.path}
                to={route.path}
                className={`flex items-center gap-3 w-full px-4 py-2 rounded-lg transition-all duration-200
                  ${
                    isActive
                      ? 'bg-green-600 text-white font-semibold shadow-sm'
                      : 'text-gray-700 hover:bg-green-100 hover:text-green-700'
                  }`}
              >
                {Icon && <Icon className="text-xl" />}
                <span>{route.name}</span>
              </Link>
            )
          })}
        </nav>
      </div>

      {/* 下半部分：Footer */}
      <Footer />
    </div>
  )
}

export default Sidebar
