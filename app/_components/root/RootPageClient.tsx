

//จะต้องประกาศเสมอถ้ามีการทำ interative ใน component
"use client"
import React, { useEffect, useState } from 'react'

type Props = {text:string}

export default function RootPageClient({text}: Props) {
  //ทดสอบการ interative ของฝั่ง client side render
  //0. โดยกำหนดให้เป็น count ค่าเริ่มต้น 0 โดยค่าจะเพิ่มขึ้นถ้ามีการกด click
  const [count, setCount] = useState(0)

  
  return (
    //1. ใช้ onClick ในการ interative เพิ่มค่า count 
   <button onClick={()=>setCount(count+1)}> Add {count}</button>
  )
}