'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface CapabilityProps {
  title: string
  description: string
  detailedDescription: string
  icon: string
  index: number
}

export function CoreCapability({ 
  title, 
  description,
  detailedDescription,
  icon,
  index
}: CapabilityProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Handle escape key to unflip card
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFlipped) {
        setIsFlipped(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isFlipped]);
  
  // Determine accent color based on the capability type
  const getAccentColor = () => {
    if (title.includes('Legal Career')) return 'from-indigo-900/50';
    if (title.includes('Strategic Career')) return 'from-blue-900/50';
    if (title.includes('Technical Translation')) return 'from-purple-900/50';
    if (title.includes('Media Intelligence')) return 'from-emerald-900/50';
    return 'from-indigo-900/50'; // Default color
  };

  const getIconColor = () => {
    if (title.includes('Legal Career')) return 'bg-indigo-900/50 text-indigo-400 group-hover:bg-indigo-800/60 group-hover:text-indigo-300';
    if (title.includes('Strategic Career')) return 'bg-blue-900/50 text-blue-400 group-hover:bg-blue-800/60 group-hover:text-blue-300';
    if (title.includes('Technical Translation')) return 'bg-purple-900/50 text-purple-400 group-hover:bg-purple-800/60 group-hover:text-purple-300';
    if (title.includes('Media Intelligence')) return 'bg-emerald-900/50 text-emerald-400 group-hover:bg-emerald-800/60 group-hover:text-emerald-300';
    return 'bg-indigo-900/50 text-indigo-400 group-hover:bg-indigo-800/60 group-hover:text-indigo-300';
  };

  return (
    <div 
      className="flip-card mb-12 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
        {/* Front of card */}
        <div 
          className="flip-card-front flex flex-col cursor-pointer"
          onClick={() => setIsFlipped(true)}
        >
          {/* Background effects */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700 rounded-lg">
            <div className={`absolute inset-0 bg-gradient-to-r ${getAccentColor()} to-transparent blur-xl rounded-lg`}></div>
          </div>
          
          <div className="z-10 flex items-start gap-6 mb-4">
            {/* Icon with glow effect */}
            <div className="relative">
              <div className={`absolute inset-0 w-14 h-14 opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300 rounded-md ${getIconColor().split(' ')[0]}`}></div>
              <div className={`w-10 h-10 rounded-md flex items-center justify-center flex-shrink-0 relative z-10 transition-colors duration-300 ${getIconColor()}`}>
                <div dangerouslySetInnerHTML={{ __html: icon }} className="w-6 h-6 transition-colors duration-300" />
              </div>
            </div>
            
            {/* Title with animation */}
            <h3 className="text-2xl font-bold transform group-hover:translate-x-1 transition-transform duration-300">{title}</h3>
          </div>
          
          {/* Description with hover effect */}
          <p className="text-gray-300 pl-16 group-hover:text-gray-200 transition-colors duration-300 mb-4">
            {description}
          </p>

          {/* Click to read more prompt */}
          <div className="mt-auto flex justify-center items-center pt-4">
            <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
              Click to reveal the hidden advantage
            </span>
          </div>

          {/* Subtle arrow indicator */}
          <div className="absolute bottom-4 right-4 opacity-30 group-hover:opacity-70 transition-opacity duration-300">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
        
        {/* Back of card */}
        <div 
          className="flip-card-back flex flex-col"
          onClick={() => setIsFlipped(false)}
        >
          <div className="absolute top-4 right-4 cursor-pointer hover:text-gray-200 transition-colors">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4 pr-8">{title}</h3>
          
          <div className="prose prose-invert prose-sm max-w-none">
            <p className="text-gray-200 mb-4">{description}</p>
            <p className="text-gray-300">{detailedDescription}</p>
          </div>

          <div className="mt-auto pt-4 flex justify-between items-center">
            <div className="text-sm text-gray-400">
              Click anywhere to close
            </div>
            <div className={`text-sm font-medium ${
              title.includes('Legal Career') ? 'text-indigo-400' : 
              title.includes('Strategic Career') ? 'text-blue-400' : 
              title.includes('Technical Translation') ? 'text-purple-400' : 
              'text-emerald-400'
            }`}>
              Trials & Tribulations Exclusive Methodology
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function EnhancedCoreCapabilities() {
  const capabilities = [
    {
      icon: `<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 6H20M9 12H20M9 18H20M5 6V6.01M5 12V12.01M5 18V18.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>`,
      title: "Legal Career Architecture™",
      description: "Our proprietary system identifies emerging patterns in the professional landscape before they become obvious. We've guided professionals to secure positions commanding 40-70% higher compensation by positioning them at critical inflection points others fail to recognize.",
      detailedDescription: "Unlike conventional career consultants who react to visible market shifts, our system deploys predictive algorithms that identify nascent industry patterns 12-18 months before mainstream recognition. We decode hidden professional inflection points using proprietary pattern recognition methodologies developed at the intersection of legal innovation, technological disruption, and media evolution. Clients who implement our frameworks consistently report not just higher compensation, but strategic positioning that renders them essentially immune to technological displacement—placing them in demand-control positions rather than supply-response roles within their organizations. Our methodology doesn't just adapt to the future; it architects your centrality within it."
    },
    {
      icon: `<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 8V6C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H12C12.5304 20 13.0391 19.7893 13.4142 19.4142C13.7893 19.0391 14 18.5304 14 18V16M8 12H22M22 12L18 8M22 12L18 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>`,
      title: "Strategic Career Transitions",
      description: "We've developed exclusive frameworks for both entering and exiting the legal profession. The transition points we've identified enable professionals to leverage their existing expertise in ways their peers can't imagine—preserving years of investment while escaping the constraints most believe are inescapable.",
      detailedDescription: "Most professionals remain trapped by invisible career constraints because they lack the strategic intelligence to identify escape routes. Our transition methodology reveals hidden pathways that transform your existing expertise into powerful leverage points. Where traditional advisors suggest conventional lateral moves, we architect non-linear career trajectories that capitalize on market disequilibrium and information asymmetries. Our clients consistently report a psychological revelation: constraints they believed were inherent to their professional context were merely manifestations of conventional thinking. By reframing career trajectories through our proprietary transition protocols, we unlock mobility patterns that preserve accumulated professional capital while enabling movement into positions commanding both greater compensation and enhanced future optionality."
    },
    {
      icon: `<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 9L12 5L16 9M16 15L12 19L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>`,
      title: "Technical Translation Mastery",
      description: "Unlike conventional trainings that leave professionals with theoretical knowledge, our approach bridges the critical implementation gap. Our clients develop the rare ability to apply technological understanding where others struggle with basic concepts.",
      detailedDescription: "The greatest professional vulnerability in today's landscape is the implementation gap—the chasm between theoretical understanding and practical application that renders most training essentially worthless. Our technical translation system creates applied mastery through multi-modal learning processes that neurologically encode both conceptual frameworks and implementation pathways simultaneously. Where most training programs deliver information, our methodology creates transformative capability through contextual application protocols. This approach develops your capacity to translate between abstract technological concepts and concrete implementation requirements—a rare skill that positions you as an essential bridge between technical specialists and organizational leadership. This translation capability has become the single most valuable professional skill in environments where technological understanding determines organizational relevance."
    },
    {
      icon: `<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 4V20M17 4V20M3 8H7M17 8H21M3 12H21M3 16H7M17 16H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>`,
      title: "Media Intelligence Framework",
      description: "Our elite analysis of entertainment, media and cultural movements provides early signals that translate into career leverage. This intelligence creates unprecedented positioning for those who understand how to capitalize on it before market awareness develops.",
      detailedDescription: "Media narratives don't merely reflect reality—they create it. Our intelligence framework decodes these narrative structures to extract early signals of shifting professional landscapes 6-18 months before they manifest in organizational contexts. We analyze entertainment, media discourse, and cultural phenomena through proprietary semiotic frameworks that identify emergent patterns in collective consciousness. This analysis provides our clients with advance intelligence on regulatory movements, investor sentiment, and public perception shifts that will eventually reshape professional environments. While most professionals react to these changes once they become institutionalized, our clients position themselves in anticipation of these shifts—creating first-mover advantages in emerging specialties and practice areas. This predictive positioning routinely translates into both compensation premiums and perceived prescience that enhances professional authority."
    }
  ];

  useEffect(() => {
    // Add the flip card CSS to the document
    const style = document.createElement('style');
    style.textContent = `
      .flip-card {
        perspective: 1000px;
        height: 300px;
        margin-bottom: 2rem;
      }
      
      .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: left;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      }
      
      .flip-card-inner.flipped {
        transform: rotateY(180deg);
      }
      
      .flip-card-front, .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        padding: 1.5rem;
        border-radius: 0.5rem;
      }
      
      .flip-card-front {
        background-color: rgba(24, 24, 27, 0.5);
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: white;
      }
      
      .flip-card-back {
        background-color: rgba(24, 24, 27, 0.8);
        color: white;
        transform: rotateY(180deg);
        border: 1px solid rgba(255, 255, 255, 0.2);
        overflow: auto;
      }
      
      /* For touch devices */
      @media (hover: none) {
        .flip-card:active .flip-card-inner {
          transform: rotateY(180deg);
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="border-t border-white/10 pt-16 mb-20">
      <motion.h2 
        className="text-3xl font-serif font-bold mb-12 relative inline-block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Core Capabilities:
        <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-600 to-transparent"></div>
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {capabilities.map((capability, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <CoreCapability 
              icon={capability.icon}
              title={capability.title}
              description={capability.description}
              detailedDescription={capability.detailedDescription}
              index={index}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}