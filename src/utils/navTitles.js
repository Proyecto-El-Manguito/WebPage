import { navItems } from "./Const";


export const navTitles = Object.fromEntries(
  navItems.map(item => [item.to, item.name])
);

navTitles["/"] = "Inicio";
navTitles["*"] = "No encontrado";
