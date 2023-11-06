import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
   const phone = await prisma.phone.findUnique({
      where: {
         id: params.id,
      },
   });
   return NextResponse.json(phone);
};

export const DELETE = async (request, { params }) => {
   const phone = await prisma.phone.delete({
      where: {
         id: params.id,
      },
   });
   return NextResponse.json(phone);
};

export const PUT = async (request, { params }) => {
   const data = await request.json();
   const phone = await prisma.phone.update({
      where: {
         id: params.id,
      },
      data: data,
   });
   return NextResponse.json(phone);
};
