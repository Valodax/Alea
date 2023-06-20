import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Header from "../components/Header";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
    const address = useAddress();

    return (
        <div className="flex flex-col h-screen justify-center items-center px-8 relative">
            <Header />
            <main className="text-center absolute top-1/3 w-full">
                {address ? `${address} has signed in!` : "User not signed in!"}
            </main>
            <Link href="/roulette">
                <button className="bg-black text-light-gray px-6 py-3 rounded-lg shadow-lg hover:bg-gray-800 transition-colors duration-100 ease-in-out">
                    Play Roulette
                </button>
            </Link>
        </div>
    );
};

export default Home;
