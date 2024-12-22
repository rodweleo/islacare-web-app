import { Shield, Users, BookOpen, Heart, Clock, Phone } from 'lucide-react'

export default function Services() {
    return (
        <main>
            <div className="bg-[#2B5693] text-white py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
                    <p className="text-xl text-white/90 max-w-2xl">
                        Comprehensive mental health support tailored for Islamic women.
                    </p>
                </div>
            </div>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Shield,
                                title: "Individual Counseling",
                                description: "One-on-one therapy sessions tailored to your unique needs and challenges.",
                                features: [
                                    "Personalized treatment plans",
                                    "Cultural sensitivity",
                                    "Flexible scheduling",
                                    "Online sessions available"
                                ]
                            },
                            {
                                icon: Users,
                                title: "Group Therapy",
                                description: "Supportive group sessions where you can connect with others and share experiences.",
                                features: [
                                    "Weekly meetings",
                                    "Topic-focused discussions",
                                    "Peer support",
                                    "Guided conversations"
                                ]
                            },
                            {
                                icon: BookOpen,
                                title: "Educational Workshops",
                                description: "Learn about mental health, coping strategies, and personal growth.",
                                features: [
                                    "Interactive sessions",
                                    "Practical exercises",
                                    "Take-home materials",
                                    "Certificate of completion"
                                ]
                            },
                            {
                                icon: Heart,
                                title: "Family Counseling",
                                description: "Address family dynamics and relationships with cultural understanding.",
                                features: [
                                    "Family-centered approach",
                                    "Conflict resolution",
                                    "Communication skills",
                                    "Cultural integration"
                                ]
                            },
                            {
                                icon: Clock,
                                title: "Crisis Support",
                                description: "Immediate assistance and support during difficult times.",
                                features: [
                                    "24/7 availability",
                                    "Emergency response",
                                    "Follow-up care",
                                    "Resource referrals"
                                ]
                            },
                            {
                                icon: Phone,
                                title: "Online Therapy",
                                description: "Access therapy from the comfort of your home through secure video sessions.",
                                features: [
                                    "Secure platform",
                                    "Flexible scheduling",
                                    "Technical support",
                                    "Mobile accessibility"
                                ]
                            }
                        ].map((service, index) => (
                            <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 bg-[#2B5693] rounded-lg flex items-center justify-center mb-4">
                                    <service.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                                <p className="text-gray-600 mb-4">{service.description}</p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                                            <div className="w-1.5 h-1.5 bg-[#2B5693] rounded-full mr-2" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Journey?</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Take the first step towards mental wellness with our compassionate team.
                    </p>
                    <button className="bg-[#2B5693] text-white px-8 py-3 rounded-md hover:bg-[#1e3d6a] transition-colors">
                        Schedule a Consultation
                    </button>
                </div>
            </section>
        </main>
    )
}

