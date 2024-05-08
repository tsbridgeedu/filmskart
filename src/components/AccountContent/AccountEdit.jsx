import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";

import { useUser } from "@clerk/clerk-react";

import { MailIcon, Pen, PhoneCall, Plus } from "lucide-react";

import "../../index.css";

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid #ee2222`,
  background: "#ee2222",
}));

const AccountEdit = () => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const { user } = useUser();

  const cardFlip = () => {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  };

  useEffect(() => {
    setEmail(user?.emailAddresses.map((item) => item.emailAddress));
  }, []);

  user?.phoneNumbers.map((item) =>
    item.phoneNumber.charAt(0) === undefined
      ? setPhoneNumber("Add Phone Number")
      : setPhoneNumber(item.phoneNumber.slice(0))
  );

  return (
    <>
     

      <div className="flex h-[600px] flex-col py-8 rounded-md w-[850px] ml-20 border-1 border max-[1024px]:hidden mng_pfl_crd">
        <motion.div
          className="mng_pfl_crd_inr"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div className="mng_pfl_crd_nr_frt">
            <div className=" flex flex-col w-full items-center">
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={
                  <SmallAvatar
                    alt="Add IMage Icon"
                    className="cursor-pointer hover:scale-110 duration-300"
                  >
                    <Plus />
                  </SmallAvatar>
                }
              >
                <Avatar
                  alt="Avatar User"
                  sx={{
                    width: 90,
                    height: 90,
                  }}
                />
              </Badge>

              <span className="mt-7 font-semibold text-2xl">
                {user?.fullName || "Add name"}
              </span>
              <span className="mt-1 font-normal text-base">
                Sr. Full Stack Developer
              </span>
            </div>

            <div className="flex flex-col px-10 pt-10 gap-4">
              <span className="font-semibold flex gap-2 items-center">
                <PhoneCall size={18} className="" /> Mobile Number:
                <span className="font-normal">
                  {phoneNumber || "No phone number"}
                </span>
              </span>
              <span className="font-semibold flex gap-2 items-center">
                <MailIcon size={18} /> Email:
                <span className="font-normal">{email || "Add Email"}</span>
              </span>

              <span className="font-semibold flex gap-2 justify-center">
                <Pen size={30} /> Bio:
                <span className="font-normal text-start">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  iste eum veniam aperiam velit. Velit ipsam delectus ut ratione
                  in assumenda soluta, illum, hic amet et nulla, rerum totam
                  nesciunt.
                </span>
              </span>
            </div>

            <div className="flex flex-row justify-center w-full mt-6">
              <button
                className="bg-red-500 py-2 px-3 text-white rounded-md cursor-pointer duration-300 hover:scale-110"
                onClick={cardFlip}
              >
                Edit Profile
              </button>
            </div>
          </div>
          <div className="mng_pfl_crd_nr_bck w-full">
            <div className=" flex flex-col w-full h-full  px-10">
              <div className="flex flex-row items-center gap-4">
                <Avatar
                  alt="Avatar User"
                  sx={{
                    width: 90,
                    height: 90,
                  }}
                />
                <span className="flex items-center">
                  <button className="bg-black/10 px-4 rounded-md mr-2">
                    Edit Profile Image
                  </button>
                  <Pen size={18} />
                </span>
              </div>

              <div className="flex flex-row mt-8 gap-5">
                <input
                  type="text"
                  placeholder={user.fullName}
                  className="px-5 py-2 outline-none border border-red-500 rounded-md"
                />
                <span className="flex items-center">
                  <button className="bg-black/10 px-4 rounded-md mr-2">
                    Edit Name
                  </button>
                  <Pen size={18} />
                </span>
              </div>
              <div className="flex flex-row mt-8 gap-5">
                <input
                  type="text"
                  placeholder={phoneNumber}
                  className="px-5 py-2 outline-none border border-red-500 rounded-md"
                />
                <span className="flex items-center">
                  <button className="bg-black/10 px-4 rounded-md mr-2">
                    Edit Phone
                  </button>
                  <Pen size={18} />
                </span>
              </div>
              <div className="flex flex-row mt-8 gap-5">
                <input
                  type="text"
                  placeholder={email}
                  className="px-5 py-2 outline-none border border-red-500 rounded-md"
                />
                <span className="flex items-center">
                  <button className="bg-black/10 px-4 rounded-md mr-2">
                    Edit Email
                  </button>
                  <Pen size={18} />
                </span>
              </div>
            </div>

            <div className="flex flex-col px-10 pt-10 gap-4">
              <div className="flex flex-col justify-center   gap-5">
                <textarea
                  type="text"
                  placeholder="Upto 150 characters..."
                  className="px-16 py-4 outline-none border border-red-500 rounded-md"
                />
                <span className="flex items-center">
                  <button className="bg-black/10 px-4 rounded-md mr-2">
                    Edit Bio
                  </button>
                  <Pen size={18} />
                </span>
              </div>
            </div>

            <div className="flex flex-row justify-end w-full mt-6 gap-10 px-5">
              <button
                className="bg-black/10 py-2 px-3 text-black rounded-md cursor-pointer duration-300 hover:scale-110"
                onClick={cardFlip}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 py-2 px-3 text-white rounded-md cursor-pointer duration-300 hover:scale-110"
                onClick={cardFlip}
              >
                Submit Changes
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AccountEdit;
