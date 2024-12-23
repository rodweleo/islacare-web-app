import { Target, Eye } from 'lucide-react'
import Image from 'next/image'
export default function AboutSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <div className="aspect-[4/3] relative">
              <Image
                src="/images/islacare-about-img.webp"
                alt="Therapy consultation session"
                className="rounded-lg object-cover w-full h-full"
                width={1920}
                height={1080}
              />
            </div>
            <div className="absolute bottom-4 right-4 bg-[#2B5693] text-white p-6 rounded-lg">
              <div className="text-4xl font-bold">5+</div>
              <div className="text-sm">Years Serving Women</div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-medium text-[#2B5693] mb-2">ABOUT ISLACARE</h2>
              <h3 className="text-3xl font-bold text-gray-900">Supporting Islamic Women&apos;s Mental Health</h3>
            </div>
            
            <p className="text-gray-600">
              We are dedicated to providing mental health and therapy consultation services specifically for Islamic women, ensuring compassionate support and guidance.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#2B5693] rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900">Our Commitment</h4>
                <p className="text-gray-600 text-sm">
                  Supporting the mental wellness of Islamic women through understanding and care
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-12 h-12 bg-[#2B5693] rounded-full flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900">Our Vision</h4>
                <p className="text-gray-600 text-sm">
                  To create accessible mental health resources for every Islamic woman
                </p>
              </div>
            </div>
            
            <button className="bg-[#2B5693] text-white px-6 py-3 rounded font-medium hover:bg-[#1e3d6a] transition-colors">
              GET IN TOUCH
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

