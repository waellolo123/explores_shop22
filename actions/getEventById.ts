import prisma from '@/libs/prismadb';

interface IParams{
  eventId?: string
}

export default async function getEventById(params: IParams){
  try {
    const {eventId} = params;
    const event = await prisma.event.findUnique({
      where: {
        id: eventId
      },
    })

   if(!event){
    return null;
   }
   return event;

  } catch (error: any) {
    throw new Error(error);
  }
}