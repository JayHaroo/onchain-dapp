"use client";

import { Label } from "@/components/ui/label";
import { Wallet } from "@coinbase/onchainkit/wallet";
import { NFTMintCard, NFTMintCardDefault } from "@coinbase/onchainkit/nft";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator"


export default function Landing() {
  const [address, setAddress] = useState("0xb4703a3a73aec16e764cbd210b0fde9efdab8941") ;
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-between max-w-screen w-11/12 p-2">
        <Label>Welcome to OnChain dApp!</Label>
        <Wallet />
      </div>
      <Separator/>
      <div className="flex justify-evenly max-w-screen max-h-full p-2 w-11/12">
        <div className="w-[250px]">
          <Label htmlFor="nftbox" className="text-sm">
            NFT Address:
          </Label>
          <Textarea
            placeholder="Enter NFT address here"
            id="nftbox"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="">
          <NFTMintCard contractAddress={address}></NFTMintCard>
        </div>
      </div>
    </div>
  );
}
