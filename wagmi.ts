"use client"

import { createConfig, http } from 'wagmi';
import { baseSepolia, mainnet, base } from 'wagmi/chains';
import { coinbaseWallet } from 'wagmi/connectors';

export const useWagmiConfig = () => {

  const wagmiConfig = createConfig({
    chains: [baseSepolia],
    connectors: [
      coinbaseWallet({
        appName: 'Islacare',
      }),
    ],
    ssr: true,
    transports: {
      [baseSepolia.id]: http(),
      [mainnet.id]: http(),
      [base.id]: http(),
    },
  });

  return wagmiConfig;

} 