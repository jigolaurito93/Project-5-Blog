"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  item: {
    title: string;
    path: string;
  };
}

const NavLink = ({ item }: NavLinkProps) => {
  const pathName = usePathname();

  return (
    <Link
      href={item.path}
      className={
        pathName === item.path ? "border rounded-full px-3 py-1 bg-white" : "px-3 py-1 text-white"
      }
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
