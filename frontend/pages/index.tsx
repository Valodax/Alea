import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
    const address = useAddress();
    return (
        <div className="flex flex-col h-screen justify-center items-center px-8 relative">
            <div className="absolute top-0 right-0 p-4">
                <ConnectWallet theme="dark" />
            </div>
            <main className="text-center">{address ? `${address} has signed in!` : "User not signed in!"}</main>
        </div>
    );
};

export default Home;
