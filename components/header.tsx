import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import { HomeIcon, FileTextIcon, PersonIcon, ChatBubbleIcon } from '@radix-ui/react-icons'

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/75 backdrop-blur-sm">
      <nav className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
          <Link href="/" className="font-serif text-2xl font-bold text-white">
  {/* No text here */}
</Link>
            
            <ul className="hidden md:flex items-center gap-10 text-sm font-light text-gray-300">
              <li className="transition-colors hover:text-white">
                <Link href="/">Home</Link>
              </li>
              <li className="transition-colors hover:text-white">
                <Link href="/future-insights">Future-Insights</Link>
              </li>
              <li className="transition-colors hover:text-white">
                <Link href="/expertise">Our Expertise</Link>
              </li>
              <li className="transition-colors hover:text-white">
                <Link href="/collaborate">Collaborate</Link>
              </li>
            </ul>
          </div>

          <div>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  )
}