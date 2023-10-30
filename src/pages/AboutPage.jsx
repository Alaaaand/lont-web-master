import React from 'react'
import logo from '../assets/lont-gray-logo.png'
const AboutPage = () => {
  return (
      <div className="flex flex-col justify-center items-center">
          {/* title */}

          <h1 className=" mt-5 font-semibold text-xl text-gray-700">Lont Company</h1>

          {/* content */}
          <p className="text-gray-600 text-sm mt-10 mx-5 text-start text">
          Welcome to Lont Company, your ultimate destination for all your electronic home appliances needs! At Lont Company, we are dedicated to enriching your home living experience with the latest and most cutting-edge gadgets. Our meticulously curated collection features a wide array of state-of-the-art products, ranging from smart home devices and energy-efficient appliances to top-notch entertainment systems. Whether you seek to modernize your kitchen with premium appliances, create a seamlessly connected home environment, or elevate your entertainment setup, Lont Company has the perfect solutions for you. Our mission revolves around delivering unparalleled customer satisfaction, backed by exceptional service, competitive prices, and a seamless online shopping experience. Embark on this thrilling journey with us as we redefine the way you interact with technology in your home. Welcome to the future of home living with Lont Company!
          </p>

          {/* logo */}
          <img src={logo} alt="logo" className="w-28 sm:w-20 lg:w-24 opacity-50 mt-10" />
      </div>
  )
}

export default AboutPage