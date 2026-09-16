import { ReactNode, useEffect } from "react"
import { Layout } from "@/components/layout"
import { setPageMeta } from "@/lib/seo"

interface LegalPageProps {
  title: string
  description: string
  path: string
  updated: string
  children: ReactNode
}

export function LegalPage({ title, description, path, updated, children }: LegalPageProps) {
  useEffect(() => {
    setPageMeta({
      title: `${title} | Curated Gems`,
      description,
      url: `https://curated-gems.lovable.app${path}`,
    })
  }, [title, description, path])

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: {updated}</p>
        <div className="space-y-6 text-muted-foreground leading-relaxed [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-8 [&_h2]:mb-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:text-primary [&_a]:underline">
          {children}
        </div>
      </div>
    </Layout>
  )
}
