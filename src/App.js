
import './App.css';

import OurServices from './components/OurServices/OurServices';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './Layout/Main';
import MainAbout from './Layout/MainAbout';
import MainEvents from './Layout/MainEvents';
import NotFound from './components/NotFound/NotFound';
import Agents from './components/Agents/Agents';
import Registration from './components/Registration/Registration';
import Universities from './components/Universities/Universities';
import ContactUs from './components/ContactUs/ContactUs';
import Blogs from './components/Blogs/Blogs';
import GalleryFull from './components/GalleryFull/GalleryFull';
import Career from './components/Career/Career';
import ParantBlog from './AllBlogs/ParentBlog/ParantBlog';
import BlogOne from './AllBlogs/BlogOne/BlogOne';
import BlogTwo from './AllBlogs/BlogTwo/BlogTwo';
import BlogThree from './AllBlogs/BlogThree/BlogThree';
// import Gallery from './components/Gallery/Gallery';




function App() {

  // =====:::: Main Projects er Router :::::======

  const router = createBrowserRouter([
    { path: '/', element: <Main></Main> },
    { path: '/home', element: <Main></Main> },
    { path: '/services', element: <OurServices></OurServices> },
    { path: '/about', element: <MainAbout></MainAbout> },
    { path: '/events', element: <MainEvents></MainEvents> },
    { path: '/agents', element: <Agents></Agents> },
    { path: '/registration', element: <Registration></Registration> },
    { path: '/Universities', element: <Universities></Universities> },
    { path: '/contact', element: <ContactUs></ContactUs> },
    { path: '/photos', element: <GalleryFull></GalleryFull> },
    { path: '/career', element: <Career></Career>},
    { path: '/blogs', element: <ParantBlog></ParantBlog>},
    { path: '/blogone', element: <BlogOne></BlogOne>},
    { path: '/blogtwo', element: <BlogTwo></BlogTwo>},
    { path: '/blogthree', element: <BlogThree></BlogThree>},
    { path: '*', element: <NotFound></NotFound> },
  ])

  // ======:::: Testing Router ::::======


  // const router = createBrowserRouter([

  //   { path: '/', element: <Gallery></Gallery> },
  // ])












  return (
    <div >

      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;













































































