import HomeIcon from "@mui/icons-material/Home";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import CelebrationIcon from "@mui/icons-material/Celebration";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import CollectionsIcon from "@mui/icons-material/Collections";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import CategoryIcon from "@mui/icons-material/Category";
export const navItems = [
  // {
  //   name: "Inicio",
  //   to: "/",
  //   icon: HomeIcon,
  // },
  {
    name: "Actividades",
    to: "/actividades",
    icon: CelebrationIcon,
  },
  {
    name: "Historia",
    to: "/historia",
    icon: HistoryEduIcon,
  },
  {
    name: "Galería",
    to: "/galeria",
    icon: CollectionsIcon,
  },

  {
    name: "Como llegar",
    to: "/ubicacion",
    icon: LocationOnIcon,
  },
  {
    name: "Contactanos",
    to: "/contacto",
    icon: EmailIcon,
  },
  {
    name: "Restaurante",
    to: "/restaurante",
    icon: FastfoodIcon,
  },
  { name: "Productos", to: "/productos", icon: CategoryIcon },
];
