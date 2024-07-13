

"use client"
import React from 'react'

type Props = {text:string}

export default function RootPageClient({text}: Props) {
  return (
    <div>RootPageClient: {text}</div>
  )
}