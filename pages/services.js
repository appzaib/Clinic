import Link from "next/link"
import { FaSearch } from "react-icons/fa"





export default function Services(){






    return(
        <div className="flex flex-wrap lg:px-40 ">
            <div className="pt-5 w-1/2">
                <h2 className="text-2xl py-2 font-semibold">Find a Service</h2>
                <p className="py-3 text-left lg:w-2/3 leading-relaxed text-base">At USA Health, we treat people. In doing so, we want to understand your unique needs so our doctors and other providers can design a plan of care specifically for you. Use the field below to search for a specific service, treatment, specialty or provider.</p>
                <input class="w-full  bg-white rounded border focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out fa fa-search border-black" type="text" placeholder="Service, Speciality Condition or Provider Name"
                
                />
            </div>
        <div className="text-left pt-5 px-5 container w-1/2">
            <h2 className="font-semibold text-xl pb-3">Specialties</h2>
            <ul className="flex flex-wrap">
                <div className="w-1/2">
              <li className="py-2 text-cyan-900 font-semibold hover:underline"><Link href="#">Request an Appointment</Link></li>
              <li className="py-2 text-cyan-900 font-semibold hover:underline"><Link href="#">Pay My Bill</Link></li>
              <li className="py-2 text-cyan-900 font-semibold hover:underline"><Link href="#">Access Patient Forms</Link></li>
              <li className="py-2 text-cyan-900 font-semibold hover:underline"><Link href="#">Take a Class</Link></li>
              <li className="py-2 text-cyan-900 font-semibold hover:underline"><Link href="#">Find a Provider</Link></li>
              <li className="py-2 text-cyan-900 font-semibold hover:underline"><Link href="#">Find a Service</Link></li>
              <li className="py-2 text-cyan-900 font-semibold hover:underline"><Link href="#">Access MyUSAHealth</Link></li>
              <li className="py-2 text-cyan-900 font-semibold hover:underline"><Link href="#">Explore Clinical Trials</Link></li>
              <li className="py-2 text-cyan-900 font-semibold hover:underline"><Link href="#">See Featured Stories</Link></li>
                </div> 
                <div className="w-1/2">
                      <li className="py-2 text-cyan-900 font-semibold hover:underline"><Link href="#">Request an Appointment</Link></li>
              <li className="py-2 text-cyan-900 font-semibold hover:underline"><Link href="#">Pay My Bill</Link></li>
              <li className="py-2 text-cyan-900 font-semibold hover:underline"><Link href="#">Access Patient Forms</Link></li>
              <li className="py-2 text-cyan-900 font-semibold hover:underline"><Link href="#">Take a Class</Link></li>
              <li className="py-2 text-cyan-900 font-semibold hover:underline"><Link href="#">Find a Provider</Link></li>
              <li className="py-2 text-cyan-900 font-semibold hover:underline"><Link href="#">Find a Service</Link></li>
              <li className="py-2 text-cyan-900 font-semibold hover:underline"><Link href="#">Access MyUSAHealth</Link></li>
              <li className="py-2 text-cyan-900 font-semibold hover:underline"><Link href="#">Explore Clinical Trials</Link></li>
              <li className="py-2 text-cyan-900 font-semibold hover:underline"><Link href="#">See Featured Stories</Link></li>
               
                    </div>               
               
            </ul>
            <h2 className="text-xl text-gray-700 pt-5 font-semibold">Clinical Trials</h2>
                <p className="py-3">At USA Health, we treat people. In doing so, we want to understand your unique needs so our doctors and other providers can design a plan of care specifically for you. Use the field below to search for a specific service, treatment, specialty or provider.</p>
                <button className="text-white rounded hover:bg-indigo-700 font-bold px-4 py-3 bg-indigo-900">Learn More</button>
            </div>   
               </div>
    )
}