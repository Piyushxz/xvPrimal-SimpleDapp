"use client"
import { Navbar } from "@/components/Navbar";
import { Main } from "@/components/Main";
import { Toaster} from "sonner";
import { RecoilRoot } from "recoil";
export default function Home() {
  return (
    <RecoilRoot>
    <div className="w-screen h-screen bg-[#EDE8F5] flex flex-col">
      <Toaster theme='light'/>
      <Navbar />
      <Main />
    </div>
    </RecoilRoot>
  );
}

