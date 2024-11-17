import Image from "next/image";
import Apple from "../public/Apple.png"
import Microsoft from "../public/Microsoft.png"
import Slace from "../public/Slack.png"
import Google from "../public//Google.png"
const OurSponsor = () => {
    return(
        <div className=" w-[1922px] h-[538px] absolute top-[4654px] py-[140px] px-[220px] flex flex-col gap-[100px]">
           <h1 className="w-[1482px] h-[87px] font-bold text-[72px] leading-[87.14px] tracking-[-2%] flex justify-center text-black ">Our sponsors</h1>
           <div className="w-[1482px] h-[71px] flex justify-between">
            <Image src={Apple} alt=""/>
            <Image src={Microsoft} alt=""/>
            <Image src={Slace} alt=""/>
            <Image src={Google} alt=""/>

           </div>
        </div>
    )
}
export default OurSponsor;