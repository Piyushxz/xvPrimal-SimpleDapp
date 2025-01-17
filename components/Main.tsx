"use client";
import { ConnectionProvider, useWallet, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css"
import { Home } from "./Home";
export const Main = () =>{

    return(

    
                <ConnectionProvider endpoint="https://api.devnet.solana.com">

        <WalletProvider wallets={[]} >
        <WalletModalProvider>
            <Home/>
        </WalletModalProvider>
        </WalletProvider>
        </ConnectionProvider>
    
         
    )
}