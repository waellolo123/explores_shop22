import Link from "next/link"
import Container from "../Container"
import Image from "next/image"
import CartCount from "./CartCount"
import UserMenu from "./UserMenu"
import { getCurrentUser } from "@/actions/getCurrentUser"
import Categories from "./Categories"
import SearchBar from "./SearchBar"


const Navbar = async () => {
  const currentUser = await getCurrentUser();

  return (
    <div className="sticky top-0 w-full bg-slate-200 z-30 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Link href={"/"}>
             <Image src={"/images/explores_word.png"} width={180} height={100} alt=""/>
            </Link>
            <div className="md:block">
                <button className="bg-slate-700 text-white py-1 px-4 rounded-full border border-slate-700 hover:bg-transparent hover:border-slate-700 hover:text-slate-700 transition"><Link href={"/shop"}>Shop</Link></button>
              </div>
            <div className="flex items-center gap-6 md:gap-6">
              <CartCount />
              <span className="hidden md:block">Hi, {currentUser?.name}</span>
              <UserMenu currentUser={currentUser} />
            </div>
          </div>
        </Container>
      </div>
      <Categories /> 
    </div>
  )
}

export default Navbar



