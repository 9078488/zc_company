import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'
import JoinUs from '../pages/JoinUs'
import Contact from '../pages/Contact'

// 引入图标（react-icons）
import { AiFillHome } from 'react-icons/ai'
import { FaInfoCircle, FaUserTie } from 'react-icons/fa'
import { MdProductionQuantityLimits } from 'react-icons/md'
import { HiOutlineMail } from 'react-icons/hi'

const routes = [
  { path: '/', element: <Home />, name: '首页', icon: AiFillHome },
  { path: '/about', element: <About />, name: '关于峥程', icon: FaInfoCircle },
  {
    path: '/products',
    element: <Products />,
    name: '产品品牌',
    icon: MdProductionQuantityLimits,
  },
  {
    path: '/recruit',
    element: <JoinUs />,
    name: '加入我们',
    icon: FaUserTie, // ✅ 更贴合招聘主题
  },
  {
    path: '/contact',
    element: <Contact />,
    name: '联系我们',
    icon: HiOutlineMail,
  },
]

export default routes
