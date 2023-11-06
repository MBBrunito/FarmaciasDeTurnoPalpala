"use client";
import { useState } from "react";
import UploadFile from "../components/uploadFile/UploadFile";
import "./formNewFarmacia.css";

export default function NewFarmacia() {
   const [nombre, setNombre] = useState("");
   const [direccion, setDireccion] = useState("");
   const [telefono, setTelefono] = useState("");
   const [comentario, setComentario] = useState("");
   const [imagenUrl, setImagenUrl] = useState("");

   const handleImageSelect = (formData) => {
      setImagenUrl(formData);
   };

   const handleFormSubmit = async (event) => {
      event.preventDefault();

      try {
         const cloudinaryResponse = await uploadImageToCloudinary(imagenUrl);
         const finalImageUrl = cloudinaryResponse.secure_url;
         console.log("URL final de la imagen:", finalImageUrl);

         // Aquí puedes enviar finalImageUrl junto con otros datos del formulario al servidor para almacenarlo en la base de datos
         console.log(nombre, direccion, telefono, comentario, imagenUrl);
      } catch (error) {
         console.error("Error al subir la imagen a Cloudinary:", error);
      }
   };

   const uploadImageToCloudinary = async (formData) => {
      formData.append("upload_preset", "farmacias");
      try {
         const response = await fetch("/api/upload", {
            method: "POST",
            body: formData,
         });

         const data = await response.json();
         return data;
      } catch (error) {
         console.error("Error al subir la imagen a Cloudinary:", error);
         throw error;
      }
   };

   return (
      <div>
         <div id="form-ui">
            <form action="" method="post" id="form" onSubmit={handleFormSubmit}>
               <div id="form-body">
                  <div id="welcome-lines">
                     <div id="welcome-line-1">Farmacia</div>
                     <div id="welcome-line-2">Crear nueva Farmacia</div>
                  </div>
                  <div id="input-area">
                     <div className="form-inp">
                        <input
                           placeholder="Nombre"
                           type="text"
                           value={nombre}
                           onChange={(event) => setNombre(event.target.value)}
                        />
                     </div>
                     <div className="form-inp">
                        <UploadFile onImageSelect={handleImageSelect} />
                     </div>
                     <div className="form-inp">
                        <input
                           placeholder="Dirección"
                           type="text"
                           value={direccion}
                           onChange={(event) =>
                              setDireccion(event.target.value)
                           }
                        />
                     </div>
                     <div className="form-inp">
                        <input
                           placeholder="Teléfonos"
                           type="text"
                           value={telefono}
                           onChange={(event) => setTelefono(event.target.value)}
                        />
                     </div>
                     <div className="form-inp">
                        <input
                           placeholder="Comentario"
                           type="text"
                           value={comentario}
                           onChange={(event) =>
                              setComentario(event.target.value)
                           }
                        />
                     </div>
                  </div>
                  <div id="submit-button-cvr">
                     <button id="submit-button" type="submit">
                        Crear Farmacia
                     </button>
                  </div>
               </div>
            </form>
         </div>
      </div>
   );
}
