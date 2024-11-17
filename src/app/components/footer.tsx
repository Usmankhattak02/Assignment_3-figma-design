import Image from "next/image";
import Logo2 from "../public/logo2.png"
const Footer = () => {
    return (
        <div className="w-[1920px] h-[461px] absolute top-[5195px] left-[1px] py-[140px] px-[220px] flex  gap-[200px] bg-[#043873] ">
            <div className="w-[1480px] h-[289px] flex flex-col items-center gap-[100px] ">
                <div className="w-[1480px] h-[169px] flex gap-[100px]  ">
                    <div className="w-[295px] h-[169px] flex flex-col gap-[15px] text-white">
                        <Image src={Logo2} alt="" />
                        <p className="w-[240px] h-[120px] font-normal text-lg leading-[30px] tracking-[-2%]" >whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
                    </div>
                    <div className="w-[295px] h-[127px] flex flex-col gap-[15px]  text-white">
                        <p className="font-bold text-lg leading-[21.78px] tracking-[-2%] ">Product</p>
                        <p className="font-normal text-base  leading-[20px] tracking-[-2%] ">Overview</p>
                        <p className="font-normal text-base  leading-[20px] tracking-[-2%] ">Pricing</p>
                        <p className="font-normal text-base  leading-[20px] tracking-[-2%] ">Customer stories</p>

                    </div>
                    <div className="w-[295px] h-[127px] flex flex-col gap-[15px]  text-white">
                        <p className="font-bold text-lg leading-[21.78px] tracking-[-2%] ">Resources</p>
                        <p className="font-normal text-base  leading-[20px] tracking-[-2%] ">Blog</p>
                        <p className="font-normal text-base  leading-[20px] tracking-[-2%] ">Guides & tutorials</p>
                        <p className="font-normal text-base  leading-[20px] tracking-[-2%] ">Help center</p>

                    </div>
                    <div className="w-[295px] h-[127px] flex flex-col gap-[15px]  text-white ">
                        <p className="font-bold text-lg leading-[21.78px] tracking-[-2%] ">Company</p>
                        <p className="font-normal text-base  leading-[20px] tracking-[-2%] ">About us</p>
                        <p className="font-normal text-base  leading-[20px] tracking-[-2%] ">Careers</p>
                        <p className="font-normal text-base  leading-[20px] tracking-[-2%] ">Media kit</p>

                    </div>

                </div>
                <p className=" font-normal text-base leading-[20px] tracking-[-2%] text-white">©2021 Whitepace LLC.</p>
            </div>
        </div>
    )
}
export default Footer;