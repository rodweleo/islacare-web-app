import { Leaf, Moon, Sun, Heart, Users, Book } from 'lucide-react'
import Image from 'next/image'

export default function IslamicWellness() {
    return (
        <main>
            <div className="bg-[#2B5693] text-white py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Islamic Wellness</h1>
                    <p className="text-xl text-white/90 max-w-2xl">
                        Integrating Islamic principles with modern mental health practices.
                    </p>
                </div>
            </div>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Our Approach to Islamic Wellness</h2>
                            <p className="text-gray-600 mb-4">
                                At Islacare, we understand the importance of incorporating Islamic principles into mental health care.
                                Our approach combines traditional Islamic wisdom with contemporary therapeutic practices to provide
                                comprehensive support for your mental and spiritual well-being.
                            </p>
                            <p className="text-gray-600">
                                We believe that true healing encompasses both the mind and soul, and our programs are designed to
                                nurture both aspects of your well-being while staying true to Islamic values.
                            </p>
                        </div>
                        <div>
                            <Image
                                src="/images/desktop-wallpaper-glad-muslim-women-talking-and-resting-on-lawn-in-park-·-stock-muslim-women-face.jpg"
                                alt="Islamic wellness session"
                                className="rounded-lg shadow-lg"
                                width={1920}
                                height={1080}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Wellness Programs</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Leaf,
                                title: "Mindful Muslim",
                                description: "Learn Islamic mindfulness practices that help you stay present and connected with your faith."
                            },
                            {
                                icon: Moon,
                                title: "Spiritual Growth",
                                description: "Develop a deeper connection with your faith through guided spiritual exercises and reflection."
                            },
                            {
                                icon: Sun,
                                title: "Daily Wellness",
                                description: "Integrate Islamic practices into your daily routine for better mental and spiritual health."
                            },
                            {
                                icon: Heart,
                                title: "Self-Care in Islam",
                                description: "Discover how Islamic teachings support and encourage personal well-being and self-care."
                            },
                            {
                                icon: Users,
                                title: "Community Support",
                                description: "Connect with others in a supportive environment that understands your cultural context."
                            },
                            {
                                icon: Book,
                                title: "Islamic Studies",
                                description: "Learn how Islamic teachings can guide you towards better mental health and personal growth."
                            }
                        ].map((program, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                <div className="w-12 h-12 bg-[#2B5693] rounded-lg flex items-center justify-center mb-4">
                                    <program.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                                <p className="text-gray-600">{program.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Weekly Schedule</h2>
                    <div className="max-w-3xl mx-auto">
                        {[
                            {
                                day: "Monday",
                                activities: ["Morning Mindfulness (9:00 AM)", "Individual Counseling", "Evening Dhikr Circle (7:00 PM)"]
                            },
                            {
                                day: "Tuesday",
                                activities: ["Spiritual Growth Workshop (10:00 AM)", "Group Therapy", "Islamic Studies (6:00 PM)"]
                            },
                            {
                                day: "Wednesday",
                                activities: ["Self-Care Session (9:00 AM)", "Family Counseling", "Community Support Group (5:00 PM)"]
                            },
                            {
                                day: "Thursday",
                                activities: ["Wellness Workshop (11:00 AM)", "Individual Counseling", "Evening Reflection (7:00 PM)"]
                            },
                            {
                                day: "Friday",
                                activities: ["Jumu'ah Prayer", "Special Workshop", "Family Support Group (4:00 PM)"]
                            }
                        ].map((schedule, index) => (
                            <div key={index} className="mb-6 last:mb-0">
                                <h3 className="text-lg font-semibold mb-3 text-[#2B5693]">{schedule.day}</h3>
                                <div className="bg-gray-50 rounded-lg p-4">
                                    <ul className="space-y-2">
                                        {schedule.activities.map((activity, activityIndex) => (
                                            <li key={activityIndex} className="flex items-center text-gray-600">
                                                <div className="w-1.5 h-1.5 bg-[#2B5693] rounded-full mr-2" />
                                                {activity}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}

