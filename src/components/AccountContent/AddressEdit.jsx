import React, { useState } from "react";
import { Home, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { useUser } from "@clerk/clerk-react";

import "../../index.css";

const AddressEdit = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const cardFlip = () => {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  };

  const { user } = useUser();

  return (
    <>
      <div className="flex  flex-col py-8 rounded-md max-[1023px]:border max-[1023px]:w-[500px] max-[768px]:w-[340px] max-[1023px]:h-[650px] max-[768px]:ml-3 mng_pfl_crd">
        <motion.div
          className="mng_pfl_crd_inr"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div className="mng_pfl_crd_nr_frt px-8 py-5 w-full ">
            <div className="flex flex-col w-full overflow-y-scroll scrollbar h-[450px]">
              <h2 className="text-lg font-semibold">Your Saved Addresses:</h2>

              <div className="flex flex-row w-full gap-3 mt-10 max-[768px]:flex-col max-[1023px]:mb-12">
                {" "}
                <span className="mt-5 font-medium text-lg w-[110px] relative  h-[30px] text-center">
                  Address 1:{" "}
                  <span className="bg-red-500 w-[80%] h-[3px]  bottom-0 left-2 absolute"></span>
                </span>
                <div className="w-[650px] h-[140px] max-[768px]:w-[250px] max-[768px]:h-[180px]  tracking-wide  flex flex-col">
                  <div className="px-5 py-3 rounded-md bg-black/10  flex flex-col shadow-md ">
                    <span className="font-inter ">{user.fullName},</span>
                    <span className="font-inter ">
                      Chudail Nagar, Bhoot Bangla, Shaitaan Gali
                    </span>
                    <span className="font-inter ">
                      Ranchi, Jharkhand, 843567
                    </span>
                    <span className="font-inter ">+91 86574 98734</span>
                  </div>
                  <div className="flex flex-row w-full mt-3 px-2 gap-3 flex-wrap">
                    <span className="text-xs border border-red-500 px-2 rounded-sm shadow-md cursor-pointer">
                      Default
                    </span>
                    <span className="text-xs border border-red-500 px-2 rounded-sm shadow-md flex items-center justify-center gap-1 cursor-pointer">
                      <Home size={10} />
                      Home{" "}
                    </span>
                    <span className="text-xs border border-red-500 px-2 rounded-sm shadow-md cursor-pointer">
                      Edit
                    </span>
                    <span className="text-xs border border-red-500 px-2 rounded-sm shadow-md flex items-center gap-1 justify-center cursor-pointer">
                      Delete <Trash2 size={10} />
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-row w-full max-[768px]:flex-col gap-3 mt-10 max-[1023px]:mb-12">
                {" "}
                <span className="mt-5 font-medium text-lg w-[110px] relative  h-[30px] text-center">
                  Address 2:{" "}
                  <span className="bg-red-500 w-[80%] h-[3px]  bottom-0 left-2 absolute"></span>
                </span>
                <div className="w-[650px] h-[140px] max-[768px]:w-[250px] max-[768px]:h-[180px]   tracking-wide  flex flex-col">
                  <div className="px-5 py-3 rounded-md bg-black/10  flex flex-col shadow-md">
                    <span className="font-inter">{user.fullName},</span>
                    <span className="font-inter">
                      Chudail Nagar, Bhoot Bangla, Shaitaan Gali
                    </span>
                    <span className="font-inter">
                      Ranchi, Jharkhand, 843567
                    </span>
                    <span className="font-inter">+91 86574 98734</span>
                  </div>
                  <div className="flex flex-row w-full mt-3 px-2 gap-3 flex-wrap">
                    <span className="text-xs border border-red-500 px-2 rounded-sm shadow-md">
                      Mark as default
                    </span>
                    <span className="text-xs border border-red-500 px-2 rounded-sm shadow-md">
                      Edit
                    </span>
                    <span className="text-xs border border-red-500 px-2 rounded-sm shadow-md flex items-center gap-1 justify-center">
                      Delete <Trash2 size={10} />
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-row w-full max-[768px]:flex-col gap-3 mt-10 max-[1023px]:mb-12">
                {" "}
                <span className="mt-5 font-medium text-lg w-[110px] relative  h-[30px] text-center">
                  Address 3:{" "}
                  <span className="bg-red-500 w-[80%] h-[3px]  bottom-0 left-2 absolute"></span>
                </span>
                <div className="w-[650px] max-[768px]:w-[250px] max-[768px]:h-[180px] h-[140px]  tracking-wide  flex flex-col">
                  <div className="px-5 py-3 rounded-md bg-black/10  flex flex-col shadow-md">
                    <span className="font-inter">{user.fullName},</span>
                    <span className="font-inter">
                      Chudail Nagar, Bhoot Bangla, Shaitaan Gali
                    </span>
                    <span className="font-inter">
                      Ranchi, Jharkhand, 843567
                    </span>
                    <span className="font-inter">+91 86574 98734</span>
                  </div>
                  <div className="flex flex-row w-full mt-3 px-2 gap-3 flex-wrap">
                    <span className="text-xs border border-red-500 px-2 rounded-sm shadow-md">
                      Mark as default
                    </span>
                    <span className="text-xs border border-red-500 px-2 rounded-sm shadow-md">
                      Edit
                    </span>
                    <span className="text-xs border border-red-500 px-2 rounded-sm shadow-md flex items-center gap-1 justify-center">
                      Delete <Trash2 size={10} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-end px-5 mt-10">
              <button
                onClick={cardFlip}
                className="bg-red-500 px-3 py-2 rounded-md text-white cursor-pointer hover:scale-110 duration-300 ease-out "
              >
                Add New
              </button>
            </div>
          </div>

          <div className="mng_pfl_crd_nr_bck px-8 py-5 max-[768px]:px-4 w-full">
            <div className="flex flex-col w-full overflow-y-scroll scrollbar h-[450px]">
              <h2 className="text-lg font-semibold">Add Address:</h2>

              <div className="flex flex-col mt-10 max-[768px]:px-2 px-5 border-x-2 ">
                <div className="flex flex-col gap-1 px-10">
                  <label
                    htmlFor="addressName"
                    className="font-semibold text-sm"
                  >
                    Full name (first name and last name)
                  </label>
                  <input
                    type="text"
                    name="addressName"
                    id="addressName"
                    placeholder="Name"
                    className="px-7 outline-none  rounded-md border border-red-500 bg-[#fcfcfc] text-sm py-2"
                  />
                </div>

                <div className="flex flex-col gap-1 px-10 mt-5">
                  <label
                    htmlFor="addressName"
                    className="font-semibold text-sm"
                  >
                    Pincode
                  </label>
                  <input
                    type="text"
                    name="addressName"
                    id="addressName"
                    placeholder="Pincode"
                    className="px-7 outline-none  rounded-md border border-red-500 bg-[#fcfcfc] text-sm py-2"
                  />
                </div>
                <div className="flex flex-col gap-1 px-10 mt-5">
                  <label
                    htmlFor="addressName"
                    className="font-semibold text-sm"
                  >
                    Flat House no., Building, Company, Apartment
                  </label>
                  <input
                    type="text"
                    name="addressName"
                    id="addressName"
                    placeholder="57/A. "
                    className="px-7 outline-none  rounded-md border border-red-500 bg-[#fcfcfc] text-sm py-2"
                  />
                </div>
                <div className="flex flex-col gap-1 px-10 mt-5">
                  <label
                    htmlFor="addressName"
                    className="font-semibold text-sm"
                  >
                    Area, Street, Sector, Village
                  </label>
                  <input
                    type="text"
                    name="addressName"
                    id="addressName"
                    placeholder=""
                    className="px-7 outline-none  rounded-md border border-red-500 bg-[#fcfcfc] text-sm py-2"
                  />
                </div>
                <div className="flex flex-col gap-1 px-10 mt-5">
                  <label
                    htmlFor="addressName"
                    className="font-semibold text-sm"
                  >
                    Town/City
                  </label>
                  <input
                    type="text"
                    name="addressName"
                    id="addressName"
                    placeholder=""
                    className="px-7 outline-none  rounded-md border border-red-500 bg-[#fcfcfc] text-sm py-2"
                  />
                </div>
                <div className="flex flex-col gap-1 px-10 mt-5">
                  <label
                    htmlFor="addressName"
                    className="font-semibold text-sm"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="addressName"
                    id="addressName"
                    placeholder=""
                    className="px-7 outline-none  rounded-md border border-red-500 bg-[#fcfcfc] text-sm py-2"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-row justify-end mt-10 px-5 gap-6">
              <button className="bg-gray-500/10 px-4 py-2 text-black rounded-md cursor-pointer hover:scale-110 duration-300" onClick={cardFlip}>
                Cancel
              </button>
              <button className="bg-red-500 px-4 py-2 text-white rounded-md cursor-pointer hover:scale-110 duration-300" onClick={cardFlip}>
                Add
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AddressEdit;
