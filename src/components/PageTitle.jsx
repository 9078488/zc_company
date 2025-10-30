const PageTitle = ({ pageTitle }) => {
  return (
    <div className="block">
      <h1 className="font-bold text-2xl tracking-wider text-green-600 mb-3">
        {pageTitle}
      </h1>
      <hr className=" border-gray-300 mb-7" />
    </div>
  )
}

export default PageTitle
