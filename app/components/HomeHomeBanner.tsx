import Image from "next/image"


const HomeBanner = () => {
  return (
    <div className="relative bg-[url('/images/Davide_Trofeo_small_web-850dd8b6.jpeg')] bg-cover bg-center bg-no-repeat mb-8">
      <div className="absolute bg-black w-full h-full opacity-60"></div>
      <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-center md:justify-evenly">
        <div className="mb-8 md:mb-0 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4"><span className="text-red-700">Explores</span> Events</h1>
          <p className="text-lg md:text-xl text-white mb-2 tracking-widest">We provide you the best running Events in the world</p>
          <p className="hidden md:block text-xl md:text-4xl text-gray-300 font-bold">All events is showing here for participate</p>
        </div>
        <div className="md:w-1/3 w-full relative aspect-video flex items-center justify-center bg-white rounded-lg">
         <Image src={"/images/cursa.png"} width={1200} height={1000} alt="banner image" className=" object-cover" />
        </div>
      </div>
    </div>
  )
}

export default HomeBanner