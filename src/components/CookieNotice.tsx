import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

const STORAGE_KEY = "cg-cookie-notice-dismissed"

export function CookieNotice() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) !== "1") setVisible(true)
    } catch {
      setVisible(true)
    }
  }, [])

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1")
    } catch {
      /* storage unavailable — hide for this visit only */
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="region"
      aria-label="Cookie information"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 backdrop-blur-md p-4"
    >
      <div className="container mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between">
        <p className="text-sm text-muted-foreground">
          We only use storage that keeps you signed in and remembers your bookmarks. No advertising or
          analytics tracking.{" "}
          <Link to="/cookies" className="text-primary underline">
            Read our Cookie Policy
          </Link>
          .
        </p>
        <Button size="sm" onClick={dismiss} className="shrink-0">
          Got it, hide this notice
        </Button>
      </div>
    </div>
  )
}
