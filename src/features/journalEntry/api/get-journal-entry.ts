import { queryOptions, useQuery } from "@tanstack/react-query";
import { getOneDoc } from "@/lib/apiClient"

export interface JournalEntry {
  createdAt: string;
  updatedAt: string;
  date: string;
  accentColour: string;
  tags: Tag[];
  favourited: boolean;
  title: string;
  slug: string;
  sections: Section[];
  images: ImageFile[];
  id: string;
}

export interface Tag {
  createdAt: string;
  updatedAt: string;
  label: string;
  slug: string;
  icon: Icon;
  id: string;
}

export interface Icon {
  createdAt: string;
  updatedAt: string;
  label: string;
  prefix: string;
  name: string;
  className: string;
  id: string;
}

export interface Section {
  content: string;
  accentColour: string;
  id: string;
}

export interface ImageFile {
  createdAt: string;
  updatedAt: string;
  alt: string;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number | null;
  height: number | null;
  focalX: number;
  focalY: number;
  sizes: ImageSizes;
  id: string;
  url: string;
  thumbnailURL: string;
}

export interface ImageSizes {
  thumb: ImageVariant;
  square: ImageVariant;
  hero: ImageVariantNullable;
}

export interface ImageVariant {
  width: number;
  height: number;
  mimeType: string;
  filesize: number;
  filename: string | null;
  url: string | null;
}

export interface ImageVariantNullable {
  width: number | null;
  height: number | null;
  mimeType: string | null;
  filesize: number | null;
  filename: string | null;
  url: string | null;
}

const getJournalEntryBySlug = (slug: string) => {
  return getOneDoc<JournalEntry>("/journal-entries", {
    params: {
      where: {slug:{equals:slug}},
      depth: 2
    }
  })
}

const getJournalEntryBySlugQueryOptions = (slug: string) => {
  return queryOptions<JournalEntry, Error, JournalEntry, ["journal-entry", string]>({
    queryKey:["journal-entry", slug],
    queryFn: () => getJournalEntryBySlug(slug),
    enabled: !!slug
  })
}

export const useJournalEntryBySlug = (slug: string) => {
  return useQuery(getJournalEntryBySlugQueryOptions(slug))
}