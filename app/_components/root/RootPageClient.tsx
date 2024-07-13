

"use client"
import React, { useEffect, useState } from 'react'

type Props = {text:string}

export default function RootPageClient({text}: Props) {
  //ทดสอบการ interative ของฝั่ง client side render
  //0. โดยกำหนดให้เป็น count ค่าเริ่มต้น 0
  const [count, setCount] = useState(0)

  //4. use effect ในการดัก
  useEffect(() => {
    //5. ไปเรียกfunction run counter()
    runCounter();
  }) 

  //1. สร้าง function runCounter
  const runCounter = () => {
    //2. กำหนดค่า interval ในการsetค่าเข้าไปในcount
    setInterval(()=>{
      //3. ทำการset ค่า count ทีละ 1 ใน ทุกๆ วินาที
      setCount(count+1)
    },1000)
  }
  
  return (
    //6. แสดงค่า count
    //จากผลการแสดงผล ถ้าไปดูที่ network ตรง preview จะแสดงค่าเริ่มต้องเป็น RootPageClient: 1234 : Count-0 ในฝั่ง server side render
    //แต่ในฝั่ง browser จะมีการแสดง ค่า 
    // RootPageClient: 1234 : Count-1 
    // RootPageClient: 1234 : Count-2 ไปเรื่อยๆ
    <div>RootPageClient: {text} : Count-{count}</div>
  )
}