import { Target, Users, Heart, Trophy } from 'lucide-react'

export default function AboutUs() {
    return (
        <main>
            <div className="bg-[#2B5693] text-white py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">About Islacare</h1>
                    <p className="text-xl text-white/90 max-w-2xl">
                        Discover our journey in providing specialized mental health support for Islamic women.
                    </p>
                </div>
            </div>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                            <p className="text-gray-600 mb-4">
                                Founded with a deep understanding of the unique challenges faced by Islamic women,
                                Islacare emerged from a vision to create a safe, culturally sensitive space for mental health support.
                            </p>
                            <p className="text-gray-600">
                                Our team of experienced professionals combines modern therapeutic approaches with
                                Islamic principles to provide comprehensive mental health care that resonates with
                                our community&apos;s values and needs.
                            </p>
                        </div>
                        <div>
                            <img
                                src="/placeholder.svg?height=400&width=600"
                                alt="Islacare team"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Target,
                                title: "Cultural Sensitivity",
                                description: "Understanding and respecting Islamic values in mental health care"
                            },
                            {
                                icon: Users,
                                title: "Community Focus",
                                description: "Building a supportive environment for Islamic women"
                            },
                            {
                                icon: Heart,
                                title: "Compassionate Care",
                                description: "Providing empathetic and understanding support"
                            },
                            {
                                icon: Trophy,
                                title: "Professional Excellence",
                                description: "Maintaining high standards in mental health services"
                            }
                        ].map((value, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-[#2B5693] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <value.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-semibold mb-2">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Dr. Sarah Ahmed",
                                role: "Lead Therapist",
                                image: "/placeholder.svg?height=400&width=400",
                                description: "Specialized in Islamic counseling with 10+ years of experience"
                            },
                            {
                                name: "Amina Khan",
                                role: "Mental Health Specialist",
                                image: "/placeholder.svg?height=400&width=400",
                                description: "Expert in cultural therapy and women's mental health"
                            },
                            {
                                name: "Fatima Hassan",
                                role: "Family Counselor",
                                image: "/placeholder.svg?height=400&width=400",
                                description: "Focused on family dynamics in Islamic contexts"
                            }
                        ].map((member, index) => (
                            <div key={index} className="text-center">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                                />
                                <h3 className="font-semibold text-xl mb-1">{member.name}</h3>
                                <p className="text-[#2B5693] mb-2">{member.role}</p>
                                <p className="text-gray-600">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}

