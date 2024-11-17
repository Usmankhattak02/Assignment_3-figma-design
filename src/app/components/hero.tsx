import Image from "next/image";
import icon from "../public/Icon.png";
const Hero = () => {
    return(
        <div className="w-[1920px] h-[829px] absolute top-[92px]  py-[140px] px-[220px] flex items-center  bg-[#043873]">
            <div className="w-[656px] h-[361px] flex flex-col justify-center gap-[60px]">
                <div className="w-[656px] h-[238px] flex flex-col gap-6  ">
                <h2 className="w-[656px] h-[154px] text-white text-[64px] font-bold leading-[77.45px] tracking-[-2%]">Get More Done with whitepace</h2>
                <p className="w-[656px] h-[60px] text-white font-normal text-[18px] leading-[30px] tracking-[-2%]">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
                </div>
                
                    <button className="w-[219px] h-[63px] font-sans text-white p-5 flex gap-[10px] items-center rounded-[8px] hover:bg-blue-800 bg-[#4F9CF9]"><p className="w-[159px] h-[23px] leading-[23px] tracking-[-2%] font-medium text-lg  ">Try Whitepace free</p>
                    <Image className="w-[14px] h-[14px]  flex " src={icon} alt="iArrow icon" />
                    </button>
               
               
            </div>
            <div className="w-[824px] h-[549px] bg-[#C4DEFD] items-center justify-center "></div>
           
                
        </div>
    )
}
export default Hero;