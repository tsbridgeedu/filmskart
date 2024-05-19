import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; 

const OrganiseForm = () => {
  
  const validationSchema = Yup.object({
    firstName: Yup.string().min(3, "Name must be at least 3 characters").required("First name is required"),
    Surname: Yup.string().min(3, "Surname must be at least 3 characters").required("Surname  is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    contactNo: Yup.string().matches(/^\d{10}$/, "Invalid contact number (10 digits only)").required("Contact number is required"),
    location: Yup.string().required("Location is required"),
    
  });

  return (
    <div className="min-h-screen py-40">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
         
          <div
            className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: " url(Register-Background.png)" }}
          >
            <h1 className="text-white text-3xl mb-3"></h1>
            <div>
              <p className="text-white">
                {" "}
                <a href="#" className="text-red-500 font-semibold">
                  Learn More
                </a>
              </p>
            </div>
          </div>
          {/* Right Side */}
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4">Organise an Event</h2>
            <Formik
              initialValues={{
                firstName: "",
                email: "",
                contactNo: "",
                location: "",
                // Add more fields here
              }}
              validationSchema={validationSchema} // Assign Yup schema for validation
              onSubmit={(values, { setSubmitting }) => {
                console.log("Form submitted:", values);
                setSubmitting(false);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="grid grid-cols-2 gap-5">
                  
                    <div className="mt-5">
                      <Field
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        className="border border-gray-400 py-1 px-2 w-full"
                      />
                      <ErrorMessage
                        name="firstName"
                        component="div"
                        className="text-red-500"
                      />
                    </div>

                    <div className="mt-5">
                      <Field
                        type="text"
                        name="Surname"
                        placeholder="Surname"
                        className="border border-gray-400 py-1 px-2 w-full"
                      />
                      <ErrorMessage
                        name="Surname"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                
                    <div className="mt-5">
                      <Field
                        type="text"
                        name="email"
                        placeholder="Email"
                        className="border border-gray-400 py-1 px-2 w-full"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500"
                      />
                    
                    </div>
                 
                    <div className="mt-5">
                      <Field
                        type="text"
                        name="contactNo"
                        placeholder="Contact No"
                        className="border border-gray-400 py-1 px-2 w-full"
                      />
                      <ErrorMessage
                        name="contactNo"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                   
                    <div className="mt-5">
                      <Field
                        type="text"
                        name="location"
                        placeholder="Location"
                        className="border border-gray-400 py-1 px-2 w-full"
                      />
                      <ErrorMessage
                        name="location"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                  




                    <div className="mt-5">
                      <Field
                        type="text"
                        name="eventTitle"
                        placeholder="Event Title"
                        className="border border-gray-400 py-1 px-2 w-full"
                      />
                      <ErrorMessage
                        name="eventTitle"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    
                    <div className="mt-5">
                      <Field
                        as="select"
                        name="eventType"
                        className="border border-gray-400 py-1 px-2 w-full"
                      >
                        <option value="">Select Event Type</option>
                        <option value="Virtual">Virtual</option>
                        <option value="Offline">Offline</option>
                      </Field>
                      <ErrorMessage
                        name="eventType"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    {/* Event Category */}
                    <div className="mt-5">
                      <Field
                        as="select"
                        name="eventCategory"
                        className="border border-gray-400 py-1 px-2 w-full"
                      >
                        <option value="">Select Event Category</option>
                        <option value="Celebration">Celebration</option>
                        <option value="EDM Party">EDM Party</option>
                        <option value="Shows">Shows</option>
                        <option value="Sports">Sports</option>
                      </Field>
                      <ErrorMessage
                        name="eventCategory"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    {/* Event Description */}
                    <div className="mt-5">
                      <Field
                        as="textarea"
                        name="eventDescription"
                        placeholder="Event Description"
                        className="border border-gray-400 py-1 px-2 w-full"
                      />
                      <ErrorMessage
                        name="eventDescription"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                   
                    <div className="mt-5">
                      <Field
                        type="datetime-local"
                        name="eventDateTime"
                        className="border border-gray-400 py-1 px-2 w-full"
                      />
                      <ErrorMessage
                        name="eventDateTime"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                 

                  </div>
                 
                  <div className="mt-5">
                    <button
                      type="submit"
                      className="w-full bg-red-500 py-3 text-center text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Organise Now"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganiseForm;
