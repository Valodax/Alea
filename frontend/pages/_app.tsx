import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import { Polygon, Mumbai, Ethereum, Goerli } from "@thirdweb-dev/chains";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThirdwebProvider activeChain={"mumbai"} supportedChains={[Ethereum, Goerli, Polygon, Mumbai]}>
            <Component {...pageProps} />
        </ThirdwebProvider>
    );
}

export default MyApp;
