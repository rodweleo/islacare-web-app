import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import Image from 'next/image'

export default function ContactSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#2B5693] mb-2">GET IN TOUCH</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Reach Out to Us</h2>
          <p className="text-gray-600">
            If you have inquiries about our offerings or wish to book a consultation, we&apos;re eager to assist.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gray-900/90">
                <Image
                  src="/images/islacare-contact-img.avif"
                  alt="Contact background"
                  className="w-full h-full object-cover mix-blend-overlay"
                  width={1920}
                  height={1080}
                />
              </div>
              <div className="relative p-8 text-white">
                <h3 className="text-2xl font-bold mb-8">Our Contact Details</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Phone className="w-5 h-5" />
                    <span>(555) 123 - 4567</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="w-5 h-5" />
                    <span>info@islacare.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-5 h-5" />
                    <span>456 Oak Ave. Denver, CO</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Clock className="w-5 h-5" />
                    <span>Mon - Fri: 9:00am - 5:00pm</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#2B5693] focus:border-[#2B5693]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#2B5693] focus:border-[#2B5693]"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#2B5693] focus:border-[#2B5693]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Leave a Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#2B5693] focus:border-[#2B5693]"
                  />
                </div>
                <button
                  type="submit"
                  disabled
                  className="disabled:cursor-not-allowed disabled:bg-slate-300 w-full bg-[#2B5693] text-white py-3 rounded-md hover:bg-[#1e3d6a] transition-colors"
                >
                  SUBMIT INQUIRY
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

