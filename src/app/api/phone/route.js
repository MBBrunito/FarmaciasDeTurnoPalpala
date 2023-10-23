import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
   const phones = await prisma.phone.findMany();
   return NextResponse.json(phones);
}

export async function POST(request) {
   const { number, farmaciaId } = await request.json();
   const newPhone = await prisma.phone.create({
      data: {
         number,
         farmaciaId,
      },
   });
   return NextResponse.json(newPhone);
}
