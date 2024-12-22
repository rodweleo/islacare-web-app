import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/islacare-hero-bg.avif"
          alt="Therapy session background"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="bg-white p-8 max-w-[600px] shadow-lg border-[20px] border-[#2B5693]">
          <div className="space-y-6">
            <p className="text-[#2B5693] font-medium">
              DISCOVER ISLACARE
            </p>
            
            <h1 className="text-4xl font-bold text-gray-900 leading-tight">
              Empowering Islamic Women Through Therapy
            </h1>
            
            <p className="text-gray-600">
              At Islacare, we focus on providing mental health support and therapy consultations specifically for Islamic women. Our mission is to foster a safe and supportive environment for healing and growth.
            </p>
            
            <button className="bg-[#2B5693] text-white px-8 py-3 font-medium hover:bg-[#1e3d6a] transition-colors">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

