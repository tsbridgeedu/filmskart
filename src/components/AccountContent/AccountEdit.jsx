import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";

import { useUser } from "@clerk/clerk-react";

import {
  MailIcon,
  Pen,
  PersonStanding,
  PhoneCall,
  Plus,
  User2Icon,
} from "lucide-react";

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
  const [userName, setUserName] = useState("");
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
    user?.phoneNumbers.map((item) =>
      item.phoneNumber.charAt(0) === undefined
        ? setPhoneNumber("Add Phone Number")
        : setPhoneNumber(item.phoneNumber.slice(0))
    );
    setUserName(user?.fullName);
  }, []);

  return (
    <>
      <div className="flex  flex-col py-8    max-[1023px]:border max-[1023px]:w-[500px] max-[768px]:w-[340px] max-[1023px]:h-[650px] max-[768px]:ml-3 mng_pfl_crd">
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
                    alt="Add Image Icon"
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
                {userName || "Add name"}
              </span>
              <span className="mt-1 font-normal text-base">
                Sr. Full Stack Developer
              </span>
            </div>

            <div className="flex flex-col px-10 max-[768px]:px-7 pt-10 gap-4">
              <span className="font-semibold flex gap-2 items-center max-[768px]:text-sm">
                <PhoneCall size={18} className="" /> Mobile Number:
                <span className="font-normal max-[768px]:text-sm text-base font-inter">
                  {phoneNumber || "No phone number"}
                </span>
              </span>
              <span className="font-semibold flex gap-2 items-center max-[768px]:text-sm">
                <MailIcon size={18} /> Email:
                <span className="font-normal">{email || "Add Email"}</span>
              </span>

              <span className="font-semibold flex gap-2  max-[768px]:text-sm">
                <User2Icon size={18} /> Bio:
                <span className="font-normal text-start w-full">
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
                  placeholder={userName}
                  className="px-5 py-2 outline-none border border-red-500 rounded-md"
                />
                <span className="flex items-center max-[768px]:hidden">
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
                <span className="flex items-center max-[768px]:hidden">
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
                <span className="flex items-center max-[768px]:hidden">
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

            <div className="flex flex-row justify-end w-full mt-6 max-[1023px]:mt-12 gap-10 px-5">
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
