import Global404 from '../components/global404/Global404';
import Root from '../components/root/Root';
import About from '../components/about/About';
import Posts from '../components/posts/Posts';
import Item from '../components/item/Item';
import Home from '../components/home/Home';

import {
    createBrowserRouter,
  } from "react-router-dom";

  const RouterBrouser = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <Global404/>,
      loader: async() => {
        return {action:true}
      },
    },  
    {
      path: "/home",
      element: <Home/>,
      errorElement: <div>Error 404 global</div>,
      
    },
    {
      path: "/posts",
      element: <Posts />,
      errorElement: <div>Error in Posts</div>,
      loader: async ({ params }) => {
        const result = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5')
        return result.json()
      },
    },
    {
      path: "/item",
      element: <Item />,
      errorElement: <div>Error 404 in Item</div>,
      loader: async ({ params }) => {
        return params
      },
      children: [
        {
          path: "/item/:id",
          element: <Item />,
          loader: async ({ params }) => {
            return params
          },
        }
      ],
    },
    {
      path: "/about/",
      element: <About/>,
      errorElement: <div>Error 404</div>
    },
  ]);

  export default RouterBrouser