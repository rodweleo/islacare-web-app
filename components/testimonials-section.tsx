import { Star } from 'lucide-react'
import Image from "next/image"

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#2B5693] mb-2">TESTIMONIALS</p>
          <h2 className="text-4xl font-bold text-gray-900">What Our Clients Think</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "AISHA KHAN",
              role: "Teacher",
              image: "/placeholder.svg?height=80&width=80",
              quote: "Islacare has been a guiding light in my journey toward mental wellness. Their understanding of our unique cultural needs made all the difference in my healing process."
            },
            {
              name: "SARA AHMED",
              role: "Marketing Executive",
              image: "/placeholder.svg?height=80&width=80",
              quote: "My experience with them has been transformative. They created a safe space for me to express my challenges, and their empathy and guidance were instrumental in my growth."
            },
            {
              name: "FATIMA NOOR",
              role: "Social Worker",
              image: "/placeholder.svg?height=80&width=80",
              quote: "Islacare provides a nurturing environment that allowed me to reconnect with my inner self. Their respectful approach to cultural values made my therapy meaningful."
            }
          ].map((testimonial, index) => (
            <div key={index} className="text-center p-8 bg-white rounded-lg border border-gray-100">
              <div className="flex justify-center mb-6">
                <Image
                  src={testimonial.image}
                  alt={`${testimonial.name}'s profile`}
                  className="w-20 h-20 rounded-full"
                  width={1920}
                  height={1080}
                />
              </div>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <q className="text-gray-600 mb-6">
                {testimonial.quote}
              </q>
              <div className="space-y-1">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

