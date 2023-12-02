export const revalidate = 0;

import HomeHomeBanner from "./components/HomeHomeBanner";
import getProducts, { IProductParams } from "@/actions/getProducts";
import NullData from "./components/NullData";
import Container from "./components/Container";
import getEvents from "@/actions/getEvents";
import EventCard from "./components/events/EventCard";

interface HomeProps {
  searchParams: IProductParams;
}

export default async function Home({searchParams}: HomeProps) {

  const products = await getProducts(searchParams);
  const events = await getEvents();
  console.log(events);
  

  if(products.length === 0){
    return <NullData title="Oops! No products found. Click All to clear filters"/>
  }

  return (
    <div className="p-8">
     <Container>
       <div className="">
        <HomeHomeBanner />
       </div>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {events?.map((event:any)=>{
          return <EventCard key={event.id} data={event} />
        })}
       </div>
    </Container>
    </div>
  )
}


