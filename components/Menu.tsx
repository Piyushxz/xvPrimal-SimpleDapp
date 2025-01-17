"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { toast } from "sonner"

export const Menu = ()=>{
    const route = useRouter()
    useEffect(()=>{
        toast.success("Wallet Linked Successfully")
    },[])

    return(
        <div className="w-screen flex justify-center ">
            <div className="w-[80vw] mt-24">
                <div className="border border-[#3D52A0] border-opacity-40 rounded-lg w-60 h-48 flex flex-col justify-center px-4">
                    <h1 className=" font-black text-[#3D52A0] text-2xl  tracking-tighter ">Solana Faucet,</h1>
                    <h1 className=" font-black text-[#3D52A0] text-sm opacity-40  tracking-tighter ">Airdrop yourself some Solana</h1>
                    <button onClick={()=>route.push('/options/faucet')}
                    className="mt-20 px-4 py-2 bg-[#3D52A0] text-white font-bold tracking-tighter rounded-lg hover:opacity-50 transition-all ease-in-out duration-300">Try Now</button>
                </div>


            </div>
        </div>
    )
}