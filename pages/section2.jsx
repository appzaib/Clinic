import React from "react";

const SectionFeature = () => {
  // function toggleBackground() {
  //   const image = document.querySelector(".bg-no-repeat");
  //   const video = document.querySelector(".patient-video");
  //   if (image.style.display === "none") {
  //     image.style.display = "block";
  //     video.style.display = "none";
  //   } else {
  //     image.style.display = "none";
  //     video.style.display = "block";
  //   }
  // }

  return (
    <div className="container flex flex-wrap">
      <div
        className="bg-no-repeat bg-cover bg-center w-full bg-opacity-70"
        style={{
          backgroundImage: `url("https://production-prod-trueprofile-blogassets-origin.s3.ap-southeast-1.amazonaws.com/uploads/2022/03/shutterstock_1367016380-1024x535.jpg")`,
        }}
      >
        <h2 className="text-4xl  px-28  py-32 text-white font-medium title-font mb-2 w-2/4 leading-9">
          USA Health is Transforming Medicine along the Gulf Coast to care for
          the unique needs of our community.
        </h2>
      </div>
      <div className="text-2xl px-5 py-8 font-medium border-r-2 w-2/4 text-center hover:bg-blue-900 hover:text-white cursor-pointer">
        Request An Appointment
      </div>

      <div
        className="w-2/4 text-2xl px-5 py-8 font-medium border-r-2  text-center hover:bg-blue-900 hover:text-white 
       cursor-pointer"
        // onclick={toggleBackground()}
      >
        Refer A Patient
      </div>
      {/* <video
        className="patient-video"
        src="/clinic.mp4"
        autoplay
        loop
        style={{ display: "none" }}
      ></video> */}
    </div>
  );
};

export default SectionFeature;
