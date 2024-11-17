import Costomiaze_Need from "./components/costomiaze_need";
import Costomize from "./components/costomize";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import OurSponsor from "./components/oursponsors";
import Work_Managements from "./components/workmanagement";
import YourWork from "./components/yourwork";

export default function Home(){
  return(
    <>
    <Navbar/>
    <Hero/>
    <Work_Managements/>
    <Costomize/>
    <Costomiaze_Need/>
    <YourWork/>
    <OurSponsor/>
    <Footer/>
    </>
  )
}