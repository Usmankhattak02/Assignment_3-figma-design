import Image from "next/image";
import icon from "../public/Icon.png";
const Costomiaze_Need = () => {
    return(
        <div className="w-[1921px] h-[812.09px] absolute top-[3268px] left-[1px] Py-[140px] px-[220px] flex items-center gap-[98px]
        ">
             <div className="w-[714px] h-[532.09px] bg-[#C4DEFD]">
            
            </div>
           <div className="w-[669px] h-[411px] flex flex-col gap-[60px]">
          
               <div className="w-[669px] h-[288px] flex flex-col gap-[24px] text-black">
                   <h1 className="font-bold text-[72px] leading-[87.14px] tracking-[-2%]">Customise it to your needs</h1>
                   <p className=" font-normal text-lg leading-[30px] tracking-[-2%]">Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
                   </p>
               </div>
               <button className="w-[171px] h-[63px] rounded-md py-5 px-10 flex gap-[10px] items-center bg-[#4F9CF9]  hover:bg-blue-800">
                   <p className="font-normal text-lg font-sans leading-[23px] tracking-[-2%] text-white">Let's Go</p>
                   <Image className="w-[14px] h-[14px] flex gap-[4px]" src={icon} alt="iArrow icon" />
               </button>
           </div>
           
       </div>

    )
}
export default Costomiaze_Need;