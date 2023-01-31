import React from "react";
import { RiCheckboxMultipleBlankFill, RiFlashlightFill, RiHandHeartLine, RiHeavyShowersFill, RiHospitalFill, RiToolsFill } from "react-icons/ri";

const Feature = () => {
  return (
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
                      treat the one who matters most — you.
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
                      The million patients we treat each year prepares us to
                      treat the one who matters most — you.
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
                      The million patients we treat each year prepares us to
                      treat the one who matters most — you.
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
                      The million patients we treat each year prepares us to
                      treat the one who matters most — you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
