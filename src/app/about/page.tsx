import Image from "next/image";
import businesswomen from "/public/businesswomen.png";

const AboutPage = () => {
  return (
    <div className="flex items-center gap-48">
      <div className="w-1/2 flex flex-col gap-16">
        <h3 className="text-3xl text-blue-800 font-semibold">About Agency</h3>
        <h1 className="text-5xl text-white font-bold">
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className="text-white font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          asperiores ex sunt eveniet quaerat maxime repellendus, deserunt, eaque
          consequatur praesentium vitae nobis accusantium. Pariatur doloremque
          tempore modi adipisci mollitia, vero accusamus ipsum aliquam possimus
          aliquid, voluptas necessitatibus, vitae unde ducimus.
        </p>
      </div>
      {/* Image */}
      <div className="w-1/2">
        <Image src={businesswomen} alt="businesswomen" />
      </div>
    </div>
  );
};

export default AboutPage;
