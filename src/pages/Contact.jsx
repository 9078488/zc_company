import PageTitle from '../components/PageTitle'
import companyInfo from '../data/companyInfo'
import { SiNamebase } from 'react-icons/si'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { FaLocationDot } from 'react-icons/fa6'
import RightPageLayout from '../components/RightPageLayout'

const Contact = () => {
  return (
    <RightPageLayout>
      <div className="">
        <PageTitle pageTitle="联系我们" />
        {/* contact info */}
        <div className="space-y-2">
          {/* company name */}
          <div className="flex flex-row items-center">
            <SiNamebase className="mr-3 text-green-600" />
            <h2 className="text-gray-700 text-base">公司名称：</h2>
            <p className="text-gray-700 text-base">
              {companyInfo.company_name}
            </p>
          </div>

          {/* company telephone */}
          <div className="flex flex-row items-center">
            <BsFillTelephoneFill className="mr-3 text-green-600" />
            <h2 className="text-gray-700 text-base">电话：</h2>
            <p className="text-gray-700 text-base">{companyInfo.tel}</p>
          </div>

          {/* company E-mail */}
          <div className="flex flex-row items-center">
            <MdEmail className="mr-3 text-green-600" />
            <h2 className="text-gray-700 text-base">Email：</h2>
            <p className="text-gray-700 text-base">{companyInfo.email}</p>
          </div>

          {/* company address */}
          <div className="flex flex-row items-center">
            <FaLocationDot className="mr-3 text-green-600" />
            <h2 className="text-gray-700 text-base">地址：{companyInfo.add}</h2>
          </div>
        </div>
      </div>
    </RightPageLayout>
  )
}

export default Contact
