import Link from "next/link"



export default function Location(){

return(
<>
<div className="flex flex-wrap lg:px-40">
            <div className="pt-5 w-1/2 border-r-2">
                <h2 className="text-2xl py-2 font-semibold">Facilities</h2>
                <div className="py-2 pr-3">
                    <a href="#">
                        <img className="min-w-full h-40" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0jHPtEXMrY2MO1ztSoNPuZlvFhO6Brcn8FA&usqp=CAU" alt="img" />                
                        </a>
                </div>
                <div className="py-2 pr-3">
                    <a href="#">
                        <img className="min-w-full h-40" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpO7CGpDwBxapIk6_es8P3t2B4hwV0hqwXYw&usqp=CAU" alt="img"/>
                        </a>
                </div>
                <div className="py-2 pr-3">
                    <a href="#">
                        <img className="min-w-full h-40" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAW-SGaMYojcQBU7xTtECeeHDjnbWJlDPaaw&usqp=CAU" alt="img" />                
                        </a>
                </div>
                <div className="py-2 pr-3">
                    <a href="#">
                        <img className="min-w-full h-40" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_21AuibBSVxXrFR0o6EP0mYXPDHj8cBsmJg&usqp=CAU" alt="img" />                
                        </a>
                </div>
                
            </div>
        <div className="text-left pt-5 px-5 container w-1/2 ">
            <h2 className="font-semibold text-xl pb-3">Physicians Group Clinics</h2>
            <ul className="flex flex-wrap">
                <div className="w-1/2 ">
              {/* <li className="py-2 text-cyan-900 font-semibold hover:underline"><Link href={"#"}>Request an Appointment</Link></li> */}
              <li className="py-2 text-cyan-900 font-semibold hover:underline"><Link href={"#"}>Pay My Bill</Link></li>
              <li className="py-2 text-cyan-900 font-semibold hover:underline"><Link href={"#"}>Access Patient Forms</Link></li>
              <li className="py-2 text-cyan-900 font-semibold hover:underline"><Link href={"#"}>Take a Class</Link></li>
              <li className="py-2 text-cyan-900 font-semibold hover:underline"><Link href={"#"}>Find a Provider</Link></li>
              <li className="py-2 text-cyan-900 font-semibold hover:underline"><Link href={"#"}>Find a Service</Link></li>
              <li className="py-2 text-cyan-900 font-semibold hover:underline"><Link href={"#"}>Access MyUSAHealth</Link></li>
              <li className="py-2 text-cyan-900 font-semibold hover:underline"><Link href={"#"}>Explore Clinical Trials</Link></li>
              <li className="py-2 text-cyan-900 font-semibold hover:underline"><Link href={"#"}>See Featured Stories</Link></li>
                </div> 
                <div className="w-1/2">
                      <li className="py-2 text-cyan-900 font-semibold hover:underline"><Link href={"#"}>Request an Appointment</Link></li>
              <li className="py-2 text-cyan-900 font-semibold hover:underline"><Link href={"#"}>Pay My Bill</Link></li>
              <li className="py-2 text-cyan-900 font-semibold hover:underline"><Link href={"#"}>Access Patient Forms</Link></li>
              <li className="py-2 text-cyan-900 font-semibold hover:underline"><Link href={"#"}>Take a Class</Link></li>
              <li className="py-2 text-cyan-900 font-semibold hover:underline"><Link href={"#"}>Find a Provider</Link></li>
              <li className="py-2 text-cyan-900 font-semibold hover:underline"><Link href={"#"}>Find a Service</Link></li>
              <li className="py-2 text-cyan-900 font-semibold hover:underline"><Link href={"#"}>Access MyUSAHealth</Link></li>
              <li className="py-2 text-cyan-900 font-semibold hover:underline"><Link href={"#"}>Explore Clinical Trials</Link></li>
              <li className="py-2 text-cyan-900 font-semibold hover:underline"><Link href={"#"}>See Featured Stories</Link></li>
               
                    </div>               
               
            </ul>
            <h2 className="text-xl text-gray-700 pt-5 font-semibold">Clinical Trials</h2>
                <p className="py-3">At USA Health, we treat people. In doing so, we want to understand your unique needs so our doctors and other providers can design a plan of care specifically for you. Use the field below to search for a specific service, treatment, specialty or provider.</p>
                <button className="text-white rounded hover:bg-indigo-700 font-bold px-4 py-3 bg-indigo-900">Learn More</button>
            </div>   
               </div>
</>

)

}