import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            TransiGuide: Ride Confidently in Your New City
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Get real‑time fare info, step‑by‑step transfer alerts, and multilingual
            route plans built for newcomers.
          </p>
          <div className="space-x-4 justify-center">
            <Link href="/planner" className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
              Plan Your Route
            </Link>
            <Link href="/alerts" className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition">
              View Alerts
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            How TransiGuide Helps
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow flex items-start space-x-4">
              <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 011-1v-4a1 1 0 00-1-1h-2a1 1 0 01-1-1h-4a1 1 0 00-1-1h-2a1 1 0 01-1-1z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Smart Route Planner</h3>
                <p className="text-gray-600 mt-2">
                  Enter your origin and destination to see the cheapest, fastest
                  routes with fare breakdowns.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow flex items-start space-x-4">
              <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zm0 10c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zm0-6c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Transfer Alerts</h3>
                <p className="text-gray-600 mt-2">
                  Get notified when you need to switch lines, with platform numbers
                  and walking times.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow flex items-start space-x-4">
              <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m2 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Multilingual Support</h3>
                <p className="text-gray-600 mt-2">
                  Available in English, Spanish, Mandarin, Arabic, and more.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow flex items-start space-x-4">
              <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
                <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Offline Access</h3>
                <p className="text-gray-600 mt-2">
                  Save routes for use without data — perfect for underground
                  stations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-50 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Start navigating today — free and always up to date
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of newcomers who trust TransiGuide for their daily
            commute.
          </p>
          <Link href="/planner" className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
            Try the Planner
          </Link>
        </div>
      </section>
    </div>
  );
}