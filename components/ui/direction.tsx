"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

type DirectionProviderProps = React.ComponentProps<"main"> & {
  direction?: "ltr" | "rtl"
}

function DirectionProvider({
  className,
  direction = "ltr",
  ...props
}: DirectionProviderProps) {
  return (
    <main
      data-slot="direction-provider"
      dir={direction}
      className={cn(className)}
      {...props}
    />
  )
}

export { DirectionProvider }
