import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Header from "../components/Header";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
    const address = useAddress();

    return (
        <div className="flex flex-col h-screen justify-center items-center px-8 relative">
            <Header />
            {address ? (
                <main className="text-center absolute top-1/3 w-full">
                    {address} has signed in!
                    <div className="pt-10">
                        <Link href="/roulette">
                            <button className="bg-black text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-900 transition-colors duration-300 ease-in-out">
                                Play Roulette
                            </button>
                        </Link>
                    </div>
                </main>
            ) : (
                "Connect your wallet to play!"
            )}
        </div>
    );
};

export default Home;
