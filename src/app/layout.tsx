import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sementes de Coleção | Coruja Genetics & Seeds',
  description: 'Genéticas de alta qualidade e colecionismo botânico exclusivo.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  )
}