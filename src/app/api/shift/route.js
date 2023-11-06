import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
   const shifts = await prisma.shift.findMany();
   return NextResponse.json(shifts);
}

export async function POST(request) {
   const { sifhtDay, farmaciasId } = await request.json();
   const newShifht = await prisma.shift.create({
      data: {
         sifhtDay,
         farmaciasId,
      },
   });
   return NextResponse.json(newShifht);
}
