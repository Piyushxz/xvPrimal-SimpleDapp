"use client"
import { userPublicKey } from "@/atoms"
import { useWallet } from "@solana/wallet-adapter-react"
import { useRouter } from "next/navigation"
import { useRecoilState, useRecoilValue } from "recoil"

export const Faucet = ()=>{
    const wallet = useWallet()
    const router = useRouter()
    // const publicKey = useRecoilValue(userPublicKey)
    console.log(wallet.publicKey?.toBase58())
    
    return(
        <div>
                    <div className="w-screen flex justify-center">
            <div className="w-[80vw] mt-24">
                <div className="flex justify-between ">
                <h1 className="tracking-tighter text-5xl md:text-6xl font-black text-[#3D52A0]">
                     Solana Faucet,
                </h1>

                <button onClick={()=>{wallet.disconnect()
                    router.push('/')
                }}
                    className=" px-6 py-4 bg-[#3D52A0] text-white font-bold tracking-tighter rounded-lg hover:opacity-50 transition-all ease-in-out duration-300">Disconnect Wallet</button>
                
                </div>
            </div>


        </div>
            <div className="w-[80vw] mt-8">
                <div className="flex justify-center ">
                <h1 className="tracking-tighter text-xl md:text-xl font-black text-[#3D52A0]">
                     Your PublicKey : {""}
                </h1>

                
                </div>
            </div>
        </div>

        
    )
}