import { FaRegHeart, FaMicroscope, FaViruses, FaStethoscope } from "react-icons/fa"



export default function Services(){


  return(
  <div className="flex flex-col items-center">
    <h1 className="text-6xl py-40 font-semibold hover:translate-y-20 duration-1000 text-blue-900">Services</h1>

    <div className="container lg:pl-10 lg:w-full flex flex-wrap justify-center">
      <div className="w-full md:w-1/4 lg:w-1/4 hover:translate-x-20 duration-1000 hover:cursor-pointer ">
        <div className="flex flex-col items-center ">
          <FaRegHeart className="text-6xl text-sky-900"/>
          <h1 className="py-4 text-lg font-semibold text-sky-800 uppercase">cardiology</h1>
        </div>
      </div>

      <div className="w-full md:w-1/4 lg:w-1/4 hover:translate-x-20 duration-1000 hover:cursor-pointer ">
        <div className="flex flex-col items-center ">
          <FaMicroscope className="text-6xl text-sky-900"/>
          <h1 className="py-4 text-lg font-semibold text-sky-800 uppercase">diagnostic</h1>
        </div>
      </div>

      <div className="w-full md:w-1/4 lg:w-1/4 hover:translate-x-20 duration-1000 hover:cursor-pointer ">
        <div className="flex flex-col items-center ">
          <FaViruses className="text-6xl text-sky-900"/>
          <h1 className="py-4 text-lg font-semibold text-sky-800 uppercase">virology</h1>
        </div>
      </div>

      <div className="w-full md:w-1/4 lg:w-1/4 hover:translate-x-20 duration-1000 hover:cursor-pointer ">
        <div className="flex flex-col items-center ">
          <FaStethoscope className="text-6xl text-sky-900"/>
          <h1 className="py-4 text-lg font-semibold text-sky-800 uppercase">therapy</h1>
        </div>
      </div>
    </div>
    <div className="text-center lg:py-20 lg:px-40">
      <span className="uppercase">medical services</span>
      <h1 className="text-6xl text-blue-800 font-bold py-5" >Price And Plans</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga perferendis necessitatibus ratione at perspiciatis sed deleniti magni aspernatur obcaecati reprehenderit rem qui aut accusamus voluptatem, in quibusdam molestiae vitae est.</p>
    </div>
  </div>
)
  }

