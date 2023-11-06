import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
   const farmacias = await prisma.farmacias.findMany({
      include: {
         phone: true,
         shift: true,
      },
   });
   return NextResponse.json(farmacias);
}

export async function POST(request) {
   const { name, address, picture, logo, comment, phone, shift, created_at } =
      await request.json();
   const newFarmacia = await prisma.farmacias.create({
      data: {
         name,
         address,
         picture,
         logo,
         comment,
         created_at,
         phone,
         shift,
      },
   });
   return NextResponse.json(newFarmacia);
}
