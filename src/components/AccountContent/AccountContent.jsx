import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { ChevronRight } from "lucide-react";
const AccountContent = () => {
  const [route, setRoute] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const sideBarClick = () => {
    setIsClicked(!isClicked);
  };

  const { user } = useUser();

  useEffect(() => {
    const firstRoute =
      window.location.pathname.slice(1).charAt(0).toUpperCase() +
      window.location.pathname.slice(2);
    setRoute(firstRoute);
  }, []);
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

      <div className="flex flex-row md:py-16 py-8 md:px-16 px-0">
        <div className="flex flex-col h-[500px] w-[220px] border-1 border max-[768px]:hidden ">
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
        </div>

        <div
          className={`flex flex-col border-1 border z-20 h-[450px] shadow-lg rounded-md md:hidden relative`}
          style={{ width: isClicked ? "220px" : "20px" }}
        >
          <div className="h-full flex flex-col w-full justify-center">
            <div
              className={`absolute top-1/2 transform -translate-y-1/2 right-0 bg-red-500/90 text-[#fff] w-7 h-7 rounded-full flex justify-center items-center`}
              onClick={sideBarClick}
            >
              <ChevronRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountContent;

// {sbWdth === "220px" && (
//   <>
//     <div className="flex flex-col py-10 px-4">
//       <h1 className="font-semibold">Manage My Account</h1>
//       <ul className="flex flex-col text-sm py-3 gap-3 px-5">
//         <li
//           className="hover:text-red-500 duration-300 transition-all ease-linear cursor-pointer"
//           onClick={() => {setRoute("Profile"); setSbWdth('20px')}}
//         >
//           <span>My Profile</span>
//         </li>
//         <li
//           className="hover:text-red-500 duration-300 transition-all ease-linear cursor-pointer"
//           onClick={() => {setRoute("Address"); setSbWdth('20px')}}
//         >
//           <span>Address Book</span>
//         </li>
//         <li
//           className="hover:text-red-500 duration-300 transition-all ease-linear cursor-pointer"
//           onClick={() => {setRoute("Payments"); setSbWdth('20px')}}
//         >
//           <span>My Payment Options</span>
//         </li>
//       </ul>
//     </div>
//     <div className="flex flex-col  px-4">
//       <h1 className="font-semibold">My Orders</h1>
//       <ul className="flex flex-col text-sm py-3 gap-3 px-5">
//         <li
//           className="hover:text-red-500 duration-300 transition-all ease-linear cursor-pointer"
//           onClick={() => {setRoute("Returns"); setSbWdth('20px')}}
//         >
//           <span>My Returns</span>
//         </li>
//         <li
//           className="hover:text-red-500 duration-300 transition-all ease-linear cursor-pointer"
//           onClick={() => {setRoute("Cancellations"); setSbWdth('20px')}}
//         >
//           <span>My Cancellations</span>
//         </li>
//       </ul>
//     </div>
//     <div className="flex flex-col pt-10  px-4">
//       <h1 className="font-semibold">My Wishlist</h1>
//       <ul className="flex flex-col text-sm py-3 gap-3 px-5">
//         <li
//           className="hover:text-red-500 duration-300 transition-all ease-linear cursor-pointer"
//           onClick={() => {setRoute("Wishlist"); setSbWdth('20px')} }
//         >
//           <span>Wishlist</span>
//         </li>
//       </ul>
//     </div>
//   </>
// )}
