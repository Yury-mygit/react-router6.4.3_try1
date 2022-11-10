import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";


import Global404 from './components/global404/Global404';

import Root from './components/root/Root';
import About from './components/about/About';
import Posts from './components/posts/Posts';
import Post from './components/posts/Post';
import Item from './components/item/Item';
import Home from './components/home/Home';
import { useNavigate } from "react-router-dom";

import { redirect } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <Global404/>,
    loader: async() => {
      return {action:true}
    },

    children: [
      {
        path: "home",
        element: <Home/>,
        errorElement: <div>Error 404 global</div>,
        
      },
      {
        path: "posts",
        element: <Posts />,
        errorElement: <div>Error in Posts</div>,
        loader: async ({ params }) => {
          console.log(params)
          const result = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5')
          return result.json()
        },
      },
      {
        path: "item/:item",
        element: <Item />,
        errorElement: <div>Error 404 in Item</div>,
        loader: async ({ params }) => {
          
          return params
        },
      },
      {
        path: "about/",
        element: <About/>,
        errorElement: <div>Error 404</div>
      },
    ],
    
  },
  
  
]);



function App() {
  return (
    
    <RouterProvider router={router} />
    
    
  );
}

export default App;
