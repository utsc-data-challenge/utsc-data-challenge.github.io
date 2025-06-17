"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to the current year (2025)
    router.push("/2025")
  }, [router])

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-[#003A79] mb-4">Redirecting to 2025 Challenge...</h1>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#003A79] mx-auto"></div>
      </div>
    </div>
  )
}
