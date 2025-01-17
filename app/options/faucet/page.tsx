"use client"
import { Faucet } from "@/components/Faucet"
import {  WalletProvider } from "@solana/wallet-adapter-react"
import { RecoilRoot } from "recoil"


export default function(){


    return(
        <RecoilRoot>
        <WalletProvider wallets={[]} >
            <Faucet/>
        </WalletProvider>
        </RecoilRoot>
    )
}