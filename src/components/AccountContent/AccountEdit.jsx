import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import axios from "axios";
import { ColorRing } from 'react-loader-spinner'
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
  const [inputStates, setInputStates] = useState({
    input1: true,
    input2: true,
    input3: true,
    input4: true,
  });
  const[loader,setLoader]=useState(false);
  const [updated,setUpdated]=useState(false);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [tagline, setTagline] = useState("");
  const [bio, setBio] = useState("");
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

  const handleInputEnable = (inputName) => {
    setInputStates((prevState) => ({
      ...prevState,
      [inputName]: false,
    }));
  }

  const handleInputDisable = (inputName) => {
    setInputStates((prevState) => ({
      ...prevState,
      [inputName]: true,
    }));
  }

  const updateUser = async () => {
    setLoader(true);
    try {

      const response = await axios.patch("/api/profile", {
        bio,
        tagline,
        fName: firstName,
        lName: lastName
      });

      const updateUserData = response.data;

      if (!updateUserData.message === "success") {
        throw new Error("Error updating");
      } else {
        console.log("your changes has been updated");
      }

      await user.reload();

      setUpdated(true);
      setLoader(false);

      setTimeout(() => {
        setUpdated(false);
        cardFlip();
      }, 3000);

    } catch (error) {
      console.error("Error updating user data: ", error);
    }
  }

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
      <div className="relative w-full h-full flex justify-center items-center p-5">
        <div className="flex flex-col mng_pfl_crd w-full h-full justify-center items-center max-[1024px]:w-[680px] max-[768px]:w-[550px] max-[480px]:w-[340px] max-[1024px]:h-[800px]">
          <motion.div
            className="mng_pfl_crd_inr w-full h-full"
            initial={false}
            animate={{ rotateY: isFlipped ? 180 : 360 }}
            transition={{ duration: 0.6, animationDirection: "normal" }}
            onAnimationComplete={() => setIsAnimating(false)}
          >
            <div className="mng_pfl_crd_nr_frt w-full flex flex-col py-32">
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
                  {tagline}
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
                    {bio}
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

            <div className="mng_pfl_crd_nr_bck w-full mb-10 flex flex-col">
              <div className=" flex flex-col w-full h-full px-10 max-[1024px]:px-5 max-[768px]:px-6 max-[480px]:px-4">
                <div className="flex flex-row items-center gap-4">
                  <Avatar
                    alt="Avatar User"
                    sx={{
                      width: 90,
                      height: 90,
                    }}
                  />
                  <span className="flex items-center bg-black/10 px-4 rounded-md gap-1">
                    <button>
                      Edit Profile Image
                    </button>
                    <Pen size={18} />
                  </span>
                </div>

                <div className="flex flex-row mt-8 gap-5">
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    value={firstName}
                    className="px-5 py-2 outline-none border border-red-500 rounded-md max-[480px]:w-[75%]"
                    disabled={inputStates.input1}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <span className="flex items-center bg-black/10 px-4 rounded-md gap-1" onClick={() => handleInputEnable('input1')}>
                    <button className="max-[1024px]:hidden">
                      Edit First Name
                    </button>
                    <Pen size={18} />
                  </span>

                  <span className="flex items-center max-[768px]:hidden">
                    <button className="bg-black/10 px-4 rounded-md py-2" onClick={() => handleInputDisable('input1')}>
                      Update First Name
                    </button>
                  </span>
                </div>
                <div className="flex flex-row mt-8 gap-5">
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    value={lastName}
                    className="px-5 py-2 outline-none border border-red-500 rounded-md max-[480px]:w-[75%]"
                    disabled={inputStates.input2}
                    onChange={(e) => setLastName(e.target.value)}

                  />
                  <span className="flex items-center bg-black/10 px-4 rounded-md gap-1" onClick={() => handleInputEnable('input2')}>
                    <button className="max-[1024px]:hidden">
                      Edit Last Name
                    </button>
                    <Pen size={18} />
                  </span>
                  <span className="flex items-center max-[768px]:hidden">
                    <button className="bg-black/10 px-4 rounded-md mr-2 py-2" onClick={() => handleInputDisable('input2')}>
                      Update Last Name
                    </button>
                  </span>
                </div>
                <div className="flex flex-row mt-8 gap-5">
                  <input
                    type="text"
                    placeholder="Enter your tagline"
                    value={tagline}
                    className="px-5 py-2 outline-none border border-red-500 rounded-md max-[480px]:w-[75%]"
                    disabled={inputStates.input3}
                    onChange={(e) => setTagline(e.target.value)}

                  />
                  <span className="flex items-center bg-black/10 px-4 rounded-md gap-1" onClick={() => handleInputEnable('input3')}>
                    <button className="max-[1024px]:hidden">
                      Edit Tagline
                    </button>
                    <Pen size={18} />
                  </span>
                  <span className="flex items-center max-[768px]:hidden">
                    <button className="bg-black/10 px-4 rounded-md mr-2 py-2" onClick={() => handleInputDisable('input3')}>
                      Update Tagline
                    </button>
                  </span>
                </div>
                <div className="flex flex-row mt-8 gap-5">
                  <input
                    type="text"
                    placeholder={phoneNumber}
                    className="px-5 py-2 outline-none border border-red-500 rounded-md"
                  />
                  <span className="flex items-center max-[768px]:hidden bg-black/10 px-4 rounded-md gap-1">
                    <button>
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
                  <span className="flex items-center max-[768px]:hidden bg-black/10 px-4 rounded-md gap-1">
                    <button>
                      Edit Email
                    </button>
                    <Pen size={18} />
                  </span>
                </div>
              </div>

              <div className="flex flex-col px-10 pt-10 gap-4 max-[768px]:px-6 max-[480px]:px-4 ">
                  <textarea
                    type="text"
                    placeholder="Upto 150 characters..."
                    disabled={inputStates.input4}
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className="px-16 py-4 outline-none border border-red-500 rounded-md"
                  ></textarea>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center bg-black/10 px-4 rounded-md gap-1 py-2" onClick={() => handleInputEnable('input4')}>
                      <button className="max-[1024px]:hidden">
                        Edit Bio
                      </button>
                      <Pen size={18} />
                    </span>
                    <span className="flex items-center max-[768px]:hidden">
                      <button className="bg-black/10 px-4 rounded-md mr-2 py-2" onClick={() => handleInputDisable('input4')}>
                        Update Bio
                      </button>
                    </span>
                  </div>
              </div>

              <div className="flex flex-row justify-end w-full mt-6 max-[1024px]:mt-7 gap-10">
                <button
                  className="bg-black/10 py-2 px-3 text-black rounded-md cursor-pointer duration-300 hover:scale-110"
                  onClick={cardFlip}
                >
                  Cancel
                </button>
                <button
                  className="bg-red-500 py-2 px-3 text-white rounded-md cursor-pointer duration-300 hover:scale-110"
                  onClick={updateUser}
                >
                  Submit
                </button>
              </div>

              <div className="flex justify-center items-center relative self-center">
                <div className="absolute top-3">
                  <ColorRing visible={loader} width={45}/>
                </div>
                <div className={`bg-emerald-300 px-4 text-white py-3 rounded-md top-3 max-[768px]:top-5 w-80 justify-center items-center absolute ${updated ? "flex" : "hidden" }`}>
                  Your Changes have been updated
                </div>
              </div>
              
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AccountEdit;
