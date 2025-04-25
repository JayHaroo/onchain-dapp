import { Label } from "@/components/ui/label";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Wallet } from '@coinbase/onchainkit/wallet';

export default function Landing() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="">
        <Label>Welcome to OnChain dApp!</Label>
        <div className="p-3">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>Home</MenubarTrigger>
              <Wallet />
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
    </div>
  );
}
