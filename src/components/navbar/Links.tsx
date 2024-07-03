import Link from "next/link";
import NavLink from "./navLink";

const Links = () => {
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

  return (
    <div className="flex gap-10">
      {links.map((link) => (
        <NavLink item={link} key={link.title} />
      ))}
    </div>
  );
};

export default Links;
