import { Card, CardContent } from "@/components/ui/card"
import { Users, UserSquare, BookOpen, Wallet, Heart } from 'lucide-react'
import Image from "next/image"
export default function ServicesSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gray-900/80">
        <Image
          src="/images/islacare-services-img.avif"
          alt="Background pattern"
          className="w-full h-full object-cover mix-blend-overlay"
          width={1920}
          height={1080}
        />
      </div>
      
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-medium text-[#2B5693] bg-white/90 px-4 py-1 rounded-full inline-block">
            OUR OFFERINGS
          </p>
          <h2 className="text-4xl font-bold text-white">
            Empowering Islamic Women Through Therapy
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            At Islacare, we are dedicated to providing mental health and therapy consultation services tailored for Islamic women, helping them find strength in their journeys.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-white/95 border-none">
            <CardContent className="p-6 space-y-4">
              <div className="w-12 h-12 bg-[#2B5693] rounded-lg flex items-center justify-center">
                <UserSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-xl text-gray-900">Individual Counseling</h3>
              <p className="text-gray-600">
                We provide personalized counseling sessions to address individual mental health needs in a safe and supportive environment.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#2B5693] text-white border-none">
            <CardContent className="p-6 space-y-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-[#2B5693]" />
              </div>
              <h3 className="font-semibold text-xl">Supportive Group Therapy</h3>
              <p className="text-white/90">
                Our group therapy sessions provide a community of support, allowing participants to share experiences and foster healing together.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/95 border-none">
            <CardContent className="p-6 space-y-4">
              <div className="w-12 h-12 bg-[#2B5693] rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-xl text-gray-900">Workshops and Resources</h3>
              <p className="text-gray-600">
                We offer workshops that educate and empower women on mental health topics, alongside valuable resources for ongoing support.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/95 border-none">
            <CardContent className="p-6 space-y-4">
              <div className="w-12 h-12 bg-[#2B5693] rounded-lg flex items-center justify-center">
                <Wallet className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-xl text-gray-900">Affordable Therapy Options</h3>
              <p className="text-gray-600">
                Our services are competitively priced, ensuring that mental health support is accessible to all women.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#2B5693] text-white border-none">
            <CardContent className="p-6 space-y-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-[#2B5693]" />
              </div>
              <h3 className="font-semibold text-xl">Holistic Wellness Integration</h3>
              <p className="text-white/90">
                We incorporate holistic wellness practices that align with Islamic values, promoting overall mental and spiritual health.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

