import type { ImageFile } from '@/features/journalEntry/api/types'

interface PayloadImageSize {
  width?: number | null
  height?: number | null
  url?: string | null
}

interface PayloadImage {
  alt?: string | null
  url?: string | null
  width?: number | null
  height?: number | null
  thumbnailURL?: string | null
  sizes?: {
    thumb?: PayloadImageSize | null
    square?: PayloadImageSize | null
    hero?: PayloadImageSize | null
    [key: string]: PayloadImageSize | undefined | null
  }
}

type ImageVariant = {
  url: string | null
  width: number | null
  height: number | null
  alt: string
}

type ImageVariants = {
  base?: ImageVariant
  square?: ImageVariant
  thumbnail?: ImageVariant
  hero?: ImageVariant
  standard?: ImageVariant
}

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL?.replace(/\/+$/, '')

const isAbsoluteUrl = (url: string) =>
  /^https?:\/\//i.test(url) || url.startsWith('//')

const resolveUrl = (url?: string | null): string | null => {
  if (!url) return null
  if (isAbsoluteUrl(url)) return url
  if (!apiBaseUrl) return url
  const cleanedPath = url.replace(/^\/+/, '')
  return `${apiBaseUrl}/${cleanedPath}`
}

const buildVariant = (
  alt: string,
  size?: PayloadImageSize | null,
  fallback?: {
    url?: string | null
    width?: number | null
    height?: number | null
  },
): ImageVariant | undefined => {
  const resolvedUrl = resolveUrl(size?.url ?? fallback?.url ?? null)
  if (!resolvedUrl) return undefined

  return {
    url: resolvedUrl,
    width: size?.width ?? fallback?.width ?? null,
    height: size?.height ?? fallback?.height ?? null,
    alt,
  }
}

const getImageUrl = (image?: ImageFile | null): ImageVariants => {
  const alt = image?.alt ?? ''

  return {
    base: buildVariant(alt, {
      url: image?.url ?? null,
      width: image?.width ?? null,
      height: image?.height ?? null,
    }),
    square: buildVariant(alt, image?.sizes?.square),
    thumbnail: buildVariant(alt, image?.sizes?.thumb, {
      url: image?.thumbnailURL ?? null,
    }),
    hero: buildVariant(alt, image?.sizes?.hero),
    standard: buildVariant(alt, image?.sizes?.standard),
  }
}

export type { ImageVariant, ImageVariants, PayloadImage }

export default getImageUrl
