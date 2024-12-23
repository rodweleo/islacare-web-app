
import Link from "next/link"
import MobileSidebar from './mobile-sidebar'
import { Button } from './ui/button'

export default function Navigation() {
  return (
    <nav className="bg-white py-4 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-[#2B5693] text-2xl font-semibold">
          Islacare
        </Link>
        
        <div className="hidden lg:flex items-center space-x-8">
          <Link href="/about-us" className="text-gray-600 hover:text-[#2B5693]">
            ABOUT US
          </Link>
          <Link href="/islamic-wellness" className="text-gray-600 hover:text-[#2B5693]">
            ISLAMIC WELLNESS
          </Link>
          <Link href="/services" className="text-gray-600 hover:text-[#2B5693]">
            OUR SERVICES
          </Link>
          <Link href="/resources" className="text-gray-600 hover:text-[#2B5693]">
            RESOURCES
          </Link>
          <Link href="/events" className="text-gray-600 hover:text-[#2B5693]">
            EVENTS
          </Link>
          <Button className="bg-[#2B5693]">CONTACT US</Button>
        </div>

        <div className="lg:hidden">
          <MobileSidebar />
        </div>
        
      </div>
    </nav>
  )
}

