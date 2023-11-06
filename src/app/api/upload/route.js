import { NextResponse } from "next/server";
// import { writeFile } from "fs/promises";
// import path from "path";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
   cloud_name: process.env.CLOUD_NAME,
   api_key: process.env.API_KEY,
   api_secret: process.env.API_SECRET,
});

export const POST = async (request) => {
   const data = await request.formData();
   const image = data.get("file");

   if (!image) {
      return NextResponse.json("No se ha subido ninguna imagen", {
         status: 400,
      });
   }

   const byte = await image.arrayBuffer();
   const buffer = Buffer.from(byte);

   // Nota: Guardar en un archivo
   // const filePath = path.join(process.cwd(), "public", image.name);
   // await writeFile(filePath, buffer);

   // const Response = await cloudinary.uploader.upload(buffer, {
   //    folder: "farmacias",
   // });

   const response = await new Promise((resolve, reject) => {
      cloudinary.uploader
         .upload_stream(
            {
               folder: "farmacias",
            },
            (err, result) => {
               if (err) {
                  reject(err);
               }
               resolve(result);
            }
         )
         .end(buffer);
   });

   return NextResponse.json({
      message: "Imagen Subida",
      url: response.secure_url,
   });
};
