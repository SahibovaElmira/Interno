import ErrorPage from "../../Pages/ErrorPage";
import HomePage from "../../Pages/HomePage";
import Services from "../../Pages/Services";
import Blog from "../../Pages/Blog";
import Project from "../../Pages/Project";
import Contact from "../../Pages/Contact";

export const myRoutes = [
  { id: 1, path: "/homepage", element: <HomePage />, title: "HomePage" },
  { id: 2, path: "/services", element: <Services />, title: "Services" },
  { id: 3, path: "/blog", element: <Blog />, title: "Blog" },
  { id: 4, path: "/project", element: <Project />, title: "Project" },
  { id: 5, path: "/contact", element: <Contact />, title: "Contact" },
  { id: 6, path: "*", element: <ErrorPage /> },
];