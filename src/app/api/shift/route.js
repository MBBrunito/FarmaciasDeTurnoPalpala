import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
   const shifts = await prisma.shift.findMany();
   return NextResponse.json(shifts);
}

export async function POST(request) {
   const { sifhtDay, farmaciasId } = await request.json();
   const newShift = await prisma.shift.create({
      data: {
         sifhtDay,
         farmaciasId,
      },
   });
   return NextResponse.json(newShift);
}
