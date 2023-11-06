import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
   const phones = await prisma.phone.findMany();
   return NextResponse.json(phones);
}

export async function POST(request) {
   const { number, farmaciasID } = await request.json();
   const newPhone = await prisma.phone.create({
      data: {
         number,
         farmaciasID,
      },
   });
   return NextResponse.json(newPhone);
}
