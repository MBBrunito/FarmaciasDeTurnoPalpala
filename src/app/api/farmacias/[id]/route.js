import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
   const farmacia = await prisma.farmacias.findUnique({
      where: {
         id: params.id,
      },
      include: {
         phone: true,
         shift: true,
      },
   });
   return NextResponse.json(farmacia);
};

export const DELETE = async (request, { params }) => {
   const farmacia = await prisma.farmacias.delete({
      where: {
         id: params.id,
      },
   });
   return NextResponse.json(farmacia);
};

export const PUT = async (request, { params }) => {
   const data = await request.json();
   const farmacia = await prisma.farmacias.update({
      where: {
         id: params.id,
      },
      data: data,
   });
   return NextResponse.json(farmacia);
};
