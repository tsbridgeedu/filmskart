import { Headset, Mail } from "lucide-react";
import React from "react";

const ContactContent = () => {
  return (
    <div className="flex h-[full] xl:h-[80vh] scrollbar">
      <div className="flex max-[1280px]:flex-col xl:w-[1440px] xl:h-full   relative items-center justify-center w-full gap-10  h-[full] bg-[#FFFFFF]">
        <div className="flex flex-row items-center justify-start gap-3   w-full py-10 px-10 h-[21px] xl:absolute xl:w-[130px] xl:h-[21px] xl:left-[135px] xl:top-[7px] ">
          <span>Home</span>/
          <span className="">{window.location.pathname.slice(1)}</span>
        </div>

        <div className=" w-[340px] h-[457px] max-[1280px]:mt-10 duration-300 transition-colors hover:bg-red-500 hover:text-white  bg-[#FFFFFF] shadow-xl rounded-md xl:absolute xl:w-[340px] xl:h-[457px] xl:left-[55px] xl:top-[123px] 2xl:left-[155px]">
          <div className="flex  px-16 pt-10 pb-7 relative items-center w-full gap-10">
            <span className="bg-red-500 h-10 w-10 rounded-3xl text-[#fff] flex justify-center items-center ">
              <Headset className="" />
            </span>
            <h3 className="text-lg font-medium">Call Us?</h3>
          </div>

          <div className="flex flex-wrap px-10 font-normal text-sm pt-4 pb-2 items-center gap-2">
            <span className="font-medium text-base">Phone:</span> +91 93813
            91721
          </div>
          <div className="flex flex-wrap px-10 font-normal text-xs">
            We are available 24/7 and 7 days a week.
          </div>

          <div className="flex px-12 py-10 w-full">
            <hr className="w-full h-[2px] text-[#222] bg-[#8b8b8b]" />
          </div>

          <div className="flex  px-16  pb-5 relative items-center w-full gap-10">
            <span className="bg-red-500 h-10 w-10 rounded-3xl text-[#fff] flex justify-center items-center ">
              <Mail className="" />
            </span>
            <h3 className="text-lg font-medium">Write to Us?</h3>
          </div>
          <div className="flex flex-wrap px-10 font-normal text-sm pt-4 pb-2 items-center gap-2">
            <span className="font-medium text-base">Email:</span>{" "}
            info@filmskart.in
          </div>

          <div className="flex flex-wrap px-10 font-normal text-xs">
            Fill out the form and we will contact you within 24 Hrs.
          </div>
        </div>
        <div className=" w-[800px] h-[457px] max-[1280px]:mb-32 max-[880px]:w-[340px] max-[880px]:h-[650px] 2xl:left-[585px] bg-[#FFFFFF] shadow-xl rounded-md xl:absolute  xl:left-[455px] xl:top-[123px]">
          <div className="flex flex-col px-5 py-10">
            <div className="flex flex-row max-[880px]:flex-col gap-5 py-5 justify-center">
              <input
                type="text"
                placeholder="Your Name"
                required
                className=" outline-none  bg-[#f5f5f5] py-3 px-3 rounded-lg border  shadow-md shadow-red-500/30 "
              />
              <input
                type="text"
                placeholder="Your Email"
                required
                className=" outline-none  bg-[#f5f5f5] py-3 px-3 rounded-lg border  shadow-md shadow-red-500/30 "
              />
              <input
                type="text"
                placeholder="Your Phone"
                required
                className=" outline-none  bg-[#f5f5f5] py-3 px-3 rounded-lg border  shadow-md shadow-red-500/30 "
              />
            </div>
            <div className="flex flex-row max-[880px]:flex-col gap-5 px-5 py-5 justify-center ">
              <textarea
                name=""
                id=""
                placeholder="Your Message"
                className=" rounded-lg 
              h-[200px]
              w-full bg-[#f5f5f5] py-5 px-5 outline-none  border  shadow-md shadow-red-500/30 "
              ></textarea>
            </div>

            <div className="flex px-5 w-full justify-end max-[880px]:justify-center">
              <button className="bg-red-500 hover:bg-red-500/80 hover:scale-95 duration-300 transition-all rounded-md px-5 py-3 text-white ">
                Submit Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;

/* Frame 855 */
