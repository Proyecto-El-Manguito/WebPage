import HomeIcon from "@mui/icons-material/Home";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import CelebrationIcon from "@mui/icons-material/Celebration";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import CollectionsIcon from "@mui/icons-material/Collections";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import CategoryIcon from "@mui/icons-material/Category";
export const navItems = [
  {
    name: "Inicio",
    to: "/",
    icon: HomeIcon,
  },
  {
    name: "Historia",
    to: "/history",
    icon: HistoryEduIcon,
  },
  {
    name: "Actividades",
    to: "/activities",
    icon: CelebrationIcon,
  },
  {
    name: "Restaurante",
    to: "/restaurant",
    icon: FastfoodIcon,
  },
  {
    name: "Galería",
    to: "/gallery",
    icon: CollectionsIcon,
  },
  {
    name: "Como llegar",
    to: "/location",
    icon: LocationOnIcon,
  },
  {
    name: "Contactanos",
    to: "/contact",
    icon: EmailIcon,
  },
  { name: "Productos", to: "/products", icon: CategoryIcon },
];
