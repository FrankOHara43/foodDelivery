import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";

export default function HomeMenu(){

    return(

        <section className="">
         <div className="absolute left-0 right-0 w-full justify-start">

         <div className="h-48 w-48 absolute -left-12 text-left -z-10">
         <Image src = {'/salad.png'} layout={'fill'} object={'contain'} alt = {'sallad'}/>
         </div>
         <div className="h-48 w-48 absolute -right-12 text-right -z-10">
         <Image src = {'/salad2.png'} layout={'fill'} object={'contain'} alt = {'sallad'}/>
         </div>
         </div>

        <div className="text-center mb-56">
          <SectionHeaders 
              subHeader={'check out'}
              mainHeader={'Menu'}/>
           
           
           </div>

           <div className="grid grid-cols-3 gap-4">
              <MenuItem/>
              <MenuItem/>
              <MenuItem/>
              <MenuItem/>
              <MenuItem/>
              <MenuItem/>
           </div>
          
        </section>

    );
}