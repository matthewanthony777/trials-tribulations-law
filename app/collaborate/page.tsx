// app/collaborate/page.tsx
import CollaborateForm from '@/components/collaborate-form'

export default function CollaboratePage() {
  return (
    <section className="min-h-screen bg-black text-white pb-24 pt-40">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold mb-6">Join Our Legal Community</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Whether you're dreaming of a career in law, looking to develop your expertise, or seeking to connect with 
            fellow legal professionals - you've found your home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Career Transition */}
          <div className="bg-zinc-900/50 border border-white/10 rounded-lg p-8">
            <div className="mb-4">
              <div className="w-10 h-10 bg-indigo-900/50 rounded-md flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6H20M9 12H20M9 18H20M5 6V6.01M5 12V12.01M5 18V18.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2">Career Transition</h2>
            </div>

            <ul className="space-y-3 text-gray-300">
              <li>One-on-one career guidance</li>
              <li>Industry insights and pathways</li>
              <li>Skills assessment and planning</li>
              <li>Portfolio development support</li>
            </ul>
          </div>

          {/* Creative Development */}
          <div className="bg-zinc-900/50 border border-white/10 rounded-lg p-8">
            <div className="mb-4">
              <div className="w-10 h-10 bg-indigo-900/50 rounded-md flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5 8a.5.5 0 100-1 .5.5 0 000 1zM12 10.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M3 14h3l2 2h6l2-2h2a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v5a2 2 0 001 1.73V17a2 2 0 104 0v-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2">Creative Development</h2>
            </div>

            <ul className="space-y-3 text-gray-300">
              <li>Writing workshops and feedback</li>
              <li>Script analysis sessions</li>
              <li>Creative collaboration opportunities</li>
              <li>Mentorship programs</li>
            </ul>
          </div>

          {/* Community Support */}
          <div className="bg-zinc-900/50 border border-white/10 rounded-lg p-8">
            <div className="mb-4">
              <div className="w-10 h-10 bg-indigo-900/50 rounded-md flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2">Community Support</h2>
            </div>

            <ul className="space-y-3 text-gray-300">
              <li>Monthly virtual meetups</li>
              <li>Peer review groups</li>
              <li>Networking events</li>
              <li>Collaborative projects</li>
            </ul>
          </div>
        </div>

        <div id="contact-form" className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">Connect with Trials & Tribulations</h2>
          <CollaborateForm />
        </div>
      </div>
    </section>
  )
}