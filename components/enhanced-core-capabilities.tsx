'use client'

import { useState } from 'react'

interface CapabilityProps {
  title: string
  description: string
  icon: string // Using icon type as string to match your existing structure
}

export function CoreCapability({ 
  title, 
  description, 
  icon 
}: CapabilityProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Determine accent color based on the capability type
  const getAccentColor = () => {
    if (title.includes('Legal Career')) return 'from-indigo-900/50';
    if (title.includes('Strategic Career')) return 'from-blue-900/50';
    if (title.includes('Technical Translation')) return 'from-purple-900/50';
    if (title.includes('Media Intelligence')) return 'from-emerald-900/50';
    return 'from-indigo-900/50'; // Default color
  };

  return (
    <div 
      className="mb-16 group relative" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700">
        <div className={`absolute inset-0 bg-gradient-to-r ${getAccentColor()} to-transparent blur-xl`}></div>
      </div>
      
      <div className="flex items-start gap-6 mb-6 relative z-10">
        <div className="relative">
          {/* Animated glow effect */}
          <div className={`absolute inset-0 w-14 h-14 bg-indigo-900/30 rounded-md opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300`}></div>
          
          {/* Icon container */}
          <div className="w-10 h-10 bg-indigo-900/50 rounded-md flex items-center justify-center flex-shrink-0 relative z-10 group-hover:bg-indigo-800/60 transition-colors duration-300">
            <div dangerouslySetInnerHTML={{ __html: icon }} className="w-6 h-6 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300" />
          </div>
        </div>
        
        {/* Title with hover animation */}
        <h3 className="text-2xl font-bold transform group-hover:translate-x-1 transition-transform duration-300">{title}</h3>
      </div>
      
      {/* Description with hover effect */}
      <p className="text-gray-300 pl-16 group-hover:text-gray-200 transition-colors duration-300">
        {description}
      </p>
    </div>
  )
}

export default function EnhancedCoreCapabilities() {
  // This is an example of how you'd implement this in a page
  // You would adapt this to your actual data and structure
  
  const capabilities = [
    {
      icon: `<svg className="w-6 h-6 text-indigo-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 6H20M9 12H20M9 18H20M5 6V6.01M5 12V12.01M5 18V18.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>`,
      title: "Legal Career Architecture™",
      description: "Our proprietary system identifies emerging patterns in the professional landscape before they become obvious. We've guided professionals to secure positions commanding 40-70% higher compensation by positioning them at critical inflection points others fail to recognize."
    },
    {
      icon: `<svg className="w-6 h-6 text-indigo-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 8V6C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H12C12.5304 20 13.0391 19.7893 13.4142 19.4142C13.7893 19.0391 14 18.5304 14 18V16M8 12H22M22 12L18 8M22 12L18 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>`,
      title: "Strategic Career Transitions",
      description: "We've developed exclusive frameworks for both entering and exiting the legal profession. The transition points we've identified enable professionals to leverage their existing expertise in ways their peers can't imagine—preserving years of investment while escaping the constraints most believe are inescapable."
    },
    {
      icon: `<svg className="w-6 h-6 text-indigo-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 9L12 5L16 9M16 15L12 19L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>`,
      title: "Technical Translation Mastery",
      description: "Unlike conventional trainings that leave professionals with theoretical knowledge, our approach bridges the critical implementation gap. Our clients develop the rare ability to apply technological understanding where others struggle with basic concepts."
    },
    {
      icon: `<svg className="w-6 h-6 text-indigo-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 4V20M17 4V20M3 8H7M17 8H21M3 12H21M3 16H7M17 16H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>`,
      title: "Media Intelligence Framework",
      description: "Our elite analysis of entertainment, media and cultural movements provides early signals that translate into career leverage. This intelligence creates unprecedented positioning for those who understand how to capitalize on it before market awareness develops."
    }
  ];

  return (
    <div className="border-t border-white/10 pt-16 mb-20">
      <h2 className="text-3xl font-serif font-bold mb-12 relative inline-block">
        Core Capabilities:
        <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-600 to-transparent"></div>
      </h2>

      {capabilities.map((capability, index) => (
        <CoreCapability 
          key={index}
          icon={capability.icon}
          title={capability.title}
          description={capability.description}
        />
      ))}
    </div>
  )
}