import { Calendar, Clock, MapPin, Users } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from 'next/image';
export default function Events() {
    return (
        <main>
            <div className="bg-[#2B5693] text-white py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Events</h1>
                    <p className="text-xl text-white/90 max-w-2xl">
                        Join our upcoming events and workshops designed to support your mental health journey.
                    </p>
                </div>
            </div>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid gap-8">
                        <div className="col-span-full mb-8">
                            <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
                            <p className="text-gray-600">
                                Discover our range of workshops, support groups, and educational sessions.
                            </p>
                        </div>

                        {[
                            {
                                title: "Understanding Anxiety Workshop",
                                date: "November 15, 2023",
                                time: "2:00 PM - 4:00 PM",
                                location: "Islacare Center",
                                type: "Workshop",
                                capacity: "20 participants",
                                description: "Join us for an interactive workshop exploring anxiety from both Islamic and psychological perspectives. Learn practical coping strategies and connect with others in a supportive environment.",
                                image: "/placeholder.svg?height=300&width=600"
                            },
                            {
                                title: "Women's Support Group",
                                date: "November 20, 2023",
                                time: "6:00 PM - 7:30 PM",
                                location: "Online via Zoom",
                                type: "Support Group",
                                capacity: "15 participants",
                                description: "A monthly support group for Islamic women to share experiences, find community, and develop coping strategies in a safe and understanding environment.",
                                image: "/placeholder.svg?height=300&width=600"
                            },
                            {
                                title: "Mental Wellness Seminar",
                                date: "December 1, 2023",
                                time: "10:00 AM - 12:00 PM",
                                location: "Community Center",
                                type: "Seminar",
                                capacity: "50 participants",
                                description: "An educational seminar focusing on mental wellness in the Islamic context. Expert speakers will discuss various topics and answer your questions.",
                                image: "/placeholder.svg?height=300&width=600"
                            }
                        ].map((event, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="grid md:grid-cols-3">
                                    <div className="md:col-span-1">
                                        <Image
                                            src={event.image}
                                            alt={event.title}
                                            className="w-full h-full object-cover"
                                            width={1920}
                                            height={1080}
                                        />
                                    </div>
                                    <div className="md:col-span-2 p-6">
                                        <div className="mb-4">
                                            <span className="inline-block bg-[#2B5693]/10 text-[#2B5693] px-3 py-1 rounded-full text-sm font-medium">
                                                {event.type}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                                        <p className="text-gray-600 mb-6">{event.description}</p>
                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                            <div className="flex items-center text-gray-600">
                                                <Calendar className="w-5 h-5 mr-2 text-[#2B5693]" />
                                                {event.date}
                                            </div>
                                            <div className="flex items-center text-gray-600">
                                                <Clock className="w-5 h-5 mr-2 text-[#2B5693]" />
                                                {event.time}
                                            </div>
                                            <div className="flex items-center text-gray-600">
                                                <MapPin className="w-5 h-5 mr-2 text-[#2B5693]" />
                                                {event.location}
                                            </div>
                                            <div className="flex items-center text-gray-600">
                                                <Users className="w-5 h-5 mr-2 text-[#2B5693]" />
                                                {event.capacity}
                                            </div>
                                        </div>
                                        <Button className="bg-[#2B5693] hover:bg-[#1e3d6a]">
                                            Register Now
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Monthly Calendar</h2>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="grid grid-cols-7 gap-4 mb-4 text-center font-medium">
                                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                                    <div key={day} className="text-gray-500">
                                        {day}
                                    </div>
                                ))}
                            </div>
                            <div className="grid grid-cols-7 gap-4 text-center">
                                {Array.from({ length: 35 }).map((_, i) => {
                                    const day = i - 3; // Adjust starting day
                                    return (
                                        <div
                                            key={i}
                                            className={`p-2 rounded-lg ${day > 0 && day <= 30
                                                    ? 'hover:bg-gray-50 cursor-pointer'
                                                    : 'text-gray-300'
                                                } ${[15, 20].includes(day) ? 'bg-[#2B5693]/10 text-[#2B5693] font-medium' : ''}`}
                                        >
                                            {day > 0 && day <= 30 ? day : ''}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Want to Host an Event?</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        If you&apos;re interested in hosting or suggesting an event, we&apos;d love to hear from you.
                    </p>
                    <Button className="bg-[#2B5693] hover:bg-[#1e3d6a]">
                        Contact Us
                    </Button>
                </div>
            </section>
        </main>
    )
}

