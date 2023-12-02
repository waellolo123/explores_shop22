
import { getCurrentUser } from '@/actions/getCurrentUser';
import prisma from '@/libs/prismadb';
import { NextResponse } from 'next/server';


export async function POST(request){

  const currentUser = await getCurrentUser()

  if(!currentUser) return NextResponse.error();

  if(currentUser.role !== 'ADMIN'){
   return NextResponse.error();
  }

  const body = await request.json();
  const {name, description, price, brand, category, inStock,startDate, images} = body;
  const event = await prisma.event.create({
    data: {
      name,
      description,
      price: parseFloat(price),
      brand,
      category, 
      inStock, 
      startDate,
      images
    }
  })

   return NextResponse.json(event);
  }
  
  
export async function PUT(request){
   const currentUser = await getCurrentUser();
   if(!currentUser || currentUser.role !== 'ADMIN'){
    return NextResponse.error();
   }
   const body = await request.json();
   const {id, inStock} = body;

   const event = await prisma.event.update({
    where: {id: id},
    data: {inStock},
   });

   return NextResponse.json(event);
  }


  