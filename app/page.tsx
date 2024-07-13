
import React from 'react'
import RootPageClient from './_components/root/RootPageClient'

type Props = {}

export default function Page({}: Props) {
  return (
    // RSC Payload ใส่ 1234 เข้าไปด้วย
    <div><RootPageClient text="1234"/></div> 
  )
}