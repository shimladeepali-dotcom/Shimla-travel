'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">🏔️ Shimla Travel</h1>
          <div className="space-x-4">
            <Link href="/tours" className="text-gray-700 hover:text-blue-600">
              Tours
            </Link>
            <Link href="/cart" className="text-gray-700 hover:text-blue-600">
              Cart
            </Link>
            <Link href="/auth/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Login
            </Link>
          </div>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Discover Shimla</h2>
          <p className="text-xl text-gray-600 mb-8">Book your perfect tour package today</p>
          
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Search tour packages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold">
                Search
              </button>
            </div>
          </div>

          <Link
            href="/tours"
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-shadow"
          >
            Explore Tours
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">✈️</div>
            <h3 className="text-xl font-semibold mb-2">Best Deals</h3>
            <p className="text-gray-600">Find the best tour packages at unbeatable prices</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-semibold mb-2">Secure Booking</h3>
            <p className="text-gray-600">Safe and secure payment processing with SSL encryption</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-xl font-semibold mb-2">Top Rated</h3>
            <p className="text-gray-600">Trusted by thousands of travelers worldwide</p>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">More Features Coming Soon</h2>
          <p className="text-lg mb-4">Tours catalog, user reviews, and booking management</p>
          <Link
            href="/tours"
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
          >
            View Available Tours
          </Link>
        </div>
      </section>
    </main>
  )
}
