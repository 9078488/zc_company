import companyInfo from '../data/companyInfo'

const CompanyIntro = () => {
  return (
    <section className="mx-auto px-6 py-12 text-gray-700 leading-relaxed">
      <div className="space-y-5 text-justify">
        {companyInfo.introductions.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}

export default CompanyIntro
