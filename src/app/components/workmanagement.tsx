import Image from "next/image";
import icon from "../public/Icon.png"
import WorkTogetherImage from "../public/Work Together Image.png"

const Work_Managements = () => {
    return (
        <div className="w-[1920px] h-[1588px] absolute top-[921px] py-[140px] px-[220px] flex flex-col gap-[100px]">
            <div className="w-[1480px] h-[547px] flex items-center gap-[60px]">
                <div className="w-[672px] h-[411px] flex flex-col gap-[60px] ">
                    <div className=" w-[672px] h-[288px] flex flex-col gap-6 text-[black]">
                        <h1 className="font-bold text-[72px] leading-[87.14px] tracking-[-2%]">Project Management</h1>
                        <p className="font-normal text-lg leading-[30px] tracking-[-2%]">Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
                    </div>
                    <button className="w-[201px] h-[63px] text-white rounded-md flex items-center gap-[10px] py-5 px-10 bg-[#4F9CF9]  hover:bg-blue-800">
                        <p className="font-medium text-lg leading-[23px] tracking-[-2%]">Get Started</p>
                        <Image className="w-[14px] h-[14px]" src={icon} alt="iArrow icon" />

                    </button>
                </div>
                <div className="w-[748px] h-[547px] bg-[#C4DEFD]">

                </div>
            </div>
            <div className="w-[1480px] h-[661px] flex items-center justify-between gap-[60px] ">
                <div className="">
                    <Image src={WorkTogetherImage} alt="work together image" />
                </div>
                <div className="w-[670px] h-[294px] flex flex-col gap-[60px] ">
                    <div className="w-[670px h-[171px] flex flex-col gap-6 text-black">
                        <h1 className="font-bold text-[72px] leading-[87.14px] tracking-[-2%]">Work together</h1>
                        <p className=" font-normal text-lg leading-[30px] tracking-[-2%] ">With whitepace, share your notes with your colleagues and collaborate on them.
                            You can also publish a note to the internet and share the URL with others.
                        </p>
                    </div>
                    <button className="w-[186px] h-[63px] text-white font-sans rounded-md py-5 px-10 flex items-center justify-center gap-[10px] bg-[#4F9CF9]  hover:bg-blue-800">
                       <p className="font-medium text-lg leading-[23px] tracking-[-2%]"> Try it now</p>
                     
                            <Image className="w-[14px] h-[14px] flex gap-[4px]" src={icon} alt="iArrow icon" />
                        

                    </button>
                </div>
            </div>
        </div>
    )
}
export default Work_Managements;