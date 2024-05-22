"use client"

import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

export function CookieToast() {
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "We use cookies to help increase the quality of our website.",
          description: "Allow cookies?",
          className: "rounded-none",
          action: <ToastAction altText="Allow">Allow</ToastAction>,
        })
      }}
    >
      Show Toast
    </Button>
  )
}
