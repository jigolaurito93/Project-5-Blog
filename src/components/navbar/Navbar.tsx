import Link from "next/link";
import Links from "./Links";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-5">
      <Link href="/" className="text-3xl font-semibold text-white">
        Logo
      </Link>
      <Links />
    </div>
  );
};

export default Navbar;
