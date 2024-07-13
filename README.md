This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


# Intro_Front-End_NextJS
server side render
จะทำการ render ที่ฝั่ง server แล้วส่งไปที่ client 

ถ้าต้องการให้ component เป็น client side render 
ก็ทำการประกาศที่หัวของ component เป็น
"use client" 
ก็จะกลายเป็น client side render แล้ว

client side render
นำมาใช้ในการทำให้ code ของ javascript ที่มีการทำ interaction นั้นทำงาน
เช่นดักการ click button
การใช้ hook
การทำ animation บางอย่าง
การเชื่อมต่อ GPS 
กล้อง 

server side render
ลดขนาด bundle เพราะไม่ต้องส่งมา render ฝั่ง client
เอาcode java script ที่แปลงเป็น html ไปแสดงได้เลยโดยไม่ต้องรอไปแปลงที่ client 
ใช้search engine เข้าใจได้งานในการค้นหา

ถ้าไม่มีการระบุ "use client" 
component ทั้งหมดจะเป็น server side render

แต่ในกรณีที่ main component มีการประกาศ "use client" แต่ใน child ไม่มีการประกาศ
child component ก็จะเป็น client side render ไปโดยปริยายเพราะมีการถูกเรียกใช้ใน main component
แต่ถ้าเรียก ตรงๆ โดยไม่ผ่าน  main component ก็จะยังเป็น client side render

server side render ใช้ reatc api หลายตัว ในการ render html
โดยแบ่งเป็น route segments ไม่ทำทั้งหมดพร้อมกัน
การทำงานจะแปลงข้อมูลให้ไปอยู่ในรูปแบบ React Server Component Payload
แล้วไปใช้การทำงานร่วมกับ Client Component Javascript

# Snipped generate react function in component
tsrfc
