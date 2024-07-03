import Link from "next/link";
import NavLink from "./navLink";

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

  return (
    <div className="flex gap-10">
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
  );
};

export default Links;
