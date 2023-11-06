import { useState } from "react";
import "./UploadFile.css";

export default function UploadFile({ onImageSelect }) {
   const [file, setFile] = useState(null);
   const [imageUrl, setImageUrl] = useState("");
   const defaultImage =
      "https://res.cloudinary.com/daoavxvau/image/upload/v1698421662/farmacias/Farmacia_csk45k.png";

   const handleFileChange = async (event) => {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
         const formData = new FormData();
         formData.append("file", selectedFile);
         setFile(selectedFile);
         onImageSelect(formData);
         const reader = new FileReader();
         reader.onloadend = () => {
            setImageUrl(reader.result);
         };
         reader.readAsDataURL(selectedFile);
      }
   };

   return (
      <div className="contFile">
         <div className="contFoto">
            <img
               src={imageUrl ? imageUrl : defaultImage}
               alt="Foto Farmacia"
               className="fotoFarmacia"
               title="Cambiar foto/imagen"
            />
            <label className="imgChange">
               Cambiar Imagen
               <input
                  placeholder="Foto"
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
               />
            </label>
         </div>
      </div>
   );
}
