'use client';

import { OnchainKitProvider } from '@coinbase/onchainkit';
import type { ReactNode } from 'react';
import { type State, WagmiProvider } from 'wagmi'
import { baseSepolia } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useWagmiConfig } from '@/wagmi';

const queryClient = new QueryClient()

export function Providers(props: {
    children: ReactNode,
    initialState?: State;
}) {

    const wagmiConfig = useWagmiConfig()

    return (
        <WagmiProvider config={wagmiConfig} initialState={props.initialState}>
            <QueryClientProvider client={queryClient}>
                <OnchainKitProvider
                    apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
                    chain={baseSepolia}
                    config={{
                        appearance: {
                            name: 'Islacare',        // Displayed in modal header
                            logo: 'https://onchainkit.xyz/favicon/48x48.png?v4-19-24',// Displayed in modal header
                            mode: 'auto',                 // 'light' | 'dark' | 'auto'
                            theme: 'default',             // 'default' or custom theme
                        },
                        wallet: {
                            display: 'modal',
                            termsUrl: 'https://...',
                            privacyUrl: 'https://...',
                        },
                    }}
                >
                    {props.children}
                </OnchainKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}