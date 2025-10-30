import { useState } from 'react'
import PageTitle from '../components/PageTitle'
import brands from '../data/brands'
import RightPageLayout from '../components/RightPageLayout'

const Products = () => {
  // 当前选中的品牌
  const [activeTab, setActiveTab] = useState(brands[0].id)

  // 获取当前品牌信息
  const currentBrand = brands.find((brand) => brand.id === activeTab)

  return (
    <RightPageLayout>
      <div>
        {/* 页面标题 */}
        <PageTitle pageTitle="产品品牌" />

        {/* Tabs */}
        <div className="flex space-x-10 mb-4">
          {brands.map((brand) => (
            <button
              key={brand.id}
              onClick={() => setActiveTab(brand.id)}
              className={`pb-2 text-sm font-medium  ${
                activeTab === brand.id
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              {brand.name}
            </button>
          ))}
        </div>

        {/* 品牌信息展示区 */}
        <div className="mb-3">
          <div className="bg-gray-50 rounded-xl p-6 shadow-sm w-full">
            {/* 产品名称 */}
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
              {currentBrand.name}
            </h2>
            {/* 产品图片 */}
            <img
              src={currentBrand.image}
              alt={currentBrand.name}
              className="rounded-lg h-100 w-auto mb-8"
            />
            {/* 品牌描述 */}
            <div className="text-base text-gray-700 space-y-2">
              {currentBrand.details.map((detail, index) => (
                <p key={index}>{detail}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </RightPageLayout>
  )
}

export default Products
