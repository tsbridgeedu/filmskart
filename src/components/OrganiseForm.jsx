import { useState } from "react";
import * as Yup from "yup";

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
    <div className="container">
      <div className="modal">
        <div className="modal-container">
          <div className="modal-left p-10 pt-8 pb-6 bg-white flex-1 transition duration-500 opacity-100">
            <h1 className="modal-desc text-purple-800 mt-1 mb-8">
              Organise an Event!🤘
            </h1>
            <form className="form" onSubmit={handleSubmit}>
              <div className="input-block flex flex-col p-2 border border-gray-300 rounded mb-2 transition duration-300">
                <label className="input-label text-gray-600">First Name:</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  placeholder="Enter your first name"
                  onChange={handleChange}
                  className="outline-none border-0 py-1 text-sm placeholder-gray-400"
                />
                {errors.firstName && (
                  <div className="error text-red-600">{errors.firstName}</div>
                )}
              </div>
              {/* Other form inputs go here */}
              <button className="input-button mt-2 py-0.5 px-3 outline-none text-xs text-white rounded bg-orange-500 transition duration-300 cursor-pointer">
                Organise
              </button>
            </form>
            <div className="accept-terms">
              <input type="checkbox" id="accept-terms-checkbox" />
              <label
                htmlFor="accept-terms-checkbox"
                className="text-gray-800 cursor-pointer"
              >
                I accept the{" "}
                <span className="highlight text-red-600">Terms of Use</span> &{" "}
                <span className="highlight text-red-600">Privacy Policy</span>
              </label>
            </div>
          </div>
          <div className="modal-right hidden md:flex flex-grow">
            {/* <img
              src="https://plus.unsplash.com/premium_photo-1661286678499-211423a9ff5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQxfHxkYW5jZSUyMGZlc3RpdmFsfGVufDB8fDB8fHww"
              alt=""
              className="object-cover w-full h-full transform scale-100 transition duration-1200"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormWithYup;
