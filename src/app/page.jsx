import Image from "next/image";

function obtenerFechaActual() {
   const fecha = new Date();
   const options = { year: "numeric", month: "long", day: "numeric" };
   return fecha.toLocaleDateString(undefined, options);
}

export default function Home() {
   const fechaActual = obtenerFechaActual();
   return (
      <main>
         <h1>Farmacias de turno</h1>
         <h2>{fechaActual}</h2>
      </main>
   );
}
