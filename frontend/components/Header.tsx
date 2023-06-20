import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
    const router = useRouter();
    const address = useAddress();

    return (
        <div className="flex justify-between items-center p-4">
            {router.pathname !== "/" && (
                <div className="absolute top-0 left-0 p-4 pt-5">
                    <Link
                        href="/"
                        className="bg-black text-light-gray px-3 py-2 rounded-lg shadow-lg hover:bg-gray-800 transition-colors duration-100 ease-in-out"
                    >
                        Back
                    </Link>
                </div>
            )}
            <div className="absolute top-0 right-0 p-4">
                <ConnectWallet theme="dark" />
            </div>
        </div>
    );
};

export default Header;
