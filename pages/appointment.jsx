import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [contactNumber, setContactNumber] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [preferredDay, setPreferredDay] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg mx-[7rem]">
      <h2 className="text-lg font-medium mb-4">Patient Information</h2>
      <div className="mb-4 w-2/4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
          Full Name
        </label>
        <input
          className="bg-white focus:outline-none border  border-gray-400 focus:shadow-outline-blue focus:border-blue-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value={formData.name}
          placeholder="Full Name"
          required
        />
      </div>
      <div className="mb-4 w-2/4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="bg-white focus:outline-none border  border-gray-400 focus:shadow-outline-blue focus:border-blue-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={formData.email}
          required
        />
      </div>
      <div className="mb-4 w-2/4">
        <label
          className="block text-gray-500 font-medium mb-2"
          htmlFor="contact-number"
        >
          Contact Number
        </label>
        <input
          className="bg-white focus:outline-none border  border-gray-400 focus:shadow-outline-blue focus:border-blue-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="tel"
          id="contact-number"
          placeholder="Contact phone Number"
          value={contactNumber}
          onChange={(event) => setContactNumber(event.target.value)}
          required
        />
      </div>
      <div className="mb-4 w-2/4">
        <label className="block text-gray-700 font-medium mb-2">
          Date of Birth
        </label>
        <div className="relative rounded-md shadow-sm">
          <input
            type="date"
            className="bg-white focus:outline-none border  border-gray-400 focus:shadow-outline-blue focus:border-blue-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-4 w-2/4">
        <label
          className="block text-gray-500 font-medium mb-2"
          htmlFor="gender"
        >
          Gender
        </label>
        <div className="relative">
          <select
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-lg leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
            id="gender"
            value={gender}
            onChange={(event) => setGender(event.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      <h2 className="text-lg font-medium mt-9 mb-9">Appointment Information</h2>
      <div className="mb-4 w-2/4">
        <label className="block text-gray-700 font-medium mb-2">
          Speciality
        </label>
        <div className="relative rounded-md shadow-sm">
          <select
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-lg leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
            value={speciality}
            onChange={(e) => setSpeciality(e.target.value)}
          >
            <option value="" disabled>
              Select a speciality
            </option>
            <option value="cardiology">Cardiology</option>
            <option value="orthopedics">Orthopedics</option>
            <option value="dermatology">Dermatology</option>
            <option value="asthma">Asthma</option>
            <option value="burncare">Burn Care</option>
            <option value="cancer">Cancer</option>
            <option value="diabetes">Diabetes</option>
            <option value="neurosurgery">NeuroSurgery</option>
            <option value="trauma">Trauma</option>
            <option value="urology">Urology</option>
            <option value="psychiatry">Psychiatry</option>
            <option value="surgery">Surgery</option>
            <option value="pediatrics">Pediatrics</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="mb-4 w-2/4">
        <label className="block text-gray-700 font-medium mt-4 mb-2">
          Preferred Day of the Week
        </label>
        <div className="relative rounded-md shadow-sm">
          <select
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-lg leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
            value={preferredDay}
            onChange={(e) => setPreferredDay(e.target.value)}
          >
            <option value="" disabled>
              Select a day
            </option>
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="mb-4 w-2/4"></div>
      <div className="mb-4 w-2/4">
        <label className="block text-gray-700 font-medium mt-4 mb-2">
          Preferred Time of Day
        </label>
        <div className="relative rounded-md shadow-sm">
          <select
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-lg leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
            value={preferredTime}
            onChange={(e) => setPreferredTime(e.target.value)}
          >
            <option value="" disabled>
              Select a time
            </option>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="mb-4 w-2/4">
        <label className="block text-gray-700 font-medium mt-4 mb-2">
          Message
        </label>
        <textarea
          className="form-input border  border-gray-400  py-3 px-4 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <button
        className="bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-900"
        type="submit"
      >
        Submit Request
      </button>
    </form>
  );
}

export default Form;
