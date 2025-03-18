import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function ExpertisePage() {
  return (
    <section className="min-h-screen bg-black text-white pb-24">
      {/* Hero Section */}
      <div className="relative h-screen max-h-[600px] w-full overflow-hidden">
        <Image
          src="/images/expertise/hero-bg.jpg"
          alt="Legal expertise hero image"
          fill
          className="object-cover opacity-40"
          priority
        />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">OUR EXPERTISE</h1>
          <p className="text-xl md:text-2xl font-serif italic text-gray-300 max-w-3xl">
            Accessing the Hidden Pathways Others Can't See
          </p>
        </div>
      </div>

      <div className="container max-w-5xl mx-auto px-4 py-16">
        <p className="text-xl leading-relaxed mb-16">
          At Trial & Tribulations, we operate where most never venture, the powerful intersection of legal expertise,
          technological disruption, and media evolution. While others remain trapped in conventional thinking, our
          community gain access to opportunities <span className="font-semibold">invisible to the mainstream</span>.
        </p>

        <div className="border-t border-white/10 pt-16 mb-20">
          <h2 className="text-3xl font-serif font-bold mb-12">Core Capabilities:</h2>

          {/* Capability 1 */}
          <div className="mb-16">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-10 h-10 bg-indigo-900/50 rounded-md flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-indigo-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6H20M9 12H20M9 18H20M5 6V6.01M5 12V12.01M5 18V18.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Legal Career Architecture™</h3>
            </div>
            <p className="text-gray-300 pl-16">
              Our proprietary system identifies emerging patterns in the professional landscape before they become obvious. We've
              guided professionals to secure positions commanding 40-70% higher compensation by positioning them at critical
              inflection points others fail to recognize.
            </p>
          </div>

          {/* Capability 2 */}
          <div className="mb-16">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-10 h-10 bg-indigo-900/50 rounded-md flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-indigo-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 8V6C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H12C12.5304 20 13.0391 19.7893 13.4142 19.4142C13.7893 19.0391 14 18.5304 14 18V16M8 12H22M22 12L18 8M22 12L18 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Strategic Career Transitions</h3>
            </div>
            <p className="text-gray-300 pl-16">
              We've developed exclusive frameworks for both entering and exiting the legal profession. The transition points we've
              identified enable professionals to leverage their existing expertise in ways their peers can't imagine—preserving years
              of investment while escaping the constraints most believe are inescapable.
            </p>
          </div>

          {/* Capability 3 */}
          <div className="mb-16">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-10 h-10 bg-indigo-900/50 rounded-md flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-indigo-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 9L12 5L16 9M16 15L12 19L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Technical Translation Mastery</h3>
            </div>
            <p className="text-gray-300 pl-16">
              Unlike conventional trainings that leave professionals with theoretical knowledge, our approach bridges the critical
              implementation gap. Our clients develop the rare ability to apply technological understanding where others struggle
              with basic concepts.
            </p>
          </div>

          {/* Capability 4 */}
          <div className="mb-16">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-10 h-10 bg-indigo-900/50 rounded-md flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-indigo-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 4V20M17 4V20M3 8H7M17 8H21M3 12H21M3 16H7M17 16H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Media Intelligence Framework</h3>
            </div>
            <p className="text-gray-300 pl-16">
              Our elite analysis of entertainment, media and cultural movements provides early signals that translate into career
              leverage. This intelligence creates unprecedented positioning for those who understand how to capitalize on it before
              market awareness develops.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-16 mb-20">
          <h2 className="text-3xl font-serif font-bold mb-12">What Sets Us Apart:</h2>
          
          <p className="text-xl mb-8">
            We've identified psychological patterns in career development that reveal <span className="font-semibold">opportunities and threats most professionals never see</span>. 
            Our methodologies combine techniques from fields most would never connect, creating results conventional approaches cannot achieve.
          </p>

          <p className="text-xl mb-8">
            While others share general advice that leaves you competing with thousands, our customized approach positions you where
            <span className="font-semibold"> competition is minimal and leverage is maximal</span>. Clients who implement our methods often report experiencing initial disbelief
            from colleagues who cannot comprehend how such transitions are possible.
          </p>
        </div>
        
        <div className="border-t border-white/10 pt-16 mb-20">
          <h2 className="text-3xl font-serif font-bold mb-12">The Critical Choice:</h2>
          
          <p className="text-xl mb-12">
            The legal landscape is dividing into two distinct groups: those who understand the hidden forces reshaping the profession, and
            <span className="font-semibold"> those who will be displaced by them</span>. Our expertise is exclusively available to professionals serious about positioning
            themselves in the former category.
          </p>

          <div className="bg-zinc-900/80 border border-white/10 rounded-lg p-8 text-center">
            <p className="text-lg mb-6">
              For confidential consultation on your specific situation, contact us through our secure collaboration channel. Due to
              our personalized approach, we maintain limited availability.
            </p>
            <Link href="/collaborate#contact-form">
              <Button className="bg-indigo-700 hover:bg-indigo-600 text-white px-8 py-3 text-lg">
                Request Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}