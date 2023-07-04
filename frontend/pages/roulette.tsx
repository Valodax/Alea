import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Header from "../components/Header";
import Image from "next/image";
import wheel from "../assets/wheel.svg";
import ball from "../assets/ball.svg";
import table from "../assets/table.svg";
import styles from "../styles/Roulette.module.css";
import RouletteTable from "../components/RouletteTable";

const Roulette: NextPage = () => {
    const [showBall, setShowBall] = useState(false);

    const handleClick = () => {
        setShowBall(true);
    };

    return (
        <div className="flex flex-col h-screen justify-center items-center overflow-x-hidden">
            <Header />
            <div className="w-full relative">
                <RouletteTable />
                <div className="absolute top-0 w-full h-full flex">
                    <div className="flex-1 relative">
                        <Image priority src={wheel} alt="roulette wheel" className={styles.wheel} />
                        <Image priority src={ball} alt="roulette ball" className={showBall ? styles.ball : "hidden"} />
                    </div>
                    <div className="flex-1"></div>
                    <div className="flex-1"></div>
                </div>
            </div>
            {showBall ? (
                ""
            ) : (
                <button
                    className="absolute right-0 bg-black text-light-gray px-5 py-3 font-semibold rounded-2xl shadow-lg hover:bg-gray-800"
                    onClick={handleClick}
                >
                    Spin!
                </button>
            )}
        </div>
    );
};

export default Roulette;
