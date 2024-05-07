import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { ChevronLeft, MailIcon, Pen, PhoneCall, Plus } from "lucide-react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";

import { motion } from "framer-motion";

import "../../index.css";

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid #ee2222`,
  background: "#ee2222",
}));

const AccountContent = () => {
  const [route, setRoute] = useState("");
  const [sdbrOpen, setSdbrOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const cardFlip = () => {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  };
  const { user } = useUser();

  useEffect(() => {
    const firstRoute =
      window.location.pathname.slice(1).charAt(0).toUpperCase() +
      window.location.pathname.slice(2);
    setRoute(firstRoute);
    setEmail(user?.emailAddresses.map((item) => item.emailAddress));
  }, []);

  user?.phoneNumbers.map((item) =>
    item.phoneNumber.charAt(0) === undefined
      ? setPhoneNumber("Add Phone Number")
      : setPhoneNumber(item.phoneNumber.slice(0))
  );

  return (
    <div className="h-full flex flex-col">
      <div className="flex flex-row w-full min-[600px]:px-16 px-5  py-8 justify-between">
        <div className="flex flex-row gap-1.5 sm:gap-2 text-sm ">
          <span>Home</span>/<span>Account</span>/
          <span className="text-red-500">{route}</span>
        </div>
        <div className="flex flex-row gap-2">
          <span className="text-sm">
            Hello,{" "}
            <span className="text-red-500">{user?.firstName || "user"}</span>
          </span>
        </div>
      </div>

      <div className="flex flex-row lg:items-center lg:justify-center md:py-8 py-8 md:px-16 px-0 ">
        {/* Desktop View */}

        <div className="flex flex-col h-[500px] w-[220px] border-1 border md:rounded-md shadow-md max-[1024px]:hidden ">
          <div className="flex flex-col py-10 px-4">
            <h1 className="font-semibold pl-2">Manage My Account</h1>
            <ul className="flex flex-col text-sm py-3 gap-3 px-5">
              <li
                className="hover:text-red-500 duration-300 transition-all ease-linear cursor-pointer"
                onClick={() => setRoute("Profile")}
              >
                <span>My Profile</span>
              </li>
              <li
                className="hover:text-red-500 duration-300 transition-all ease-linear cursor-pointer"
                onClick={() => setRoute("Address")}
              >
                <span>Address Book</span>
              </li>
              <li
                className="hover:text-red-500 duration-300 transition-all ease-linear cursor-pointer"
                onClick={() => setRoute("Payments")}
              >
                <span>My Payment Options</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col  px-4">
            <h1 className="font-semibold pl-2">My Orders</h1>
            <ul className="flex flex-col text-sm py-3 gap-3 px-5">
              <li
                className="hover:text-red-500 duration-300 transition-all ease-linear cursor-pointer"
                onClick={() => setRoute("Returns")}
              >
                <span>My Returns</span>
              </li>
              <li
                className="hover:text-red-500 duration-300 transition-all ease-linear cursor-pointer"
                onClick={() => setRoute("Cancellations")}
              >
                <span>My Cancellations</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col pt-10  px-4">
            <h1 className="font-semibold pl-2">My Wishlist</h1>
            <ul className="flex flex-col text-sm py-3 gap-3 px-5">
              <li
                className="hover:text-red-500 duration-300 transition-all ease-linear cursor-pointer"
                onClick={() => setRoute("Wishlist")}
              >
                <span>Wishlist</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex h-[500px] flex-col py-8 rounded-md w-[850px] ml-20 border-1 border max-[1024px]:hidden mng_pfl_crd">
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
                    iste eum veniam aperiam velit. Velit ipsam delectus ut
                    ratione in assumenda soluta, illum, hic amet et nulla, rerum
                    totam nesciunt.
                  </span>
                </span>
              </div>

              <div className="flex flex-row justify-center w-full mt-6">
                <button className="bg-red-500 py-2 px-3 text-white rounded-md cursor-pointer duration-300 hover:scale-110" onClick={cardFlip}>
                  Edit Profile
                </button>
              </div>
            </div>
            <div className="mng_pfl_crd_nr_bck">
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
                  Jr. Full Stack Developer
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
                    iste eum veniam aperiam velit. Velit ipsam delectus ut
                    ratione in assumenda soluta, illum, hic amet et nulla, rerum
                    totam nesciunt.
                  </span>
                </span>
              </div>

              <div className="flex flex-row justify-center w-full mt-6">
                <button className="bg-red-500 py-2 px-3 text-white rounded-md cursor-pointer duration-300 hover:scale-110" onClick={cardFlip}>
                  Edit Profile
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile View */}

        <div
          className={`flex flex-col border-1 p-5 border z-20 h-[480px] pt-4 ${
            sdbrOpen ? "w-72" : "w-10"
          } duration-300 shadow-lg rounded-md lg:hidden relative`}
        >
          <ChevronLeft
            className={`text-2xl bg-red-500 text-white rounded-full text-center absolute -right-3 border ${
              !sdbrOpen && "rotate-180"
            } duration-300 border-gray-500 `}
            onClick={() => {
              setSdbrOpen(!sdbrOpen);
            }}
          />

          {sdbrOpen && (
            <>
              <div className="flex flex-col py-10 px-4">
                <h1 className="font-semibold">Manage My Account</h1>
                <ul className="flex flex-col text-sm py-3 gap-3 px-5">
                  <li
                    className="hover:text-red-500 duration-300 transition-all ease-linear cursor-pointer"
                    onClick={() => setRoute("Profile")}
                  >
                    <span>My Profile</span>
                  </li>
                  <li
                    className="hover:text-red-500 duration-300 transition-all ease-linear cursor-pointer"
                    onClick={() => setRoute("Address")}
                  >
                    <span>Address Book</span>
                  </li>
                  <li
                    className="hover:text-red-500 duration-300 transition-all ease-linear cursor-pointer"
                    onClick={() => setRoute("Payments")}
                  >
                    <span>My Payment Options</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col  px-4">
                <h1 className="font-semibold">My Orders</h1>
                <ul className="flex flex-col text-sm py-3 gap-3 px-5">
                  <li
                    className="hover:text-red-500 duration-300 transition-all ease-linear cursor-pointer"
                    onClick={() => setRoute("Returns")}
                  >
                    <span>My Returns</span>
                  </li>
                  <li
                    className="hover:text-red-500 duration-300 transition-all ease-linear cursor-pointer"
                    onClick={() => setRoute("Cancellations")}
                  >
                    <span>My Cancellations</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col pt-10  px-4">
                <h1 className="font-semibold">My Wishlist</h1>
                <ul className="flex flex-col text-sm py-3 gap-3 px-5">
                  <li
                    className="hover:text-red-500 duration-300 transition-all ease-linear cursor-pointer"
                    onClick={() => setRoute("Wishlist")}
                  >
                    <span>Wishlist</span>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountContent;
