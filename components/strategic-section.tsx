import { JSX } from 'react'

interface StrategicSectionProps {
  icon: 'brain' | 'shield' | 'eye'
  title: string
  description: string
  bullets: string[]
}

export default function StrategicSection({ 
  icon, 
  title, 
  description, 
  bullets 
}: StrategicSectionProps) {
  return (
    <div className="p-8 rounded-lg border border-white/10 bg-black">
      <div className="flex flex-col h-full">
        <div className="mb-6">
          <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center mb-4">
            {icon === 'brain' && (
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M9 7C8.44772 7 8 7.44772 8 8C8 8.55228 8.44772 9 9 9C9.55228 9 10 8.55228 10 8C10 7.44772 9.55228 7 9 7Z" fill="currentColor" />
                <path d="M15 7C14.4477 7 14 7.44772 14 8C14 8.55228 14.4477 9 15 9C15.5523 9 16 8.55228 16 8C16 7.44772 15.5523 7 15 7Z" fill="currentColor" />
                <path d="M9 16.5C9 15.5717 9.36875 14.6815 10.0251 14.0251C10.6815 13.3687 11.5717 13 12.5 13C13.4283 13 14.3185 13.3687 14.9749 14.0251C15.6313 14.6815 16 15.5717 16 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
            
            {icon === 'shield' && (
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
            
            {icon === 'eye' && (
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 18C16.4183 18 20 12 20 12C20 12 16.4183 6 12 6C7.58172 6 4 12 4 12C4 12 7.58172 18 12 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
          
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-gray-400 mb-6">{description}</p>
        </div>
        
        <ul className="space-y-4 mt-auto">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-5 h-5 text-gray-400 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-300">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}