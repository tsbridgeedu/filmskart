import { useState } from "react";
import * as Yup from "yup";
import "../App.css";
import "../index.css";

const FormWithYup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    location: "",
    event_type: "",
    event_category: "",
    event_description: "",
    eventDate: "",
  });

  const [errors, setErrors] = useState({});

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("First name is required"),
    lastName: Yup.string().required("Last Name is Required"),
    email: Yup.string()
      .required("Email is Required")
      .email("Invalid email format"),
    contactNumber: Yup.string()
      .matches(/^\d{10}$/, "Phone Number must be 10 digits")
      .required(),
    location: Yup.string().required("Location is required"),
    event_type: Yup.string().required("Event type is required"),
    event_category: Yup.string().required("Event category is required"),
    event_description: Yup.string()
      .min(20, "Description must be at least 20 characters")
      .required("Description is required"),
    eventDate: Yup.date().required("Date of event is required"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      console.log("Form Submitted", formData);
    } catch (error) {
      const newErrors = {};

      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });

      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="h-full font-nunito my-32">
      <div className=" flex justify-center items-center">
        <div className="w-full flex flex-col items-center justify-center transition duration-400">
          <div className="flex max-w-[60vw] w-full rounded-[10px] overflow-hidden transition duration-300 shadow-4xl shadow-gray-500">
            <div className=" p-10 transition duration-500 opacity-100 ">
              <h1 className="text-4xl text-[#86336e] mb-8">
                Organize an Event!🤘
              </h1>
              <form className="flex flex-col gap-1" onSubmit={handleSubmit} >
                <div className="flex flex-col p-2 border border-[#ddd] rounded-[4px] mb-2 transition duration-300 focus-within:border-[#8c7569]">
                  <label className="text-xs uppercase font-semibold tracking-wide text-[#8c7569] transition duration-300">
                    First Name:
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    placeholder="Enter your first name"
                    onChange={handleChange}
                    className="outline-none border-0 pt-1 text-xs placeholder-gray-300"
                  />
                  {errors.firstName && (
                    <div className="text-red-500">{errors.firstName}</div>
                  )}
                </div>
                <div className="flex flex-col p-2 border border-[#ddd] rounded-[4px] mb-2 transition duration-300 focus-within:border-[#8c7569]">
                  <label className="text-xs uppercase font-semibold tracking-wide text-[#8c7569] transition duration-300">
                    Last Name:
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    placeholder="Enter your last name"
                    onChange={handleChange}
                    className="outline-none border-0 pt-1 text-xs placeholder-gray-300"
                  />
                  {errors.lastName && (
                    <div className="text-red-500">{errors.lastName}</div>
                  )}
                </div>
                <div className="flex flex-col p-2 border border-[#ddd] rounded-[4px] mb-2 transition duration-300 focus-within:border-[#8c7569]">
                  <label className="text-xs uppercase font-semibold tracking-wide text-[#8c7569] transition duration-300">
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Enter your email"
                    onChange={handleChange}
                    className="outline-none border-0 pt-1 text-xs placeholder-gray-300"
                  />
                  {errors.email && (
                    <div className="text-red-500">{errors.email}</div>
                  )}
                </div>
                <div className="flex flex-col p-2 border border-[#ddd] rounded-[4px] mb-2 transition duration-300 focus-within:border-[#8c7569]">
                  <label className="text-xs uppercase font-semibold tracking-wide text-[#8c7569] transition duration-300">
                    Contact Number:
                  </label>
                  <input
                    type="text"
                    name="contactNumber"
                    value={formData.contactNumber}
                    placeholder="Enter your phone number"
                    onChange={handleChange}
                    className="outline-none border-0 pt-1 text-xs placeholder-gray-300"
                  />
                  {errors.contactNumber && (
                    <div className="text-red-500">{errors.contactNumber}</div>
                  )}
                </div>
                <div className="flex flex-col p-2 border border-[#ddd] rounded-[4px] mb-2 transition duration-300 focus-within:border-[#8c7569]">
                  <label className="text-xs uppercase font-semibold tracking-wide text-[#8c7569] transition duration-300">
                    Location:
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    placeholder="Enter your location"
                    onChange={handleChange}
                    className="outline-none border-0 pt-1 text-xs placeholder-gray-300"
                  />
                  {errors.location && (
                    <div className="text-red-500">{errors.location}</div>
                  )}
                </div>
                <div className="flex flex-col p-2 border border-[#ddd] rounded-[4px] mb-2 transition duration-300 focus-within:border-[#8c7569]">
                  <label className="text-xs uppercase font-semibold tracking-wide text-[#8c7569] transition duration-300">
                    Event Type:
                  </label>
                  <select
                    name="event_type"
                    value={formData.event_type}
                    onChange={handleChange}
                    className="outline-none border-0 pt-1 text-xs placeholder-gray-300"
                  >
                    <option value="">Select</option>
                    <option value="virtual">Virtual</option>
                    <option value="offline">Offline</option>
                  </select>
                  {errors.event_type && (
                    <div className="text-red-500">{errors.event_type}</div>
                  )}
                </div>
                <div className="flex flex-col p-2 border border-[#ddd] rounded-[4px] mb-2 transition duration-300 focus-within:border-[#8c7569]">
                  <label className="text-xs uppercase font-semibold tracking-wide text-[#8c7569] transition duration-300">
                    Event Category:
                  </label>
                  <select
                    name="event_category"
                    value={formData.event_category}
                    onChange={handleChange}
                    className="outline-none border-0 pt-1 text-xs placeholder-gray-300"
                  >
                    <option value="">Select</option>
                    <option value="Celebration">Celebration</option>
                    <option value="EDM Party">EDM Party</option>
                    <option value="Shows">Shows</option>
                    <option value="Sports">Sports</option>
                  </select>
                  {errors.event_category && (
                    <div className="text-red-500">{errors.event_category}</div>
                  )}
                </div>
                <div className="flex flex-col p-2 border border-[#ddd] rounded-[4px] mb-2 transition duration-300 focus-within:border-[#8c7569]">
                  <label className="text-xs uppercase font-semibold tracking-wide text-[#8c7569] transition duration-300">
                    Event Description:
                  </label>
                  <input
                    type="text"
                    name="event_description"
                    value={formData.event_description}
                    placeholder="Enter event description"
                    onChange={handleChange}
                    className="outline-none border-0 pt-1 text-xs placeholder-gray-300"
                  />
                  {errors.event_description && (
                    <div className="text-red-500">
                      {errors.event_description}
                    </div>
                  )}
                </div>
                <div className="flex flex-col p-2 border border-[#ddd] rounded-[4px] mb-2 transition duration-300 focus-within:border-[#8c7569]">
                  <label className="text-xs uppercase font-semibold tracking-wide text-[#8c7569] transition duration-300">
                    Date of Event:
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="outline-none border-0 pt-1 text-xs placeholder-gray-300"
                  />
                  {errors.eventDate && (
                    <div className="text-red-500">{errors.eventDate}</div>
                  )}
                </div>
                <button
                  className="mt-2 px-4 py-1 outline-none uppercase border-0 text-white rounded-[4px] bg-[#f2874d] transition duration-300 cursor-pointer font-nunito hover:bg-[#c04803]"
                  type="submit"
                >
                  Organize
                </button>
              </form>
              <div className="p-2">
                <input type="checkbox" id="accept-terms-checkbox" />
                <label htmlFor="accept-terms-checkbox" className="text-xs">
                  I accept the{" "}
                  <span className="text-red-500">Terms of Use</span> &{" "}
                  <span className="text-red-500">Privacy Policy</span>
                </label>
              </div>
            </div>
            <div className="flex-2 text-0 transition duration-300 overflow-hidden">
              <img
                src="https://plus.unsplash.com/premium_photo-1661286678499-211423a9ff5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQxfHxkYW5jZSUyMGZlc3RpdmFsfGVufDB8fDB8fHww"
                alt=""
                className="w-full h-full transform scale-100 object-cover transition duration-[1.2s]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormWithYup;
