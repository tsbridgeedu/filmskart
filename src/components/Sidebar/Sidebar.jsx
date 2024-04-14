import React, { createContext, useContext, useState } from "react";
import { ChevronFirst, MoreVertical, ChevronLast } from "lucide-react";

import { faker } from "@faker-js/faker";

const SidebarContext = createContext();

const Sidebar = ({ children }) => {
  const [expanded, setExpanded] = useState(true);
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center mb-1">
          
          <h2 className={`${expanded ? 'font-bold text-xl' : 'hidden' } `}>Admin Panel</h2>
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 w-0 m-3"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>
        <hr />

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3 mt-8">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <img
            src={faker.image.avatar()}
            alt=""
            className="w-10 h-10 rounded-md hover:cursor-pointer"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all hover:cursor-pointer ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4 ">
              <h4 className="font-semibold">{faker.person.fullName()}</h4>
              <span className="text-xs text-gray-600">{faker.person.fullName()}@gmail.com</span>
            </div>
            <MoreVertical size={20} className="cursor-pointer hover:bg-gray-300 hover:rounded-xl "/>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
export {SidebarContext}



