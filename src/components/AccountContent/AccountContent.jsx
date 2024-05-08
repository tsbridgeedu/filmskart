import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { ChevronLeft } from "lucide-react";

import AccountEdit from "./AccountEdit";
import AddressEdit from "./AddressEdit";

const AccountContent = () => {
  const [route, setRoute] = useState("");
  const [sdbrOpen, setSdbrOpen] = useState(false);
  const [innerCntnt, setInnerCntnt] = useState("");

  
  const { user } = useUser();

  
    useEffect(() => {
      const firstRoute =
      window.location.pathname.slice(1).charAt(0).toUpperCase() +
      window.location.pathname.slice(2);
      setRoute(firstRoute);

      if (route === "Profile") {
        
        setInnerCntnt(<AccountEdit />
      );
    } else if(route === 'Address'){
      setInnerCntnt(<AddressEdit />)
      
      }
    
    }, [route ])
  

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
        <>{innerCntnt}</>

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
