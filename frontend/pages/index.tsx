import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Header from "../components/Header";
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import wheel from "../assets/wheel.svg";
import jack from "../assets/jack.svg";
import risk from "../assets/risk.svg";

const Home: NextPage = () => {
    const address = useAddress();

    return (
        <div className="flex flex-col h-screen items-center">
            <div className="pb-20">
                <Header />
            </div>
            <div>
                {address ? (
                    <div className="text-center top-1/3 mx-auto">
                        <h1 className="text-6xl font-semibold pb-20">All Games</h1>
                        <h3 className="text-3xl font-semibold pb-10">Singleplayer</h3>
                        <div className="pb-20 flex flex-wrap justify-center gap-20">
                            <Link href="/roulette">
                                <div className="w-[13.5rem] h-[13.5rem] flex items-center justify-center hover:drop-shadow-lg text-white rounded-lg hover:text-blue-400 hover:scale-105 transition-all duration-300 ease-in-out">
                                    <div className="aspect-content flex flex-col items-center justify-center space-y-2">
                                        <div className="h-[9rem] w-[9rem]">
                                            <Image
                                                priority
                                                src={wheel}
                                                alt="roulette wheel"
                                                className="object-contain h-full w-full drop-shadow-lg"
                                            />
                                        </div>
                                        <span className="font-semibold text-lg drop-shadow-lg">Roulette</span>
                                    </div>
                                </div>
                            </Link>
                            <Link href="/roulette">
                                <div className="w-[13.5rem] h-[13.5rem] flex items-center justify-center hover:drop-shadow-lg text-white rounded-lg hover:text-blue-400 hover:scale-105 transition-all duration-300 ease-in-out">
                                    <div className="aspect-content flex flex-col items-center justify-center space-y-4">
                                        <div className="h-[9rem] w-[9rem]">
                                            <Image
                                                priority
                                                src={jack}
                                                alt="jack of spades"
                                                className="object-contain h-full w-full"
                                            />
                                        </div>
                                        <span className="font-semibold text-lg">Blackjack</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <h3 className="text-3xl font-semibold pt-20 pb-10">Multiplayer</h3>
                        <div className="flex flex-wrap justify-content justify-center gap-20">
                            <Link href="/roulette">
                                <div className="w-[13.5rem] h-[13.5rem] flex items-center justify-center hover:drop-shadow-lg text-white rounded-lg hover:text-blue-400 hover:scale-105 transition-all duration-300 ease-in-out">
                                    <div className="aspect-content flex flex-col items-center justify-center space-y-2">
                                        <div className="h-[9rem] w-[13rem]">
                                            <Image
                                                priority
                                                src={risk}
                                                alt="risk"
                                                className="object-contain h-full w-full drop-shadow-lg"
                                            />
                                        </div>
                                        <span className="font-semibold text-lg drop-shadow-lg">Cryptorisk</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                ) : (
                    "Welcome to Alea"
                )}
            </div>
        </div>
    );
};

export default Home;
