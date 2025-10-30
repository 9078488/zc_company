import { FaWrench } from 'react-icons/fa6'
import companyInfo from '../data/companyInfo'

export default function Maintenance() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-6">
      {/* Icon */}
      <div className="bg-white border rounded-full p-6 mb-10">
        <FaWrench className="h-12 w-12 text-yellow-500" />
      </div>

      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-700 mb-2 tracking-widest">
        网站正在维护中...
      </h1>

      {/* Footer info */}
      <p className="text-gray-400 text-xs mt-10">
        © {new Date().getFullYear()} {companyInfo.company_name}
      </p>
    </div>
  )
}
