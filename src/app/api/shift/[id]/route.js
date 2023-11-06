import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
   const shift = await prisma.shift.findUnique({
      where: {
         id: params.id,
      },
   });
   return NextResponse.json(shift);
};

export const DELETE = async (request, { params }) => {
   const shift = await prisma.shift.delete({
      where: {
         id: params.id,
      },
   });
   return NextResponse.json(shift);
};

export const PUT = async (request, { params }) => {
   const data = await request.json();
   const shift = await prisma.shift.update({
      where: {
         id: params.id,
      },
      data: data,
   });
   return NextResponse.json(shift);
};
