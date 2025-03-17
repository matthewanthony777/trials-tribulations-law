import { JSX } from 'react'
import { highlight } from 'sugar-high'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import Image from 'next/image'

import Counter from '@/components/counter'

function Code({ children, ...props }: any) {
  let codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

function CustomImage({ src, alt, width = 800, height = 450 }: { src: string; alt?: string; width?: number; height?: number }) {
  return (
    <div className="my-8 relative overflow-hidden rounded-lg">
      <Image
        src={src}
        alt={alt || ''}
        width={width}
        height={height}
        className="object-cover"
      />
    </div>
  )
}

function Video({ src, poster }: { src: string; poster?: string }) {
  return (
    <div className="my-8 relative overflow-hidden rounded-lg">
      <video 
        src={src} 
        controls 
        className="w-full" 
        poster={poster}
      />
    </div>
  )
}

const components = {
  code: Code,
  img: CustomImage,
  Image: CustomImage,
  Video: Video,
  Counter
}

export default function MDXContent(
  props: JSX.IntrinsicAttributes & MDXRemoteProps
) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}