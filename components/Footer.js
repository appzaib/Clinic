import Link from "next/link"
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';


function Footer() {
  return (
    <footer class="text-gray-600">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap md:text-left text-center order-first">
          <div class="lg:w-2/6 md:w-1/2 w-full object-center">
            <div className="flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
              <Link href={"/"} className="flex md:justify-start justify-center mt-4">
                <img src="/logo svg.svg" alt="" width="240px" height="120px" />
              </Link>
            </div>
          </div>
          <div class="lg:w-1/6 md:w-1/2 w-full lg:text-lg">
            <nav class="list-none mb-5">
              <li>
                <Link href={"about"} class="text-gray-600 hover:text-gray-800">About Us</Link>
              </li>
              <li>
                <Link href={""} class="text-gray-600 hover:text-gray-800">News</Link>
              </li>
              <li>
                <Link href={""} class="text-gray-600 hover:text-gray-800">Events</Link>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/6 md:w-1/2 w-full lg:text-lg">
            <nav class="list-none mb-10">
              <li>
                <Link href={"contact"} class="text-gray-600 hover:text-gray-800">Contact Us</Link>
              </li>
              <li>
                <Link href={""} class="text-gray-600 hover:text-gray-800">FAQs</Link>
              </li>
              <li>
                <Link href={""} class="text-gray-600 hover:text-gray-800">Careers</Link>
              </li>
            </nav>
          </div>
          <div class="lg:w-2/6 md:w-1/2 w-full">
            <div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div class="sm:text-center sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <p class="text-gray-500 text-base md:text-left mb-1">Stay up to date on the latest news,treatment options and more.
                </p>
                <input type="text" id="footer-field" placeholder="Enter Your Email Address" name="footer-field" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <button class=" flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Subscribe</button>
            </div>

          </div>
        </div>
      </div>
      <div class="bg-gray-100">
        <div class="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
          <p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2023 Clinic —
            <a href="https://github.com/appzaib" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@appzaib</a>
          </p>
          <span class="inline-flex text-2xl sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a class="text-gray-500">
              <FaFacebookF />
            </a>
            <a class="ml-3 text-gray-500">
              <FaInstagram />
            </a>
            <a class="ml-3 text-gray-500">
              <FaTwitter />
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer