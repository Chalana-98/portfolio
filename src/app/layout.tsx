import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chalana Shehara | Associate Software Engineer & AI Workflows',
  description:
    'Portfolio of Chalana Shehara – Associate Software Engineer specializing in enterprise .NET Core, Azure Synapse data pipelines, agentic AI, and full-stack solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className="bg-[#06070d] text-slate-100 antialiased selection:bg-purple-600 selection:text-white font-sans">
        {children}
      </body>
    </html>
  )
}

