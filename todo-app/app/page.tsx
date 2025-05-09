import Link from "next/link";

export default function Home() {
  return (
    <div>
       
      <div className=" bg-gray-100 items-center justify-center  flex flex-col py-8 p-4">
        <div className=" w-full max-w-md bg-gray-100 rounded-lg shadow-sm flex flex-col items-center p-6">
          <div className="mb-8">
            <div className="relative w-48 h-48">
              <div className="absolute top-10 left-10">
                <div className="bg-[#E0F7F6] w-16 h-20 rounded-md flex items-center justify-center">
                  <div className="w-10 h-3 bg-[#0DD3C5] rounded-sm"></div>
                </div>
              </div>
              <div className="absolute top-5 right-5">
                <div className="bg-[#E0F7F6] w-14 h-16 rounded-md"></div>
              </div>
              <div className="absolute bottom-0 left-20">
                <div className="bg-[#E0F7F6] w-14 h-16 rounded-md"></div>
              </div>
              <div className="absolute bottom-0 left-0">
                <div className="w-10 h-24 flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full bg-[#333]"></div>
                  <div className="w-2 h-10 bg-[#333]"></div>
                  <div className="flex">
                    <div className="w-3 h-8 bg-[#333]"></div>
                    <div className="w-3 h-8 bg-[#333]"></div>
                  </div>
                </div>
              </div>
            </div>
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
