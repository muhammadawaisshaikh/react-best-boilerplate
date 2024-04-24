import { IRoute } from "./interfaces/route.interface";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FilmDetails from "./pages/FilmDetails";
import Home from "./pages/Home";

export const routes: IRoute[] = [
  { path: '/', name: 'Home', component: <Home /> },
  { path: '/about', name: 'About Me', component: <About /> },
  { path: '/contact', name: 'Contact', component: <Contact /> },
  { path: '/film-detail/:id', name: 'Contact', component: <FilmDetails /> }
];