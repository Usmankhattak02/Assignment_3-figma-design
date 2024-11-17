import Image from "next/image";
import icon from "../public/Icon.png"
const YourWork = () => {
    return (
<div className=" w-[1921px] h-[574px] absolute top-[4080px] left-[1px] py-[140px] px-[220px] bg-[#043873]">
    <div className="w-[1481px] h-[294px] flex flex-col justify-center items-center gap-[60px] ">
        <div className="w-[1064px] h-[171px] flex flex-col gap-6 text-white">
            <h1 className="font-bold text-[72px] leading-[87.14px] tracking-[-2%]">Your work, everywhere you are</h1>
            <p className=" font-normal text-lg leading-[30px] tracking-[-2%] text-center ">Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
        </div>
        <button className="w-[195px] h-[63px] rounded-lg py-5 px-10 flex gap-[10px] items-center bg-[#4F9CF9]  hover:bg-blue-800">
                   <p className="font-normal text-lg leading-[23px] tracking-[-2%] text-white">Try Taskey</p>
                   <Image className="w-[14px] h-[14px] flex gap-[4px]" src={icon} alt="iArrow icon" />
               </button>

    </div>
</div>
        
    )
}
export default YourWork;