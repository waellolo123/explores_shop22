"use client";
import ActionBtn from '@/app/components/ActionBtn';
import Heading from '@/app/components/Heading';
import { formatPrice } from '@/utils/formatPrice';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Event } from "@prisma/client";
import { useCallback } from 'react';
import toast from 'react-hot-toast';
import { MdDelete, MdRemoveRedEye } from 'react-icons/md';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { deleteObject, getStorage, ref } from 'firebase/storage';
import firebaseApp from '@/libs/firebase';


const ManageEventsClient = ({events}) => {
  const router = useRouter();
  const storage = getStorage(firebaseApp);
  let rows;

  if(events){
    rows = events.map((event)=>{
      return {
        id: event.id,
        name: event.name,
        price: formatPrice(event.price),
        category: event.category,
        brand: event.brand,
        inStock: event.inStock,
        images: event.images,
      }
    })
  }

  const columns = [
    {field: 'id', headerName: 'ID', width: 220},
    {field: 'name', headerName: 'Name', width: 220},
    {field: 'price', headerName: 'Price(USD)', width: 100, renderCell: (params)=> {
      return(<div className='font-bold text-slate-800'>{params.row.price}</div>)
    }},
    {field: 'category', headerName: 'Category', width: 100},
    {field: 'action', headerName: 'Actions', width: 200, renderCell: (params)=>{
      return (
        <div className='flex justify-center gap-4 w-full'>
          <ActionBtn icon={MdDelete} onClick={()=>{handleDelete(params.row.id, params.row.images)}} />
          <ActionBtn icon={MdRemoveRedEye} onClick={()=>{
            router.push(`/event/${params.row.id}`)
          }} />
        </div>
      )
    }},

  ]

  const handleDelete = useCallback(async(id, images)=>{
    toast('Deleting event, please wait!')
    const handleImageDelete = async () => {
      try {
        for(const item of images){
          if(item.image){
            const imageRef = ref(storage, item.image)
            await deleteObject(imageRef);
            console.log("image deleted", item.image);
            
          }
        }
      } catch (error) {
        return console.log("deleting images error", error);
      }
    }
    await handleImageDelete();

    axios.delete(`/api/product/${id}`).then((res)=>{
      toast.success('event deleted');
      router.refresh();
    }).catch((error)=>{
      toast.error('something went wrong');
      console.log(error);
    }) 

  },[])
   
  return (
    <div className='max-w-[1150px] m-auto text-xl'>
      <div className='mb-4 mt-8'>
        <Heading title='Manage Events' />
      </div>
      <div style={{height: 600, width: "100%"}}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 },
          },
        }}
        pageSizeOptions={[9, 20]}
        checkboxSelection
        disableRowSelectionOnClick
        />
        </div>
    </div>
  )
}

export default ManageEventsClient;



