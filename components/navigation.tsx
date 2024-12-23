import { Phone } from 'lucide-react'
import Link from "next/link"

export default function Navigation() {
  return (
    <nav className="bg-white py-4 shadow-sm sticky top-0">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-[#2B5693] text-2xl font-semibold">
          Islacare
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
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
          <Link href="/contact" className="text-gray-600 hover:text-[#2B5693]">
            CONTACT US
          </Link>
        </div>

        <div className="flex items-center space-x-2 text-[#2B5693]">
          <Phone className="w-5 h-5" />
          <span className="font-medium">(555) 123-4567</span>
        </div>
      </div>
    </nav>
  )
}

