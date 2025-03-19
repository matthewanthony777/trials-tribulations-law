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
  
  // Enhanced debugging to help identify issues
  useEffect(() => {
    console.log("MediaDisplay:", { 
      video, 
      image, 
      isPreview,
      imageType: image ? getFileExtension(image) : null,
      videoType: video ? getFileExtension(video) : null
    });
  }, [video, image, isPreview]);
  
  // Helper function to get file extension
  const getFileExtension = (path?: string) => {
    if (!path) return null;
    const parts = path.split('.');
    return parts.length > 1 ? parts[parts.length - 1].toLowerCase() : null;
  };
  
  // Determine if we're dealing with an animated image format
  const imageExt = image ? getFileExtension(image) : null;
  const isAnimatedImage = imageExt === 'gif' || imageExt === 'webp' || imageExt === 'apng';
  
  // Setup video playback behavior 
  useEffect(() => {
    if (videoRef.current && video) {
      if (isPreview) {
        // Preview mode - autoplay, muted, loop
        videoRef.current.muted = true;
        videoRef.current.loop = true;
        videoRef.current.playsInline = true;
        videoRef.current.controls = false;
        
        // Try to autoplay
        const playPreview = async () => {
          try {
            await videoRef.current?.play();
            console.log("Preview autoplay successful");
          } catch (err) {
            console.error("Preview autoplay failed:", err);
          }
        };
        
        playPreview();
      } else {
        // Detail view - with controls
        videoRef.current.controls = true;
        
        // Only mute if specifically required
        videoRef.current.muted = false; 
        
        console.log("Detail view video setup complete");
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
            poster={image && !isAnimatedImage ? image : undefined}
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error("Video error:", e);
              setMediaError(true);
            }}
          />
        </div>
      ) : image ? (
        // Only image is available (no video)
        <div className="relative w-full h-full aspect-video">
          {/* Special handling for animated images to ensure they animate */}
          {isAnimatedImage ? (
            // Use img tag directly for animated formats to ensure animation
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={image}
              alt={title || 'Article image'}
              className="w-full h-full object-cover"
              onError={() => setMediaError(true)}
            />
          ) : (
            // Use Next.js Image for static images
            <Image
              src={image}
              alt={title || 'Article image'}
              fill
              className="object-cover"
              onError={() => setMediaError(true)}
            />
          )}
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