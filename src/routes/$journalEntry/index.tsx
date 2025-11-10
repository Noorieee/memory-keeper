import { createFileRoute } from '@tanstack/react-router'
import Container from '@/features/journalEntry/components/Container'

export const Route = createFileRoute('/$journalEntry/')({
  component: Container,
})
