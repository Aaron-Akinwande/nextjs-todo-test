import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className=" bg-gray-100 items-center justify-center  flex flex-col py-8 p-4">
        <div className=" w-full max-w-md bg-gray-100 rounded-lg shadow-sm flex flex-col items-center p-6">
          <div className=" flex justify-center">
            <img src="/person_todo.png" alt="" />
          </div>

          <h1 className="text-2xl font-bold text-center mb-4">
            Gets things with TODs
          </h1>

          <p className="text-gray-500 text-center mb-8 text-sm px-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            commodo quis libero eget vehicula. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Mauris commodo quis libero eget
            vehicula.
          </p>

          <Link href="/register" className="w-full">
            <button className=" p-3 rounded-xl w-full bg-[#0DD3C5] hover:bg-[#0bb0a3] text-white">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
