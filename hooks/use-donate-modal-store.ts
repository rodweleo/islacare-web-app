import { create } from 'zustand'

interface DonateModalState {
    isOpen: boolean;
    setOpen: (isOpen: boolean) => void
}

const useDonateModalStore = create<DonateModalState>((set) => ({
    isOpen: false,
    setOpen: (isOpen: boolean) => set({ isOpen })
}))

export default useDonateModalStore