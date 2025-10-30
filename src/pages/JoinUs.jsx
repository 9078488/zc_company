import PageTitle from '../components/PageTitle'
import RightPageLayout from '../components/RightPageLayout'
import joinUsPositions from '../data/joinus'

const JoinUs = () => {
  return (
    <RightPageLayout>
      <div>
        <PageTitle pageTitle="加入我们" />

        <div className="mt-6 space-y-6">
          {joinUsPositions.map((position) => (
            <div
              key={position.id}
              className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* 职位标题 */}
              <h3 className="text-xl font-semibold text-green-600 mb-2">
                {position.title}
              </h3>

              {/* 岗位职责 */}
              {position.responsibilities && (
                <div className="mb-2">
                  <p className="font-semibold text-gray-700">岗位职责：</p>
                  {position.responsibilities.map((item, idx) => (
                    <p key={idx} className="text-gray-700 ml-4">
                      {item}
                    </p>
                  ))}
                </div>
              )}

              {/* 任职要求 */}
              {position.requirements && (
                <div className="mb-2">
                  <p className="font-semibold text-gray-700">任职要求：</p>
                  {position.requirements.map((item, idx) => (
                    <p key={idx} className="text-gray-700 ml-4">
                      {item}
                    </p>
                  ))}
                </div>
              )}

              {/* 工作地点 */}
              {position.location && (
                <p className="font-semibold text-gray-700 mt-2">
                  工作地点：
                  <span className="font-normal text-gray-600">
                    {position.location}
                  </span>
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </RightPageLayout>
  )
}

export default JoinUs
