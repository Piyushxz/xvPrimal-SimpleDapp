"use client";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { motion } from "motion/react";
import { Menu } from "./Menu";
import { useEffect } from "react";
import { BackgroundBeams } from "./ui/background-beams";

export const Home = () => {
  const wallet = useWallet();


  return !wallet.connected ? (
    <div>
        <BackgroundBeams/>
        <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, ease: "easeInOut" }}
      className="w-screen  flex justify-center"
    >
      <div className="w-[80vw] mt-24 flex justify-center">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="tracking-tighter text-5xl md:text-6xl font-black text-[#3D52A0]">
            xvPrimal is a Simple dApp.
          </h1>
          <h1 className="tracking-tighter text-xl md:text-3xl font-black text-[#3D52A0] opacity-70">
            Interact with the Devnet chain of Solana,
          </h1>
          <h1 className="tracking-tighter text-lg md:text-2xl font-black text-[#3D52A0] opacity-70">
            Connect your wallet to get started!
          </h1>
          <div className="flex justify-center">
            <WalletMultiButton
              style={{ backgroundColor: "#3D52A0" }}
            ></WalletMultiButton>
          </div>
        </div>
      </div>
    </motion.div>
    </div>

  ) : (
    <Menu />
  );
};
