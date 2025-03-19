'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

interface MediaDisplayProps {
  image?: string
  video?: string
  title?: string
  isPreview?: boolean
  className?: string
}

export default function MediaDisplay({ image, video, title, isPreview = false, className = '' }: MediaDisplayProps) {
  const [mediaError, setMediaError] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  
  // Debug the props
  useEffect(() => {
    console.log("MediaDisplay:", { video, image, isPreview });
  }, [video, image, isPreview]);
  
  // Setup video playback behavior differently for preview vs detail view
  useEffect(() => {
    if (videoRef.current && video) {
      if (isPreview) {
        // Preview mode - autoplay, muted, loop, no controls
        videoRef.current.muted = true;
        videoRef.current.loop = true;
        videoRef.current.playsInline = true;
        videoRef.current.controls = false;
        
        // Try to autoplay
        const playPreview = async () => {
          try {
            await videoRef.current?.play();
          } catch (err) {
            console.error("Preview autoplay failed:", err);
          }
        };
        
        playPreview();
      } else {
        // Detail view - show controls, don't autoplay
        videoRef.current.muted = false;
        videoRef.current.controls = true;
        videoRef.current.loop = false;
        videoRef.current.autoplay = false;
      }
    }
  }, [video, isPreview]);
  
  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      {video ? (
        // Video is available
        <div className="relative w-full h-full aspect-video">
          <video 
            ref={videoRef}
            src={video}
            poster={image}
            // Let the useEffect handle controls and behavior instead
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error("Video error:", e);
              setMediaError(true);
            }}
          />
          
          {/* No play button overlay */}
        </div>
      ) : image ? (
        // Only image is available (no video)
        <div className="relative w-full h-full aspect-video">
          <Image
            src={image}
            alt={title || 'Article image'}
            fill
            className="object-cover"
            onError={() => setMediaError(true)}
          />
        </div>
      ) : (
        // No media available
        <div className="relative w-full h-full aspect-video bg-zinc-900 flex items-center justify-center">
          <div className="text-center">
            <svg className="w-12 h-12 mx-auto text-gray-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-gray-400">{title || 'No media available'}</p>
          </div>
        </div>
      )}
    </div>
  )
}