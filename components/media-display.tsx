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
  
  // Add some debugging to troubleshoot
  useEffect(() => {
    console.log("MediaDisplay props:", { image, video, title, isPreview });
  }, [image, video, title, isPreview]);
  
  // Setup video playback behavior
  useEffect(() => {
    if (videoRef.current && video) {
      // Set up video properties
      videoRef.current.muted = true;
      videoRef.current.loop = true;
      videoRef.current.playsInline = true;
      
      // Try to play the video
      const playVideo = async () => {
        try {
          await videoRef.current?.play();
          console.log("Video playing successfully");
        } catch (err) {
          console.error("Video play error:", err);
        }
      };
      
      // Always try to play in preview mode
      if (isPreview) {
        playVideo();
      }
    }
  }, [video, isPreview]);
  
  // For preview cards with videos, show a static image or the first frame
  // For detail view, show the full video with controls
  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      {video ? (
        // Video is available
        <div className="relative w-full h-full aspect-video">
          {/* Always include the video element */}
          <video 
            ref={videoRef}
            src={video}
            poster={image}
            controls={!isPreview}
            muted={true}
            loop={isPreview}
            playsInline={true}
            onError={(e) => {
              console.error("Video error:", e);
              setMediaError(true);
            }}
            className="w-full h-full object-cover"
          />
          
          {/* NO play button overlay for preview mode */}
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