import prisma from '@/libs/prismadb';

export default async function getUsers(){
  try {
    const events = await prisma?.event.findMany();
    return events;
  } catch (error: any) {
     console.log(error);
     
  }
}




