import Link from "next/link"



export default function Mypage(props){


    return(
        <div className="flex px-40">
        <div className="text-center py-5 px-5 container">
            <span className="text-gray-400 text-xl">"I'm a Patient"</span>
            <ul>                
              <li className="py-2 text-center text-cyan-900 font-semibold hover:underline"><Link href="#">Request an Appointment</Link></li>
              <li className="py-2 text-center text-cyan-900 font-semibold hover:underline"><Link href="#">Pay My Bill</Link></li>
              <li className="py-2 text-center text-cyan-900 font-semibold hover:underline"><Link href="#">Access Patient Forms</Link></li>
              <li className="py-2 text-center text-cyan-900 font-semibold hover:underline"><Link href="#">Take a Class</Link></li>
              <li className="py-2 text-center text-cyan-900 font-semibold hover:underline"><Link href="#">Find a Provider</Link></li>
              <li className="py-2 text-center text-cyan-900 font-semibold hover:underline"><Link href="#">Find a Service</Link></li>
              <li className="py-2 text-center text-cyan-900 font-semibold hover:underline"><Link href="#">Access MyUSAHealth</Link></li>
              <li className="py-2 text-center text-cyan-900 font-semibold hover:underline"><Link href="#">Explore Clinical Trials</Link></li>
              <li className="py-2 text-center text-cyan-900 font-semibold hover:underline"><Link href="#">See Featured Stories</Link></li>
               
            </ul>
            </div>   
             <div className="text-center py-5 px-5 container">
            <span className="text-gray-400 text-xl">I'm a Visitor</span>
            <ul>                
              <li className="py-2 text-center text-cyan-900 font-semibold hover:underline"><Link href="#">Get Directions</Link></li>
              <li className="py-2 text-center text-cyan-900 font-semibold hover:underline"><Link href="#">See Events</Link></li>
              <li className="py-2 text-center text-cyan-900 font-semibold hover:underline"><Link href="#">Give to USA Health</Link></li>
              <li className="py-2 text-center text-cyan-900 font-semibold hover:underline"><Link href="#">Volunteer</Link></li>
              <li className="py-2 text-center text-cyan-900 font-semibold hover:underline"><Link href="#">See News at USA Health</Link></li>
              <li className="py-2 text-center text-cyan-900 font-semibold hover:underline"><Link href="#">Learn About USA Health</Link></li>
              <li className="py-2 text-center text-cyan-900 font-semibold hover:underline"><Link href="#">Browse Providers</Link></li>
               
            </ul>
            </div> 
             <div className="text-center py-5 px-5 container">
            <span className="text-gray-400 text-xl">"I'm a Doctor"</span>
            <ul>                
              <li className="py-2 text-center text-cyan-900 font-semibold hover:underline"><Link href="#">Refer a Patient</Link></li>
              <li className="py-2 text-center text-cyan-900 font-semibold hover:underline"><Link href="#">Find a Researcher</Link></li>
              <li className="py-2 text-center text-cyan-900 font-semibold hover:underline"><Link href="#">Explore Clinical Trials</Link></li>
              <li className="py-2 text-center text-cyan-900 font-semibold hover:underline"><Link href="#">Browse Services</Link></li>
               
            </ul>
            </div> 
             <div className="text-center py-5 px-5 container">
            <span className="text-gray-400 text-xl">"I'm a Patient"</span>
            <ul>                
              <li className="py-2 text-center text-cyan-900 font-semibold hover:underline"><Link href="#">Request an Appointment</Link></li>
              <li className="py-2 text-center text-cyan-900 font-semibold hover:underline"><Link href="#">Pay My Bill</Link></li>
              <li className="py-2 text-center text-cyan-900 font-semibold hover:underline"><Link href="#">Access Patient Forms</Link></li>
              <li className="py-2 text-center text-cyan-900 font-semibold hover:underline"><Link href="#">Take a Class</Link></li>
               
            </ul>
            </div>      
        </div>
    )
}