'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import useDonateModalStore from '@/hooks/use-donate-modal-store'
import TransactionWrapper from './transaction-wrapper'
import { useAccount } from 'wagmi'
import WalletWrapper from './wallet-wrapper'

export function DonationDialog() {

    const { address } = useAccount();
    const { isOpen, setOpen } = useDonateModalStore()
    
    const [frequency, setFrequency] = useState('monthly')
    const [amount, setAmount] = useState('30')

    return (
        <Dialog
            open={isOpen}
            onOpenChange={(open) => {
                if (!isOpen) {
                    setOpen(open)
                } else {
                    setOpen(false)
                }
            }}
        >
            <DialogContent className="sm:max-w-[600px] bg-[#2b2d42] text-white border-gray-800">
                <DialogHeader>
                    <DialogTitle className="text-3xl font-bold">
                        Help us do more
                    </DialogTitle>
                </DialogHeader>

                <div className="space-y-6 mt-4">
                    {/* Description */}
                    <p className="text-gray-300">
                        We'll get right to the point: we're asking you to support us. We're a nonprofit that relies on support from people like you. If everyone reading this gives $10 monthly, we can thrive for years.
                    </p>

                    {/* Frequency Selection */}
                    <div className="space-y-2">
                        <Label className="text-sm text-gray-300">Select gift frequency</Label>
                        <RadioGroup
                            defaultValue={frequency}
                            onValueChange={setFrequency}
                            className="flex gap-4"
                        >
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="monthly" id="monthly" />
                                <Label htmlFor="monthly">Monthly</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="one-time" id="one-time" />
                                <Label htmlFor="one-time">One time</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    {/* Amount Selection */}
                    <div className="space-y-2">
                        <Label className="text-sm text-gray-300">Select amount (in US dollar)</Label>
                        <RadioGroup
                            defaultValue={amount}
                            onValueChange={setAmount}
                            className="grid grid-cols-5 gap-2"
                        >
                            {['10', '20', '30', '40'].map((value) => (
                                <div
                                    key={value}
                                    className={`flex items-center justify-center p-3 rounded-md border border-gray-600 cursor-pointer hover:bg-gray-700 ${amount === value ? 'bg-white/10' : ''
                                        }`}
                                >
                                    <RadioGroupItem value={value} id={`amount-${value}`} className="hidden" />
                                    <Label htmlFor={`amount-${value}`} className="cursor-pointer">${value}</Label>
                                </div>
                            ))}
                            <div className="flex items-center justify-center p-3 rounded-md border border-gray-600 cursor-pointer hover:bg-gray-700">
                                <RadioGroupItem value="other" id="amount-other" className="hidden" />
                                <Label htmlFor="amount-other" className="cursor-pointer">Other</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    {/* Transaction Fee Checkbox */}
                    <div className="flex items-start space-x-2">
                        <Checkbox id="transaction-fee" />
                        <Label htmlFor="transaction-fee" className="text-sm text-gray-300">
                            Yes, I'll generously add $0.75 each month to cover the transaction fees
                        </Label>
                    </div>

                    {/* Name Input */}
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            placeholder="Enter your name"
                            className="bg-transparent border-gray-600"
                        />
                    </div>

                    <Button variant="link" className="text-blue-400 p-0 h-auto">
                        Click here to give in honor of other person
                    </Button>

                    {
                        address ? (
                            <TransactionWrapper address={address} />
                        ) : (
                            <WalletWrapper
                                    className="w-full"
                                    text="SIGN IN TO DONATE"
                            />
                        )
                    }

                    
                    
                </div>
            </DialogContent>
        </Dialog>
    )
}

