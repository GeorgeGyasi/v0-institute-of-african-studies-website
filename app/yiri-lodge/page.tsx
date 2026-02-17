'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Users, Utensils, Calendar, Phone, Mail, ArrowRight, Star, Wifi, ParkingMeter, AirVent, MessageCircle } from 'lucide-react'

export default function YiriLodgePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-orange-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-600">
                Welcome to Yiri Lodge
              </p>
              <h1 className="mb-6 font-serif text-5xl font-bold text-foreground">
                Your Gateway to African Scholarship
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                Yiri Lodge is an upscale accommodation facility operated by the Institute of African Studies at the University of Ghana. Whether you're a scholar, visiting student, or traveler seeking authentic African hospitality, we provide comfortable, welcoming spaces designed for intellectual engagement and cultural exchange.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/233XXXXXXXXX?text=Hello%20Yiri%20Lodge%2C%20I%20would%20like%20to%20book%20a%20room"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-medium text-white transition-colors hover:bg-green-700"
                >
                  <MessageCircle className="h-4 w-4" />
                  Book on WhatsApp
                </a>
                <button className="inline-flex items-center gap-2 rounded-lg border border-orange-200 px-6 py-3 font-medium text-foreground transition-colors hover:bg-orange-50">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/yiri-lodge.jpg"
                alt="Yiri Lodge exterior view"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="border-t border-orange-200 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-3 flex justify-center">
                <div className="rounded-full bg-orange-100 p-4">
                  <MapPin className="h-6 w-6 text-orange-600" />
                </div>
              </div>
              <h3 className="mb-2 font-semibold text-foreground">Prime Location</h3>
              <p className="text-sm text-muted-foreground">Located within the University of Ghana, Legon campus</p>
            </div>
            <div className="text-center">
              <div className="mb-3 flex justify-center">
                <div className="rounded-full bg-orange-100 p-4">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
              </div>
              <h3 className="mb-2 font-semibold text-foreground">Welcoming Community</h3>
              <p className="text-sm text-muted-foreground">Open to scholars, students, travelers, and guests</p>
            </div>
            <div className="text-center">
              <div className="mb-3 flex justify-center">
                <div className="rounded-full bg-orange-100 p-4">
                  <Utensils className="h-6 w-6 text-orange-600" />
                </div>
              </div>
              <h3 className="mb-2 font-semibold text-foreground">On-site Restaurant</h3>
              <p className="text-sm text-muted-foreground">Authentic cuisine and modern dining experiences</p>
            </div>
            <div className="text-center">
              <div className="mb-3 flex justify-center">
                <div className="rounded-full bg-orange-100 p-4">
                  <Calendar className="h-6 w-6 text-orange-600" />
                </div>
              </div>
              <h3 className="mb-2 font-semibold text-foreground">Event Spaces</h3>
              <p className="text-sm text-muted-foreground">Venues for conferences, celebrations, and gatherings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodations */}
      <section className="border-t border-orange-200 bg-orange-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-orange-600">
              Comfortable Rooms
            </p>
            <h2 className="mb-4 font-serif text-4xl font-bold text-foreground">
              Accommodations
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Thoughtfully designed rooms offering comfort, privacy, and modern amenities for an exceptional stay
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: 'Standard Room',
                description: 'Cozy and comfortable single or twin bed options',
                amenities: ['Ensuite bathroom', 'AC/Heating', 'WiFi', 'Work desk'],
              },
              {
                name: 'Deluxe Room',
                description: 'Spacious rooms with enhanced comfort and amenities',
                amenities: ['Ensuite bathroom', 'AC/Heating', 'WiFi', 'Mini fridge', 'Work area'],
              },
              {
                name: 'Suite',
                description: 'Premium accommodation with separate living areas',
                amenities: ['Ensuite bathroom', 'AC/Heating', 'WiFi', 'Sitting area', 'Mini bar', 'Premium bedding'],
              },
            ].map((room) => (
              <div key={room.name} className="rounded-xl border border-orange-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="mb-2 text-xl font-semibold text-foreground">{room.name}</h3>
                <p className="mb-6 text-sm text-muted-foreground">{room.description}</p>
                <ul className="space-y-2">
                  {room.amenities.map((amenity) => (
                    <li key={amenity} className="flex items-center gap-2 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dining & Restaurant */}
      <section className="border-t border-orange-200 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-600">
                Culinary Experience
              </p>
              <h2 className="mb-6 font-serif text-4xl font-bold text-foreground">
                Yiri Restaurant
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                Our on-site restaurant serves authentic African and international cuisine in an inviting atmosphere. Whether you're enjoying breakfast before a day of academic work or dining with colleagues in the evening, our culinary team is dedicated to providing memorable meals.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                      <Utensils className="h-5 w-5 text-orange-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Full-Service Dining</h3>
                    <p className="text-sm text-muted-foreground">Breakfast, lunch, and dinner service daily</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                      <Utensils className="h-5 w-5 text-orange-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Diverse Menu</h3>
                    <p className="text-sm text-muted-foreground">Local specialties and international favorites</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                      <Utensils className="h-5 w-5 text-orange-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Private Dining</h3>
                    <p className="text-sm text-muted-foreground">Small group meals and special catering available</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/yiri-restaurant.jpg"
                alt="Yiri Restaurant and Dining Experience"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Event Spaces */}
      <section className="border-t border-orange-200 bg-orange-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-orange-600">
              Venues & Services
            </p>
            <h2 className="mb-4 font-serif text-4xl font-bold text-foreground">
              Event Spaces
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Host conferences, seminars, celebrations, and private functions in our versatile event spaces
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-orange-200 bg-white p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                <Calendar className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="mb-3 text-2xl font-semibold text-foreground">Conference Room</h3>
              <p className="mb-6 text-muted-foreground">
                Professional conference facilities with modern audiovisual equipment, ideal for seminars, workshops, and academic presentations.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />
                  AV Equipment & Projectors
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />
                  Seating for 50-150 guests
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />
                  WiFi & Technical Support
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-orange-200 bg-white p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                <Users className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="mb-3 text-2xl font-semibold text-foreground">Garden & Outdoor Spaces</h3>
              <p className="mb-6 text-muted-foreground">
                Beautiful outdoor venues perfect for celebrations, social gatherings, exhibitions, and private events in a garden setting.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />
                  Spacious Grounds
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />
                  Flexible Configuration
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />
                  All-Weather Options
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="border-t border-orange-200 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-orange-600">
              Facilities
            </p>
            <h2 className="mb-4 font-serif text-4xl font-bold text-foreground">
              Amenities
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Wifi, name: 'Free WiFi', description: 'High-speed internet throughout the lodge' },
              { icon: AirVent, name: 'Air Conditioning', description: 'Climate control in all rooms' },
              { icon: ParkingMeter, name: 'Parking', description: 'Secure parking facilities available' },
              { icon: Utensils, name: 'Restaurant', description: 'On-site dining with diverse menu' },
              { icon: Users, name: 'Meeting Rooms', description: 'Versatile spaces for groups' },
              { icon: Phone, name: '24/7 Support', description: 'Round-the-clock guest assistance' },
            ].map((amenity) => {
              const Icon = amenity.icon
              return (
                <div key={amenity.name} className="flex gap-4 rounded-lg border border-orange-100 bg-orange-50 p-6">
                  <div className="flex-shrink-0">
                    <Icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{amenity.name}</h3>
                    <p className="text-sm text-muted-foreground">{amenity.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact & Booking CTA */}
      <section className="border-t border-orange-200 bg-gradient-to-br from-orange-600 to-orange-700 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="mb-4 font-serif text-4xl font-bold text-white">
            Ready to Experience Yiri Lodge?
          </h2>
          <p className="mb-8 text-lg text-orange-100">
            Whether you're planning a retreat, hosting an event, or seeking comfortable accommodation, we're here to welcome you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="rounded-lg bg-white px-8 py-3 font-semibold text-orange-600 transition-colors hover:bg-orange-50">
              Book Accommodation
            </button>
            <button className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-orange-600/50">
              Inquire About Events
            </button>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3 pt-12 border-t border-orange-500">
            <div>
              <Phone className="mx-auto mb-3 h-6 w-6 text-orange-100" />
              <p className="font-semibold text-white">Phone</p>
              <p className="text-orange-100">+233 (0)30 500 500</p>
            </div>
            <div>
              <Mail className="mx-auto mb-3 h-6 w-6 text-orange-100" />
              <p className="font-semibold text-white">Email</p>
              <p className="text-orange-100">info@yirilodge.ug.edu.gh</p>
            </div>
            <div>
              <MapPin className="mx-auto mb-3 h-6 w-6 text-orange-100" />
              <p className="font-semibold text-white">Location</p>
              <p className="text-orange-100">University of Ghana, Legon</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
