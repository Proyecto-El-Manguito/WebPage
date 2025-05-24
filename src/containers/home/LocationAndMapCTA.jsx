import React from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import LocationCTA from "./LocationCTAContainers/LocationCTA";
import ContactUsCTA from "./LocationCTAContainers/ContactUsCTA";
import ProductsCTA from "./LocationCTAContainers/ProductsCTA";

export default function LocationAndMapCTA() {
  return (
    <Stack
      sx={{
        position: "relative",
        paddingY: 8,
        height: "calc(auto + 100px)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(to bottom, #D9D9D9, #275448)",
          zIndex: 1,
        }}
      />
      <Container
        maxWidth="lg"
        sx={{
          zIndex: 2,
        }}
      >
        {/* Sección en general */}
        <Stack spacing={2}>
          {/* Sección de location */}
          <LocationCTA />
          {/* Sección de contacto y productos */}
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <ContactUsCTA />
            <ProductsCTA />
          </Grid>
        </Stack>
      </Container>
    </Stack>
  );
}

// export default function LocationCTA() {
//   return (
//     <Box
//       sx={{
//         position: "relative",
//         width: "100%",
//         height: "100vh",
//         overflow: "hidden",
//       }}
//     >
//       {/* Mapa como fondo */}
//       <Box
//         sx={{
//           position: "absolute",
//           inset: 0,
//           zIndex: 1,
//           pointerEvents: "auto",
//         }}
//       >
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495626.6322923951!2d-89.86206697393507!3d13.953659605883281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6293000bf1b223%3A0xa024df36facd07c2!2sCooperativa%20El%20Manguito!5e0!3m2!1ses-419!2ssv!4v1747782028242!5m2!1ses-419!2ssv"
//           width="100%"
//           height="100%"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//           title="Ubicación - Google Maps"
//         ></iframe>
//       </Box>

//       {/* Contenido sobre el mapa */}
//       <Stack
//         direction="row"
//         sx={{
//           position: "relative",
//           zIndex: 2,
//           width: "100%",
//           height: "100%",
//           padding: 4,
//           alignItems: "center",
//           pointerEvents: "none",
//         }}
//       >
//         <Box
//           sx={{
//             backgroundColor: "#fff",
//             padding: 3,
//             borderRadius: 2,
//             boxShadow: 4,
//             width: { xs: "100%", sm: "50%", md: "30%" },
//             pointerEvents: "auto",
//           }}
//         >
//           <h1>Ubicación</h1>
//           <p>
//             Conocé dónde estamos ubicados. Visitá nuestra cooperativa y descubrí
//             todo lo que ofrecemos.
//           </p>
//           <button>Ver más</button>
//         </Box>
//       </Stack>
//     </Box>
//   );
// }
