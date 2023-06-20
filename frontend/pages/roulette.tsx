import { useState, useEffect } from "react";
import type { NextPage } from "next";
import Header from "../components/Header";
import Image from "next/image";
import wheel from "../assets/wheel.svg";
import ball from "../assets/ball.svg";
import styles from "../styles/Roulette.module.css";

const Roulette: NextPage = () => {
    const [showBall, setShowBall] = useState(false);
    const [wheelSize, setWheelSize] = useState({ height: 600, width: 600 });
    const [ballSize, setBallSize] = useState({ height: 20, width: 20 });

    const handleClick = () => {
        setShowBall(true);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 700) {
                setWheelSize({ height: 300, width: 300 });
                setBallSize({ height: 10, width: 10 });
            } else {
                setWheelSize({ height: 600, width: 600 });
                setBallSize({ height: 20, width: 20 });
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="flex flex-col h-screen justify-center items-center px-8 overflow-x-hidden relative">
            <Header />
            <div id="roulette-container" className="relative">
                {showBall && (
                    <div className={styles.ball}>
                        <Image
                            priority
                            src={ball}
                            alt="roulette ball"
                            height={ballSize.height}
                            width={ballSize.width}
                        />
                    </div>
                )}
                <div className={styles.spin}>
                    <Image
                        priority
                        src={wheel}
                        alt="roulette wheel"
                        height={wheelSize.height}
                        width={wheelSize.width}
                    />
                </div>
            </div>
            <div>
                {!showBall ? (
                    <div className="mt-8">
                        <button
                            className="bg-black text-light-gray px-6 py-3 rounded-lg shadow-lg hover:bg-gray-800 duration-300 ease-in-out"
                            onClick={handleClick}
                        >
                            Spin!
                        </button>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default Roulette;
