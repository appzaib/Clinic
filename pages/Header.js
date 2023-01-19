import Link from "next/link"
// import { FaSearch } from 'react-icons/fa'



export default function Header(){

    const links = ["Find a Provider", "Locations", "News"]

return(
    <header className="border-b-4 ">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
        <div className="inline-flex md:flex-row">
            <a href="#">

         <img src="https://www.usahealthsystem.com/assets/images/global/logo.png" alt="img" />
            </a>
        </div>
        <div className="justify-right inline-flex md:flex-row">
            <ul className="flex px-3">
                {links.map((links, i)=>(
                    <li className="px-3 py-1 hover:border-b-2 hover:border-cyan-900"><Link className="text-cyan-900 font-bold h-1" href={""}>{links}</Link></li>
                    ))}
            </ul>


        </div>
             <Link className="px-4 py-3 bg-cyan-900 text-white font-bold" href={""}>I Want Too..
                {/* <button>I Want  To..</button> */}
                </Link>
                {/* <FaSearch/> */}
    </div>
    </header>
)
}