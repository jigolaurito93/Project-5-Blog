import Link from "next/link";
import Links from "./Links";

const Navbar = () => {
  return (
    <div className="flex justify-between px-10 py-5">
      <div>Logo</div>
      
        <Links />
    
    </div>
  );
};

export default Navbar;
