
import OrderClient from "./OrderClient"
import { getCurrentUser } from "@/actions/getCurrentUser"
import NullData from "@/app/components/NullData";
import Container from "@/app/components/Container";
import getOrdersByUserId from "@/actions/getOrdersByUserId";


const Orders = async () => {

  const currentUser = await getCurrentUser();

  if(!currentUser){
    return <NullData title='Oops! access denied' />;
  }
  
  const orders = await getOrdersByUserId(currentUser.id);
  
  if(!orders){
    return <NullData title='No orders yet...' />;
  }
  
  

  return (
  
      <Container>
       <OrderClient orders={orders}/>
      </Container>
    
  )
}

export default Orders;