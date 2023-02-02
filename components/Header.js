import Link from 'next/link';
// import { FaSearch } from 'react-icons/fa';



export default function Header() {

    const links = [{ href: '/services', title: 'Services' }, { href: '/locations', title: 'Locations' }, { href: '/contact', title: 'Contact Us' }]
    return (
        <header class="text-gray-600">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href={"/"} class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img className='h-7' src="logo svg.svg" alt="img"></img>

                </Link>

                <ul class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    {links.map((links, i) => (
                        <Link href={links.href} class="mr-10 hover:text-blue-500 py-3 font-bold cursor-pointer border-cyan-900">{links.title}</Link>

                    ))}
                </ul>

                <Link href={"/appointment"} class="rounded mr-3 inline-flex items-center bg-cyan-900 border-0 py-3 px-5 focus:outline-none hover:bg-cyan-700 text-white font-bold mt-4 md:mt-0">Book an Appointment

                </Link>
                {/* <FaSearch fontSize={40} color="blue" cursor={"pointer"}/> */}
            </div>
        </header>
    )
}