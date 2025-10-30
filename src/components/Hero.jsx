import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import brands from '../data/brands'

const Hero = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'ease-in-out',
    pauseOnHover: true,
    pauseOnFocus: true,
  }

  return (
    <div className="p-20 relative overflow-hidden  bg-green-50 flex justify-center items-center rounded-t-2xl">
      {/* hero section */}
      <div className="container pb-0 ">
        <Slider {...settings}>
          {brands.map((brand) => (
            <div key={brand.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 sm:pd-4">
                {/* text content section */}
                <div className="flex flex-col justify-center sm:gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1 className="text-lg sm:text-4xl text-green-600 font-bold">
                    {brand.name}
                  </h1>
                  <p className="text-sm text-gray-700">{brand.description}</p>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div className="relative z-10">
                    <img
                      src={brand.brand_logo}
                      alt=""
                      className="w-[150px] h-[150px] sm:h-[225px] sm:w-[225px] sm:scale-105 lg:scale-120 object-contain mx-auto rounded-lg my-5"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Hero
