import AppNormal from './pages/AppNormal'
import Maintenance from './pages/Maintenance'

function App() {
  // ✅ 维护开关（true = 显示维护页，false = 正常运行）
  const isMaintenance = import.meta.env.VITE_MAINTENANCE_MODE === 'true'

  if (isMaintenance) {
    // 🔧 如果处于维护模式，整站只显示 Maintenance 页面
    return <Maintenance />
  }

  // ✅ 正常显示 Dashboard + 各页面
  return <AppNormal />
}

export default App
