import { useState, useRef, useEffect } from "react";
import * as Yup from "yup";
import axios from 'axios';
import "../App.css";
import "../index.css";
import { useUser } from "@clerk/clerk-react";
import { RiImageAddFill } from "react-icons/ri";
import { FaFileImage } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { ColorRing } from 'react-loader-spinner'

const FormWithYup = () => {
  const { isSignedIn, user } = useUser();
  const inputImageRef = useRef(null);
  const [image, setImage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [loader, setLoader] = useState(false);

  const handleClick = () => {
    setLoader(true);
  }

  const validFileExtensions = { extensions: ['jpg', 'gif', 'png', 'jpeg', 'svg', 'webp'] };

  function isValidFileType(fileName, fileType) {
    return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1;
  }

  function getAllowedExt(type) {
    return validFileExtensions[type].map((e) => `.${e}`).toString()
  }

  let allowedExts = getAllowedExt("extensions");

  const MAX_FILE_SIZE = 102400;

  const inputImageClick = () => {
    inputImageRef.current.click();
  }

  const inputImageChange = (event) => {
    const file = event.target.files;
    if (file) {
      setImage(file[0]);
    }
    console.log(file[0]);
  }

  const [formData, setFormData] = useState({
    firstName: isSignedIn ? (
      user.username
    ) : (
      ""
    ),
    email: isSignedIn ? (
      user.primaryEmailAddress
    ) : (
      ""
    ),
    contactNumber: "",
    location: "",
    event_title: "",
    event_type: "",
    event_category: "",
    event_description: "",
    eventDate: "",
    eventTime: "",
    eventImage: "",
  });

  const [errors, setErrors] = useState({});

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("First name is required"),
    email: Yup.string()
      .required("Email is Required")
      .email("Invalid email format"),
    contactNumber: Yup.string()
      .matches(/^\d{10}$/, "Phone Number must be 10 digits")
      .required(),
    location: Yup.string().required("Location is required"),
    event_title: Yup.string().required("Event Title is required"),
    event_type: Yup.string().required("Event type is required"),
    event_category: Yup.string().required("Event category is required"),
    event_description: Yup.string()
      .min(20, "Description must be at least 20 characters")
      .required("Description is required"),
    eventDate: Yup.date().required("Date of the event is required"),
    eventTime: Yup.string().required("Time of the event is required"),
    eventImage: Yup
      .mixed()
      .required("Image is required")
  });

  const submitForm = async (e) => {
    e.preventDefault();
    console.log("submitting")

    const data = new FormData();
    Object.keys(formData).forEach((key)=>{
      data.append(key,formData[key])
    });
    data.append('eventImage',image);

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      console.log("validated");
      const response = await axios.post("http://localhost:5000/send-email", data).then(res => setEmailSent(true, resetForm()));
      console.log("Form Submitted", formData);
      console.log(response.data);
    } catch (error) {
      const newErrors = {};
      if (error.inner) {
        error.inner.forEach((err) => {
          newErrors[err.path] = err.message;
        });
      } else {
        newErrors.form = error.message;
      }
      setErrors(newErrors);
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: isSignedIn ? (
        user?.username
      ) : (
        ""
      ),
      email: isSignedIn ? (
        user?.primaryEmailAddress
      ) : (
        ""
      ),
      contactNumber: "",
      location: "",
      event_title: "",
      event_type: "",
      event_category: "",
      event_description: "",
      eventDate: "",
      eventTime: "",
      eventImage: "",
    })

    setImage("");
    setLoader(false);

    setTimeout(() => {
      setEmailSent(false);
      setLoader(false);
    }, 3000)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="w-full h-full flex justify-center items-center my-32">
      <div className="max-w-[70vw] w-full h-full flex items-center justify-center rounded-[10px] overflow-hidden transition duration-300 shadow-4xl shadow-gray-500">
        <div className="w-full h-full p-10 transition duration-500 opacity-100 ">
          <h1 className="text-4xl text-[#86336e] mb-8">
            Organize an Event!🤘
          </h1>
          <form onSubmit={submitForm} className="flex flex-col justify-center items-center w-full h-full gap-4">
            <div className="flex justify-center items-center gap-8 w-full h-full flex-wrap">
              <div className="event-form-container flex flex-col w-[50%] h-full" >
                <div className="flex flex-col p-2 border border-[#ddd] rounded-[4px] mb-2 transition duration-300 focus-within:border-[#8c7569]">
                  <label className="text-xs uppercase font-semibold tracking-wide text-[#8c7569] transition duration-300">
                    Name:
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    disabled={formData.firstName ? true : false}
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
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    disabled={formData.email ? true : false}
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
                    Event Title:
                  </label>
                  <input
                    type="text"
                    name="event_title"
                    value={formData.event_title}
                    placeholder="Enter event title"
                    onChange={handleChange}
                    className="outline-none border-0 pt-1 text-xs placeholder-gray-300"
                  />
                  {errors.event_title && (
                    <div className="text-red-500">
                      {errors.event_title}
                    </div>
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
                  <textarea
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
                <div className="flex flex-col p-2 border border-[#ddd] rounded-[4px] mb-2 transition duration-300 focus-within:border-[#8c7569]">
                  <label className="text-xs uppercase font-semibold tracking-wide text-[#8c7569] transition duration-300">
                    Time of Event:
                  </label>
                  <input
                    type="time"
                    name="eventTime"
                    value={formData.eventTime}
                    onChange={handleChange}
                    className="outline-none border-0 pt-1 text-xs placeholder-gray-300"
                  />
                  {errors.eventTime && (
                    <div className="text-red-500">{errors.eventTime}</div>
                  )}
                </div>
                <div className="flex flex-col p-2 border border-[#ddd] rounded-[4px] mb-2 transition duration-300 focus-within:border-[#8c7569]">
                  <label className="text-xs uppercase font-semibold tracking-wide text-[#8c7569] transition duration-300">
                    Event Location:
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    placeholder="Enter your event location"
                    onChange={handleChange}
                    className="outline-none border-0 pt-1 text-xs placeholder-gray-300"
                  />
                  {errors.location && (
                    <div className="text-red-500">{errors.location}</div>
                  )}
                </div>
              </div>
              <div className="event-form-image-container flex flex-col w-[45%] h-full justify-center items-center gap-6">
                <div className="w-full flex flex-col items-center gap-2 border-2 border-dashed rounded-md border-sky-300 p-5" onClick={inputImageClick}>
                  <label className="text-xs uppercase font-semibold tracking-wide text-[#8c7569] transition duration-300">
                    Event Image:
                  </label>
                  <p>Browse images to upload</p>
                  <p className="text-[10px] text-[#8c7569]">[{allowedExts}]</p>
                  {image ?
                    <>
                      <img src={URL.createObjectURL(image)} alt={image.name} />
                    </>
                    :
                    <>
                      <RiImageAddFill size={120} className="cursor-pointer" />
                    </>
                  }
                  <input
                    type="file"
                    name="eventImage"
                    value={formData.eventImage}
                    accept={allowedExts}
                    ref={inputImageRef}
                    onChange={inputImageChange} hidden />
                  {errors.eventImage && (
                    <div className="text-red-500">{errors.eventImage}</div>
                  )}
                </div>
                <div className="flex items-center w-full gap-2 bg-[#e9f0ff] p-2 rounded-lg">
                  <FaFileImage size={25} />
                  <p>
                    {image ? `${image.name}` : "No Files Selected"}
                  </p>
                  <MdDelete size={28} className="ml-auto" onClick={() => setImage('')} />
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full gap-2">
              <div className="flex items-center gap-1">
                <input type="checkbox" id="accept-terms-checkbox" className="w-[15px] h-[15px]" />
                <label htmlFor="accept-terms-checkbox" className="text-xs">
                  I accept the{" "}
                  <span className="text-red-500">Terms of Use</span> &{" "}
                  <span className="text-red-500">Privacy Policy</span>
                </label>
              </div>
              <div className="event-form-button flex items-center">
                <button type="submit" onClick={handleClick}
                  className="mt-2 px-16 py-2 text-xl font-medium outline-none uppercase border-0 text-white rounded-[4px] bg-[#f2874d] transition duration-300 cursor-pointer font-nunito hover:bg-[#c04803]"
                >
                  Organize
                </button>
              </div>
              <div className="flex justify-center items-center relative mt-3">
                <div className="w-[100px] m-auto">
                  <ColorRing visible={loader} />
                </div>
                <div className={emailSent ? 'msg active' : 'msg'}>
                  Your Message has been sent
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormWithYup;
