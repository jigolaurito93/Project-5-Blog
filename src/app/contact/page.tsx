import Image from "next/image";
import customer from "/public/customer.png";

const ContactPage = () => {
  return (
    <div className="flex justify-center items-center gap-36 pt-20">
      <div className="">
        <Image src={customer} alt="customer support" width={800} />
      </div>
      <div className="w-8/12 flex">
        <form action="" className="flex w-full flex-col gap-3 justify-center">
          <input
            type="text"
            placeholder="Full Name"
            className="rounded pl-3 py-2 bg-[#2d2b42]"
          />
          <input
            type="text"
            placeholder="Email Address"
            className="rounded pl-3 py-2 bg-[#2d2b42]"
          />
          <input
            type="text"
            placeholder="Phone Number (Optional)"
            className="rounded pl-3 py-2 bg-[#2d2b42]"
          />
          <textarea
            className="rounded pl-3 py-2 bg-[#2d2b42]"
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Message"
          ></textarea>
          <button className="bg-blue-600 rounded py-2">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
