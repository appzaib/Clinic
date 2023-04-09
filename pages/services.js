import { FaRegHeart, FaMicroscope, FaViruses, FaStethoscope, FaAmbulance, FaUserNurse, FaWheelchair } from "react-icons/fa"



export default function Services(){


  return(
  <div className="flex flex-col items-center">
    <h1 className="text-6xl py-20 font-semibold text-blue-900">Services</h1>

    <div className="container lg:w-full flex flex-wrap justify-center space-y-10">
      <div className="w-full md:w-1/4 lg:w-1/4 hover:-translate-y-10 duration-500 hover:cursor-pointer py-10">
        <div className="flex flex-col items-center ">
          <FaRegHeart className="text-6xl text-sky-900"/>
          <h1 className="py-4 text-lg font-semibold text-sky-800 uppercase">cardiology</h1>
        </div>
      </div>

      <div className="w-full md:w-1/4 lg:w-1/4 hover:-translate-y-10 duration-500 hover:cursor-pointer ">
        <div className="flex flex-col items-center ">
          <FaMicroscope className="text-6xl text-sky-900"/>
          <h1 className="py-4 text-lg font-semibold text-sky-800 uppercase">diagnostic</h1>
        </div>
      </div>

      <div className="w-full md:w-1/4 lg:w-1/4 hover:-translate-y-10 duration-500 hover:cursor-pointer ">
        <div className="flex flex-col items-center ">
          <FaViruses className="text-6xl text-sky-900"/>
          <h1 className="py-4 text-lg font-semibold text-sky-800 uppercase">virology</h1>
        </div>
      </div>

      <div className="w-full md:w-1/4 lg:w-1/4 hover:-translate-y-10 duration-500 hover:cursor-pointer ">
        <div className="flex flex-col items-center ">
          <FaStethoscope className="text-6xl text-sky-900"/>
          <h1 className="py-4 text-lg font-semibold text-sky-800 uppercase">therapy</h1>
        </div>
      </div>
    </div>

    
      <div className="flex flex-wrap px-10 py-10 ">
            <div className="lg:w-1/2 items-center flex flex-col justify-center">
                    <img className="w-full h-full rounded" src="nurse.avif" alt="Img" />
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center">
                <div className="lg:px-10">
                <h1 className="lg:text-4xl md:text-2xl text-sky-900 font-bold">When It Comes to Taking Care of Loved Ones</h1>
                <h1 className="lg:text-4xl md:text-2xl text-green-600 py-5 font-bold">We Deliver Quality Caregiving Services</h1>
                <p className="text-lg">Taking care of loved ones is a crucial aspect of maintaining healthy and fulfilling relationships. Whether it's caring for aging parents, supporting a partner through a difficult time, or simply being there for a friend in need, showing compassion and providing practical help can make all the difference. Taking care of loved ones requires patience, empathy, and a willingness to put their needs ahead of our own.</p>
                <p className="text-lg pt-5">We take pride in delivering quality caregiving services to our clients. Our team of compassionate and skilled caregivers is dedicated to providing personalized care that meets the unique needs of each individual we serve. Whether our clients require assistance with daily activities, medical support, or companionship, we are committed to helping them live their lives to the fullest.</p>
                </div>
            </div>
        </div>

    
    <div className="ontainer lg:pl-10 lg:w-full flex flex-wrap justify-center space-y-10 text-center">
      <div className="w-full md:w-1/3 lg:w-1/3">
        <div className="flex flex-col items-center px-10 py-10">
          <FaWheelchair className="text-6xl text-red-500 hover:cursor-pointer"/>
          <h1 className="py-4 text-lg font-semibold text-sky-800 uppercase">Medical Escort</h1>
          <p>At Clinicware, we specialize in providing professional medical escort services to individuals who require assistance during medical travel. Our team of highly trained and experienced medical escorts is committed to ensuring the safety and comfort of our clients throughout their journey.</p>
        </div>
      </div>

      <div className="w-full md:w-1/3 lg:w-1/3  ">
        <div className="flex flex-col items-center px-10">
          <FaAmbulance className="text-6xl text-red-500 hover:cursor-pointer"/>
          <h1 className="py-4 text-lg font-semibold text-sky-800 uppercase">Assisted Living</h1>
          <p>For Assited Living, we are dedicated to providing exceptional assisted living services to our residents. We understand that the decision to move into an assisted living facility can be difficult, which is why we strive to create a warm and welcoming environment that feels like home.</p>
        </div>
      </div>

      
      <div className="w-full md:w-1/3 lg:w-1/3  ">
        <div className="flex flex-col items-center px-10">
          <FaUserNurse className="text-6xl text-red-500 hover:cursor-pointer"/>
          <h1 className="py-4 text-lg font-semibold text-sky-800 uppercase">Nursing Services</h1>
          <p>We are committed to providing exceptional nursing services to our clients. We understand that healthcare needs are unique to each individual, which is why our team of skilled and compassionate nurses works closely with our clients to create personalized care plans.</p>
        </div>
      </div>
    </div>


    <div className="text-center lg:py-20 lg:px-40">
      <span className="uppercase">medical services</span>
      <h1 className="text-6xl text-blue-800 font-bold py-5" >Price And Plans</h1>
      <p className="px-10">We believe that access to high-quality medical services should not come at a high cost. That's why we offer a range of flexible pricing plans that cater to the unique needs and budgets of our clients.</p>
      <div className="w-full flex flex-wrap items-center py-20">
        <div className="lg:w-1/3 w-full  flex flex-wrap flex-col px-1">
          <span className="text-blue-900 text-2xl font-semibold">Silver Pack</span>
          <h1 className="text-amber-500 text-6xl font-extrabold py-5">29.00$</h1>
          <span className="text-sm text-gray-500">Per Month</span>
          <button className="px-10 py-4 mt-10 bg-blue-700 hover:bg-amber-600 duration-300 text-xl text-white font-semibold">Get Now</button>
        </div>
        <div className="lg:w-1/3 w-full flex flex-wrap flex-col px-1">
          <span className="text-blue-900 text-2xl font-semibold">Gold Pack</span>
          <h1 className="text-amber-500 text-6xl font-extrabold py-5">49.00$</h1>
          <span className="text-sm text-gray-500">Per Month</span>
          <button className="px-10 py-4 mt-10 bg-blue-700 hover:bg-amber-600 duration-300 text-xl text-white font-semibold">Get Now</button>
        </div>
        <div className="lg:w-1/3 w-full flex flex-wrap flex-col px-1">
          <span className="text-blue-900 text-2xl font-semibold">Platinum Pack</span>
          <h1 className="text-amber-500 text-6xl font-extrabold py-5">69.00$</h1>
          <span className="text-sm text-gray-500">Per Month</span>
          <button className="px-10 py-4 mt-10 bg-blue-700 hover:bg-amber-600 duration-300 text-xl text-white font-semibold">Get Now</button>
        </div>


      </div>
      

      
    </div>
  </div>
)
  }

