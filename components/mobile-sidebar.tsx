
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "./ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"

export default function MobileSidebar() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline"><Menu /></Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>IslaCare</SheetTitle>
                    <SheetDescription>
                        Empowering Islamic Women Through Therapy
                    </SheetDescription>
                </SheetHeader>
                <nav className="grid gap-4 py-4">
                    <ul className="space-y-5">
                        <li>
                            <SheetClose asChild>
                                <Link href="/about-us" className="text-gray-600 hover:text-[#2B5693]">
                                    ABOUT US
                                </Link>
                            </SheetClose>
                        </li>
                        <li>
                            <SheetClose asChild>
                                <Link href="/islamic-wellness" className="text-gray-600 hover:text-[#2B5693]">
                                    ISLAMIC WELLNESS
                                </Link>
                            </SheetClose>
                            
                        </li>
                        <li>
                            <SheetClose asChild>
                                <Link href="/services" className="text-gray-600 hover:text-[#2B5693]">
                                    OUR SERVICES
                                </Link>
                            </SheetClose>
                            
                        </li>
                        <li>
                            <SheetClose asChild>
                                <Link href="/resources" className="text-gray-600 hover:text-[#2B5693]">
                                    RESOURCES
                                </Link>
                            </SheetClose>
                        </li>
                            
                            
                        <li>
                            <SheetClose asChild>
                                <Link href="/events" className="text-gray-600 hover:text-[#2B5693]">
                                    EVENTS
                                </Link>
                            </SheetClose>
                        </li>
                        <li>
                            <SheetClose asChild>
                                <Button className="bg-[#2B5693]">CONTACT US</Button>
                            </SheetClose>
                            
                        </li>
                    </ul>
                </nav>
            </SheetContent>
        </Sheet>
    )
}