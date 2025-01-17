
import { Navbar } from "@/components/Navbar";
import { ReactNode } from "react";

export default function({children}:{children:ReactNode}){
    return(


        <div className="w-screen h-screen flex flex-col bg-[#EDE8F5]" >
        <Navbar/>
        {children}
        </div>
       
    )
}