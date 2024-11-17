import Image from "next/image";
import Link from "next/link";
import logo from "../public/Logo.png"
const Navbar =()=>{
    return(
        <div className="w-[1920px] h-[92px] left-[1px] py-4 px-[220px] flex items-center justify-between bg-[#043873] ">
            <div className=" w-[191px] h-[34px] top-[2.5px]">
                <Image src={logo} alt="logo"/>
            </div>
            <div className="w-[737.5px] h-[60px] flex justify-between gap-6 items-center ">
                <div className="w-[549px] h-[23px] flex justify-between items-center   text-white">
                    <ul className="flex  gap-[32px] cursor-pointer">
                       <li>Product</li>
                       <li>Solution</li>
                       <li>Resources</li>
                       <li>Pricing</li>
                    </ul>
           
                   
                </div>
                <div className="w-[126px] h-[60px] flex gap-6 ">  
                        <button className="w-[126px] h-[60px] py-4 px-10 left-10 bg-[#FFE492]  hover:bg-[#f1c02b] rounded-lg" ><p className="font-medium text-lg leading-[23px] tracking-[-2%]">Login</p></button>
                        </div>
               
                    
           
            </div>
        </div>
    )
}
export default Navbar;