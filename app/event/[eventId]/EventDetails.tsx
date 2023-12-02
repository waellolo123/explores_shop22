"use client";
import ProductImage from "@/app/components/products/ProductImage";
import SetColor from "@/app/components/products/SetColor";
import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { MdCheckCircle } from "react-icons/md";

interface ProductDetailsProps {
  event: any
}

export type CartProductType = {
  id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  selectedImg: selectedImgType;
  quantity: number;
  price: number; 
}

export type selectedImgType = {
  color: string,
  colorCode: string, 
  image: string
}

const Horizontal = () => {
  return <hr className="w-[30%] m-2"/>
}

const EventDetails:React.FC<ProductDetailsProps> = ({event}) => {
  const {handleAddProductToCart, cartProducts} = useCart();
  const [isProductInCart, setIsProductInCart] = useState(false);

  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: event.id,
    name: event.name,
    description: event.description,
    category: event.category,
    brand: event.brand, 
    selectedImg: {...event.images[0]},
    quantity: 1,
    price: event.price 
  })
  
  const router = useRouter();
  
  const handleColorSelect = useCallback((value:selectedImgType)=> {
      setCartProduct((prev)=> {
        return { ...prev, selectedImg: value }
      })
  },[cartProduct.selectedImg])

 
  return (

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
     <div className="">
      <ProductImage cartProduct={cartProduct} product={event} handleColorSelect={handleColorSelect} />
     </div>
     <div className="flex flex-col gap-1 text-slate-500">
      <h2 className="text-3xl font-medium text-slate-700">{event.name}</h2>
      <div className="flex items-center gap-2">
      </div>
      <Horizontal />
      <div className="text-justify">{event.description}</div>
      <Horizontal />
      <div>
        <span className="font-semibold">Category: </span> {event.category}
      </div>
     </div>
    </div>
  )
}

export default EventDetails;




