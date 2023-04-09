import React from "react";
import { FaRegHeart, FaMicroscope, FaViruses, FaStethoscope, FaGitlab} from "react-icons/fa"
import { RiFlashlightFill, RiHandHeartLine, RiHospitalFill, RiToolsFill } from "react-icons/ri";

const Feature = () => {
  return (
    <>
    <div className="flex justify-center  p-4 bg-blue-900 ">
      <div className="flex flex-col justify-center items-center ">
        <div className="text-white text-3xl md:text-5xl font-small">
          <h1>Why Choose Clinic?</h1>
          <div className=" w-48 h-1 bg-white rounded mt-4 mb-4"></div>
        </div>

        <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
          <div className="overflow-hidden w-full m-4 flex justify-center rounded-lg  md:w-[33%] px-8">
            <div className="flex flex-col md:flex-row items-center justify-center  ">
              <div className="  items-center justify-center flex py-2">
                <div className="flex flex-col  items-center justify-center ">
                  <div>
                    <RiHandHeartLine className="text-white w-12 h-12 hover:cursor-pointer md:-translate-x-20 hover:-translate-y-4 mt-3 transition duration-300 delay-150 hover:delay-300" />
                  </div>
                  <div className="text-white  m-2">
                    <h1 className="sm:text-3xl text-2xl font-small title-font text-white mb-4">
                      More Experience
                    </h1>

                    <p className="leading-relaxed text-base mb-4">
                      The million patients we treat each year prepares us to
                      treat the one who matters most — you. you are the ultimate goal of our services we provide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden w-full m-4 flex justify-center rounded-lg  md:w-[33%] px-8">
            <div className="flex flex-col md:flex-row items-center justify-center  ">
              <div className="  items-center justify-center flex py-2">
                <div className="flex flex-col  items-center justify-center ">
                  <div>
                    <RiFlashlightFill className="text-white w-12 h-12 hover:cursor-pointer md:-translate-x-20 hover:-translate-y-4 mt-3 transition duration-300 delay-150 hover:delay-300" />
                  </div>
                  <div className="text-white  m-2">
                    <h1 className="sm:text-3xl text-2xl font-small title-font text-white mb-4">
                      Fastest Ambulance
                    </h1>
                    <p className="leading-relaxed text-base mb-4">
                    we are proud to provide the fastest ambulance service in the area. Our team of skilled medical professionals is equipped with state-of-the-art equipment and vehicles to ensure that we can respond to emergencies quickly and efficiently.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden w-full m-4 flex justify-center rounded-lg  md:w-[33%] px-8">
            <div className="flex flex-col md:flex-row items-center justify-center  ">
              <div className="  items-center justify-center flex py-2">
                <div className="flex flex-col  items-center justify-center ">
                  <div>
                    <RiToolsFill className="text-white w-12 h-12 hover:cursor-pointer md:-translate-x-20 hover:-translate-y-4 mt-3 transition duration-300 delay-150 hover:delay-300" />
                  </div>
                  <div className="text-white  m-2">
                    <h1 className="sm:text-3xl text-2xl font-small title-font text-white mb-4">
                      Newest Equipment
                    </h1>
                    <p className="leading-relaxed text-base mb-4">
                    To achieve this goal, we invest in the newest and most advanced medical equipment available on the market. We believe that having access to cutting-edge technology is crucial to delivering accurate diagnoses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden w-full m-4 flex justify-center rounded-lg  md:w-[33%] px-8">
            <div className="flex flex-col md:flex-row items-center justify-center  ">
              <div className="  items-center justify-center flex py-2">
                <div className="flex flex-col  items-center justify-center ">
                  <div>
                    <RiHospitalFill className="text-white w-12 h-12 hover:cursor-pointer md:-translate-x-20 hover:-translate-y-4 mt-3 transition duration-300 delay-150 hover:delay-300" />
                  </div>
                  <div className="text-white  m-2">
                    <h1 className="sm:text-3xl text-2xl font-small title-font text-white mb-4">
                      Professional Doctors
                    </h1>
                    <p className="leading-relaxed text-base mb-4">
                    Our doctors are dedicated to providing top-quality healthcare to all of our patients, and they possess the expertise and experience necessary to address a wide range of medical concerns.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>




      </div>
    </div>
    <div>
      <div className="lg:flex lg:flex-wrap lg:px-10 py-10 h-auto">
            <div className="lg:w-1/2">
              <span className="text-xl my-10">Premium Care</span>
                <h1 className="lg:text-4xl md:text-2xl text-sky-900 font-bold">Medical Services and all Types of Diagnostics.</h1>
            </div>
            <div className="lg:w-1/2">
                <div className="lg:px-10">
                <p className="text-lg py-5 ">wW are dedicated to providing top-quality medical services and diagnostics to our clients. We understand that seeking medical care can be a daunting experience, which is why we strive to make the process as comfortable and reassuring as possible. Our team of experienced medical professionals offers a wide range of services, including preventative care, diagnosis and treatment of illnesses, and specialized medical treatments. We utilize the latest technology and medical practices to ensure accurate and efficient diagnosis and treatment of a variety of medical conditions.</p>
                </div>
            </div>
        </div>
    </div>

    <div className="container lg:pl-10 lg:w-full flex flex-wrap justify-center">
      <div className="w-full md:w-1/4 lg:w-1/4 ">
        <div className="flex flex-col items-center ">
          <FaGitlab className="text-6xl text-green-700"/>
          <h1 className="py-4 text-lg font-semibold text-sky-800 uppercase">Modern Laboratery</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio maxime laudantium sequi eaque illo et laborum, qui error commodi earum hic culpa cumque maiores consequuntur tempore harum. Vitae, iste optio.</p>
        </div>
      </div>

      <div className="w-full md:w-1/4 lg:w-1/4 ">
        <div className="flex flex-col items-center ">
          <FaMicroscope className="text-6xl text-green-700"/>
          <h1 className="py-4 text-lg font-semibold text-sky-800 uppercase">diagnostic center</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio maxime laudantium sequi eaque illo et laborum, qui error commodi earum hic culpa cumque maiores consequuntur tempore harum. Vitae, iste optio.</p>
        </div>
      </div>

      <div className="w-full md:w-1/4 lg:w-1/4 ">
        <div className="flex flex-col items-center ">
          <FaViruses className="text-6xl text-green-700"/>
          <h1 className="py-4 text-lg font-semibold text-sky-800 uppercase">Experiance Doctors</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio maxime laudantium sequi eaque illo et laborum, qui error commodi earum hic culpa cumque maiores consequuntur tempore harum. Vitae, iste optio.</p>

        </div>
      </div>

      <div className="w-full md:w-1/4 lg:w-1/4 ">
        <div className="flex flex-col items-center ">
          <FaStethoscope className="text-6xl text-green-700"/>
          <h1 className="py-4 text-lg font-semibold text-sky-800 uppercase">therapy</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio maxime laudantium sequi eaque illo et laborum, qui error commodi earum hic culpa cumque maiores consequuntur tempore harum. Vitae, iste optio.</p>

        </div>
      </div>
    </div>

    </>
  );
};

export default Feature;

{
  /* <div className="container flex flex-wrap">
  <div
    className="bg-no-repeat bg-cover bg-center w-full bg-opacity-70"
    style={{
      backgroundImage: `url("https://production-prod-trueprofile-blogassets-origin.s3.ap-southeast-1.amazonaws.com/uploads/2022/03/shutterstock_1367016380-1024x535.jpg")`,
    }}
  >
    <h2 className="text-4xl  px-28  py-32 text-white font-medium title-font mb-2 w-2/4 leading-9">
      USA Health is Transforming Medicine along the Gulf Coast to care for the
      unique needs of our community.
    </h2>
  </div>
  <div className="text-2xl px-5 py-8 font-medium border-r-2 w-2/4 text-center hover:bg-blue-900 hover:text-white cursor-pointer">
    Request An Appointment
  </div>

  <div className="w-2/4 text-2xl px-5 py-8 font-medium border-r-2  text-center hover:bg-blue-900 hover:text-white  cursor-pointer">
    Refer A Patient
  </div>
</div>; */
}
