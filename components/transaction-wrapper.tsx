'use client';

import { BASE_SEPOLIA_CHAIN_ID, mintABI, mintContractAddress } from '@/utils/constants';
import {
    Transaction,
    TransactionButton,
    TransactionStatus,
    TransactionStatusAction,
    TransactionStatusLabel,
} from '@coinbase/onchainkit/transaction';
import type {
    TransactionError,
    TransactionResponse,
} from '@coinbase/onchainkit/transaction';
import type { Address, ContractFunctionParameters } from 'viem';

export default function TransactionWrapper({ address }: { address: Address }) {
    const contracts = [
        {
            address: mintContractAddress,
            abi: mintABI,
            functionName: 'mint',
            args: [address],
        },
    ] as unknown as ContractFunctionParameters[];

    const handleError = (err: TransactionError) => {
        console.error('Transaction error:', err);
    };

    const handleSuccess = (response: TransactionResponse) => {
        console.log('Transaction successful', response);
    };

    return (
        <div className="flex w-[450px]">
            <Transaction
                capabilities={{
                    paymasterService: {
                        url: process.env.PAYMASTER_AND_BUNDLER_SEPOLIA_ENDPOINT!,
                    },
                }}
                contracts={contracts}
                className="w-full"
                chainId={BASE_SEPOLIA_CHAIN_ID}
                onError={handleError}
                onSuccess={handleSuccess}
            >
                <TransactionButton 
                    className="mt-0 mr-auto ml-auto w-full max-w-full text-[white]" 
                    text="DONATE NOW"
                />
                <TransactionStatus>
                    <TransactionStatusLabel />
                    <TransactionStatusAction />
                </TransactionStatus>
            </Transaction>
        </div>
    );
}