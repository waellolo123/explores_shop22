import Container from "@/app/components/Container"
import ProductDetails from "./EventDetails"
import ListRating from "../ListRating"
import getProductById from "@/actions/getProductById"
import NullData from "@/app/components/NullData"
import AddRating from "./AddRating"
import { getCurrentUser } from "@/actions/getCurrentUser"
import getEventById from "@/actions/getEventById"


interface IParams {
  eventId?: string
}

const Event = async ({params} : {params:IParams}) => {
  const user = await getCurrentUser();

 const event = await getEventById(params);

 if(!event){
  return <NullData title="No Product with this ID" />
 }

  return (
    <div className="p-8">
     <Container>
      <ProductDetails event={event}/>
      <div className="flex flex-col mt-20 gap-4">
      </div>
     </Container>
    </div>
  )
}

export default Event;