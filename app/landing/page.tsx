"use client";

import { Label } from "@/components/ui/label";
import { Wallet } from "@coinbase/onchainkit/wallet";
import { NFTMedia } from "@coinbase/onchainkit/nft/view";
import { NFTMintCard, NFTMintCardDefault } from "@coinbase/onchainkit/nft";
import {
  NFTCreator,
  NFTCollectionTitle,
  NFTQuantitySelector,
  NFTAssetCost,
  NFTMintButton,
} from "@coinbase/onchainkit/nft/mint";
import { Earn } from "@coinbase/onchainkit/earn";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

export default function Landing() {
  const [address, setAddress] = useState("");
  const [vaultAdd, setVaultAdd] = useState("");
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-between max-w-screen w-11/12 p-2">
        <Label className="font-special">Welcome to OnChain dApp!</Label>
        <Wallet />
      </div>
      <Separator />
      <div className="flex justify-around max-w-screen max-h-full p-2 w-11/12">
        <div className="w-[250px] flex-col justify-around">
          <div className="mb-2">
            <Label htmlFor="nftbox" className="text-sm font-special">
              NFT Address:
            </Label>
            <Textarea
              placeholder="Enter NFT address here"
              id="nftbox"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <Label htmlFor="vaultbox" className="text-sm font-special">
              Vault Address:
            </Label>
            <Textarea
              placeholder="Enter NFT address here"
              id="vaultbox"
              value={vaultAdd}
              onChange={(e) => setVaultAdd(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-evenly w-11/12 max-w-full">
          <div className="">
            <NFTMintCard contractAddress="0x5E460559B2d57373a5D03CC096FaFFd021CE39F7">
              <NFTCreator />
              <NFTMedia />
              <NFTCollectionTitle />
              <NFTQuantitySelector />
              <NFTAssetCost />
              <NFTMintButton />
            </NFTMintCard>
          </div>
          <div className="">
            <Earn vaultAddress="0x7BfA7C4f149E7415b73bdeDfe609237e29CBF34A" />
          </div>
        </div>
      </div>
    </div>
  );
}
