"use client";

import { formatPrice } from "@/utils/formatPrice";
import { truncateText } from "@/utils/truncateText";
import Image from "next/image";
import {Rating} from "@mui/material";
import { useRouter } from "next/navigation";
interface EventCardProps {
  data: any
}

const EventCard: React.FC<EventCardProps> = ({data}) => {
  const router = useRouter();

  return (
    <div onClick={() => router.push(`/event/${data.id}`)} className="col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 rounded-sm p-2  transition hover:scale-105 text-center text-sm">
     <div className="flex flex-col items-center w-full gap-1">
       <div className="aspect-square overflow-hidden relative w-full">
        <Image src={data.images[0].image} fill className="w-full h-full object-cover" alt=""/>
        </div>
       <div className="mt-4 font-semibold text-red-600 text-xl">{truncateText(data.name)}</div>
       <div className="">
       </div>
       <div className="font-semibold">{formatPrice(data.price)}</div>
       <div className="font-semibold">start date: {data.startDate}</div>
     </div>
    </div>
  )
}

export default EventCard