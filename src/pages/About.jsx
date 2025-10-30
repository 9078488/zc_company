import PageTitle from '../components/PageTitle'
import RightPageLayout from '../components/RightPageLayout'
import companyInfo from '../data/companyInfo'

const About = () => {
  return (
    <RightPageLayout>
      <div>
        <PageTitle pageTitle="关于峥程" />
        <div className="text-base text-gray-700 space-y-2">
          {companyInfo.introductions.map((introduction, index) => (
            <p key={index}>{introduction}</p>
          ))}
        </div>
      </div>
    </RightPageLayout>
  )
}

export default About
