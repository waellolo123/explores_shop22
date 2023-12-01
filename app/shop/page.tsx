export const revalidate = 0;

import Container from "../components/Container";
import HomeBanner from "../components/HomeBanner";
import ProductCard from "../components/products/ProductCard";
import getProducts, { IProductParams } from "@/actions/getProducts";
import NullData from "../components/NullData";

interface ShopProps {
  searchParams: IProductParams;
}

export default async function Shop({searchParams}: ShopProps) {

  const products = await getProducts(searchParams);

  if(products.length === 0){
    return <NullData title="Oops! No products found. Click All to clear filters"/>
  }

  return (
    <div className="p-8">
     <Container>
       <div className="">
        <HomeBanner />
       </div>
       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {products.map((product:any)=>{
          return <ProductCard key={product.id} data={product} />
        })}
       </div>
     </Container>
    </div>
  )
}


