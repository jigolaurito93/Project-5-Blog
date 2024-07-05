import Image from "next/image";
import image2 from "/public/colleagues-working-together-project.png";

export default function Home() {
  return (
    <div className="flex gap-16 py-20 items-center">
      {/* Left Text */}
      <div className="w-1/2 flex flex-col gap-16">
        <h1 className="text-8xl text-white font-bold">
          Creative Thoughts Agency.
        </h1>
        <p className="text-white w-10/12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          distinctio molestias debitis doloremque nostrum, enim architecto velit
          dolor quasi quisquam.
        </p>
        <div className="flex gap-8">
          <button className="w-36 h-14 border rounded border-transparent bg-blue-600">
            Learn More
          </button>
          <button className="w-36 h-14 border rounded bg-white">Contact</button>
        </div>
      </div>
      {/* Left Text */}
      <div className="w-1/2">
        <Image src={image2} alt="Office" />
      </div>
    </div>
  );
}
