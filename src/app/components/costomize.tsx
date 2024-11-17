import Image from "next/image";
import icon from "../public/Icon.png"
const Costomize = () => {
    return (
        <div className="w-[1921px] h-[759px] absolute top-[2509px] left-[1px] Py-[140px] px-[220px] flex items-center gap-[98px]
         bg-[#043873]">
            <div className="w-[697px] h-[294px] flex flex-col gap-[60px]">
                <div className="w-[697px] h-[171px] flex flex-col gap-[24px] text-white">
                    <h1 className="font-bold text-[72px] leading-[87.14px] tracking-[-2%]">Use as Extension</h1>
                    <p className=" font-medium text-lg leading-[30px] tracking-[-2%]">Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
                    </p>
                </div>
                <button className="w-[171px] h-[63px] rounded-md py-5 px-10 flex gap-[10px] items-center bg-[#4F9CF9]  hover:bg-blue-800">
                    <p className="font-normal font-sans text-lg leading-[23px] tracking-[-2%] text-white">Let's Go</p>
                    <Image className="w-[14px] h-[14px] flex gap-[4px]" src={icon} alt="iArrow icon" />
                </button>
            </div>
            <div className="w-[686px] h-[479px] bg-[#C4DEFD]"></div>
        </div>
    )
}
export default Costomize;