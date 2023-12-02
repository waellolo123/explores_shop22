"use client";

import { truncateText } from "@/utils/truncateText";
import Image from "next/image";
import { useRouter } from "next/navigation";
interface EventCardProps {
  data: any
}

const EventCard: React.FC<EventCardProps> = ({data}) => {
  const router = useRouter();

  return (
    <div onClick={() => router.push(`/event/${data.id}`)} className="col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-200 rounded-sm p-2   transition hover:scale-105 text-center text-sm">
     <div className="flex flex-col items-center w-full gap-1">
       <div className="aspect-square overflow-hidden relative w-full">
        <Image src={data.images[0].image} fill className="w-full h-full object-cover" alt=""/>
        </div>
        <div className="w-full flex items-center justify-center gap-8 mt-2">
         <Image src={data?.images[3]?.image} width={80} height={50} className="w-full h-full object-cover" alt=""/>
         <Image src={data?.images[2]?.image} width={80} height={50} className="w-full h-full object-cover" alt=""/>
        </div>
       <div className="mt-4 font-semibold text-red-600 text-xl">{truncateText(data.name)}</div>
       <div className="">
       <div className="font-semibold">{data.brand}</div>
       </div>
       <div className="flex items-center gap-10">
       <div className="font-semibold">${data.price}</div>
       <div className="font-semibold">start date: {data.startDate}</div>
       </div>
       <div className="font-semibold">{data.description}</div>
     </div>
    </div>
  )
}

export default EventCard


