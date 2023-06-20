import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Header from "../components/Header";
import Image from "next/image";
import wheel from "../assets/wheel.svg";
import ball from "../assets/ball.svg";
import table from "../assets/table.svg";
import styles from "../styles/Roulette.module.css";

const Roulette: NextPage = () => {
    const [showBall, setShowBall] = useState(false);
    const [wheelSize, setWheelSize] = useState({ height: 700, width: 700 });
    const [ballSize, setBallSize] = useState({ height: 20, width: 20 });
    const [tableSize, setTableSize] = useState({ height: 2400, width: 2400 });

    const handleClick = () => {
        setShowBall(true);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 700) {
                setWheelSize({ height: 300, width: 300 });
                setBallSize({ height: 10, width: 10 });
                setTableSize({ height: 1200, width: 1200 });
            } else {
                setWheelSize({ height: 700, width: 700 });
                setBallSize({ height: 20, width: 20 });
                setTableSize({ height: 2400, width: 2400 });
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="flex flex-col h-screen justify-center items-center overflow-x-hidden">
            <Header />
            <div className="relative flex flex-row w-full justify-between">
                <div className="w-1/3 flex justify-center items-center pl-8 pb-6">
                    <div id="roulette-container" className="relative z-10">
                        <div className={showBall ? styles.ball : "hidden"}>
                            <Image
                                priority
                                src={ball}
                                alt="roulette ball"
                                height={ballSize.height}
                                width={ballSize.width}
                            />
                        </div>
                        <div className={styles.spin}>
                            <Image
                                priority
                                src={wheel}
                                alt="roulette wheel"
                                height={wheelSize.height}
                                width={wheelSize.width}
                            />
                        </div>
                        <div
                            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 ${
                                showBall ? "invisible pointer-events-none" : ""
                            }`}
                        >
                            <button
                                className="bg-black text-light-gray px-6 py-5 font-semibold rounded-3xl shadow-lg hover:bg-gray-800"
                                onClick={handleClick}
                            >
                                Spin!
                            </button>
                        </div>
                    </div>
                </div>
                <Image
                    priority
                    src={table}
                    alt="table"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
                    height={tableSize.height}
                    width={tableSize.width}
                />
            </div>
        </div>
    );
};

export default Roulette;
