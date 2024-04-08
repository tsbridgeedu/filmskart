import React, { useState } from "react";

import {
  LayoutDashboard,
  SquareKanban,
  ImageUp,
  ListTodo,
  MonitorPlay,
  Palette,
  Tag,
} from "lucide-react";

import { SidebarItems } from "../../src/components/SidebarItems";
import Sidebar from "../../src/components/Sidebar/Sidebar";

const sidebarItemsConfigs = [
  {
    icon: <LayoutDashboard size={20} />,
    text: "Dashboard",
    link: "/admin/dashboard",
  },
  {
    icon: <SquareKanban size={20} />,
    text: "Insert Product",
    link: "/admin/insert-product",
  },
  {
    icon: <ImageUp size={20} />,
    text: "Upload Banner",
    link: "/admin/upload-banner",
  },
  {
    icon: <ListTodo size={20} />,
    text: "Categories",
    link: "/admin/categories-admin",
  },
  {
    icon: <MonitorPlay size={20} />,
    text: "Insert Upcoming Movies",
    link: "/admin/insert-upcoming-movies",
  },
  { icon: <Palette size={20} />, text: "Theme", link: "/admin/theme" },
  { icon: <Tag size={20} />, text: "Tags", link: "/admin/tags" },
];

const Layout = () => {
  // const [activeItem, setActiveItem] = useState(sidebarItemsConfigs[0].text);
  // console.log(activeItem);

  // const handleItemClick = (text) => {
  //   setActiveItem(text);
  //   console.log("Active item:", text); 
  // };

  return (
    <main className="flex">
      <Sidebar>
        {sidebarItemsConfigs.map((items) => {
          return (
            <SidebarItems
              icon={items.icon}
              text={items.text}
              key={items.text}
              link={items.link}
              // active={activeItem === items.text}
              // onClick={() => handleItemClick(items.text)}
            />
          );
        })}
      </Sidebar>
    </main>
  );
};

export default Layout;
