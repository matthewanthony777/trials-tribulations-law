import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import EnhancedCoreCapabilities from '@/components/enhanced-core-capabilities'

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
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">LEGAL FUTURISM EXPERTISE</h1>
          <p className="text-xl md:text-2xl font-serif italic text-gray-300 max-w-3xl">
          Creating the Future of Law Through AI, Creativity, and Strategic Foresight
          </p>
        </div>
      </div>

      <div className="container max-w-5xl mx-auto px-4 py-16">
        <p className="text-xl leading-relaxed mb-16">
          At Trial & Tribulations, we operate where most never venture, the powerful intersection of legal expertise,
          technological disruption, and media evolution. While others remain trapped in conventional thinking, our
          community gain access to opportunities <span className="font-semibold">invisible to the mainstream</span>.
        </p>

        {/* Enhanced Core Capabilities Section */}
        <EnhancedCoreCapabilities />
        
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