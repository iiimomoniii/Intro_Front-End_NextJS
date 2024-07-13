
// 2. จะต้องมาประกาศ "use client" 
// ถ้าไม่ประกาศบน browser ไม่ไม่มีการแสดง ปุ่ม Button2 หรือ Unhandled Runtime Error

"use client";
import React from 'react'
import RootPageClient from './_components/root/RootPageClient'

type Props = {}

export default function Page({}: Props) {
  return (
   
    
    <div>
      {/*0. สร้าง ปุ่มขึ้นมา */}
       <button>Button</button>
       {/* 1. แต่ถ้าปุ่มมีการ interactive เช่น onClick  */}
       <button onClick={()=>{}}>Button2</button>
       {/* RSC Payload ใส่ 1234 เข้าไปด้วย */}
      <RootPageClient text="1234"/>
    </div> 
  )
}