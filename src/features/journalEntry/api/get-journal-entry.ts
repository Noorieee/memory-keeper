import { queryOptions, useQuery } from '@tanstack/react-query'
import { getOneDoc } from '@/lib/apiClient'
import type { JournalEntry } from './types'

const getJournalEntryBySlug = (slug: string) => {
  return getOneDoc<JournalEntry>('/journal-entries', {
    params: {
      where: { slug: { equals: slug } },
      depth: 2,
    },
  })
}

const getJournalEntryBySlugQueryOptions = (slug: string) => {
  return queryOptions<
    JournalEntry,
    Error,
    JournalEntry,
    ['journal-entry', string]
  >({
    queryKey: ['journal-entry', slug],
    queryFn: () => getJournalEntryBySlug(slug),
    enabled: !!slug,
  })
}

export const useJournalEntryBySlug = (slug: string) => {
  return useQuery(getJournalEntryBySlugQueryOptions(slug))
}
