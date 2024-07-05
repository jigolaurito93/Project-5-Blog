"use client";

import NavLink from "./navLink";
import { useState } from "react";

interface LinkType {
  title: string;
  path: string;
}

const links: LinkType[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = () => {
  const session = true;
  const isAdmin = true;
  console.log("hello");

  const [open, setOpen] = useState(false);

  return (
    <div className="flex gap-32">
      <div className="hidden lg:flex gap-12">
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className="bg-white px-3 rounded-sm">Logout</button>
          </>
        ) : (
          <>
            <button className="bg-white rounded-sm px-3">Login</button>
          </>
        )}
      </div>

      <div className="lg:hidden absolute right-0 w-64">
        <div className="flex justify-end">
          <button className="bg-white px-3 mr-4" onClick={() => setOpen(!open)}>
            {open ? "Close" : "Menu"}
          </button>
        </div>

        <div className="absolute w-full bg-blue-700">
          {open && (
            <div className="flex flex-col w-full h-screen items-center justify-center gap-6">
              {links.map((link) => (
                <NavLink item={link} key={link.title} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Links;
