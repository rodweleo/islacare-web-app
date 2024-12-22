import { Facebook, Twitter, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Islacare</h3>
            <p className="text-gray-400 mb-6">
              At Islacare, we provide therapy consultation services focused on empowering Islamic women through mental health support and guidance. Experience a safe space for healing and growth.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-[#2B5693] transition-colors">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-[#2B5693] transition-colors">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-[#2B5693] transition-colors">
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Helpful Links</h3>
            <ul className="space-y-3">
              {[
                'Home',
                'About Us',
                'Our Services',
                'Islamic Wellness',
                'Resources',
                'Events',
                'Testimonials',
                'FAQs',
                'Contact Us',
                'Blog'
              ].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Reach Us</h3>
            <div className="space-y-4 text-gray-400">
              <p>(555) 123 - 4567</p>
              <p>info@islacare.com</p>
              <p>456 Oak Ave. Denver, CO</p>
              <p>Mon - Fri: 9:00am - 5:00pm</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © 2024 Islacare. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

