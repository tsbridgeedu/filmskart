import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { ChevronLeft } from "lucide-react";

import AccountEdit from "./AccountEdit";
import AddressEdit from "./AddressEdit";
import ReturnPolicy from "./ReturnPolicy";
import CancellationPolicy from "./CancellationPolicy";
import WishlistList from "../Wishlist/WishlistList";
import { Link, Outlet } from "react-router-dom";

const AccountContent = () => {
  const [sdbrOpen, setSdbrOpen] = useState(false);
  const { user } = useUser();

  return (
    <div className="h-full flex flex-col">
      <div className="flex flex-row w-full min-[600px]:px-16 px-5  py-8 justify-between">
        <div className="flex flex-row gap-1.5 sm:gap-2 text-sm ">
          <span>Home</span>/<span>Account</span>/
           {/* TODO */}
          <span className="text-red-500">route</span>
        </div>
        <div className="flex flex-row gap-2">
          <span className="text-sm">
            Hello,{" "}
            <span className="text-red-500">{user?.fTODOirstName || "user"}</span>
          </span>
        </div>
      </div>

      <div className="flex flex-row lg:items-center lg:justify-center md:py-8 py-8 md:px-16 px-0 ">
        {/* Desktop View */}

        <div className="flex flex-col lg:h-[500px] lg:w-[240px] border-1 border md:rounded-md shadow-md max-[1024px]:hidden ">
          <div className="flex flex-col py-10 px-4">
            <h1 className="font-semibold pl-2">My Account</h1>
            <ul className="flex flex-col text-sm py-3 gap-3 px-5">
              <li
                className="hover:text-red-500 duration-300 transition-all ease-linear cursor-pointer"
              >
                <Link to={"/profile"}>My Profile</Link>
              </li>
              <li
                className="hover:text-red-500 duration-300 transition-all ease-linear cursor-pointer"
              >
                <Link to="address">
                  Address Book
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col  px-4">
            <h1 className="font-semibold pl-2">My History</h1>
            <ul className="flex flex-col text-sm py-3 gap-3 px-5">
              <li className="hover:text-red-500 duration-300 transition-all ease-linear cursor-pointer">
                <Link to={"orders"} >My Orders</Link>
              </li>
              <li className="hover:text-red-500 duration-300 transition-all ease-linear cursor-pointer">
                <Link to={"wishlist"} >My Wishlist</Link>
              </li>
              <li className="hover:text-red-500 duration-300 transition-all ease-linear cursor-pointer">
                <Link to={"/returnpolicy"} >My Returns</Link>
              </li>
              <li className="hover:text-red-500 duration-300 transition-all ease-linear cursor-pointer">
                <Link to={"/cancellation-policy"} >My Cancellations</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile View */}

        <div className="flex flex-row relative h-screen max-[1023px]:mb-40 max-[768px]:mb-20 w-full justify-center lg:hidden overflow-x-none">
          <div className="fixed top-[25%] left-0   z-10 lg:hidden ">
            <div
              className={`flex flex-col border-1 p-5 border bg-white shadow-lg shadow-black/30 h-[480px] pt-4 ${
                sdbrOpen ? "w-72" : "w-10"
              } duration-300 shadow-lg rounded-md lg:hidden relative`}
            >
              <ChevronLeft
                className={`cursor-pointer text-2xl bg-red-500 text-white rounded-full text-center absolute -right-3 top-[50%] border ${
                  !sdbrOpen && "rotate-180"
                } duration-300 border-gray-500 `}
                onClick={() => {
                  setSdbrOpen(!sdbrOpen);
                }}
              />

              {sdbrOpen && (
                <>
                  <div className="flex flex-col py-10 px-4">
                    <h1 className="font-semibold">My Account</h1>
                    <ul className="flex flex-col text-sm py-3 gap-3 px-5">
                      <li
                        className="hover:text-red-500 duration-300 transition-all ease-linear cursor-pointer"
                      >
                        <Link to={"/profile"}>My Profile</Link>
                      </li>
                      <li
                        className="hover:text-red-500 duration-300 transition-all ease-linear cursor-pointer"
                      >
                        <Link to={"address"}>Address Book</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col  px-4">
                    <h1 className="font-semibold">My History</h1>
                    <ul className="flex flex-col text-sm py-3 gap-3 px-5">
                      <li className="hover:text-red-500 duration-300 transition-all ease-linear cursor-pointer">
                        <Link to={"orders"}>My Orders</Link>
                      </li>
                      <li className="hover:text-red-500 duration-300 transition-all ease-linear cursor-pointer">
                        <Link to={"wishlist"}>My Wishlist</Link>
                      </li>
                      <li className="hover:text-red-500 duration-300 transition-all ease-linear cursor-pointer">
                        <Link to={"/returnpolicy"}>My Returns</Link>
                      </li>
                      <li className="hover:text-red-500 duration-300 transition-all ease-linear cursor-pointer">
                        <Link to={"/cancellation-policy"}>My Cancellations</Link>
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="z-0 h-screen md:w-[830px] md:h-[600px] md:border md:rounded-md  md:ml-20">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AccountContent;
