import React from "react";

import video from "../assets/hero_video.mp4";
import piscina from "../assets/piscina.mp4";
import VideoHero from "../containers/home/VideoHero";
import OurHistoryCTA from "../containers/home/OurHistoryCTA";
import ActivitiesCTA from "../containers/home/ActivitiesCTA";
import RestaurantCTA from "../containers/home/RestaurantCTA";
import GalleryCTA from "../containers/home/GalleryCTA";
import LocationAndMapCTA from "../containers/home/LocationAndMapCTA";

const imgArray = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80",
    title: "Montaña nevada",
    subtitle: "Un paisaje natural con montañas nevadas.",
    video: video,
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    title: "Bosque al amanecer",
    subtitle: "Luz dorada entre los árboles.",
    video: piscina,
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    title: "Desierto minimalista",
    subtitle: "Dunas suaves bajo el cielo azul.",
    video: video,
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    title: "Cascada",
    subtitle: "Agua cayendo entre rocas cubiertas de musgo.",
    video: piscina,
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    title: "Calle nocturna",
    subtitle: "Luces de ciudad reflejadas en el pavimento mojado.",
    video: video,
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    title: "Playa tropical",
    subtitle: "Cielo rosa sobre el mar tranquilo.",
    video: piscina,
  },
];

export default function Home() {
  return (
    <>
      <VideoHero video={video} />
      <OurHistoryCTA />
      <ActivitiesCTA video={piscina} imgArray={imgArray} />
      <RestaurantCTA />
      <GalleryCTA />
      <LocationAndMapCTA />
    </>
  );
}

// export function HeroImage() {
//   return (
//     <Box
//       sx={{
//         width: "100%",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         bgcolor: "third.main", // Fondo general
//       }}
//     >
//       <Container>
//         <Stack
//           my={4}
//           direction="column"
//           sx={{
//             justifyContent: "flex-end",
//             alignItems: "center",
//             position: "relative",
//           }}
//         >
//           {/* Caja 1: Transparente */}
//           <Box
//             sx={{
//               height: "100px",
//               width: "100%",
//               backgroundColor: "#000",
//               opacity: 0, // Opacidad de la caja
//             }}
//           />

//           {/* Imagen que "atraviesa" ambas cajas */}
//           <Box
//             component="img"
//             src={img}
//             alt="Imagen destacada"
//             sx={{
//               position: "absolute",
//               top: 0,
//               transform: {
//                 xs: "translateY(3%) translateX(10%)",
//                 sm: "translateY(3%) translateX(40%)",
//                 md: "translateY(3%) translateX(30%)",
//                 lg: "translateY(3%) translateX(60%)",
//                 xl: "translateY(3%) translateX(60%)",
//               }, // Ajusta cuánto sobresale
//               width: "400px",
//               height: "auto",
//               zIndex: 2,
//             }}
//           />
//           {/* Caja 2: Contenido */}
//           <Box
//             bgcolor="secondary.main"
//             sx={{
//               height: "300px",
//               width: "100%",
//               borderRadius: 4,
//               paddingTop: "80px", // espacio para no tapar la imagen
//               zIndex: 1,
//               position: "relative",
//               textAlign: "center",
//             }}
//           >
//             <Stack spacing={2} px={2} sx={{ width: "50%" }}>
//               <Typography variant="h5" color="#fff">
//                 ¡Bienvenido al turicentro!
//               </Typography>
//               <Typography color="#eee">
//                 Aquí puedes encontrar naturaleza, senderismo y cascadas.
//               </Typography>
//             </Stack>
//           </Box>
//         </Stack>
//       </Container>
//     </Box>
//   );
// }
